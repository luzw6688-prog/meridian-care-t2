import { PRODUCT, type PriceOption } from "./config";
import type { MessageKey } from "./i18n";

const ASSETS = {
  productMainWood: new URL("./assets/product-main-wood.jpg", location.href).href,
  productMainMetal: new URL("./assets/product-main-metal.jpg", location.href).href,
  stepFind: new URL("./assets/step-find-metal.jpg", location.href).href,
  stepPressure: new URL("./assets/step-pressure-metal.jpg", location.href).href,
  stepRoutine: new URL("./assets/step-routine-metal.jpg", location.href).href
} as const;

const icon = (name: "finger" | "pressure" | "guide" | "leaf" | "check"): string => {
  const paths = {
    finger:
      '<path d="M9 21v-8.5a2 2 0 0 1 4 0V15m0-4.5a2 2 0 0 1 4 0V15m0-3a2 2 0 0 1 4 0v5c0 4.5-2.7 7-7.2 7H12c-2.2 0-3.8-1-5-2.8l-3-4.4a2.1 2.1 0 0 1 3.2-2.7L9 15.5"/>',
    pressure:
      '<circle cx="14" cy="15" r="8"/><path d="M14 3v8m-3-3 3 3 3-3M6 27h16"/>',
    guide:
      '<path d="M6 5.5A3.5 3.5 0 0 1 9.5 2H25v23H9.5A3.5 3.5 0 0 0 6 28.5z"/><path d="M6 5.5v23M11 8h9m-9 5h7"/>',
    leaf:
      '<path d="M25 4C14 4 7 9 7 17c0 4 3 7 7 7 8 0 11-9 11-20Z"/><path d="M5 28c3-7 8-12 15-16"/>',
    check: '<path d="m6 16 6 6L26 8"/>'
  };
  return `<svg viewBox="0 0 32 32" aria-hidden="true">${paths[name]}</svg>`;
};

function PrimaryCTA({
  location,
  complete,
  compact = false
}: {
  location: "hero" | "sticky" | "bottom";
  complete: boolean;
  compact?: boolean;
}): string {
  const labelKey: MessageKey = complete ? "cta.recorded" : "cta.primary";
  return `
    <button
      class="button button-primary interest-button${compact ? " button-compact" : ""}"
      type="button"
      data-interest-cta
      data-cta-location="${location}"
      ${complete ? "disabled" : ""}
    >
      <span class="button-icon" aria-hidden="true">${complete ? icon("check") : ""}</span>
      <span data-cta-label data-i18n="${labelKey}">${complete ? PRODUCT.ctaCompleteLabel : PRODUCT.ctaLabel}</span>
    </button>
  `;
}

function PriceBlock(price: PriceOption, className = ""): string {
  return `
    <div class="price-block ${className}">
      <div class="price-original">
        <span data-i18n="product.originalPriceLabel">${PRODUCT.originalPriceLabel}</span>
        <del data-original-price>${price.originalPrice}</del>
      </div>
      <div class="price-current">
        <span data-i18n="product.presalePriceLabel">${PRODUCT.presalePriceLabel}</span>
        <strong data-display-price>${price.price}</strong>
      </div>
    </div>
  `;
}

