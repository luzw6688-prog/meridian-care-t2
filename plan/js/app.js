// @ts-check

import { PLAN_CONFIG, PLANS, STORAGE_KEYS, UI_COPY } from "./config.js";
import { renderPlanContent, renderPlanSelector } from "./components.js";
import { resolvePriceVariant } from "./services/ab-test.js";
import { AnalyticsService } from "./services/analytics.js";
import { getSessionAttribution } from "./services/utm.js";

/** @typedef {import("./config.js").Locale} Locale */

const price = resolvePriceVariant();
const attribution = getSessionAttribution();
/** @type {Locale} */
let locale = getInitialLocale();
let selectedPlan = getInitialPlan();
const analytics = new AnalyticsService(price, attribution, selectedPlan.id);

renderPage();
hydratePrice();
initializePlanAndLanguageControls();
initializeInterestState();
initializeInterestDialog();
initializeObservers();
initializeExitTracking();
analytics.trackPageViewOnce();

// Development adapter: a production provider can replace AnalyticsService
// without changing page components or interactions.
// @ts-ignore - intentional development utility exposed on window.
window.meridianAnalytics = Object.freeze({
  getEvents: () => analytics.getEvents(),
  clearTestEvents: () => analytics.clearTestEvents(),
  /** @param {string} eventName @param {Record<string, string | number | boolean>} [properties] */
  track: (eventName, properties = {}) => analytics.track(eventName, properties),
});

function renderPage() {
  const ui = UI_COPY[locale];
  const planCopy = selectedPlan.copy[locale];
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en-US";
  document.title = `${planCopy.name} | Meridian Care`;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && typeof ui[key] === "string") node.textContent = ui[key];
  });
  document.querySelectorAll("[data-plan-copy]").forEach((node) => {
    const key = node.getAttribute("data-plan-copy");
    const value = key
      ? /** @type {Record<string, unknown>} */ (planCopy)[key]
      : undefined;
    if (typeof value === "string") node.textContent = value;
  });

  const switcher = document.querySelector("[data-language-switch]");
  switcher?.setAttribute("aria-label", ui.language);
  switcher?.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.getAttribute("data-language") === locale));
  });

  const backLink = document.querySelector("[data-back-link]");
  backLink?.setAttribute("aria-label", ui.back);
  const visual = document.querySelector("[data-visual-label]");
  visual?.setAttribute("aria-label", ui.visualAlt);
  const previewImages = document.querySelectorAll(".lesson-preview__media img");
  previewImages[0]?.setAttribute("alt", ui.locationAlt);
  previewImages[1]?.setAttribute("alt", ui.actionAlt);
  document.querySelector("[data-day-progress]")?.setAttribute("aria-label", ui.dayProgressLabel);
  document.querySelector("[data-audience-image]")?.setAttribute("alt", ui.audienceImageAlt);
  document.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.setAttribute("aria-label", ui.close);
  });
  document.querySelector("[data-plan-highlights]")?.setAttribute("aria-label", ui.planHighlights);
  const emailInput = document.querySelector("[data-interest-email]");
  if (emailInput instanceof HTMLInputElement) {
    emailInput.placeholder = ui.emailPlaceholder;
  }

  renderPlanContent(locale, selectedPlan);
  renderPlanSelector(locale, selectedPlan.id);
  bindPlanSelector();
  updateAllCtas(hasRecordedInterest());
}

function hydratePrice() {
  document.querySelectorAll("[data-price]").forEach((node) => {
    node.textContent = price.display;
  });
  document.querySelectorAll("[data-original-price]").forEach((node) => {
    node.textContent = price.originalDisplay;
  });
}

function initializePlanAndLanguageControls() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLocale = button.getAttribute("data-language");
      if ((nextLocale !== "en" && nextLocale !== "zh") || nextLocale === locale) return;
      locale = /** @type {Locale} */ (nextLocale);
      localStorage.setItem(STORAGE_KEYS.language, locale);
      analytics.track("plan_language_change", { language: locale });
      renderPage();
      revealNewContent();
    });
  });
}

