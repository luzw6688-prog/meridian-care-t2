import { hasRecordedInterest, resolvePriceVariant, saveRecordedInterest } from "./ab-test";
import { AnalyticsService } from "./analytics";
import { renderPage } from "./components";
import {
  applyLanguage,
  getCurrentLanguage,
  t,
  type Language,
  type MessageKey
} from "./i18n";
import { saveNotificationEmail } from "./notification-email";
import { resolveAttribution } from "./utm";

const price = resolvePriceVariant(location.search);
const attribution = resolveAttribution(location.search);
const analytics = new AnalyticsService(price, attribution);
let interestRecorded = hasRecordedInterest(price);
let activeTrigger: HTMLButtonElement | null = null;
let requestInFlight = false;

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = renderPage(price, interestRecorded);

const modalLayer = document.querySelector<HTMLElement>("[data-modal-layer]")!;
const modal = document.querySelector<HTMLElement>("[data-interest-modal]")!;
const modalClose = document.querySelector<HTMLButtonElement>("[data-modal-close]")!;
const interestForm = document.querySelector<HTMLFormElement>("[data-interest-form]")!;
const emailInput = document.querySelector<HTMLInputElement>("[data-interest-email]")!;
const liveRegion = document.querySelector<HTMLElement>("[data-cta-live]")!;
const stickyCta = document.querySelector<HTMLElement>("[data-sticky-cta]")!;
const heroCta = document.querySelector<HTMLButtonElement>('[data-cta-location="hero"]')!;
const bottomConversion = document.querySelector<HTMLElement>("[data-bottom-conversion]")!;
const languageSelect = document.querySelector<HTMLSelectElement>("[data-language-select]")!;

applyLanguage(getCurrentLanguage(), false);

const pageViewKey = `meridianCare.tool.pageView.v1:${price.variant}`;
if (!sessionStorage.getItem(pageViewKey)) {
  analytics.track("massage_tool_page_view");
  sessionStorage.setItem(pageViewKey, "true");
}

function syncCtaState(labelKey: MessageKey, disabled: boolean, busy = false): void {
  document.querySelectorAll<HTMLButtonElement>("[data-interest-cta]").forEach((button) => {
    button.disabled = disabled;
    button.setAttribute("aria-busy", String(busy));
    const buttonLabel = button.querySelector<HTMLElement>("[data-cta-label]");
    if (buttonLabel) {
      buttonLabel.dataset.i18n = labelKey;
      buttonLabel.textContent = t(labelKey);
    }
    const iconSlot = button.querySelector<HTMLElement>(".button-icon");
    if (iconSlot) {
      iconSlot.innerHTML =
        disabled && !busy
          ? '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m6 16 6 6L26 8"></path></svg>'
          : "";
    }
  });
}

function getFocusableElements(): HTMLElement[] {
  return Array.from(
    modal.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

function openModal(): void {
  modalLayer.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modalLayer.classList.add("is-open"));
  emailInput.focus();
  analytics.track("massage_tool_modal_view");
}

function closeModal(): void {
  modalLayer.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  window.setTimeout(() => {
    modalLayer.hidden = true;
    activeTrigger?.focus();
  }, 180);
}

async function recordInterest(button: HTMLButtonElement): Promise<void> {
  if (interestRecorded || requestInFlight) return;
  requestInFlight = true;
  activeTrigger = button;

  const locationValue = button.dataset.ctaLocation;
  if (locationValue === "hero" || locationValue === "sticky" || locationValue === "bottom") {
    analytics.track("massage_tool_cta_click", { cta_location: locationValue });
  }

  syncCtaState("cta.recording", true, true);
  await new Promise((resolve) => window.setTimeout(resolve, 260));

  try {
    saveRecordedInterest(price);
    analytics.track("massage_tool_interest_complete");
    interestRecorded = true;
    syncCtaState("cta.recorded", true);
    liveRegion.textContent = t("status.recorded");
    openModal();
  } catch {
    syncCtaState("cta.primary", false);
    liveRegion.textContent = t("status.error");
  } finally {
    requestInFlight = false;
  }
}

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("[data-interest-cta]");
  if (button) void recordInterest(button);
});

languageSelect.addEventListener("change", () => {
  const language = languageSelect.value;
  if (language === "en" || language === "zh-CN") {
    applyLanguage(language as Language);
    liveRegion.textContent = "";
  }
});

interestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    emailInput.focus();
    return;
  }
  saveNotificationEmail(price, emailInput.value);
  closeModal();
});
modalClose.addEventListener("click", closeModal);
modalLayer.addEventListener("click", (event) => {
  if (event.target === modalLayer || event.target === document.querySelector("[data-modal-backdrop]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (modalLayer.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
    return;
  }
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements();
  const first = focusable[0];
  const last = focusable.at(-1);
  if (!first || !last) return;
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const trackedSections = new Set<string>();
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const sectionName = (entry.target as HTMLElement).dataset.trackSection;
      if (!sectionName || trackedSections.has(sectionName)) return;
      trackedSections.add(sectionName);
      analytics.track("massage_tool_section_view", { section_name: sectionName });
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll<HTMLElement>("[data-track-section]").forEach((section) => {
  sectionObserver.observe(section);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

let heroVisible = true;
let bottomVisible = false;
const updateSticky = (): void => {
  const shouldShow = !heroVisible && !bottomVisible;
  stickyCta.classList.toggle("is-visible", shouldShow);
  stickyCta.setAttribute("aria-hidden", String(!shouldShow));
  document.body.classList.toggle("has-sticky-cta", shouldShow);
};

new IntersectionObserver(
  ([entry]) => {
    if (!entry) return;
    heroVisible = entry.isIntersecting;
    updateSticky();
  },
  { threshold: 0 }
).observe(heroCta);

new IntersectionObserver(
  ([entry]) => {
    if (!entry) return;
    bottomVisible = entry.isIntersecting;
    updateSticky();
  },
  { threshold: 0.1 }
).observe(bottomConversion);

const depthThresholds = [25, 50, 75, 100];
const reachedDepths = new Set<number>();
let scrollFrame = 0;

const updateScrollDepth = (): void => {
  scrollFrame = 0;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const rawDepth = scrollable <= 0 ? 100 : (window.scrollY / scrollable) * 100;
  depthThresholds.forEach((threshold) => {
    if (rawDepth + 0.5 < threshold || reachedDepths.has(threshold)) return;
    reachedDepths.add(threshold);
    analytics.setScrollDepth(threshold);
    analytics.track("massage_tool_scroll_depth", { scroll_depth: threshold });
  });
};

window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollDepth);
  },
  { passive: true }
);
updateScrollDepth();

let exitTracked = false;
const trackExit = (): void => {
  if (exitTracked) return;
  exitTracked = true;
  analytics.track("massage_tool_page_exit");
};
window.addEventListener("pagehide", trackExit);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") trackExit();
});
