// @ts-check

import { PLAN_CONFIG, STORAGE_KEYS } from "../config.js";

/** @typedef {"a" | "b"} PriceVariant */

/**
 * Resolve a stable 50/50 price assignment. A valid URL override wins and becomes
 * the user's saved assignment; an invalid override is ignored.
 * @returns {{ variant: PriceVariant, display: string, amount: number, originalDisplay: string }}
 */
export function resolvePriceVariant() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("variant");

  /** @type {PriceVariant | null} */
  let variant = requested === "a" || requested === "b" ? requested : null;

  if (!variant) {
    const saved = localStorage.getItem(STORAGE_KEYS.priceAssignment);
    variant = saved === "a" || saved === "b" ? saved : null;
  }

  if (!variant) {
    variant = randomBucket() < 0.5 ? "a" : "b";
  }

  localStorage.setItem(STORAGE_KEYS.priceAssignment, variant);
  return PLAN_CONFIG.prices[variant];
}

function randomBucket() {
  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0] / 2 ** 32;
  }
  return Math.random();
}
