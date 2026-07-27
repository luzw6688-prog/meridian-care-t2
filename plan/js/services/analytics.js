// @ts-check

import { PLAN_CONFIG, STORAGE_KEYS } from "../config.js";

const MAX_LOCAL_EVENTS = 500;

export class AnalyticsService {
  /**
   * @param {{variant: string, display: string}} price
   * @param {Record<string, string>} attribution
   * @param {string} planId
   */
  constructor(price, attribution, planId) {
    this.price = price;
    this.attribution = attribution;
    this.planId = planId;
    this.anonymousId = getPersistentId(STORAGE_KEYS.anonymousId, "anon");
    this.sessionId = getSessionId();
    this.startedAt = performance.now();
    this.highestScrollDepth = 0;
    this.exitTracked = false;
    this.debug =
      ["localhost", "127.0.0.1"].includes(window.location.hostname) ||
      new URLSearchParams(window.location.search).get("debug") === "1";
  }

  /**
   * @param {string} eventName
   * @param {Record<string, string | number | boolean>} [properties]
   */
  track(eventName, properties = {}) {
    const event = {
      event_name: eventName,
      event_id: createId("evt"),
      anonymous_id: this.anonymousId,
      session_id: this.sessionId,
      timestamp: new Date().toISOString(),
      page: PLAN_CONFIG.page,
      product_type: PLAN_CONFIG.productType,
      plan_id: this.planId,
      price_variant: this.price.variant,
      displayed_price: this.price.display,
      source: this.attribution.utm_source || "",
      medium: this.attribution.utm_medium || "",
      campaign: this.attribution.utm_campaign || "",
      content: this.attribution.utm_content || "",
      term: this.attribution.utm_term || "",
      referrer: this.attribution.referrer || "",
      landing_url: this.attribution.landing_url || window.location.href,
      device_type: getDeviceType(),
      viewport_width: window.innerWidth,
      scroll_depth: this.getCurrentScrollDepth(),
      stay_time: Math.round(performance.now() - this.startedAt),
      ...properties,
    };

    const events = this.getEvents();
    events.push(event);
    localStorage.setItem(
      STORAGE_KEYS.analyticsEvents,
      JSON.stringify(events.slice(-MAX_LOCAL_EVENTS)),
    );

    if (this.debug) {
      console.info("[Meridian Analytics]", JSON.stringify(event));
    }
    return event;
  }

  /**
   * Track a page view only once in the current session for this plan/variant.
   */
  trackPageViewOnce() {
    const pageViewKey = `${STORAGE_KEYS.pageView}:${this.planId}:${this.price.variant}`;
    if (sessionStorage.getItem(pageViewKey)) return;
    sessionStorage.setItem(pageViewKey, "1");
    this.track("plan_page_view");
  }

  /** @param {string} planId */
  setPlan(planId) {
    this.planId = planId;
  }

  /** @param {number} depth */
  setHighestScrollDepth(depth) {
    this.highestScrollDepth = Math.max(this.highestScrollDepth, depth);
  }

  trackExit() {
    if (this.exitTracked) return;
    this.exitTracked = true;
    this.track("plan_page_exit", {
      scroll_depth: Math.max(this.highestScrollDepth, this.getCurrentScrollDepth()),
      stay_time: Math.round(performance.now() - this.startedAt),
    });
  }

  getEvents() {
    try {
      const events = JSON.parse(
        localStorage.getItem(STORAGE_KEYS.analyticsEvents) || "[]",
      );
      return Array.isArray(events) ? events : [];
    } catch {
      return [];
    }
  }

  clearTestEvents() {
    localStorage.removeItem(STORAGE_KEYS.analyticsEvents);
    if (this.debug) console.info("[Meridian Analytics] Test events cleared.");
  }

  getCurrentScrollDepth() {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    if (available <= 0) return 100;
    return Math.min(100, Math.round((window.scrollY / available) * 100));
  }
}

/** @param {string} storageKey @param {string} prefix */
function getPersistentId(storageKey, prefix) {
  const existing = localStorage.getItem(storageKey);
  if (existing) return existing;
  const value = createId(prefix);
  localStorage.setItem(storageKey, value);
  return value;
}

function getSessionId() {
  const existing = sessionStorage.getItem(STORAGE_KEYS.sessionId);
  if (existing) return existing;
  const value = createId("session");
  sessionStorage.setItem(STORAGE_KEYS.sessionId, value);
  return value;
}

/** @param {string} prefix */
function createId(prefix) {
  const uuid = window.crypto?.randomUUID?.();
  return `${prefix}_${uuid || `${Date.now()}_${Math.random().toString(36).slice(2)}`}`;
}

function getDeviceType() {
  if (window.innerWidth < 768) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
}