function ProductCarousel(): string {
  return `
    <figure
      class="hero-visual product-carousel"
      data-product-carousel
      role="region"
      aria-roledescription="carousel"
      aria-label="Wood and metal product finishes"
      data-i18n-aria-label="visual.carouselLabel"
    >
      <span class="visual-note" data-i18n="visual.concept">Product reference renderings</span>
      <div class="carousel-stage">
        <div class="carousel-slide is-active" data-carousel-slide aria-hidden="false">
          <img
            src="${ASSETS.productMainWood}"
            width="1549"
            height="1015"
            alt="Natural sandalwood Acupressure Massage Stick with rounded ends"
            data-i18n-alt="visual.woodAlt"
          />
          <span class="finish-label" data-i18n="visual.woodFinish">Natural sandalwood</span>
        </div>
        <div class="carousel-slide" data-carousel-slide aria-hidden="true">
          <img
            src="${ASSETS.productMainMetal}"
            width="1551"
            height="1014"
            alt="Champagne-gold satin metal Acupressure Massage Stick with rounded ends"
            data-i18n-alt="visual.metalAlt"
          />
          <span class="finish-label" data-i18n="visual.metalFinish">Champagne metal</span>
        </div>
      </div>
      <div class="carousel-controls" aria-label="Choose a product finish" data-i18n-aria-label="visual.controlsLabel">
        <button
          class="carousel-dot is-active"
          type="button"
          data-carousel-go-to="0"
          aria-pressed="true"
          aria-label="Show natural sandalwood finish"
          data-i18n-aria-label="visual.showWood"
        ><span></span></button>
        <button
          class="carousel-dot"
          type="button"
          data-carousel-go-to="1"
          aria-pressed="false"
          aria-label="Show champagne metal finish"
          data-i18n-aria-label="visual.showMetal"
        ><span></span></button>
      </div>
      <span class="sr-only" aria-live="polite" data-carousel-live></span>
    </figure>
  `;
}

const painPoints = [
  {
    icon: "finger" as const,
    titleKey: "pain.1.title" as const,
    copyKey: "pain.1.copy" as const,
    title: "Fingers get tired during acupressure",
    copy: "A small tool can take the strain out of repeated pressure."
  },
  {
    icon: "pressure" as const,
    titleKey: "pain.2.title" as const,
    copyKey: "pain.2.copy" as const,
    title: "It’s difficult to maintain steady pressure",
    copy: "Rounded ends help keep your touch controlled and consistent."
  },
  {
    icon: "guide" as const,
    titleKey: "pain.3.title" as const,
    copyKey: "pain.3.copy" as const,
    title: "It can be hard to know how and where to press",
    copy: "Simple visual routines help you get started with confidence."
  }
];

const benefits = [
  {
    number: "01",
    titleKey: "benefit.1.title" as const,
    copyKey: "benefit.1.copy" as const,
    title: "Steady Pressure",
    copy: "Apply consistent pressure with less effort."
  },
  {
    number: "02",
    titleKey: "benefit.2.title" as const,
    copyKey: "benefit.2.copy" as const,
    title: "Easier on Your Fingers",
    copy: "Make everyday acupressure routines more comfortable."
  },
  {
    number: "03",
    titleKey: "benefit.3.title" as const,
    copyKey: "benefit.3.copy" as const,
    title: "Simple Guidance Included",
    copy: "Follow easy routines for common relaxation goals."
  }
];

const steps = [
  {
    number: "1",
    titleKey: "steps.1.title" as const,
    altKey: "steps.1.alt" as const,
    title: "Find the suggested point",
    image: ASSETS.stepFind,
    alt: "Photo of positioning the champagne-gold metal massage stick near the shoulder"
  },
  {
    number: "2",
    titleKey: "steps.2.title" as const,
    altKey: "steps.2.alt" as const,
    title: "Apply gentle pressure",
    image: ASSETS.stepPressure,
    alt: "Photo of applying gentle pressure to the palm with the champagne-gold metal massage stick"
  },
  {
    number: "3",
    titleKey: "steps.3.title" as const,
    altKey: "steps.3.alt" as const,
    title: "Follow the guided routine",
    image: ASSETS.stepRoutine,
    alt: "Photo of the champagne-gold metal massage stick beside a guided routine on a phone"
  }
];

const details = [
  [
    "details.material",
    "Material",
    "details.materialValue",
    "Natural sandalwood or champagne-gold anodized aluminum alloy"
  ],
  ["details.size", "Size", "details.sizeValue", "4.7 in (12 cm), compact and portable"],
  ["details.package", "Package", "details.packageValue", "Massage stick and quick-start guide"],
  ["details.care", "Care", "details.careValue", "Wipe clean and keep dry after use"]
] satisfies Array<[MessageKey, string, MessageKey, string]>;

