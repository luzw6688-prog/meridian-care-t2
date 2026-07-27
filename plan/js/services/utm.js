// @ts-check

import { STORAGE_KEYS } from "../config.js";

const UTM_FIELDS = Object.freeze([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
]);

/**
 * Capture campaign attribution once per browser session. Explicit UTM values on
 * the current URL refresh the session values.
 */
export function getSessionAttribution() {
  const params = new URLSearchParams(window.location.search);
  const saved = readSessionAttribution();
  const hasCurrentUtm = UTM_FIELDS.some((field) => params.has(field));

  const values = Object.fromEntries(
    UTM_FIELDS.map((field) => [field, sanitize(params.get(field))]),
  );

  const attribution = hasCurrentUtm
    ? {
        ...saved,
        ...values,
        referrer: sanitize(document.referrer),
        landing_url: sanitize(window.location.href),
      }
    : {
        ...values,
        ...saved,
        referrer: saved.referrer || sanitize(document.referrer),
        landing_url: saved.landing_url || sanitize(window.location.href),
      };

  sessionStorage.setItem(STORAGE_KEYS.sessionAttribution, JSON.stringify(attribution));
  return attribution;
}

function readSessionAttribution() {
  try {
    return JSON.parse(
      sessionStorage.getItem(STORAGE_KEYS.sessionAttribution) || "{}",
    );
  } catch {
    return {};
  }
}

/** @param {string | null | undefined} value */
function sanitize(value) {
  return typeof value === "string" ? value.slice(0, 500) : "";
}
