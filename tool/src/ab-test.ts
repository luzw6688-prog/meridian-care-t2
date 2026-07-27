import { PRICE_OPTIONS, STORAGE_KEYS, type PriceOption, type PriceVariant } from "./config";

const isValidVariant = (value: string | null): value is PriceVariant =>
  value === "a" || value === "b";

export function resolvePriceVariant(search: string): PriceOption {
  const urlVariant = new URLSearchParams(search).get("variant");
  const savedVariant = localStorage.getItem(STORAGE_KEYS.assignedVariant);

  let variant: PriceVariant;
  if (isValidVariant(urlVariant)) {
    variant = urlVariant;
  } else if (isValidVariant(savedVariant)) {
    variant = savedVariant;
  } else {
    variant = crypto.getRandomValues(new Uint8Array(1))[0]! < 128 ? "a" : "b";
  }

  localStorage.setItem(STORAGE_KEYS.assignedVariant, variant);
  return PRICE_OPTIONS[variant];
}

export function getInterestStorageKey(price: PriceOption): string {
  const priceKey = price.price.replace(/[^0-9.]/g, "");
  return `${STORAGE_KEYS.interestPrefix}:${PRODUCT_KEY}:${price.variant}:${priceKey}`;
}

const PRODUCT_KEY = "massage_tool";

export function hasRecordedInterest(price: PriceOption): boolean {
  return localStorage.getItem(getInterestStorageKey(price)) === "true";
}

export function saveRecordedInterest(price: PriceOption): void {
  localStorage.setItem(getInterestStorageKey(price), "true");
}
