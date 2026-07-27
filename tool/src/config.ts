export type PriceVariant = "a" | "b";

export interface PriceOption {
  variant: PriceVariant;
  originalPrice: string;
  price: string;
}

export const PRODUCT = {
  type: "massage_tool",
  name: "Acupressure Massage Stick",
  headline: "Apply steady pressure to hard-to-reach acupoints—without tiring your fingers.",
  supportingCopy: "A simple acupressure tool designed for everyday relaxation routines.",
  originalPriceLabel: "Original price",
  presalePriceLabel: "Current pre-sale price",
  ctaLabel: "I Want This",
  ctaCompleteLabel: "Interest Recorded",
  ctaHelper: "This product is currently being prepared. Thank you for your patience."
} as const;

export const PRICE_OPTIONS: Record<PriceVariant, PriceOption> = {
  a: { variant: "a", originalPrice: "$29.9", price: "$19.9" },
  b: { variant: "b", originalPrice: "$29.9", price: "$19.9" }
};

export const STORAGE_KEYS = {
  assignedVariant: "meridianCare.tool.priceVariant.v1",
  interestPrefix: "meridianCare.tool.interest.v1",
  analyticsEvents: "meridianCare.tool.analytics.events.v1",
  notificationEmailPrefix: "meridianCare.tool.notificationEmail.v1",
  anonymousId: "meridianCare.tool.anonymousId.v1",
  sessionId: "meridianCare.tool.sessionId.v1",
  attribution: "meridianCare.tool.attribution.v1",
  landingContext: "meridianCare.tool.landingContext.v1"
} as const;
