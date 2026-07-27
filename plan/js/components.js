// @ts-check

import { PLANS, UI_COPY } from "./config.js";

/** @typedef {import("./config.js").Locale} Locale */
/** @typedef {import("./config.js").Plan} Plan */

const ICONS = Object.freeze({
  point:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
  layers:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 8 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4M4 16l8 4 8-4"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3v4M18 3v4M4 9h16"/><rect x="3" y="5" width="18" height="16" rx="3"/><path d="m8 15 2.2 2.2L16 12"/></svg>',
  hand:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 20v-8.5a2 2 0 0 1 4 0V6a2 2 0 0 1 4 0v4-2a2 2 0 0 1 4 0v5-1a2 2 0 0 1 4 0v2c0 4.4-3.6 8-8 8h-3c-2.2 0-4-.7-5-2Z"/></svg>',
  sleep:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M21 5a11 11 0 1 0 6 18A12 12 0 0 1 21 5Z"/><path d="m8 8 .7 1.5L10 10l-1.3.5L8 12l-.7-1.5L6 10l1.3-.5L8 8Z"/></svg>',
  stress:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 19c5 0 7-4 8-11 1 7 3 11 8 11-5 0-7 2-8 7-1-5-3-7-8-7Z"/><path d="M6 9c2 0 3-1 3-4 0 3 1 4 3 4-2 0-3 1-3 4 0-3-1-4-3-4Z"/></svg>',
  neck:
    '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10 6c4 3 5 7 5 12v8M22 6c-4 3-5 7-5 12v8"/><path d="M7 14c3 0 5 2 8 5M25 14c-3 0-5 2-8 5"/></svg>',
});

/** @param {Locale} locale @param {string} selectedPlanId */
export function renderPlanSelector(locale, selectedPlanId) {
  const root = document.querySelector('[data-render="plan-selector"]');
  if (!root) return;
  root.innerHTML = `<legend class="sr-only">${UI_COPY[locale].chooseTitle}</legend>${PLANS.map((plan) => {
    const copy = plan.copy[locale];
    return `
      <label class="plan-choice">
        <input type="radio" name="selected-plan" value="${plan.id}" ${plan.id === selectedPlanId ? "checked" : ""}>
        <span class="plan-choice__icon">${ICONS[plan.icon]}</span>
        <span class="plan-choice__copy">
          <strong>${copy.shortName}</strong>
          <small>${copy.pickerDescription}</small>
        </span>
        <svg class="plan-choice__check" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>
      </label>`;
  }).join("")}`;
}

/** @param {Locale} locale @param {Readonly<Plan>} plan */
export function renderPlanContent(locale, plan) {
  const ui = UI_COPY[locale];
  const planCopy = plan.copy[locale];
  const painRoot = document.querySelector('[data-render="pain-points"]');
  const benefitsRoot = document.querySelector('[data-render="benefits"]');
  const timelineRoot = document.querySelector('[data-render="timeline"]');
  const audienceRoot = document.querySelector('[data-render="audience"]');
  const stepsRoot = document.querySelector('[data-render="steps"]');

  if (painRoot) {
    painRoot.innerHTML = ui.painPoints.map((/** @type {[string, string, keyof typeof ICONS]} */ [title, description, icon]) => `
      <article class="pain-card" data-reveal>
        <span class="pain-card__icon">${ICONS[icon]}</span>
        <div><h3>${title}</h3><p>${description}</p></div>
      </article>`).join("");
  }
  if (benefitsRoot) {
    benefitsRoot.innerHTML = ui.benefits.map((/** @type {[string, string]} */ [title, description], /** @type {number} */ index) => `
      <article class="benefit-item" data-reveal>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div><h3>${title}</h3><p>${description}</p></div>
      </article>`).join("");
  }
  if (timelineRoot) {
    timelineRoot.innerHTML = planCopy.timeline.map((/** @type {string} */ title, /** @type {number} */ index) => `
      <li class="timeline-item" data-reveal>
        <span class="timeline-item__day">${index + 1}</span>
        <div class="timeline-item__copy">
          <span>${locale === "zh" ? `${ui.day}${index + 1}天` : `${ui.day} ${index + 1}`}</span>
          <h3>${title}</h3>
        </div>
      </li>`).join("");
  }
  if (audienceRoot) {
    audienceRoot.innerHTML = planCopy.audience.map((/** @type {string} */ item) => `<li data-reveal>${item}</li>`).join("");
  }
  if (stepsRoot) {
    stepsRoot.innerHTML = ui.steps.map((/** @type {[string, string]} */ [title, description], /** @type {number} */ index) => `
      <li class="step-card" data-reveal>
        <span class="step-card__number">0${index + 1}</span>
        <h3>${title}</h3><p>${description}</p>
      </li>`).join("");
  }
}