function bindPlanSelector() {
  document.querySelectorAll('input[name="selected-plan"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (!(input instanceof HTMLInputElement) || !input.checked) return;
      const nextPlan = PLANS.find((plan) => plan.id === input.value);
      if (!nextPlan || nextPlan.id === selectedPlan.id) return;

      const previousPlanId = selectedPlan.id;
      selectedPlan = nextPlan;
      localStorage.setItem(STORAGE_KEYS.selectedPlan, selectedPlan.id);
      analytics.setPlan(selectedPlan.id);
      analytics.track("plan_selection_change", { previous_plan_id: previousPlanId });
      renderPage();
      revealNewContent();
    });
  });
}

function initializeInterestState() {
  document.querySelectorAll("[data-interest-cta]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!(button instanceof HTMLButtonElement) || hasRecordedInterest()) return;
      const location = button.dataset.interestCta || "hero";
      analytics.track("plan_interest_click", { cta_location: location });

      localStorage.setItem(
        getInterestKey(),
        JSON.stringify({
          anonymous_id: analytics.anonymousId,
          plan_id: selectedPlan.id,
          price_variant: price.variant,
          displayed_price: price.display,
          recorded_at: new Date().toISOString(),
        }),
      );
      analytics.track("plan_interest_complete", { cta_location: location });
      updateAllCtas(true);
      openInterestDialog();
    });
  });
}

function getInterestKey() {
  return `meridian_plan_interest_v1:${selectedPlan.id}:${price.variant}:${analytics.anonymousId}`;
}

function hasRecordedInterest() {
  return localStorage.getItem(getInterestKey()) !== null;
}

/** @param {boolean} complete */
function updateAllCtas(complete) {
  const ui = UI_COPY[locale];
  document.querySelectorAll("[data-interest-cta]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    button.classList.toggle("is-complete", complete);
    button.disabled = complete;
    button.setAttribute("aria-disabled", String(complete));
    const label = button.querySelector("[data-cta-label]");
    if (label) label.textContent = complete ? ui.recorded : ui.wantPlan;
  });

  if (complete) {
    const announcer = document.querySelector("[data-status-announcer]");
    if (announcer) announcer.textContent = ui.recordedAnnouncement;
  }
}

/** @type {HTMLElement | null} */
let lastFocusedElement = null;

function initializeInterestDialog() {
  const dialog = document.querySelector("[data-interest-dialog]");
  if (!(dialog instanceof HTMLElement)) return;
  dialog.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", closeInterestDialog);
  });
  const form = dialog.querySelector("[data-interest-form]");
  const emailInput = dialog.querySelector("[data-interest-email]");
  const emailError = dialog.querySelector("[data-email-error]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!(emailInput instanceof HTMLInputElement)) {
      closeInterestDialog();
      return;
    }

    const email = emailInput.value.trim();
    if (email && !emailInput.checkValidity()) {
      if (emailError instanceof HTMLElement) emailError.hidden = false;
      emailInput.setAttribute("aria-invalid", "true");
      emailInput.focus();
      return;
    }

    if (email) {
      localStorage.setItem(
        getEmailInterestKey(),
        JSON.stringify({
          email,
          anonymous_id: analytics.anonymousId,
          plan_id: selectedPlan.id,
          price_variant: price.variant,
          recorded_at: new Date().toISOString(),
        }),
      );
    }
    analytics.track("plan_email_submit", { email_provided: Boolean(email) });
    closeInterestDialog();
  });
  emailInput?.addEventListener("input", () => {
    if (emailError instanceof HTMLElement) emailError.hidden = true;
    emailInput.removeAttribute("aria-invalid");
  });

  document.addEventListener("keydown", (event) => {
    if (dialog.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeInterestDialog();
    } else if (event.key === "Tab") {
      trapDialogFocus(event, dialog);
    }
  });
}

function openInterestDialog() {
  const dialog = document.querySelector("[data-interest-dialog]");
  if (!(dialog instanceof HTMLElement)) return;
  lastFocusedElement =
    document.activeElement instanceof HTMLElement ? document.activeElement : null;
  dialog.hidden = false;
  document.body.classList.add("dialog-open");
  const emailInput = dialog.querySelector("[data-interest-email]");
  const emailError = dialog.querySelector("[data-email-error]");
  if (emailInput instanceof HTMLInputElement) {
    emailInput.value = "";
    emailInput.removeAttribute("aria-invalid");
    emailInput.focus();
  }
  if (emailError instanceof HTMLElement) emailError.hidden = true;
  analytics.track("plan_modal_view");
}

