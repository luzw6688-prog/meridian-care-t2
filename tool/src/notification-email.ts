import { PRODUCT, STORAGE_KEYS, type PriceOption } from "./config";

const getStorageKey = (price: PriceOption): string =>
  `${STORAGE_KEYS.notificationEmailPrefix}:${PRODUCT.type}:${price.variant}:${price.price}`;

export function saveNotificationEmail(price: PriceOption, value: string): void {
  const email = value.trim().toLowerCase();
  if (!email) return;
  localStorage.setItem(
    getStorageKey(price),
    JSON.stringify({ email, saved_at: new Date().toISOString() })
  );
}
