// @ts-check

/** @typedef {"en" | "zh"} Locale */
/** @typedef {"sleep" | "stress" | "neck"} PlanIcon */
/** @typedef {"point" | "layers" | "calendar" | "hand"} ContentIcon */
/**
 * @typedef {{
 *   name: string,
 *   shortName: string,
 *   pickerDescription: string,
 *   lead: string,
 *   support: string,
 *   previewTitle: string,
 *   previewInstruction: string,
 *   visualFocus: string,
 *   timeline: readonly string[],
 *   audience: readonly string[]
 * }} PlanCopy
 */
/**
 * @typedef {{
 *   id: string,
 *   icon: PlanIcon,
 *   copy: Readonly<Record<Locale, Readonly<PlanCopy>>>
 * }} Plan
 */

export const PLAN_CONFIG = Object.freeze({
  productType: "guided_plan",
  page: "/plan",
  defaultPlanId: "neck_shoulder_7_day",
  prices: Object.freeze({
    a: Object.freeze({
      variant: "a",
      display: "$9.90",
      amount: 9.9,
      originalDisplay: "$19.90",
    }),
    b: Object.freeze({
      variant: "b",
      display: "$9.90",
      amount: 9.9,
      originalDisplay: "$19.90",
    }),
  }),
});

export const PLANS = Object.freeze([
  createPlan(
    "better_sleep_7_day",
    "sleep",
    {
      name: "7-Day Better Sleep Reset",
      shortName: "Better Sleep",
      pickerDescription: "Build a softer evening wind-down.",
      lead: "Follow a calming 5-minute acupressure routine each evening.",
      support:
        "A gentle guided plan for creating a more settled bedtime rhythm—no previous acupressure experience required.",
      previewTitle: "A softer start to your evening",
      previewInstruction:
        "Locate the suggested point, settle your breathing, and apply gentle, steady pressure for 60 seconds.",
      visualFocus: "A calmer wind-down",
      timeline: [
        "Set up a calming space",
        "Relax the hands and wrists",
        "Ease facial tension",
        "Gentle head and neck routine",
        "Create an evening pause",
        "Combined 5-minute wind-down",
        "Build your bedtime rhythm",
      ],
      audience: [
        "People looking for a softer evening wind-down",
        "Beginners to acupressure",
        "Anyone building a relaxing bedtime habit",
        "People who prefer a short guided routine",
      ],
    },
    {
      name: "7天助眠放松计划",
      shortName: "改善睡眠",
      pickerDescription: "建立更轻柔的睡前放松节奏。",
      lead: "每晚跟随一套简单的5分钟穴位按压练习。",
      support: "用温和引导建立更安稳的睡前节奏，无需穴位按摩经验。",
      previewTitle: "从更轻柔的夜晚开始",
      previewInstruction: "找到建议穴位，放松呼吸，以温和稳定的力度按压60秒。",
      visualFocus: "更从容地放松",
      timeline: [
        "营造安静的练习空间",
        "放松双手与手腕",
        "舒缓面部紧张",
        "温和头颈练习",
        "建立晚间停顿",
        "完成5分钟组合练习",
        "形成你的睡前节奏",
      ],
      audience: [
        "希望睡前更从容放松的人",
        "穴位按摩初学者",
        "正在建立睡前放松习惯的人",
        "偏爱简短引导练习的人",
      ],
    },
  ),
  createPlan(
    "stress_release_7_day",
    "stress",
    {
      name: "7-Day Stress Release Plan",
      shortName: "Less Stress",
      pickerDescription: "Create a pause for a busy mind.",
      lead: "Create a simple 5-minute acupressure pause each day.",
      support:
        "A guided plan for adding a calmer moment to a busy day—no previous acupressure experience required.",
      previewTitle: "A quiet pause for a busy day",
      previewInstruction:
        "Locate the suggested point, soften your shoulders, and apply gentle, steady pressure for 60 seconds.",
      visualFocus: "A mindful pause",
      timeline: [
        "Learn the calming basics",
        "Prepare the hands and wrists",
        "Release facial tension",
        "Relax the upper body",
        "Practice steady breathing",
        "Combined 5-minute reset",
        "Build your daily pause",
      ],
      audience: [
        "People with full or fast-moving days",
        "Beginners to acupressure",
        "Anyone building a daily relaxation habit",
        "People looking for a simple guided pause",
      ],
    },
    {
      name: "7天减压放松计划",
      shortName: "减轻压力",
      pickerDescription: "给忙碌的思绪留出片刻停顿。",
      lead: "每天用5分钟完成一套简单的穴位按压练习。",
      support: "在忙碌日常中加入一段更平静的时刻，无需穴位按摩经验。",
      previewTitle: "为忙碌的一天留出安静片刻",
      previewInstruction: "找到建议穴位，放松肩部，以温和稳定的力度按压60秒。",
      visualFocus: "专注当下的停顿",
      timeline: [
        "了解放松基础",
        "准备双手与手腕",
        "舒缓面部紧张",
        "放松上半身",
        "练习稳定呼吸",
        "完成5分钟组合练习",
        "建立每日停顿",
      ],
      audience: [
        "日程充实或节奏较快的人",
        "穴位按摩初学者",
        "正在建立每日放松习惯的人",
        "希望获得简单引导停顿的人",
      ],
    },
  ),
  createPlan(
    "neck_shoulder_7_day",
    "neck",
    {
      name: "7-Day Neck & Shoulder Relaxation Plan",
      shortName: "Neck & Shoulder Relief",
      pickerDescription: "Release your after-screen routine.",
      lead: "Follow a simple 5-minute acupressure routine each day.",
      support:
        "A guided plan for building an easy neck and shoulder relaxation habit—no previous acupressure experience required.",
      previewTitle: "A gentle start for your neck and shoulders",
      previewInstruction:
        "Locate the suggested point, relax your hand, and apply gentle, steady pressure for 60 seconds.",
      visualFocus: "A gentle start",
      timeline: [
        "Learn the basics",
        "Hand and forearm preparation",
        "Release upper-body tension",
        "Gentle neck routine",
        "Shoulder focus",
        "Combined 5-minute practice",
        "Build your personal routine",
      ],
      audience: [
        "People who spend long hours at a desk",
        "Beginners to acupressure",
        "Anyone building a daily relaxation habit",
        "People looking for a simple guided routine",
      ],
    },
    {
      name: "7天颈肩放松计划",
      shortName: "颈肩舒缓",
      pickerDescription: "舒缓长时间看屏幕后累积的紧绷感。",
      lead: "每天跟随一套简单的5分钟穴位按压练习。",
      support: "通过清晰引导建立轻松的颈肩放松习惯，无需穴位按摩经验。",
      previewTitle: "从温和放松颈肩开始",
      previewInstruction: "找到建议穴位，放松手部，以温和稳定的力度按压60秒。",
      visualFocus: "温和地开始",
      timeline: [
        "了解基础方法",
        "准备双手与前臂",
        "释放上半身紧张",
        "温和颈部练习",
        "专注肩部放松",
        "完成5分钟组合练习",
        "形成你的个人节奏",
      ],
      audience: [
        "需要长时间伏案的人",
        "穴位按摩初学者",
        "正在建立每日放松习惯的人",
        "希望获得简单引导练习的人",
      ],
    },
  ),
]);

