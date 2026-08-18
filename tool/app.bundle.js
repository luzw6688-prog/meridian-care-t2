"use strict";(()=>{var r={type:"massage_tool",name:"Acupressure Massage Stick",headline:"Apply steady pressure to hard-to-reach acupoints\u2014without tiring your fingers.",supportingCopy:"A simple acupressure tool designed for everyday relaxation routines.",originalPriceLabel:"Original price",presalePriceLabel:"Current pre-sale price",ctaLabel:"I Want This",ctaCompleteLabel:"Interest Recorded",ctaHelper:"This product is currently being prepared. Thank you for your patience."},x={a:{variant:"a",originalPrice:"$29.9",price:"$19.9"},b:{variant:"b",originalPrice:"$29.9",price:"$19.9"}},o={assignedVariant:"meridianCare.tool.priceVariant.v1",interestPrefix:"meridianCare.tool.interest.v1",analyticsEvents:"meridianCare.tool.analytics.events.v1",notificationEmailPrefix:"meridianCare.tool.notificationEmail.v1",anonymousId:"meridianCare.tool.anonymousId.v1",sessionId:"meridianCare.tool.sessionId.v1",attribution:"meridianCare.tool.attribution.v1",landingContext:"meridianCare.tool.landingContext.v1"};var K=e=>e==="a"||e==="b";function O(e){let a=new URLSearchParams(e).get("variant"),t=localStorage.getItem(o.assignedVariant),i;return K(a)?i=a:K(t)?i=t:i=crypto.getRandomValues(new Uint8Array(1))[0]<128?"a":"b",localStorage.setItem(o.assignedVariant,i),x[i]}function H(e){let a=e.price.replace(/[^0-9.]/g,"");return`${o.interestPrefix}:${ne}:${e.variant}:${a}`}var ne="massage_tool";function R(e){return localStorage.getItem(H(e))==="true"}function V(e){localStorage.setItem(H(e),"true")}var N=(e,a)=>{let t=e.getItem(a);if(t)return t;let i=crypto.randomUUID();return e.setItem(a,i),i},le=()=>window.innerWidth<768?"mobile":window.innerWidth<1024?"tablet":"desktop",q=location.protocol==="file:"||location.hostname==="localhost"||location.hostname==="127.0.0.1",y=class e{constructor(a,t){this.price=a;this.attribution=t}price;attribution;anonymousId=N(localStorage,o.anonymousId);sessionId=N(sessionStorage,o.sessionId);startedAt=performance.now();highestScrollDepth=0;setScrollDepth(a){this.highestScrollDepth=Math.max(this.highestScrollDepth,a)}track(a,t={}){let i={event_name:a,event_id:crypto.randomUUID(),anonymous_id:this.anonymousId,session_id:this.sessionId,timestamp:new Date().toISOString(),page:"/tool",product_type:r.type,price_variant:this.price.variant,displayed_price:this.price.price,source:this.attribution.source,medium:this.attribution.medium,campaign:this.attribution.campaign,content:this.attribution.content,term:this.attribution.term,referrer:this.attribution.referrer,landing_url:this.attribution.landingUrl,device_type:le(),viewport_width:window.innerWidth,scroll_depth:t.scroll_depth??this.highestScrollDepth,stay_time:Math.round(performance.now()-this.startedAt),...t},s=e.getEvents();return s.push(i),localStorage.setItem(o.analyticsEvents,JSON.stringify(s.slice(-1e3))),q&&console.info("[Meridian Tool Analytics]",i),i}static getEvents(){try{return JSON.parse(localStorage.getItem(o.analyticsEvents)??"[]")}catch{return[]}}static clearEvents(){localStorage.removeItem(o.analyticsEvents),q&&console.info("[Meridian Tool Analytics] Test events cleared.")}};window.MeridianToolAnalytics={getEvents:y.getEvents,clearEvents:y.clearEvents};var f={productMainWood:new URL("./assets/product-main-wood.jpg",location.href).href,productMainMetal:new URL("./assets/product-main-metal.jpg",location.href).href,productDetail:new URL("./assets/product-quick-start-metal.jpg",location.href).href,stepFind:new URL("./assets/step-find-metal.jpg",location.href).href,stepPressure:new URL("./assets/step-pressure-metal.jpg",location.href).href,stepRoutine:new URL("./assets/step-routine-metal.jpg",location.href).href},p=e=>`<svg viewBox="0 0 32 32" aria-hidden="true">${{finger:'<path d="M9 21v-8.5a2 2 0 0 1 4 0V15m0-4.5a2 2 0 0 1 4 0V15m0-3a2 2 0 0 1 4 0v5c0 4.5-2.7 7-7.2 7H12c-2.2 0-3.8-1-5-2.8l-3-4.4a2.1 2.1 0 0 1 3.2-2.7L9 15.5"/>',pressure:'<circle cx="14" cy="15" r="8"/><path d="M14 3v8m-3-3 3 3 3-3M6 27h16"/>',guide:'<path d="M6 5.5A3.5 3.5 0 0 1 9.5 2H25v23H9.5A3.5 3.5 0 0 0 6 28.5z"/><path d="M6 5.5v23M11 8h9m-9 5h7"/>',leaf:'<path d="M25 4C14 4 7 9 7 17c0 4 3 7 7 7 8 0 11-9 11-20Z"/><path d="M5 28c3-7 8-12 15-16"/>',check:'<path d="m6 16 6 6L26 8"/>'}[e]}</svg>`;function P({location:e,complete:a,compact:t=!1}){let i=a?"cta.recorded":"cta.primary";return`
    <button
      class="button button-primary interest-button${t?" button-compact":""}"
      type="button"
      data-interest-cta
      data-cta-location="${e}"
      ${a?"disabled":""}
    >
      <span class="button-icon" aria-hidden="true">${a?p("check"):""}</span>
      <span data-cta-label data-i18n="${i}">${a?r.ctaCompleteLabel:r.ctaLabel}</span>
    </button>
  `}function D(e,a=""){return`
    <div class="price-block ${a}">
      <div class="price-original">
        <span data-i18n="product.originalPriceLabel">${r.originalPriceLabel}</span>
        <del data-original-price>${e.originalPrice}</del>
      </div>
      <div class="price-current">
        <span data-i18n="product.presalePriceLabel">${r.presalePriceLabel}</span>
        <strong data-display-price>${e.price}</strong>
      </div>
    </div>
  `}function ce(){return`
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
            src="${f.productMainWood}"
            width="1549"
            height="1015"
            alt="Natural sandalwood Acupressure Massage Stick with rounded ends"
            data-i18n-alt="visual.woodAlt"
          />
          <span class="finish-label" data-i18n="visual.woodFinish">Natural sandalwood</span>
        </div>
        <div class="carousel-slide" data-carousel-slide aria-hidden="true">
          <img
            src="${f.productMainMetal}"
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
  `}var de=[{icon:"finger",titleKey:"pain.1.title",copyKey:"pain.1.copy",title:"Fingers get tired during acupressure",copy:"A small tool can take the strain out of repeated pressure."},{icon:"pressure",titleKey:"pain.2.title",copyKey:"pain.2.copy",title:"It\u2019s difficult to maintain steady pressure",copy:"Rounded ends help keep your touch controlled and consistent."},{icon:"guide",titleKey:"pain.3.title",copyKey:"pain.3.copy",title:"It can be hard to know how and where to press",copy:"Simple visual routines help you get started with confidence."}],ue=[{number:"01",titleKey:"benefit.1.title",copyKey:"benefit.1.copy",title:"Steady Pressure",copy:"Apply consistent pressure with less effort."},{number:"02",titleKey:"benefit.2.title",copyKey:"benefit.2.copy",title:"Easier on Your Fingers",copy:"Make everyday acupressure routines more comfortable."},{number:"03",titleKey:"benefit.3.title",copyKey:"benefit.3.copy",title:"Simple Guidance Included",copy:"Follow easy routines for common relaxation goals."}],pe=[{number:"1",titleKey:"steps.1.title",altKey:"steps.1.alt",title:"Find the suggested point",image:f.stepFind,alt:"Photo of positioning the champagne-gold metal massage stick near the shoulder"},{number:"2",titleKey:"steps.2.title",altKey:"steps.2.alt",title:"Apply gentle pressure",image:f.stepPressure,alt:"Photo of applying gentle pressure to the palm with the champagne-gold metal massage stick"},{number:"3",titleKey:"steps.3.title",altKey:"steps.3.alt",title:"Follow the guided routine",image:f.stepRoutine,alt:"Photo of the champagne-gold metal massage stick beside a guided routine on a phone"}],me=[["details.material","Material","details.materialValue","Natural sandalwood or champagne-gold anodized aluminum alloy"],["details.size","Size","details.sizeValue","4.7 in (12 cm), compact and portable"],["details.package","Package","details.packageValue","Massage stick and quick-start guide"],["details.care","Care","details.careValue","Wipe clean and keep dry after use"]],ge=[{className:"material-swatch-wood",titleKey:"details.woodTitle",copyKey:"details.woodCopy",title:"Natural Sandalwood",copy:"A warm, smoothly polished wood finish with natural grain variation."},{className:"material-swatch-metal",titleKey:"details.metalTitle",copyKey:"details.metalCopy",title:"Champagne Metal",copy:"A satin anodized aluminum-alloy finish with a smooth, low-glare surface."}];function F(e,a){return`
    <header class="brand-header">
      <a class="brand-lockup" href="../" aria-label="Meridian Care home" data-i18n-aria-label="nav.homeLabel">
        <span class="brand-symbol" aria-hidden="true">${p("leaf")}</span>
        <span>Meridian Care</span>
      </a>
    </header>

    <main id="main-content">
      <section class="hero section-shell" data-track-section="hero">
        <div class="hero-copy">
          <p class="eyebrow" data-i18n="hero.eyebrow">A gentler way to press</p>
          <h1 data-i18n="product.name">${r.name}</h1>
          <p class="hero-headline" data-i18n="product.headline">${r.headline}</p>
          <p class="hero-support" data-i18n="product.support">${r.supportingCopy}</p>
        </div>

        ${ce()}

        <div class="hero-conversion">
          ${D(e,"price-block-hero")}
          ${P({location:"hero",complete:a})}
          <p class="cta-helper" data-i18n="cta.helper">${r.ctaHelper}</p>
        </div>

        <ul class="trust-list" aria-label="Product highlights" data-i18n-aria-label="trust.label">
          <li>${p("check")}<span data-i18n="trust.easy">Easy to use</span></li>
          <li>${p("check")}<span data-i18n="trust.gentle">Gentle daily care</span></li>
          <li>${p("check")}<span data-i18n="trust.guided">Guided routines included</span></li>
        </ul>
      </section>

      <section class="content-section section-shell" data-track-section="pain_points">
        <div class="section-heading reveal">
          <p class="eyebrow" data-i18n="pain.eyebrow">Everyday friction</p>
          <h2 data-i18n="pain.title">Acupressure shouldn\u2019t feel like hard work.</h2>
        </div>
        <div class="pain-grid">
          ${de.map(t=>`
                <article class="pain-card reveal">
                  <span class="line-icon">${p(t.icon)}</span>
                  <div>
                    <h3 data-i18n="${t.titleKey}">${t.title}</h3>
                    <p data-i18n="${t.copyKey}">${t.copy}</p>
                  </div>
                </article>
              `).join("")}
        </div>
      </section>

      <section class="benefit-section" data-track-section="benefits">
        <div class="section-shell benefit-layout">
          <div class="section-heading reveal">
            <p class="eyebrow eyebrow-light" data-i18n="benefit.eyebrow">Why it helps</p>
            <h2 data-i18n="benefit.title">A small tool for a more comfortable routine.</h2>
          </div>
          <div class="benefit-list">
            ${ue.map(t=>`
                  <article class="benefit-row reveal">
                    <span>${t.number}</span>
                    <div>
                      <h3 data-i18n="${t.titleKey}">${t.title}</h3>
                      <p data-i18n="${t.copyKey}">${t.copy}</p>
                    </div>
                  </article>
                `).join("")}
          </div>
        </div>
      </section>

      <section class="content-section section-shell" data-track-section="how_it_works">
        <div class="section-heading centered reveal">
          <p class="eyebrow" data-i18n="steps.eyebrow">Three simple steps</p>
          <h2 data-i18n="steps.title">Easy to learn. Easy to return to.</h2>
        </div>
        <div class="step-grid">
          ${pe.map(t=>`
                <article class="step-card reveal">
                  <div class="image-frame">
                    <img src="${t.image}" width="560" height="420" loading="lazy" alt="${t.alt}" data-i18n-alt="${t.altKey}" />
                  </div>
                  <div class="step-label">
                    <span>${t.number}</span>
                    <h3 data-i18n="${t.titleKey}">${t.title}</h3>
                  </div>
                </article>
              `).join("")}
        </div>
      </section>

      <section class="content-section section-shell details-layout" data-track-section="product_details">
        <div class="details-visual reveal">
          <img
            src="${f.productDetail}"
            width="640"
            height="640"
            loading="lazy"
            alt="Champagne-gold metal massage stick beside a cream quick-start guide"
            data-i18n-alt="details.visualAlt"
          />
        </div>
        <div class="details-copy">
          <div class="section-heading reveal">
            <p class="eyebrow" data-i18n="details.eyebrow">Product information</p>
            <h2 data-i18n="details.title">Simple by design.</h2>
          </div>
          <div class="material-options reveal" aria-label="Available material concepts" data-i18n-aria-label="details.materialsLabel">
            ${ge.map(t=>`
                  <article class="material-option">
                    <span class="material-swatch ${t.className}" aria-hidden="true"></span>
                    <div>
                      <h3 data-i18n="${t.titleKey}">${t.title}</h3>
                      <p data-i18n="${t.copyKey}">${t.copy}</p>
                    </div>
                  </article>
                `).join("")}
          </div>
          <dl class="detail-list reveal">
            ${me.map(([t,i,s,n])=>`<div><dt data-i18n="${t}">${i}</dt><dd data-i18n="${s}">${n}</dd></div>`).join("")}
          </dl>
        </div>
      </section>

      <section class="section-shell safety-notice reveal" data-track-section="safety">
        <span class="line-icon">${p("leaf")}</span>
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
            <h2 data-i18n="product.name">${r.name}</h2>
          </div>
          <div class="bottom-action">
            ${D(e,"price-block-light")}
            ${P({location:"bottom",complete:a})}
            <p class="cta-helper cta-helper-light" data-i18n="cta.helper">${r.ctaHelper}</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span data-i18n="footer.brand">\xA9 Meridian Care</span>
      <span data-i18n="footer.copy">Designed for everyday relaxation.</span>
    </footer>

    <div class="sticky-cta" data-sticky-cta aria-hidden="true">
      <div class="sticky-price">
        <span data-i18n="product.presalePriceShort">Pre-sale price</span>
        <strong data-display-price>${e.price}</strong>
      </div>
      ${P({location:"sticky",complete:a,compact:!0})}
    </div>
    <div class="sr-only" aria-live="polite" data-cta-live></div>
  `}var he={en:{"page.title":"Acupressure Massage Stick | Meridian Care","page.description":"A simple acupressure massage stick for gentle everyday relaxation routines.","skip.content":"Skip to content","nav.homeLabel":"Meridian Care home","nav.back":"Back to Meridian Care","nav.language":"Language","hero.eyebrow":"A gentler way to press","product.name":"Acupressure Massage Stick","product.headline":"Apply steady pressure to hard-to-reach acupoints\u2014without tiring your fingers.","product.support":"A simple acupressure tool designed for everyday relaxation routines.","product.originalPriceLabel":"Original price","product.presalePriceLabel":"Current pre-sale price","product.presalePriceShort":"Pre-sale price","visual.concept":"Product reference renderings","visual.productAlt":"Natural wood Acupressure Massage Stick with rounded ends","visual.carouselLabel":"Wood and metal product finishes","visual.controlsLabel":"Choose a product finish","visual.woodAlt":"Natural sandalwood Acupressure Massage Stick with rounded ends","visual.metalAlt":"Champagne-gold satin metal Acupressure Massage Stick with rounded ends","visual.woodFinish":"Natural sandalwood","visual.metalFinish":"Champagne metal","visual.showWood":"Show natural sandalwood finish","visual.showMetal":"Show champagne metal finish","cta.primary":"I Want This","cta.recording":"Recording\u2026","cta.recorded":"Interest Recorded","cta.helper":"This product is currently being prepared. Thank you for your patience.","trust.label":"Product highlights","trust.easy":"Easy to use","trust.gentle":"Gentle daily care","trust.guided":"Guided routines included","pain.eyebrow":"Everyday friction","pain.title":"Acupressure shouldn\u2019t feel like hard work.","pain.1.title":"Fingers get tired during acupressure","pain.1.copy":"A small tool can take the strain out of repeated pressure.","pain.2.title":"It\u2019s difficult to maintain steady pressure","pain.2.copy":"Rounded ends help keep your touch controlled and consistent.","pain.3.title":"It can be hard to know how and where to press","pain.3.copy":"Simple visual routines help you get started with confidence.","benefit.eyebrow":"Why it helps","benefit.title":"A small tool for a more comfortable routine.","benefit.1.title":"Steady Pressure","benefit.1.copy":"Apply consistent pressure with less effort.","benefit.2.title":"Easier on Your Fingers","benefit.2.copy":"Make everyday acupressure routines more comfortable.","benefit.3.title":"Simple Guidance Included","benefit.3.copy":"Follow easy routines for common relaxation goals.","steps.eyebrow":"Three simple steps","steps.title":"Easy to learn. Easy to return to.","steps.1.title":"Find the suggested point","steps.1.alt":"Photo of positioning the champagne-gold metal massage stick near the shoulder","steps.2.title":"Apply gentle pressure","steps.2.alt":"Photo of applying gentle pressure to the palm with the champagne-gold metal massage stick","steps.3.title":"Follow the guided routine","steps.3.alt":"Photo of the champagne-gold metal massage stick beside a guided routine on a phone","use.eyebrow":"Made for daily moments","use.title":"Bring steady pressure where your fingers need a break.","use.cardLabel":"Everyday routine","use.1.title":"Neck & Shoulder Relaxation","use.1.alt":"Concept illustration of using the massage stick around the shoulder","use.2.title":"Hand Relaxation","use.2.alt":"Concept illustration of using the massage stick on the hand","use.3.title":"Foot Relaxation","use.3.alt":"Concept illustration of using the massage stick around the foot","details.visualAlt":"Champagne-gold metal massage stick beside a cream quick-start guide","details.eyebrow":"Product information","details.title":"Simple by design.","details.materialsLabel":"Available material concepts","details.woodTitle":"Natural Sandalwood","details.woodCopy":"A warm, smoothly polished wood finish with natural grain variation.","details.metalTitle":"Champagne Metal","details.metalCopy":"A satin anodized aluminum-alloy finish with a smooth, low-glare surface.","details.material":"Material","details.materialValue":"Natural sandalwood or champagne-gold anodized aluminum alloy","details.size":"Size","details.sizeValue":"4.7 in (12 cm), compact and portable","details.package":"Package","details.packageValue":"Massage stick and quick-start guide","details.care":"Care","details.careValue":"Wipe clean and keep dry after use","safety.title":"Gentle use, always.","safety.copy":"Designed for gentle daily relaxation. Stop using it if you feel pain or unusual discomfort. This product is not intended to diagnose, treat, cure, or prevent any medical condition.","bottom.eyebrow":"A more comfortable daily ritual","footer.brand":"\xA9 Meridian Care","footer.copy":"Designed for everyday relaxation.","modal.close":"Close dialog","modal.eyebrow":"Interest recorded","modal.title":"Thanks for your interest!","modal.copy":"This product is currently in development. Your response helps us decide whether to launch it.","modal.emailLabel":"Email (optional)","modal.emailHelper":"We\u2019ll notify you at this email address as soon as the product becomes available.","modal.confirm":"Got It","status.recorded":"Your interest has been recorded.","status.error":"We couldn\u2019t record your interest. Please try again."},"zh-CN":{"page.title":"\u7A74\u4F4D\u6309\u6469\u68D2 | Meridian Care","page.description":"\u4E00\u6B3E\u9002\u5408\u65E5\u5E38\u653E\u677E\u4F7F\u7528\u7684\u7B80\u6613\u7A74\u4F4D\u6309\u6469\u5DE5\u5177\u3002","skip.content":"\u8DF3\u81F3\u4E3B\u8981\u5185\u5BB9","nav.homeLabel":"\u8FD4\u56DE Meridian Care \u9996\u9875","nav.back":"\u8FD4\u56DE Meridian Care","nav.language":"\u8BED\u8A00","hero.eyebrow":"\u66F4\u8F7B\u677E\u7684\u6309\u538B\u65B9\u5F0F","product.name":"\u7A74\u4F4D\u6309\u6469\u68D2","product.headline":"\u8F7B\u677E\u6309\u538B\u96BE\u4EE5\u89E6\u53CA\u7684\u7A74\u4F4D\uFF0C\u65E0\u9700\u8BA9\u624B\u6307\u6301\u7EED\u7528\u529B\u3002","product.support":"\u4E00\u6B3E\u4E3A\u65E5\u5E38\u653E\u677E\u4E60\u60EF\u800C\u8BBE\u8BA1\u7684\u7B80\u6613\u7A74\u4F4D\u6309\u6469\u5DE5\u5177\u3002","product.originalPriceLabel":"\u539F\u4EF7","product.presalePriceLabel":"\u5F53\u524D\u9884\u552E\u4EF7","product.presalePriceShort":"\u9884\u552E\u4EF7","visual.concept":"\u4EA7\u54C1\u53C2\u8003\u6548\u679C\u56FE","visual.productAlt":"\u4E24\u7AEF\u5706\u6DA6\u7684\u5929\u7136\u6728\u8D28\u7A74\u4F4D\u6309\u6469\u68D2","visual.carouselLabel":"\u6728\u8D28\u4E0E\u91D1\u5C5E\u6750\u8D28\u4EA7\u54C1\u5C55\u793A","visual.controlsLabel":"\u9009\u62E9\u4EA7\u54C1\u6750\u8D28","visual.woodAlt":"\u4E24\u7AEF\u5706\u6DA6\u7684\u5929\u7136\u6A80\u9999\u6728\u7A74\u4F4D\u6309\u6469\u68D2","visual.metalAlt":"\u4E24\u7AEF\u5706\u6DA6\u7684\u9999\u69DF\u91D1\u54D1\u5149\u91D1\u5C5E\u7A74\u4F4D\u6309\u6469\u68D2","visual.woodFinish":"\u5929\u7136\u6A80\u9999\u6728","visual.metalFinish":"\u9999\u69DF\u91D1\u5C5E","visual.showWood":"\u67E5\u770B\u5929\u7136\u6A80\u9999\u6728\u6750\u8D28","visual.showMetal":"\u67E5\u770B\u9999\u69DF\u91D1\u5C5E\u6750\u8D28","cta.primary":"\u6211\u60F3\u8981","cta.recording":"\u6B63\u5728\u8BB0\u5F55\u2026","cta.recorded":"\u610F\u5411\u5DF2\u8BB0\u5F55","cta.helper":"\u76EE\u524D\u5546\u54C1\u6B63\u5728\u7B79\u5907\u4E2D\uFF0C\u8BF7\u60A8\u8010\u5FC3\u7B49\u5F85\u3002","trust.label":"\u4EA7\u54C1\u7279\u70B9","trust.easy":"\u7B80\u5355\u6613\u7528","trust.gentle":"\u6E29\u548C\u65E5\u5E38\u517B\u62A4","trust.guided":"\u9644\u5E26\u5F15\u5BFC\u7EC3\u4E60","pain.eyebrow":"\u65E5\u5E38\u56F0\u6270","pain.title":"\u7A74\u4F4D\u6309\u538B\u4E0D\u8BE5\u8BA9\u4EBA\u89C9\u5F97\u8D39\u529B\u3002","pain.1.title":"\u7A74\u4F4D\u6309\u538B\u65F6\u624B\u6307\u5BB9\u6613\u75B2\u52B3","pain.1.copy":"\u5C0F\u5DE7\u5DE5\u5177\u53EF\u4EE5\u51CF\u8F7B\u53CD\u590D\u6309\u538B\u5E26\u6765\u7684\u624B\u6307\u8D1F\u62C5\u3002","pain.2.title":"\u96BE\u4EE5\u4FDD\u6301\u7A33\u5B9A\u7684\u6309\u538B\u529B\u5EA6","pain.2.copy":"\u5706\u6DA6\u7AEF\u5934\u6709\u52A9\u4E8E\u4FDD\u6301\u53EF\u63A7\u800C\u7A33\u5B9A\u7684\u6309\u538B\u3002","pain.3.title":"\u4E0D\u786E\u5B9A\u8BE5\u6309\u54EA\u91CC\u3001\u5982\u4F55\u6309","pain.3.copy":"\u7B80\u5355\u7684\u56FE\u793A\u7EC3\u4E60\u5E2E\u52A9\u4F60\u66F4\u6709\u4FE1\u5FC3\u5730\u5F00\u59CB\u3002","benefit.eyebrow":"\u5B83\u5982\u4F55\u5E2E\u52A9\u4F60","benefit.title":"\u5C0F\u5DE7\u5DE5\u5177\uFF0C\u8BA9\u65E5\u5E38\u7EC3\u4E60\u66F4\u8212\u9002\u3002","benefit.1.title":"\u7A33\u5B9A\u6309\u538B","benefit.1.copy":"\u7528\u66F4\u5C11\u529B\u6C14\u4FDD\u6301\u4E00\u81F4\u7684\u6309\u538B\u529B\u5EA6\u3002","benefit.2.title":"\u51CF\u8F7B\u624B\u6307\u8D1F\u62C5","benefit.2.copy":"\u8BA9\u65E5\u5E38\u7A74\u4F4D\u6309\u538B\u7EC3\u4E60\u66F4\u52A0\u8212\u9002\u3002","benefit.3.title":"\u9644\u5E26\u7B80\u5355\u6307\u5BFC","benefit.3.copy":"\u8DDF\u968F\u7B80\u5355\u7EC3\u4E60\uFF0C\u6EE1\u8DB3\u5E38\u89C1\u7684\u65E5\u5E38\u653E\u677E\u9700\u6C42\u3002","steps.eyebrow":"\u7B80\u5355\u4E09\u6B65","steps.title":"\u5BB9\u6613\u4E0A\u624B\uFF0C\u4E5F\u5BB9\u6613\u575A\u6301\u3002","steps.1.title":"\u627E\u5230\u5EFA\u8BAE\u7A74\u4F4D","steps.1.alt":"\u5C06\u9999\u69DF\u91D1\u5C5E\u6309\u6469\u68D2\u653E\u5728\u80A9\u90E8\u9644\u8FD1\u5BFB\u627E\u5EFA\u8BAE\u6309\u538B\u4F4D\u7F6E\u7684\u7167\u7247","steps.2.title":"\u8F7B\u67D4\u65BD\u52A0\u538B\u529B","steps.2.alt":"\u4F7F\u7528\u9999\u69DF\u91D1\u5C5E\u6309\u6469\u68D2\u8F7B\u67D4\u6309\u538B\u624B\u638C\u7684\u7167\u7247","steps.3.title":"\u8DDF\u968F\u5F15\u5BFC\u7EC3\u4E60","steps.3.alt":"\u9999\u69DF\u91D1\u5C5E\u6309\u6469\u68D2\u4E0E\u624B\u673A\u5F15\u5BFC\u7EC3\u4E60\u7684\u7167\u7247","use.eyebrow":"\u9002\u5408\u65E5\u5E38\u653E\u677E\u65F6\u523B","use.title":"\u8BA9\u6309\u6469\u68D2\u4EE3\u66FF\u5BB9\u6613\u75B2\u52B3\u7684\u624B\u6307\uFF0C\u63D0\u4F9B\u7A33\u5B9A\u6309\u538B\u3002","use.cardLabel":"\u65E5\u5E38\u7EC3\u4E60","use.1.title":"\u9888\u80A9\u653E\u677E","use.1.alt":"\u4F7F\u7528\u6309\u6469\u68D2\u8FDB\u884C\u80A9\u90E8\u653E\u677E\u7684\u6982\u5FF5\u793A\u610F\u56FE","use.2.title":"\u624B\u90E8\u653E\u677E","use.2.alt":"\u4F7F\u7528\u6309\u6469\u68D2\u8FDB\u884C\u624B\u90E8\u653E\u677E\u7684\u6982\u5FF5\u793A\u610F\u56FE","use.3.title":"\u8DB3\u90E8\u653E\u677E","use.3.alt":"\u4F7F\u7528\u6309\u6469\u68D2\u8FDB\u884C\u8DB3\u90E8\u653E\u677E\u7684\u6982\u5FF5\u793A\u610F\u56FE","details.visualAlt":"\u9999\u69DF\u91D1\u5C5E\u6309\u6469\u68D2\u548C\u5FEB\u901F\u5165\u95E8\u6307\u5357\u7684\u5199\u5B9E\u4EA7\u54C1\u56FE","details.eyebrow":"\u4EA7\u54C1\u4FE1\u606F","details.title":"\u7B80\u6D01\u8BBE\u8BA1\uFF0C\u8F7B\u677E\u4F7F\u7528\u3002","details.materialsLabel":"\u53EF\u9009\u6750\u8D28\u6982\u5FF5","details.woodTitle":"\u5929\u7136\u6A80\u9999\u6728","details.woodCopy":"\u6E29\u6DA6\u5149\u6ED1\u7684\u6728\u8D28\u8868\u9762\uFF0C\u6BCF\u4E00\u4EF6\u90FD\u4FDD\u7559\u81EA\u7136\u6728\u7EB9\u53D8\u5316\u3002","details.metalTitle":"\u9999\u69DF\u91D1\u5C5E","details.metalCopy":"\u91C7\u7528\u54D1\u5149\u9633\u6781\u6C27\u5316\u94DD\u5408\u91D1\u8D28\u611F\uFF0C\u8868\u9762\u5149\u6ED1\u3001\u53CD\u5149\u67D4\u548C\u3002","details.material":"\u6750\u8D28","details.materialValue":"\u5929\u7136\u6A80\u9999\u6728\u6216\u9999\u69DF\u91D1\u9633\u6781\u6C27\u5316\u94DD\u5408\u91D1","details.size":"\u5C3A\u5BF8","details.sizeValue":"\u7EA6 12 \u5398\u7C73\uFF0C\u5C0F\u5DE7\u4FBF\u643A","details.package":"\u5305\u88C5\u5185\u5BB9","details.packageValue":"\u6309\u6469\u68D2\u548C\u5FEB\u901F\u5165\u95E8\u6307\u5357","details.care":"\u6E05\u6D01\u65B9\u5F0F","details.careValue":"\u4F7F\u7528\u540E\u64E6\u62ED\u5E72\u51C0\u5E76\u4FDD\u6301\u5E72\u71E5","safety.title":"\u59CB\u7EC8\u6E29\u548C\u4F7F\u7528\u3002","safety.copy":"\u672C\u4EA7\u54C1\u9002\u7528\u4E8E\u65E5\u5E38\u6E29\u548C\u653E\u677E\u3002\u5982\u611F\u5230\u75BC\u75DB\u6216\u5F02\u5E38\u4E0D\u9002\uFF0C\u8BF7\u505C\u6B62\u4F7F\u7528\u3002\u672C\u4EA7\u54C1\u4E0D\u7528\u4E8E\u8BCA\u65AD\u3001\u6CBB\u7597\u3001\u6CBB\u6108\u6216\u9884\u9632\u4EFB\u4F55\u75BE\u75C5\u3002","bottom.eyebrow":"\u8BA9\u65E5\u5E38\u653E\u677E\u7EC3\u4E60\u66F4\u8212\u9002","footer.brand":"\xA9 Meridian Care","footer.copy":"\u4E3A\u65E5\u5E38\u653E\u677E\u800C\u8BBE\u8BA1\u3002","modal.close":"\u5173\u95ED\u5F39\u7A97","modal.eyebrow":"\u610F\u5411\u5DF2\u8BB0\u5F55","modal.title":"\u611F\u8C22\u4F60\u7684\u5173\u6CE8\uFF01","modal.copy":"\u672C\u4EA7\u54C1\u76EE\u524D\u4ECD\u5728\u5F00\u53D1\u4E2D\u3002\u4F60\u7684\u53CD\u9988\u5C06\u5E2E\u52A9\u6211\u4EEC\u5224\u65AD\u662F\u5426\u6B63\u5F0F\u63A8\u51FA\u3002","modal.emailLabel":"\u90AE\u7BB1\uFF08\u9009\u586B\uFF09","modal.emailHelper":"\u4EA7\u54C1\u53D1\u552E\u540E\u5C06\u7B2C\u4E00\u65F6\u95F4\u901A\u8FC7\u586B\u5199\u7684\u90AE\u4EF6\u5730\u5740\u901A\u77E5\u60A8\u3002","modal.confirm":"\u77E5\u9053\u4E86","status.recorded":"\u4F60\u7684\u4EA7\u54C1\u610F\u5411\u5DF2\u8BB0\u5F55\u3002","status.error":"\u6682\u65F6\u65E0\u6CD5\u8BB0\u5F55\uFF0C\u8BF7\u91CD\u8BD5\u3002"}},U="en";function c(e){return he[U][e]}function W(e){U=e,document.documentElement.lang=e,document.title=c("page.title"),document.querySelector('meta[name="description"]')?.setAttribute("content",c("page.description")),document.querySelectorAll("[data-i18n]").forEach(a=>{let t=a.dataset.i18n;t&&(a.textContent=c(t))}),document.querySelectorAll("[data-i18n-alt]").forEach(a=>{let t=a.dataset.i18nAlt;t&&a.setAttribute("alt",c(t))}),document.querySelectorAll("[data-i18n-aria-label]").forEach(a=>{let t=a.dataset.i18nAriaLabel;t&&a.setAttribute("aria-label",c(t))})}var ye=e=>`${o.notificationEmailPrefix}:${r.type}:${e.variant}:${e.price}`;function z(e,a){let t=a.trim().toLowerCase();t&&localStorage.setItem(ye(e),JSON.stringify({email:t,saved_at:new Date().toISOString()}))}var G={source:"utm_source",medium:"utm_medium",campaign:"utm_campaign",content:"utm_content",term:"utm_term"};function j(e,a){try{return JSON.parse(e.getItem(a)??"null")}catch{return null}}function B(e){let a=new URLSearchParams(e),i={...j(sessionStorage,o.attribution)??{}};Object.keys(G).forEach(n=>{let g=a.get(G[n]);g&&(i[n]=g.slice(0,250))}),sessionStorage.setItem(o.attribution,JSON.stringify(i));let s=j(sessionStorage,o.landingContext)??{referrer:document.referrer.slice(0,1e3),landingUrl:location.href.slice(0,2e3)};return sessionStorage.setItem(o.landingContext,JSON.stringify(s)),{source:i.source??"",medium:i.medium??"",campaign:i.campaign??"",content:i.content??"",term:i.term??"",referrer:s.referrer,landingUrl:s.landingUrl}}var v=O(location.search),fe=B(location.search),u=new y(v,fe),$=R(v),te=null,T=!1,ve=document.querySelector("#app");ve.innerHTML=F(v,$);var m=document.querySelector("[data-modal-layer]"),be=document.querySelector("[data-interest-modal]"),we=document.querySelector("[data-modal-close]"),Se=document.querySelector("[data-interest-form]"),S=document.querySelector("[data-interest-email]"),Y=document.querySelector("[data-cta-live]"),J=document.querySelector("[data-sticky-cta]"),ke=document.querySelector('[data-cta-location="hero"]'),Ee=document.querySelector("[data-bottom-conversion]");W("en");var d=document.querySelector("[data-product-carousel]");if(d){let e=Array.from(d.querySelectorAll("[data-carousel-slide]")),a=Array.from(d.querySelectorAll("[data-carousel-go-to]")),t=d.querySelector("[data-carousel-live]"),i=window.matchMedia("(prefers-reduced-motion: reduce)"),s=0,n=0,g=!1,A=!1,M=()=>{n&&(window.clearInterval(n),n=0)},k=(l,E=!1)=>{s=(l+e.length)%e.length,e.forEach((b,_)=>{let w=_===s;b.classList.toggle("is-active",w),b.setAttribute("aria-hidden",String(!w))}),a.forEach((b,_)=>{let w=_===s;b.classList.toggle("is-active",w),b.setAttribute("aria-pressed",String(w))}),E&&t&&(t.textContent=s===0?c("visual.woodFinish"):c("visual.metalFinish"))},h=()=>{M(),!(i.matches||g||A||document.visibilityState!=="visible"||e.length<2)&&(n=window.setInterval(()=>k(s+1),4800))};a.forEach(l=>{l.addEventListener("click",()=>{let E=Number(l.dataset.carouselGoTo);Number.isNaN(E)||k(E,!0),h()})}),d.addEventListener("mouseenter",()=>{g=!0,M()}),d.addEventListener("mouseleave",()=>{g=!1,h()}),d.addEventListener("focusin",()=>{A=!0,M()}),d.addEventListener("focusout",l=>{d.contains(l.relatedTarget)||(A=!1,h())}),d.addEventListener("keydown",l=>{l.key!=="ArrowLeft"&&l.key!=="ArrowRight"||(l.preventDefault(),k(s+(l.key==="ArrowRight"?1:-1),!0),a[s]?.focus())}),document.addEventListener("visibilitychange",h),i.addEventListener("change",h),k(0),h()}var Z=`meridianCare.tool.pageView.v1:${v.variant}`;sessionStorage.getItem(Z)||(u.track("massage_tool_page_view"),sessionStorage.setItem(Z,"true"));function C(e,a,t=!1){document.querySelectorAll("[data-interest-cta]").forEach(i=>{i.disabled=a,i.setAttribute("aria-busy",String(t));let s=i.querySelector("[data-cta-label]");s&&(s.dataset.i18n=e,s.textContent=c(e));let n=i.querySelector(".button-icon");n&&(n.innerHTML=a&&!t?'<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m6 16 6 6L26 8"></path></svg>':"")})}function Le(){return Array.from(be.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))}function Ae(){m.hidden=!1,document.body.classList.add("modal-open"),requestAnimationFrame(()=>m.classList.add("is-open")),S.focus(),u.track("massage_tool_modal_view")}function L(){m.classList.remove("is-open"),document.body.classList.remove("modal-open"),window.setTimeout(()=>{m.hidden=!0,te?.focus()},180)}async function Me(e){if($||T)return;T=!0,te=e;let a=e.dataset.ctaLocation;(a==="hero"||a==="sticky"||a==="bottom")&&u.track("massage_tool_cta_click",{cta_location:a}),C("cta.recording",!0,!0),await new Promise(t=>window.setTimeout(t,260));try{V(v),u.track("massage_tool_interest_complete"),$=!0,C("cta.recorded",!0),Y.textContent=c("status.recorded"),Ae()}catch{C("cta.primary",!1),Y.textContent=c("status.error")}finally{T=!1}}document.addEventListener("click",e=>{let t=e.target.closest("[data-interest-cta]");t&&Me(t)});Se.addEventListener("submit",e=>{if(e.preventDefault(),!S.checkValidity()){S.reportValidity(),S.focus();return}z(v,S.value),L()});we.addEventListener("click",L);m.addEventListener("click",e=>{(e.target===m||e.target===document.querySelector("[data-modal-backdrop]"))&&L()});document.addEventListener("keydown",e=>{if(m.hidden)return;if(e.key==="Escape"){e.preventDefault(),L();return}if(e.key!=="Tab")return;let a=Le(),t=a[0],i=a.at(-1);!t||!i||(e.shiftKey&&document.activeElement===t?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),t.focus()))});var Q=new Set,_e=new IntersectionObserver(e=>{e.forEach(a=>{if(!a.isIntersecting)return;let t=a.target.dataset.trackSection;!t||Q.has(t)||(Q.add(t),u.track("massage_tool_section_view",{section_name:t}))})},{threshold:.3});document.querySelectorAll("[data-track-section]").forEach(e=>{_e.observe(e)});var Pe=new IntersectionObserver((e,a)=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),a.unobserve(t.target))})},{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>{Pe.observe(e)});var ae=!0,ie=!1,se=()=>{let e=!ae&&!ie;J.classList.toggle("is-visible",e),J.setAttribute("aria-hidden",String(!e)),document.body.classList.toggle("has-sticky-cta",e)};new IntersectionObserver(([e])=>{e&&(ae=e.isIntersecting,se())},{threshold:0}).observe(ke);new IntersectionObserver(([e])=>{e&&(ie=e.isIntersecting,se())},{threshold:.1}).observe(Ee);var Te=[25,50,75,100],X=new Set,I=0,oe=()=>{I=0;let e=document.documentElement.scrollHeight-window.innerHeight,a=e<=0?100:window.scrollY/e*100;Te.forEach(t=>{a+.5<t||X.has(t)||(X.add(t),u.setScrollDepth(t),u.track("massage_tool_scroll_depth",{scroll_depth:t}))})};window.addEventListener("scroll",()=>{I||(I=requestAnimationFrame(oe))},{passive:!0});oe();var ee=!1,re=()=>{ee||(ee=!0,u.track("massage_tool_page_exit"))};window.addEventListener("pagehide",re);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&re()});})();
