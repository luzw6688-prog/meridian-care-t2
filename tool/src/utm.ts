import { STORAGE_KEYS } from "./config";

export interface Attribution {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  referrer: string;
  landingUrl: string;
}

interface StoredAttribution {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
}

const UTM_MAP = {
  source: "utm_source",
  medium: "utm_medium",
  campaign: "utm_campaign",
  content: "utm_content",
  term: "utm_term"
} as const;

function readJson<T>(storage: Storage, key: string): T | null {
  try {
    return JSON.parse(storage.getItem(key) ?? "null") as T | null;
  } catch {
    return null;
  }
}

export function resolveAttribution(search: string): Attribution {
  const params = new URLSearchParams(search);
  const stored = readJson<StoredAttribution>(sessionStorage, STORAGE_KEYS.attribution) ?? {};
  const next: StoredAttribution = { ...stored };

  (Object.keys(UTM_MAP) as Array<keyof typeof UTM_MAP>).forEach((key) => {
    const value = params.get(UTM_MAP[key]);
    if (value) next[key] = value.slice(0, 250);
  });
  sessionStorage.setItem(STORAGE_KEYS.attribution, JSON.stringify(next));

  const landing =
    readJson<{ referrer: string; landingUrl: string }>(
      sessionStorage,
      STORAGE_KEYS.landingContext
    ) ?? {
      referrer: document.referrer.slice(0, 1000),
      landingUrl: location.href.slice(0, 2000)
    };
  sessionStorage.setItem(STORAGE_KEYS.landingContext, JSON.stringify(landing));

  return {
    source: next.source ?? "",
    medium: next.medium ?? "",
    campaign: next.campaign ?? "",
    content: next.content ?? "",
    term: next.term ?? "",
    referrer: landing.referrer,
    landingUrl: landing.landingUrl
  };
}
