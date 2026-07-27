import { PRODUCT, STORAGE_KEYS, type PriceOption } from "./config";
import type { Attribution } from "./utm";

export type ToolEventName =
  | "massage_tool_page_view"
  | "massage_tool_section_view"
  | "massage_tool_scroll_depth"
  | "massage_tool_cta_click"
  | "massage_tool_interest_complete"
  | "massage_tool_modal_view"
  | "massage_tool_page_exit";

export interface AnalyticsEvent {
  event_name: ToolEventName;
  event_id: string;
  anonymous_id: string;
  session_id: string;
  timestamp: string;
  page: string;
  product_type: typeof PRODUCT.type;
  price_variant: string;
  displayed_price: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  referrer: string;
  landing_url: string;
  device_type: "mobile" | "tablet" | "desktop";
  viewport_width: number;
  scroll_depth: number;
  stay_time: number;
  section_name?: string;
  cta_location?: "hero" | "sticky" | "bottom";
}

interface EventProperties {
  section_name?: string;
  cta_location?: "hero" | "sticky" | "bottom";
  scroll_depth?: number;
}

const getOrCreateId = (storage: Storage, key: string): string => {
  const stored = storage.getItem(key);
  if (stored) return stored;
  const id = crypto.randomUUID();
  storage.setItem(key, id);
  return id;
};

const getDeviceType = (): AnalyticsEvent["device_type"] => {
  if (window.innerWidth < 768) return "mobile";
  if (window.innerWidth < 1024) return "tablet";
  return "desktop";
};

const isDevelopment =
  location.protocol === "file:" ||
  location.hostname === "localhost" ||
  location.hostname === "127.0.0.1";

export class AnalyticsService {
  private readonly anonymousId = getOrCreateId(localStorage, STORAGE_KEYS.anonymousId);
  private readonly sessionId = getOrCreateId(sessionStorage, STORAGE_KEYS.sessionId);
  private readonly startedAt = performance.now();
  private highestScrollDepth = 0;

  constructor(
    private readonly price: PriceOption,
    private readonly attribution: Attribution
  ) {}

  setScrollDepth(depth: number): void {
    this.highestScrollDepth = Math.max(this.highestScrollDepth, depth);
  }

  track(eventName: ToolEventName, properties: EventProperties = {}): AnalyticsEvent {
    const event: AnalyticsEvent = {
      event_name: eventName,
      event_id: crypto.randomUUID(),
      anonymous_id: this.anonymousId,
      session_id: this.sessionId,
      timestamp: new Date().toISOString(),
      page: "/tool",
      product_type: PRODUCT.type,
      price_variant: this.price.variant,
      displayed_price: this.price.price,
      source: this.attribution.source,
      medium: this.attribution.medium,
      campaign: this.attribution.campaign,
      content: this.attribution.content,
      term: this.attribution.term,
      referrer: this.attribution.referrer,
      landing_url: this.attribution.landingUrl,
      device_type: getDeviceType(),
      viewport_width: window.innerWidth,
      scroll_depth: properties.scroll_depth ?? this.highestScrollDepth,
      stay_time: Math.round(performance.now() - this.startedAt),
      ...properties
    };

    const events = AnalyticsService.getEvents();
    events.push(event);
    localStorage.setItem(STORAGE_KEYS.analyticsEvents, JSON.stringify(events.slice(-1000)));
    if (isDevelopment) console.info("[Meridian Tool Analytics]", event);
    return event;
  }

  static getEvents(): AnalyticsEvent[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.analyticsEvents) ?? "[]") as AnalyticsEvent[];
    } catch {
      return [];
    }
  }

  static clearEvents(): void {
    localStorage.removeItem(STORAGE_KEYS.analyticsEvents);
    if (isDevelopment) console.info("[Meridian Tool Analytics] Test events cleared.");
  }
}

declare global {
  interface Window {
    MeridianToolAnalytics: {
      getEvents: typeof AnalyticsService.getEvents;
      clearEvents: typeof AnalyticsService.clearEvents;
    };
  }
}

window.MeridianToolAnalytics = {
  getEvents: AnalyticsService.getEvents,
  clearEvents: AnalyticsService.clearEvents
};