/** @type {Readonly<Record<Locale, any>>} */
export const UI_COPY = Object.freeze({
  en: Object.freeze({
    skip: "Skip to main content",
    back: "Back to Meridian Care",
    language: "Language",
    guidedRoutine: "A guided wellness routine",
    planHighlights: "Plan highlights",
    guidedDays: "7 guided days",
    minutesDay: "5 minutes a day",
    beginner: "Beginner-friendly",
    plannedPrice: "Plan pricing",
    originalPrice: "Original",
    presalePrice: "Pre-sale",
    wantPlan: "I Want This Plan",
    recorded: "Interest Recorded",
    recordedAnnouncement: "Your interest has been recorded.",
    noPayment: "The massage plan is being prepared. Please stay tuned.",
    chooseEyebrow: "Personalize your preview",
    chooseTitle: "Choose the plan that fits your routine",
    chooseSupport: "Explore any of the three proposed seven-day plans.",
    clearStart: "A clearer place to begin",
    painTitle: "A simple routine, without the guesswork",
    expectedInclude: "What the plan is expected to include",
    benefitsTitle: "Everything you need to follow along",
    benefitsSupport:
      "We’re exploring a practical, guided format that makes each daily routine easy to understand.",
    rhythm: "Seven days, one easy rhythm",
    overviewTitle: "Your plan at a glance",
    overviewSupport: "A preview of the proposed plan structure. No lessons are open yet.",
    day: "Day",
    planPreview: "Plan preview",
    dayOne: "Day 1 / 7",
    dayProgressLabel: "Day 1 of 7. Days 2 through 7 are locked.",
    todaysFocus: "Today’s focus",
    findPoint: "Find the point",
    applyPressure: "Apply gentle pressure",
    acupoint: "Acupoint:",
    yintang: "Yintang (EX-HN3)",
    duration: "Suggested duration:",
    seconds: "60 seconds",
    gentlePressure: "Gentle pressure",
    previewDisclaimer:
      "This plan preview is a demonstration only and does not represent the massage plan’s final content or presentation.",
    everydayWellness: "Designed for everyday wellness",
    audienceImageAlt: "A person practicing a gentle neck and shoulder self-massage",
    audienceTitle: "This plan may be a good fit for",
    expectedWork: "How it’s expected to work",
    worksTitle: "Five mindful minutes, step by step",
    safetyTitle: "A gentle note on safety",
    safety:
      "This plan is intended for general relaxation and wellness education. It does not replace medical diagnosis or treatment. Stop if you experience pain, numbness, dizziness, or unusual discomfort, and consult a qualified professional when needed.",
    shapeNext: "Five minutes for yourself each day",
    sevenDays: "7 days",
    footer: "Wellness guidance for a calmer daily routine.",
    thanks: "Thanks for your interest!",
    dialog:
      "We’re preparing this guided plan. Your response helps us decide what to launch next.",
    emailLabel: "Email address (optional)",
    emailPlaceholder: "you@example.com",
    emailHelper:
      "When the massage plan launches, we’ll notify you first at the email address you provide.",
    emailError: "Enter a valid email address or leave this field blank.",
    gotIt: "Got It",
    close: "Close",
    visualAlt: "Preview of an illustrated acupressure routine",
    locationAlt: "Meridian Care illustration showing the Yintang acupoint between the eyebrows",
    actionAlt: "Animation demonstrating gentle pressure on the Yintang acupoint",
    illustratedLocation: "Illustrated point location",
    steadyPressure: "Gentle, steady pressure",
    painPoints: [
      ["Not sure which acupoints to use", "Start with clearly selected points.", "point"],
      ["Online guidance feels scattered", "Follow one consistent daily flow.", "layers"],
      ["Hard to build a consistent routine", "Keep the practice to five minutes.", "calendar"],
      ["Unsure how long or how firmly to press", "See suggested pressure and timing.", "hand"],
    ],
    benefits: [
      ["7-day guided routine", "A clear focus for each day."],
      ["Acupoint location illustrations", "Visual guidance designed to be easy to follow."],
      ["Step-by-step massage guidance", "Short, ordered instructions for every practice."],
      ["Suggested pressure and duration", "Gentle cues for timing and intensity."],
      ["Daily progress checklist", "A lightweight way to keep your place in the proposed plan."],
    ],
    steps: [
      ["Open the day’s routine", "See one clear focus and the suggested points for the day."],
      ["Follow the illustrated guidance", "Use the visual cues for location, pressure, and timing."],
      ["Complete the 5-minute practice", "Finish a short routine designed to fit into your day."],
    ],
  }),
  zh: Object.freeze({
    skip: "跳至主要内容",
    back: "返回 Meridian Care",
    language: "语言",
    guidedRoutine: "引导式日常养护",
    planHighlights: "计划亮点",
    guidedDays: "7天引导",
    minutesDay: "每天5分钟",
    beginner: "适合初学者",
    plannedPrice: "计划价格",
    originalPrice: "原价",
    presalePrice: "预售价格",
    wantPlan: "我想要这个计划",
    recorded: "已记录意向",
    recordedAnnouncement: "你的意向已记录。",
    noPayment: "按摩计划正在筹备中，请耐心等待。",
    chooseEyebrow: "定制你的预览",
    chooseTitle: "选择适合你日常节奏的计划",
    chooseSupport: "浏览三套拟开发的7天引导计划。",
    clearStart: "更清晰的开始方式",
    painTitle: "简单易跟随，无需反复猜测",
    expectedInclude: "计划预计包含",
    benefitsTitle: "跟随练习所需的清晰指引",
    benefitsSupport: "我们正在探索一种实用的引导形式，让每天的练习都容易理解。",
    rhythm: "7天，建立轻松节奏",
    overviewTitle: "计划一览",
    overviewSupport: "以下为拟开发的计划结构预览，课程尚未开放。",
    day: "第",
    planPreview: "计划预览",
    dayOne: "第1天 / 共7天",
    dayProgressLabel: "当前为第1天，共7天。第2天至第7天暂未开放。",
    todaysFocus: "今日重点",
    findPoint: "找到穴位",
    applyPressure: "温和按压",
    acupoint: "演示穴位：",
    yintang: "印堂穴（EX-HN3）",
    duration: "建议时长：",
    seconds: "60秒",
    gentlePressure: "温和力度",
    previewDisclaimer: "当前计划预览为演示效果，不代表按摩计划最终内容呈现。",
    everydayWellness: "为日常养护而设计",
    audienceImageAlt: "正在进行温和颈肩自我按摩的人",
    audienceTitle: "这套计划可能适合",
    expectedWork: "预计使用方式",
    worksTitle: "每天5分钟，跟随步骤练习",
    safetyTitle: "温和的安全提示",
    safety:
      "本计划仅用于一般放松和健康教育，不能替代医疗诊断或治疗。如出现疼痛、麻木、头晕或其他异常不适，请立即停止，并在需要时咨询合格专业人士。",
    shapeNext: "每天5分钟，给自己一点放松时间",
    sevenDays: "7天",
    footer: "用温和指引，建立更从容的日常节奏。",
    thanks: "感谢你的关注！",
    dialog: "我们正在准备这套引导计划。你的反馈将帮助我们决定下一步推出什么。",
    emailLabel: "邮箱地址（选填）",
    emailPlaceholder: "you@example.com",
    emailHelper: "按摩计划发售后，将第一时间通过你填写的邮件地址通知你。",
    emailError: "请输入有效的邮箱地址，或将此项留空。",
    gotIt: "知道了",
    close: "关闭",
    visualAlt: "穴位按压练习的插图预览",
    locationAlt: "展示眉心印堂穴位置的 Meridian Care 插图",
    actionAlt: "温和按压印堂穴的动作演示动画",
    illustratedLocation: "穴位位置插图",
    steadyPressure: "温和稳定的力度",
    painPoints: [
      ["不确定该按哪些穴位", "从清晰筛选的穴位开始。", "point"],
      ["网上指引零散难跟随", "每天遵循一套连贯流程。", "layers"],
      ["难以形成稳定习惯", "把练习控制在5分钟。", "calendar"],
      ["不确定按多久、用多大力度", "查看建议力度与时长。", "hand"],
    ],
    benefits: [
      ["7天引导练习", "每天都有一个清晰重点。"],
      ["穴位位置插图", "使用容易理解的视觉指引。"],
      ["分步骤按摩说明", "每次练习都有简短有序的步骤。"],
      ["建议力度和时长", "提供温和的时间与力度提示。"],
      ["每日进度清单", "用轻量方式记录拟开发计划中的位置。"],
    ],
    steps: [
      ["打开当天练习", "查看当天的一个明确重点和建议穴位。"],
      ["跟随插图指引", "通过视觉提示了解位置、力度和时长。"],
      ["完成5分钟练习", "用一套适合日常节奏的短练习结束。"],
    ],
  }),
});

export const STORAGE_KEYS = Object.freeze({
  priceAssignment: "meridian_plan_price_assignment_v1",
  selectedPlan: "meridian_selected_plan_v1",
  language: "meridian_plan_language_v1",
  anonymousId: "meridian_anonymous_id_v1",
  sessionId: "meridian_session_id_v1",
  sessionAttribution: "meridian_plan_attribution_v1",
  analyticsEvents: "meridian_plan_analytics_events_v1",
  pageView: "meridian_plan_page_view_v1",
  emailInterest: "meridian_plan_email_interest_v1",
});

/**
 * @param {string} id
 * @param {PlanIcon} icon
 * @param {PlanCopy} en
 * @param {PlanCopy} zh
 * @returns {Readonly<Plan>}
 */
function createPlan(id, icon, en, zh) {
  return Object.freeze({
    id,
    icon,
    copy: Object.freeze({ en: Object.freeze(en), zh: Object.freeze(zh) }),
  });
}