function closeInterestDialog() {
  const dialog = document.querySelector("[data-interest-dialog]");
  if (!(dialog instanceof HTMLElement) || dialog.hidden) return;
  dialog.hidden = true;
  document.body.classList.remove("dialog-open");
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

/** @param {KeyboardEvent} event @param {HTMLElement} dialog */
function trapDialogFocus(event, dialog) {
  const focusable = Array.from(
    dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'),
  ).filter((element) => element instanceof HTMLElement);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!(first instanceof HTMLElement) || !(last instanceof HTMLElement)) return;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function initializeObservers() {
  initializeSectionTracking();
  initializeScrollDepthTracking();
  initializeStickyCta();
  initializeReveals();
}

function initializeSectionTracking() {
  const seenSections = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = entry.target;
        const sectionName =
          section instanceof HTMLElement ? section.dataset.section : undefined;
        if (!sectionName || seenSections.has(sectionName)) return;

        seenSections.add(sectionName);
        analytics.track("plan_section_view", { section_name: sectionName });
        if (section instanceof HTMLElement && section.dataset.previewId === "day_1") {
          analytics.track("plan_preview_view", { preview_id: "day_1" });
        }
        observer.unobserve(section);
      });
    },
    { threshold: 0.3 },
  );
  document.querySelectorAll(".section-observe").forEach((section) => observer.observe(section));
}

function initializeScrollDepthTracking() {
  const reported = new Set();
  const thresholds = [25, 50, 75, 100];
  let scheduled = false;
  const checkDepth = () => {
    scheduled = false;
    const depth = analytics.getCurrentScrollDepth();
    thresholds.forEach((threshold) => {
      if (depth >= threshold && !reported.has(threshold)) {
        reported.add(threshold);
        analytics.setHighestScrollDepth(threshold);
        analytics.track("plan_scroll_depth", { scroll_depth: threshold });
      }
    });
  };

  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(checkDepth);
  }, { passive: true });
  checkDepth();
}

function initializeStickyCta() {
  const sticky = document.querySelector("[data-sticky-cta]");
  const heroCta = document.querySelector('[data-interest-cta="hero"]');
  const bottomConversion = document.querySelector(".bottom-conversion");
  if (!(sticky instanceof HTMLElement) || !heroCta || !bottomConversion) return;

  let heroVisible = true;
  let bottomVisible = false;
  const sync = () => {
    const shouldShow = !heroVisible && !bottomVisible && window.innerWidth < 800;
    sticky.classList.toggle("is-visible", shouldShow);
    sticky.setAttribute("aria-hidden", String(!shouldShow));
    sticky.inert = !shouldShow;
  };
  new IntersectionObserver(([entry]) => {
    heroVisible = Boolean(entry?.isIntersecting);
    sync();
  }).observe(heroCta);
  new IntersectionObserver(([entry]) => {
    bottomVisible = Boolean(entry?.isIntersecting);
    sync();
  }, { threshold: 0.05 }).observe(bottomConversion);
  window.addEventListener("resize", sync, { passive: true });
}

function initializeReveals() {
  const items = document.querySelectorAll("[data-reveal]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px" });
  items.forEach((item) => observer.observe(item));
}

function revealNewContent() {
  document.querySelectorAll("[data-reveal]").forEach((item) => item.classList.add("is-revealed"));
}

function initializeExitTracking() {
  window.addEventListener("pagehide", () => analytics.trackExit(), { once: true });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") analytics.trackExit();
  });
}

/** @returns {Locale} */
function getInitialLocale() {
  return localStorage.getItem(STORAGE_KEYS.language) === "zh" ? "zh" : "en";
}

function getInitialPlan() {
  const requested = new URLSearchParams(window.location.search).get("plan");
  const stored = localStorage.getItem(STORAGE_KEYS.selectedPlan);
  return (
    PLANS.find((plan) => plan.id === requested) ||
    PLANS.find((plan) => plan.id === stored) ||
    PLANS.find((plan) => plan.id === PLAN_CONFIG.defaultPlanId) ||
    PLANS[0]
  );
}

function getEmailInterestKey() {
  return `${STORAGE_KEYS.emailInterest}:${selectedPlan.id}:${price.variant}:${analytics.anonymousId}`;
}