const materialOptions = [
  {
    id: "wood",
    className: "material-swatch-wood",
    titleKey: "details.woodTitle" as const,
    copyKey: "details.woodCopy" as const,
    altKey: "details.woodVisualAlt" as const,
    selectedKey: "details.woodSelected" as const,
    title: "Natural Sandalwood",
    copy: "A warm, smoothly polished wood finish with natural grain variation.",
    image: ASSETS.productMainWood,
    alt: "Natural sandalwood Acupressure Massage Stick on a warm neutral surface"
  },
  {
    id: "metal",
    className: "material-swatch-metal",
    titleKey: "details.metalTitle" as const,
    copyKey: "details.metalCopy" as const,
    altKey: "details.metalVisualAlt" as const,
    selectedKey: "details.metalSelected" as const,
    title: "Champagne Metal",
    copy: "A satin anodized aluminum-alloy finish with a smooth, low-glare surface.",
    image: ASSETS.productMainMetal,
    alt: "Champagne-gold metal Acupressure Massage Stick on a warm neutral surface"
  }
];

export function renderPage(price: PriceOption, complete: boolean): string {
  return `
    <header class="brand-header">
      <a class="brand-lockup" href="../" aria-label="Meridian Care home" data-i18n-aria-label="nav.homeLabel">
        <span class="brand-symbol" aria-hidden="true">${icon("leaf")}</span>
        <span>Meridian Care</span>
      </a>
    </header>

    <main id="main-content">
      <section class="hero section-shell" data-track-section="hero">
        <div class="hero-copy">
          <p class="eyebrow" data-i18n="hero.eyebrow">A gentler way to press</p>
          <h1 data-i18n="product.name">${PRODUCT.name}</h1>
          <p class="hero-headline" data-i18n="product.headline">${PRODUCT.headline}</p>
          <p class="hero-support" data-i18n="product.support">${PRODUCT.supportingCopy}</p>
        </div>

        ${ProductCarousel()}

        <div class="hero-conversion">
          ${PriceBlock(price, "price-block-hero")}
          ${PrimaryCTA({ location: "hero", complete })}
          <p class="cta-helper" data-i18n="cta.helper">${PRODUCT.ctaHelper}</p>
        </div>

        <ul class="trust-list" aria-label="Product highlights" data-i18n-aria-label="trust.label">
          <li>${icon("check")}<span data-i18n="trust.easy">Easy to use</span></li>
          <li>${icon("check")}<span data-i18n="trust.gentle">Gentle daily care</span></li>
          <li>${icon("check")}<span data-i18n="trust.guided">Guided routines included</span></li>
        </ul>
      </section>

      <section class="content-section section-shell" data-track-section="pain_points">
        <div class="section-heading reveal">
          <p class="eyebrow" data-i18n="pain.eyebrow">Everyday friction</p>
          <h2 data-i18n="pain.title">Acupressure shouldn’t feel like hard work.</h2>
        </div>
        <div class="pain-grid">
          ${painPoints
            .map(
              (item) => `
                <article class="pain-card reveal">
                  <span class="line-icon">${icon(item.icon)}</span>
                  <div>
                    <h3 data-i18n="${item.titleKey}">${item.title}</h3>
                    <p data-i18n="${item.copyKey}">${item.copy}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="benefit-section" data-track-section="benefits">
        <div class="section-shell benefit-layout">
          <div class="section-heading reveal">
            <p class="eyebrow eyebrow-light" data-i18n="benefit.eyebrow">Why it helps</p>
            <h2 data-i18n="benefit.title">A small tool for a more comfortable routine.</h2>
          </div>
          <div class="benefit-list">
            ${benefits
              .map(
                (item) => `
                  <article class="benefit-row reveal">
                    <span>${item.number}</span>
                    <div>
                      <h3 data-i18n="${item.titleKey}">${item.title}</h3>
                      <p data-i18n="${item.copyKey}">${item.copy}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="content-section section-shell" data-track-section="how_it_works">
        <div class="section-heading centered reveal">
          <p class="eyebrow" data-i18n="steps.eyebrow">Three simple steps</p>
          <h2 data-i18n="steps.title">Easy to learn. Easy to return to.</h2>
        </div>
        <div class="step-grid">
          ${steps
            .map(
              (step) => `
                <article class="step-card reveal">
                  <div class="image-frame">
                    <img src="${step.image}" width="560" height="420" loading="lazy" alt="${step.alt}" data-i18n-alt="${step.altKey}" />
                  </div>
                  <div class="step-label">
                    <span>${step.number}</span>
                    <h3 data-i18n="${step.titleKey}">${step.title}</h3>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="content-section section-shell details-layout" data-track-section="product_details">
        <figure class="details-visual reveal" data-material-preview>
          <img
            src="${materialOptions[0].image}"
            width="1549"
            height="1015"
            loading="lazy"
            alt="${materialOptions[0].alt}"
            data-i18n-alt="${materialOptions[0].altKey}"
            data-material-preview-image
          />
          <figcaption class="details-finish-label" data-material-preview-label data-i18n="details.woodTitle">
            ${materialOptions[0].title}
          </figcaption>
        </figure>
        <div class="details-copy">
          <div class="section-heading reveal">
            <p class="eyebrow" data-i18n="details.eyebrow">Product information</p>
            <h2 data-i18n="details.title">Simple by design.</h2>
          </div>
          <div
            class="material-options reveal"
            role="group"
            aria-label="Choose a material to preview"
            data-i18n-aria-label="details.materialsLabel"
            data-material-selector
          >
            ${materialOptions
              .map(
                (option, index) => `
                  <button
                    class="material-option${index === 0 ? " is-selected" : ""}"
                    type="button"
                    data-material-option="${option.id}"
                    data-material-image="${option.image}"
                    data-material-alt-key="${option.altKey}"
                    data-material-title-key="${option.titleKey}"
                    data-material-selected-key="${option.selectedKey}"
                    aria-pressed="${index === 0 ? "true" : "false"}"
                  >
                    <span class="material-swatch ${option.className}" aria-hidden="true"></span>
                    <span class="material-option-copy">
                      <h3 data-i18n="${option.titleKey}">${option.title}</h3>
                      <p data-i18n="${option.copyKey}">${option.copy}</p>
                    </span>
                    <span class="material-option-check" aria-hidden="true">${icon("check")}</span>
                  </button>
                `
              )
              .join("")}
          </div>
          <div class="sr-only" aria-live="polite" data-material-live></div>
          <dl class="detail-list reveal">
            ${details
              .map(
                ([termKey, term, descriptionKey, description]) =>
                  `<div><dt data-i18n="${termKey}">${term}</dt><dd data-i18n="${descriptionKey}">${description}</dd></div>`
              )
              .join("")}
          </dl>
        </div>
      </section>

      <section class="section-shell safety-notice reveal" data-track-section="safety">
        <span class="line-icon">${icon("leaf")}</span>
        <div>
          <h2 data-i18n="safety.title">Gentle use, always.</h2>
          <p data-i18n="safety.copy">
            Designed for gentle daily relaxation. Stop using it if you feel pain or unusual
            discomfort. This product is not intended to diagnose, treat, cure, or prevent any
            medical condition.
          </p>
        </div>
      </section>

      <section class="bottom-conversion" data-bottom-conversion data-track-section="bottom_cta">
        <div class="section-shell bottom-conversion-inner reveal">
          <div>
            <p class="eyebrow eyebrow-light" data-i18n="bottom.eyebrow">A more comfortable daily ritual</p>
            <h2 data-i18n="product.name">${PRODUCT.name}</h2>
          </div>
          <div class="bottom-action">
            ${PriceBlock(price, "price-block-light")}
            ${PrimaryCTA({ location: "bottom", complete })}
            <p class="cta-helper cta-helper-light" data-i18n="cta.helper">${PRODUCT.ctaHelper}</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span data-i18n="footer.brand">© Meridian Care</span>
      <span data-i18n="footer.copy">Designed for everyday relaxation.</span>
    </footer>

    <div class="sticky-cta" data-sticky-cta aria-hidden="true">
      <div class="sticky-price">
        <span data-i18n="product.presalePriceShort">Pre-sale price</span>
        <strong data-display-price>${price.price}</strong>
      </div>
      ${PrimaryCTA({ location: "sticky", complete, compact: true })}
    </div>
    <div class="sr-only" aria-live="polite" data-cta-live></div>
  `;
}
