const app = document.querySelector(".iphone");
const navButtons = document.querySelectorAll("[data-target]");
const backButtons = document.querySelectorAll("[data-back]");
const closePaywallButton = document.querySelector("[data-close-paywall]");
const planOptionButtons = document.querySelectorAll("[data-plan-option]");
const planNote = document.querySelector("[data-plan-note]");
const subscribeCta = document.querySelector("[data-subscribe-cta]");
const checkButtons = document.querySelectorAll("[data-check]");
const taskButtons = document.querySelectorAll("[data-task-target]");
const taskPanels = document.querySelectorAll("[data-task-panel]");
const choiceGroups = document.querySelectorAll(".feedback-grid, .status-grid, .body-grid, .time-options, .advanced-grid");
const focusTitle = document.querySelector("[data-focus-title]");
const focusCopy = document.querySelector("[data-focus-copy]");
const massageTarget = document.querySelector("[data-massage-target]");
const statusTitle = document.querySelector("[data-status-title]");
const statusOptions = document.querySelector("[data-status-options]");
const photoPermissionButton = document.querySelector("[data-photo-permission]");
const permissionModal = document.querySelector("[data-permission-modal]");
const permissionCloseButton = document.querySelector("[data-permission-close]");
const photoButtons = document.querySelectorAll("[data-photo-select]");
const confirmPhotoButton = document.querySelector("[data-confirm-photo]");
const uploadReportButton = document.querySelector("[data-upload-report]");
const tonguePermissionAllowButton = document.querySelector("[data-tongue-permission-allow]");
const tonguePermissionDenyButton = document.querySelector("[data-tongue-permission-deny]");
const tonguePermissionRetryButton = document.querySelector("[data-tongue-permission-retry]");
const tongueCaptureButton = document.querySelector("[data-tongue-capture]");
const tongueCaptureLabel = document.querySelector("[data-tongue-capture-label]");
const tongueCameraCard = document.querySelector(".tongue-camera-card");
const tongueStatusText = document.querySelector("[data-tongue-status]");
const tongueReportCta = document.querySelector("[data-tongue-report-cta]");
const tongueDisclaimerToggle = document.querySelector("[data-tongue-disclaimer-toggle]");
const tongueDisclaimerPopover = document.querySelector("[data-tongue-disclaimer-popover]");
const notificationOpenButton = document.querySelector("[data-open-notification]");
const notificationAllowButton = document.querySelector("[data-notification-allow]");
const notificationLaterButton = document.querySelector("[data-notification-later]");
const profileOpenButtons = document.querySelectorAll("[data-profile-open]");
const profileCloseButtons = document.querySelectorAll("[data-profile-close]");
const deleteAccountOpenButton = document.querySelector("[data-delete-account-open]");
const deleteAccountCloseButtons = document.querySelectorAll("[data-delete-account-close]");
const deleteAccountConfirmButton = document.querySelector("[data-delete-account-confirm]");
const checkinShareButtons = document.querySelectorAll("[data-share-open]");
const shareCloseButtons = document.querySelectorAll("[data-share-close]");
const socialShareButtons = document.querySelectorAll("[data-social-share]");
const systemShareOpenButtons = document.querySelectorAll("[data-open-system-share], [data-app-share]");
const systemShareCloseButtons = document.querySelectorAll("[data-system-share-close]");
const milestoneOpenButtons = document.querySelectorAll("[data-milestone-open]");
const milestoneCloseButtons = document.querySelectorAll("[data-milestone-close]");
const languageButtons = document.querySelectorAll("[data-language]");
const languageLabel = document.querySelector("[data-language-label]");
const meridianStepButtons = document.querySelectorAll("[data-meridian-step]");
const meridianPoints = document.querySelectorAll("[data-point]");
const stepTime = document.querySelector("[data-step-time]");
const stepCount = document.querySelector("[data-step-count]");
const stepCopy = document.querySelector("[data-step-copy]");
const guidanceProgressSegments = document.querySelectorAll("[data-guidance-progress] span");
const startRoutineButtons = document.querySelectorAll("[data-start-routine]");
const timerToggleButton = document.querySelector("[data-timer-toggle]");
const completeRoutineButton = document.querySelector("[data-complete-routine]");
const exitRoutineButtons = document.querySelectorAll("[data-exit-routine]");
const practiceStatusLabel = document.querySelector("[data-practice-status-label]");
const practiceTitle = document.querySelector("[data-practice-title]");
const practiceCopy = document.querySelector("[data-practice-copy]");
const expectedChange = document.querySelector("[data-expected-change]");
const homePlanTitles = document.querySelectorAll("[data-home-plan-title]");
const homePlanCopy = document.querySelector("[data-home-plan-copy]");
const homeEarlierProgress = document.querySelector("[data-home-earlier-progress]");
const homeTodayProgress = document.querySelector("[data-home-today-progress]");
const homeRoutineTime = document.querySelector("[data-home-routine-time]");
const homeRoutineTitle = document.querySelector("[data-home-routine-title]");
const homeRoutineCopy = document.querySelector("[data-home-routine-copy]");
const exploreCards = document.querySelectorAll("[data-explore-card]");
const exploreCardKickers = document.querySelectorAll("[data-explore-card-kicker]");
const explorePreviewTitles = document.querySelectorAll("[data-explore-preview-title]");
const explorePreviewCopies = document.querySelectorAll("[data-explore-preview-copy]");
const exploreDetailTitle = document.querySelector("[data-explore-detail-title]");
const exploreDetailRoutine = document.querySelector("[data-explore-detail-routine]");
const exploreDetailCopy = document.querySelector("[data-explore-detail-copy]");
const exploreDetailReason = document.querySelector("[data-explore-detail-reason]");
const exploreDetailTime = document.querySelector("[data-explore-detail-time]");
const exploreDetailSteps = document.querySelector("[data-explore-detail-steps]");
const exploreDetailPoints = document.querySelector("[data-explore-detail-points]");
const exploreStartButton = document.querySelector("[data-explore-start]");
const exploreReplaceButton = document.querySelector("[data-explore-replace]");
const teaDetailTitle = document.querySelector("[data-tea-detail-title]");
const teaDetailHeadline = document.querySelector("[data-tea-detail-headline]");
const teaDetailLabel = document.querySelector("[data-tea-detail-label]");
const teaDetailCopy = document.querySelector("[data-tea-detail-copy]");
const teaDetailTime = document.querySelector("[data-tea-detail-time]");
const teaDetailIntention = document.querySelector("[data-tea-detail-intention]");
const teaDetailCount = document.querySelector("[data-tea-detail-count]");
const teaDetailIngredients = document.querySelector("[data-tea-detail-ingredients]");
const teaDetailSteps = document.querySelector("[data-tea-detail-steps]");
const teaSaveButton = document.querySelector("[data-tea-save]");
const growthTitle = document.querySelector("[data-growth-title]");
const growthCopy = document.querySelector("[data-growth-copy]");
const growthStage = document.querySelector("[data-growth-stage]");
const routineGuideTitle = document.querySelector("[data-routine-guide-title]");
const resultPlanTitle = document.querySelector("[data-result-plan-title]");
const resultPlanCopy = document.querySelector("[data-result-plan-copy]");
const resultRoutineTitle = document.querySelector("[data-result-routine-title]");
const resultRoutineCopy = document.querySelector("[data-result-routine-copy]");
const resultFocusArea = document.querySelector("[data-result-focus-area]");
const todayPlanLabel = document.querySelector("[data-today-plan-label]");
const todayPlanCopy = document.querySelector("[data-today-plan-copy]");
const todayPlanAction = document.querySelector("[data-today-plan-action]");
const todayRoutineStatus = document.querySelector("[data-today-routine-status]");
const todayRoutineCopy = document.querySelector("[data-today-routine-copy]");
const completionPill = document.querySelector("[data-completion-pill]");
const historyToday = document.querySelector("[data-history-today]");
const historyCurrentCopy = document.querySelector("[data-history-current-copy]");
const shareKicker = document.querySelector("[data-share-kicker]");
const shareTitle = document.querySelector("[data-share-title]");
const shareCopy = document.querySelector("[data-share-copy]");
const shareDays = document.querySelector("[data-share-days]");
const shareRewardCount = document.querySelector("[data-share-reward-count]");
const shareRewardLabel = document.querySelector("[data-share-reward-label]");
const shareStatus = document.querySelector("[data-share-status]");
const systemShareTitle = document.querySelector("[data-system-share-title]");
const systemSharePreview = document.querySelector("[data-system-share-preview]");
const systemShareCopy = document.querySelector("[data-system-share-copy]");
const milestoneTitle = document.querySelector("[data-milestone-title]");
const milestoneCopy = document.querySelector("[data-milestone-copy]");
const milestoneKicker = document.querySelector("[data-milestone-kicker]");
const milestoneVisual = document.querySelector("[data-milestone-visual]");
const celebrationVisual = document.querySelector("[data-celebration-visual]");
const celebrationKicker = document.querySelector("[data-celebration-kicker]");
const celebrationTitle = document.querySelector("[data-celebration-title]");
const celebrationCopy = document.querySelector("[data-celebration-copy]");
const milestoneOverviewKicker = document.querySelector("[data-milestone-overview-kicker]");
const milestoneOverviewTitle = document.querySelector("[data-milestone-overview-title]");
const milestoneOverviewCopy = document.querySelector("[data-milestone-overview-copy]");
const milestoneList = document.querySelector("[data-milestone-list]");
const growthKicker = document.querySelector("[data-growth-kicker]");
const growthDay = document.querySelector("[data-growth-day]");
const growthProgress = document.querySelector("[data-growth-progress]");
const journeyCompleteCloseButtons = document.querySelectorAll("[data-journey-complete-close]");
const newJourneyButton = document.querySelector("[data-new-journey]");
const screens = document.querySelectorAll(".screen");

const purposeFocusByLanguage = {
  en: {
    sleep: ["🌙 Better Sleep", "Gentle head and neck release for evening relaxation.", "Head & Neck"],
    fatigue: ["⚡ More Energy", "Shoulder, palm, and wrist points to support a light daily reset.", "Shoulder & Hands"],
    stress: ["🧘 Less Stress", "Palm and wrist points to support calm breathing.", "Hands & Wrist"],
    neck: ["💆 Neck & Shoulder Relief", "Focused neck and shoulder massage for daily tension.", "Neck & Shoulder"],
    stomach: ["🌿 Better Digestion", "Gentle abdominal meridian care for daily balance.", "Abdomen"],
    liver: ["🩸 Improve Circulation", "Hand and foot points to support warmth and circulation.", "Hands & Feet"],
    default: ["🌙 Better Sleep", "Gentle head and neck release for evening relaxation.", "Head & Neck"],
  },
  zh: {
    sleep: ["🌙 改善睡眠", "通过头颈轻柔放松，帮助进入晚间休息状态。", "头颈"],
    fatigue: ["⚡ 提升精力", "通过肩部、掌心与腕部点位，帮助完成轻量日常恢复。", "肩部与手部"],
    stress: ["🧘 减轻压力", "通过掌心与腕部点位，配合呼吸放松压力。", "手部与腕部"],
    neck: ["💆 颈肩舒缓", "针对颈肩紧绷进行日常放松按摩。", "颈肩"],
    stomach: ["🌿 改善消化", "通过腹部经络轻柔护理，支持日常平衡。", "腹部"],
    liver: ["🩸 改善循环", "通过手部与足部点位，辅助温暖与循环。", "手部与足部"],
    default: ["🌙 改善睡眠", "通过头颈轻柔放松，帮助进入晚间休息状态。", "头颈"],
  },
};

const statusQuestionsByLanguage = {
  en: {
    sleep: {
      title: "How was your sleep over the past 7 days?",
      options: ["Restless most nights", "Light sleep", "Mostly steady"],
    },
    fatigue: {
      title: "How has your energy felt recently?",
      options: ["Low most of the day", "Drops after work", "Mostly steady"],
    },
    stress: {
      title: "What best describes your current stress?",
      options: ["Hard to relax", "Tense during the day", "Mostly manageable"],
    },
    neck: {
      title: "How does your neck and shoulder feel?",
      options: ["Very tight", "Sore after sitting", "Mild stiffness"],
    },
    stomach: {
      title: "How has your digestion felt lately?",
      options: ["Often bloated", "Irregular appetite", "Mostly stable"],
    },
    liver: {
      title: "How does your circulation feel lately?",
      options: ["Cold hands or feet", "Tight or heavy limbs", "Mostly comfortable"],
    },
    default: {
      title: "How was your sleep over the past 7 days?",
      options: ["Restless most nights", "Light sleep", "Mostly steady"],
    },
  },
  zh: {
    sleep: {
      title: "过去 7 天你的睡眠质量如何？",
      options: ["多数夜晚不安稳", "睡眠偏浅", "整体还算稳定"],
    },
    fatigue: {
      title: "最近你的精力状态更接近哪种？",
      options: ["一天大多没精神", "下班后明显下降", "整体还算稳定"],
    },
    stress: {
      title: "你目前的压力状态更接近哪种？",
      options: ["很难放松下来", "白天经常紧绷", "基本可控"],
    },
    neck: {
      title: "你的颈肩状态更接近哪种？",
      options: ["明显紧绷", "久坐后酸胀", "轻微僵硬"],
    },
    stomach: {
      title: "最近你的脾胃状态如何？",
      options: ["经常胀气", "食欲不太规律", "整体稳定"],
    },
    liver: {
      title: "最近你的循环状态更接近哪种？",
      options: ["手脚容易发凉", "四肢紧绷沉重", "整体比较舒适"],
    },
    default: {
      title: "过去 7 天你的睡眠质量如何？",
      options: ["多数夜晚不安稳", "睡眠偏浅", "整体还算稳定"],
    },
  },
};

const planContentByLanguage = {
  en: {
    sleep: {
      goalTitle: "Better Sleep",
      routineTitle: "Head & Neck Meridian Massage",
      routineCopy: "Designed to support a calmer evening rhythm.",
      planCopy: "A gentle head and neck routine for evening relaxation.",
      expectedChange: "After this routine, you may feel a softer neck, slower breathing, and an easier transition into rest.",
      steps: [
        ["Temple circles", "Massage both temples with slow circular pressure.", 45],
        ["Neck side point", "Press the glowing neck point gently while breathing slowly.", 60],
        ["Behind the ear", "Glide behind the ear toward the jaw with light pressure.", 45],
        ["Wrist calm point", "Hold the inner wrist point and relax your shoulders.", 60],
      ],
    },
    fatigue: {
      goalTitle: "More Energy",
      routineTitle: "Shoulder & Palm Energy Massage",
      routineCopy: "A light reset for tired shoulders, palms, and wrists.",
      planCopy: "A short routine to help you feel lighter during the day.",
      expectedChange: "After this routine, you may feel warmer hands, lighter shoulders, and a clearer sense of daytime energy.",
      steps: [
        ["Shoulder tap", "Tap and knead the top of each shoulder gently.", 45],
        ["Palm center", "Press the center of the palm with steady circles.", 60],
        ["Wrist line", "Glide across the wrist crease with light pressure.", 45],
        ["Finger pulls", "Pull each fingertip softly to finish the reset.", 60],
      ],
    },
    stress: {
      goalTitle: "Less Stress",
      routineTitle: "Calm Palm Meridian Massage",
      routineCopy: "A simple palm and wrist routine for calmer breathing.",
      planCopy: "A grounding routine to release daily tension.",
      expectedChange: "After this routine, you may feel steadier breathing, softer palms, and less tension through the upper body.",
      steps: [
        ["Palm center", "Press the center of your palm and take three slow breaths.", 60],
        ["Inner wrist", "Hold the inner wrist point with steady pressure.", 60],
        ["Thumb web", "Massage the soft web between thumb and index finger.", 45],
        ["Finger release", "Massage each fingertip with light pressure.", 45],
      ],
    },
    neck: {
      goalTitle: "Neck & Shoulder Relief",
      routineTitle: "Neck & Shoulder Meridian Massage",
      routineCopy: "Focused pressure for common desk tension.",
      planCopy: "A targeted routine for neck and shoulder tightness.",
      expectedChange: "After this routine, you may feel less shoulder heaviness, easier neck movement, and a more open upper back.",
      steps: [
        ["Neck side point", "Press along the side of the neck with gentle circles.", 60],
        ["Shoulder well", "Knead the top shoulder point slowly.", 60],
        ["Base of skull", "Press the base of the skull with both thumbs.", 45],
        ["Wrist release", "Glide along the wrist crease to finish.", 45],
      ],
    },
    stomach: {
      goalTitle: "Better Digestion",
      routineTitle: "Abdomen & Hand Meridian Massage",
      routineCopy: "Gentle clockwise care for daily digestive balance.",
      planCopy: "A soft routine for abdominal comfort and daily balance.",
      expectedChange: "After this routine, you may feel a softer abdomen, warmer hands, and a more settled post-meal rhythm.",
      steps: [
        ["Warm palms", "Rub your palms together until they feel warm.", 30],
        ["Clockwise abdomen", "Massage your abdomen clockwise with gentle pressure.", 75],
        ["Palm center", "Press the center of the palm in slow circles.", 45],
        ["Below knee point", "Press below the knee with comfortable pressure.", 60],
      ],
    },
    liver: {
      goalTitle: "Improve Circulation",
      routineTitle: "Hand & Foot Circulation Massage",
      routineCopy: "Designed to support warmth in hands and feet.",
      planCopy: "A warming routine focused on hand, wrist, and foot points.",
      expectedChange: "After this routine, you may feel warmer fingertips, lighter limbs, and a steadier sense of circulation.",
      steps: [
        ["Palm warm-up", "Rub the center of the palm with firm slow circles.", 45],
        ["Wrist flow", "Glide along the wrist crease toward the thumb side.", 60],
        ["Fingertips", "Massage each fingertip until it feels warm.", 45],
        ["Foot center", "Press the center of the foot with steady pressure.", 60],
      ],
    },
    default: null,
  },
  zh: {
    sleep: {
      goalTitle: "改善睡眠",
      routineTitle: "头颈经络按摩",
      routineCopy: "帮助晚间放松，进入更安稳的休息节奏。",
      planCopy: "通过头颈轻柔放松，帮助进入晚间休息状态。",
      expectedChange: "完成这套练习后，你可能会感觉颈部更松、呼吸更慢，也更容易进入休息状态。",
      steps: [
        ["太阳穴画圈", "用缓慢画圈的方式轻揉两侧太阳穴。", 45],
        ["颈侧点位", "轻按颈侧点位，并保持缓慢呼吸。", 60],
        ["耳后放松", "从耳后向下轻推至下颌附近。", 45],
        ["腕部安神点", "按住内侧腕部点位，放松肩膀。", 60],
      ],
    },
    fatigue: {
      goalTitle: "提升精力",
      routineTitle: "肩部与掌心经络按摩",
      routineCopy: "帮助疲劳时完成轻量恢复。",
      planCopy: "通过肩部、掌心与腕部点位，帮助完成日常恢复。",
      expectedChange: "完成这套练习后，你可能会感觉手部更温暖、肩部更轻，白天精力更清晰。",
      steps: [
        ["肩部轻拍", "轻拍并揉按双侧肩部上方。", 45],
        ["掌心按揉", "用稳定画圈的方式按揉掌心。", 60],
        ["腕横纹放松", "沿腕部横纹轻柔推按。", 45],
        ["指尖牵拉", "轻轻牵拉每根手指完成放松。", 60],
      ],
    },
    stress: {
      goalTitle: "减轻压力",
      routineTitle: "掌心舒压经络按摩",
      routineCopy: "配合呼吸，帮助身心慢下来。",
      planCopy: "通过掌心与腕部点位，帮助释放日常紧张。",
      expectedChange: "完成这套练习后，你可能会感觉呼吸更稳、掌心更松，上半身紧张感有所减轻。",
      steps: [
        ["掌心安定", "按住掌心，同时做三次缓慢呼吸。", 60],
        ["内腕点位", "用稳定力度按住内侧腕部点位。", 60],
        ["虎口放松", "按揉拇指和食指之间的柔软区域。", 45],
        ["指尖释放", "轻柔按摩每个指尖。", 45],
      ],
    },
    neck: {
      goalTitle: "颈肩舒缓",
      routineTitle: "颈肩经络按摩",
      routineCopy: "针对久坐后的颈肩紧绷。",
      planCopy: "针对颈肩紧绷进行日常放松按摩。",
      expectedChange: "完成这套练习后，你可能会感觉肩部沉重感减轻，颈部活动更轻松，上背部更舒展。",
      steps: [
        ["颈侧点位", "沿颈侧用轻柔画圈方式按揉。", 60],
        ["肩井放松", "缓慢揉按肩部上方紧绷点。", 60],
        ["枕骨下方", "用双拇指轻按后脑勺下方。", 45],
        ["腕部释放", "沿腕部横纹轻推收尾。", 45],
      ],
    },
    stomach: {
      goalTitle: "改善消化",
      routineTitle: "腹部与手部经络按摩",
      routineCopy: "轻柔顺时针护理，支持日常平衡。",
      planCopy: "通过腹部经络轻柔护理，支持日常舒适与平衡。",
      expectedChange: "完成这套练习后，你可能会感觉腹部更柔软、手心更温暖，餐后节奏更稳定。",
      steps: [
        ["温热掌心", "双手相互搓热。", 30],
        ["顺时针揉腹", "顺时针轻柔按摩腹部。", 75],
        ["掌心按揉", "用缓慢画圈的方式按揉掌心。", 45],
        ["膝下点位", "用舒适力度按揉膝下点位。", 60],
      ],
    },
    liver: {
      goalTitle: "改善循环",
      routineTitle: "手足循环经络按摩",
      routineCopy: "帮助支持手脚温暖与循环感。",
      planCopy: "聚焦手部、腕部与足部点位的温和循环练习。",
      expectedChange: "完成这套练习后，你可能会感觉指尖更温暖、四肢更轻，循环感更稳定。",
      steps: [
        ["掌心预热", "用稳定画圈的方式按揉掌心。", 45],
        ["腕部流动", "沿腕部横纹向拇指侧轻推。", 60],
        ["指尖温暖", "逐一按揉每个指尖，直到微微发热。", 45],
        ["足心点位", "用稳定力度按压足心。", 60],
      ],
    },
    default: null,
  },
};

planContentByLanguage.en.default = planContentByLanguage.en.sleep;
planContentByLanguage.zh.default = planContentByLanguage.zh.sleep;

const syncedPurposeFocusByLanguage = window.spreadsheetPurposeFocusByLanguage || purposeFocusByLanguage;
const syncedStatusQuestionsByLanguage = window.spreadsheetStatusQuestionsByLanguage || statusQuestionsByLanguage;
const syncedPlanContentByLanguage = window.spreadsheetPlanContentByLanguage || planContentByLanguage;

const relatedPlanByPurpose = {
  sleep: "stress",
  fatigue: "liver",
  stress: "sleep",
  neck: "fatigue",
  stomach: "liver",
  liver: "fatigue",
  eye: "neck",
  default: "stress",
};

const explorePurposeOrder = ["sleep", "fatigue", "stress", "neck", "stomach", "liver", "eye"];

const relatedPlanReasonByLanguage = {
  en: {
    sleep: "Your current routine focuses on evening recovery. This plan adds a short calming reset for daytime tension.",
    fatigue: "Your current routine supports daytime energy. This plan adds hand and foot work to support a warmer, steadier feeling.",
    stress: "Your current routine calms tension. This plan supports a softer evening wind-down when stress affects rest.",
    neck: "Your current routine focuses on neck and shoulder tightness. This plan adds a light energy reset for tired upper-body areas.",
    stomach: "Your current routine supports digestive comfort. This plan adds gentle circulation work for hands and feet.",
    liver: "Your current routine supports warmth and circulation. This plan adds a short shoulder and palm reset for low energy.",
    eye: "Your current routine supports eye comfort. This plan adds neck and shoulder release for screen-related tension.",
    default: "Picked to support your current routine with a related self-care focus.",
  },
  zh: {
    sleep: "你当前的计划偏向晚间恢复。这个计划会补充白天紧张时的轻量舒缓。",
    fatigue: "你当前的计划偏向提升精力。这个计划会补充手足循环练习，帮助身体更温暖稳定。",
    stress: "你当前的计划偏向舒压。这个计划会补充晚间放松，帮助压力影响休息时更好过渡。",
    neck: "你当前的计划偏向颈肩紧绷。这个计划会补充肩部与掌心的轻量恢复。",
    stomach: "你当前的计划偏向消化舒适。这个计划会补充手足循环方向的轻柔练习。",
    liver: "你当前的计划偏向循环与温暖感。这个计划会补充肩部与掌心的精力恢复。",
    eye: "你当前的计划偏向眼部舒适。这个计划会补充颈肩释放，适合久看屏幕后放松。",
    default: "根据你当前的打卡计划，推荐一个相关的自我养护方向。",
  },
};

const exploreRecommendationsByLanguage = {
  en: {
    sleep: {
      primary: { purpose: "stress", title: "Evening Stress Reset", meta: "3 min · Hands & wrist" },
      secondary: { purpose: "neck", title: "After-Screen Neck Relief", meta: "3 min · Neck & shoulders" },
      tea: {
        title: "Evening Wind-Down Tea",
        meta: "After dinner · 3 ingredients",
        label: "A warm pairing for your sleep routine",
        copy: "A simple after-dinner tea for a gentler evening rhythm.",
        time: "After dinner, 1–2 hours before bed",
        intention: "Traditionally enjoyed as a gentle way to support a calmer evening routine.",
        ingredients: ["Dried jujube · 2 pieces", "Goji berries · 8–10 pieces", "Chrysanthemum · 3–5 flowers"],
      },
    },
    fatigue: {
      primary: { purpose: "liver", title: "Warm Hands & Feet", meta: "3 min · Hands & feet" },
      secondary: { purpose: "neck", title: "Midday Shoulder Reset", meta: "3 min · Neck & shoulders" },
      tea: {
        title: "Gentle Energy Tea",
        meta: "Late morning · 3 ingredients",
        label: "A bright pairing for your energy routine",
        copy: "A light, warm tea to pair with your midday self-care break.",
        time: "Late morning or early afternoon",
        intention: "Traditionally enjoyed to complement an active daytime wellness routine.",
        ingredients: ["Dried jujube · 2 pieces", "Goji berries · 8–10 pieces", "Fresh ginger · 2 slices"],
      },
    },
    stress: {
      primary: { purpose: "sleep", title: "Evening Head & Neck Release", meta: "3 min · Head & neck" },
      secondary: { purpose: "neck", title: "Desk Shoulder Reset", meta: "3 min · Neck & shoulders" },
      tea: {
        title: "Calm Moment Tea",
        meta: "Late afternoon · 3 ingredients",
        label: "A gentle pairing for your calming routine",
        copy: "A mild floral tea for a quiet pause later in the day.",
        time: "Late afternoon or after dinner",
        intention: "Traditionally enjoyed as part of a slower, more settled daily rhythm.",
        ingredients: ["Chrysanthemum · 3–5 flowers", "Goji berries · 8 pieces", "Dried jujube · 1 piece"],
      },
    },
    neck: {
      primary: { purpose: "fatigue", title: "Shoulder & Palm Reset", meta: "3 min · Shoulders & hands" },
      secondary: { purpose: "stress", title: "Palm & Wrist Calm", meta: "3 min · Hands & wrist" },
      tea: {
        title: "Warm Comfort Tea",
        meta: "After work · 3 ingredients",
        label: "A warm pairing for your neck and shoulder routine",
        copy: "A simple warming tea to enjoy after desk time.",
        time: "After work or early evening",
        intention: "Traditionally enjoyed alongside gentle warmth and relaxation practices.",
        ingredients: ["Fresh ginger · 2 slices", "Dried jujube · 2 pieces", "Goji berries · 8 pieces"],
      },
    },
    stomach: {
      primary: { purpose: "liver", title: "Warm Hands & Feet", meta: "3 min · Hands & feet" },
      secondary: { purpose: "stress", title: "After-Meal Palm Calm", meta: "3 min · Hands & wrist" },
      tea: {
        title: "After-Meal Comfort Tea",
        meta: "After meals · 3 ingredients",
        label: "A warm pairing for your digestion routine",
        copy: "A light tea designed for a calm pause after meals.",
        time: "About 30–60 minutes after a meal",
        intention: "Traditionally enjoyed to complement a comfortable after-meal routine.",
        ingredients: ["Dried tangerine peel · 1 small piece", "Roasted barley · 1 teaspoon", "Fresh ginger · 1 slice"],
      },
    },
    liver: {
      primary: { purpose: "fatigue", title: "Shoulder & Palm Reset", meta: "3 min · Shoulders & hands" },
      secondary: { purpose: "stomach", title: "After-Meal Comfort", meta: "3 min · Abdomen & hands" },
      tea: {
        title: "Daily Circulation Tea",
        meta: "Midday · 3 ingredients",
        label: "A light pairing for your circulation routine",
        copy: "A warm everyday tea to accompany your hand and foot massage.",
        time: "Late morning or midday",
        intention: "Traditionally enjoyed as part of a warm and active daily self-care routine.",
        ingredients: ["Rose buds · 3–5 buds", "Goji berries · 8 pieces", "Dried jujube · 1 piece"],
      },
    },
    eye: {
      primary: { purpose: "neck", title: "After-Screen Neck Relief", meta: "3 min · Neck & shoulders" },
      secondary: { purpose: "stress", title: "Palm & Wrist Calm", meta: "3 min · Hands & wrist" },
      tea: {
        title: "Screen Break Tea",
        meta: "Afternoon · 3 ingredients",
        label: "A light pairing for your screen-break routine",
        copy: "A mild floral tea for a restorative pause away from screens.",
        time: "Mid-afternoon during a screen break",
        intention: "Traditionally enjoyed as part of a refreshing daytime pause.",
        ingredients: ["Chrysanthemum · 3–5 flowers", "Goji berries · 8 pieces", "Dried mint · 3–4 leaves"],
      },
    },
  },
  zh: {
    sleep: {
      primary: { purpose: "stress", title: "晚间舒压按摩", meta: "3 分钟 · 手部与腕部" },
      secondary: { purpose: "neck", title: "屏幕后颈肩放松", meta: "3 分钟 · 颈肩" },
      tea: { title: "晚间舒缓茶", meta: "晚餐后 · 3 种材料", label: "与你的睡眠计划搭配", copy: "适合晚餐后饮用的温和茶饮，为晚间节奏增加一段放松时间。", time: "晚餐后、睡前 1–2 小时", intention: "传统养护中常作为晚间舒缓节奏的一部分。", ingredients: ["红枣 · 2 颗", "枸杞 · 8–10 粒", "菊花 · 3–5 朵"] },
    },
    fatigue: {
      primary: { purpose: "liver", title: "手足温暖按摩", meta: "3 分钟 · 手部与足部" },
      secondary: { purpose: "neck", title: "午间肩颈重置", meta: "3 分钟 · 颈肩" },
      tea: { title: "日间元气茶", meta: "上午 · 3 种材料", label: "与你的精力计划搭配", copy: "适合在日间休息时饮用的一杯温热茶饮。", time: "上午稍晚或午后早些时候", intention: "传统养护中常用于搭配积极、温暖的日间节奏。", ingredients: ["红枣 · 2 颗", "枸杞 · 8–10 粒", "生姜 · 2 片"] },
    },
    stress: {
      primary: { purpose: "sleep", title: "晚间头颈放松", meta: "3 分钟 · 头颈" },
      secondary: { purpose: "neck", title: "久坐肩颈重置", meta: "3 分钟 · 颈肩" },
      tea: { title: "静心舒缓茶", meta: "午后 · 3 种材料", label: "与你的舒压计划搭配", copy: "适合在一天后半段短暂休息时饮用的温和花茶。", time: "午后或晚餐后", intention: "传统养护中常用于搭配更从容、安定的日常节奏。", ingredients: ["菊花 · 3–5 朵", "枸杞 · 8 粒", "红枣 · 1 颗"] },
    },
    neck: {
      primary: { purpose: "fatigue", title: "肩部掌心重置", meta: "3 分钟 · 肩部与手部" },
      secondary: { purpose: "stress", title: "掌心腕部舒缓", meta: "3 分钟 · 手部与腕部" },
      tea: { title: "温暖舒适茶", meta: "下班后 · 3 种材料", label: "与你的颈肩计划搭配", copy: "适合久坐工作后饮用的一杯简单温热茶饮。", time: "下班后或傍晚", intention: "传统养护中常用于搭配温暖与放松的日常练习。", ingredients: ["生姜 · 2 片", "红枣 · 2 颗", "枸杞 · 8 粒"] },
    },
    stomach: {
      primary: { purpose: "liver", title: "手足温暖按摩", meta: "3 分钟 · 手部与足部" },
      secondary: { purpose: "stress", title: "餐后掌心舒缓", meta: "3 分钟 · 手部与腕部" },
      tea: { title: "餐后舒适茶", meta: "餐后 · 3 种材料", label: "与你的消化计划搭配", copy: "适合在餐后安静休息时饮用的一杯清淡茶饮。", time: "餐后约 30–60 分钟", intention: "传统养护中常用于搭配更舒适的餐后节奏。", ingredients: ["陈皮 · 1 小片", "炒麦芽 · 1 茶匙", "生姜 · 1 片"] },
    },
    liver: {
      primary: { purpose: "fatigue", title: "肩部掌心重置", meta: "3 分钟 · 肩部与手部" },
      secondary: { purpose: "stomach", title: "餐后轻柔舒缓", meta: "3 分钟 · 腹部与手部" },
      tea: { title: "日常温养茶", meta: "午间 · 3 种材料", label: "与你的循环计划搭配", copy: "适合搭配手足按摩的一杯日常温热茶饮。", time: "上午稍晚或中午", intention: "传统养护中常用于搭配温暖、活跃的日常自我照顾。", ingredients: ["玫瑰花 · 3–5 朵", "枸杞 · 8 粒", "红枣 · 1 颗"] },
    },
    eye: {
      primary: { purpose: "neck", title: "屏幕后颈肩放松", meta: "3 分钟 · 颈肩" },
      secondary: { purpose: "stress", title: "掌心腕部舒缓", meta: "3 分钟 · 手部与腕部" },
      tea: { title: "屏幕间歇茶", meta: "午后 · 3 种材料", label: "与你的屏幕休息计划搭配", copy: "适合离开屏幕短暂休息时饮用的一杯清淡花茶。", time: "午后屏幕休息时", intention: "传统养护中常用于搭配清爽的日间休息。", ingredients: ["菊花 · 3–5 朵", "枸杞 · 8 粒", "薄荷叶 · 3–4 片"] },
    },
  },
};

exploreRecommendationsByLanguage.en.default = exploreRecommendationsByLanguage.en.sleep;
exploreRecommendationsByLanguage.zh.default = exploreRecommendationsByLanguage.zh.sleep;

let currentLanguage = "en";
let purposeFocus = syncedPurposeFocusByLanguage.en;
let selectedExplorePurpose = null;
let savedTeaPurpose = null;
const PREP_SECONDS = 3;
let routineTimer = null;
let activeStepIndex = 0;
let remainingSeconds = 60;
let routinePaused = false;
let routinePhase = "massage";
let currentScreen = document.querySelector(".screen.active")?.id || "login";
const screenHistory = [];
let aiGeneratingTimer = null;
let tongueScanTimer = null;
let tonguePermissionAnswered = false;
let tonguePhotoAuthorized = false;
const TONGUE_SCAN_PURPOSE = "fatigue";
const TONGUE_SCAN_STATUS_INDEX = 1;
let todayCheckinCompleted = false;
let lastSharedMilestoneDays = 0;
let lastShareType = "checkin";
const earlierWeeklyCheckins = 0;
let journeyBaseDays = 0;
let completedJourneyCount = 0;

const milestoneDefinitions = [
  {
    days: 1,
    stageClass: "stage-sapling",
    icon: "🌱",
    en: {
      label: "Day 1",
      tree: "Seed Planted",
      title: "🌱 Your Wellness Journey Begins",
      lockedTitle: "Plant your first seed",
      homeTitle: "Seed Planted",
      homeCopy: "You planted your first Wellness Tree today. Every wellness session helps it grow.",
      detailCopy: "You planted your first Wellness Tree and started your long-term wellness journey.",
      insight: "Every wellness session helps your tree grow. Take care of yourself, and your tree will flourish.",
      shareTitle: "🌱 I started my wellness journey today!",
      shareCopy: "I planted my first Wellness Tree today. Every healthy habit helps it grow. Join me and let's grow healthier together.",
      systemCopy: "I started my wellness journey and planted my first Wellness Tree.",
    },
    zh: {
      label: "Day 1",
      tree: "种下种子",
      title: "🌱 健康旅程开始了",
      lockedTitle: "种下第一颗种子",
      homeTitle: "种下种子",
      homeCopy: "你今天种下了第一棵健康树。每一次养生打卡，都会滋养它成长。",
      detailCopy: "你种下了第一棵健康树，也正式开启长期健康旅程。",
      insight: "每一次养生，都会滋养你的健康树。照顾好自己，它也会慢慢长大。",
      shareTitle: "🌱 我今天开始了健康旅程！",
      shareCopy: "我今天种下了第一棵健康树。每一个健康习惯都会让它成长。邀请你一起加入，变得更健康。",
      systemCopy: "我开始了健康旅程，并种下第一棵健康树。",
    },
  },
  {
    days: 3,
    stageClass: "stage-medium",
    icon: "🌿",
    en: {
      label: "3 Days",
      tree: "First Leaves",
      title: "🌿 First Leaves",
      lockedTitle: "Reach 3 days",
      homeTitle: "First Leaves",
      homeCopy: "Small habits create lasting change. Your Wellness Tree has started to grow.",
      detailCopy: "Your first leaves appeared after 3 wellness check-ins.",
      insight: "Small habits create lasting change.",
      shareTitle: "🌿 My Wellness Tree has started to grow!",
      shareCopy: "I completed 3 wellness check-ins and my Wellness Tree has started to grow. Join me and let's keep building healthy habits.",
      systemCopy: "3 wellness check-ins complete · First Leaves unlocked",
    },
    zh: {
      label: "累计 3 天",
      tree: "长出新叶",
      title: "🌿 第一片叶子长出来了",
      lockedTitle: "累计 3 天",
      homeTitle: "长出新叶",
      homeCopy: "微小的习惯，会带来长期改变。你的健康树开始成长了。",
      detailCopy: "累计 3 天养生打卡后，健康树长出了第一片新叶。",
      insight: "微小的习惯，会带来长期改变。",
      shareTitle: "🌿 我的健康树开始成长了！",
      shareCopy: "我已完成 3 天养生打卡，健康树长出了新叶。邀请你一起坚持健康习惯。",
      systemCopy: "累计 3 天养生打卡 · 长出新叶",
    },
  },
  {
    days: 7,
    stageClass: "stage-large",
    icon: "🌳",
    en: {
      label: "7 Days",
      tree: "Young Tree",
      title: "🌳 One Week Stronger",
      lockedTitle: "Reach 7 days",
      homeTitle: "Young Tree",
      homeCopy: "You're building a routine your future self will thank you for.",
      detailCopy: "One full week of wellness sessions helped your tree become a Young Tree.",
      insight: "You're building a routine your future self will thank you for.",
      shareTitle: "🌳 One week stronger!",
      shareCopy: "I completed one week of wellness check-ins. My Wellness Tree is becoming stronger.",
      systemCopy: "7 wellness check-ins complete · Young Tree unlocked",
    },
    zh: {
      label: "累计 7 天",
      tree: "年轻树",
      title: "🌳 坚持一周，状态更稳",
      lockedTitle: "累计 7 天",
      homeTitle: "年轻树",
      homeCopy: "你正在建立一个未来的自己会感谢的健康习惯。",
      detailCopy: "完整坚持一周后，健康树成长为年轻树。",
      insight: "你正在建立一个未来的自己会感谢的健康习惯。",
      shareTitle: "🌳 我坚持健康打卡一周了！",
      shareCopy: "我已经完成一周养生打卡，健康树也变得更强壮了。",
      systemCopy: "累计 7 天养生打卡 · 年轻树已解锁",
    },
  },
  {
    days: 15,
    stageClass: "stage-tree",
    icon: "🌲",
    en: {
      label: "15 Days",
      tree: "Thriving Tree",
      title: "🌲 15 Days of Wellness",
      lockedTitle: "Reach 15 days",
      homeTitle: "Thriving Tree",
      homeCopy: "Consistency is becoming your superpower.",
      detailCopy: "Your Wellness Tree is now thriving after 15 days of steady care.",
      insight: "Consistency is becoming your superpower.",
      shareTitle: "🌲 15 Days of Wellness!",
      shareCopy: "I completed 15 wellness check-ins. Consistency is becoming my superpower.",
      systemCopy: "15 wellness check-ins complete · Thriving Tree unlocked",
    },
    zh: {
      label: "累计 15 天",
      tree: "茁壮树",
      title: "🌲 15 天健康坚持",
      lockedTitle: "累计 15 天",
      homeTitle: "茁壮树",
      homeCopy: "持续坚持，正在成为你的健康力量。",
      detailCopy: "经过 15 天持续照顾，健康树已经进入茁壮成长阶段。",
      insight: "持续坚持，正在成为你的健康力量。",
      shareTitle: "🌲 我已坚持 15 天健康打卡！",
      shareCopy: "我完成了 15 天养生打卡。持续坚持，正在成为我的健康力量。",
      systemCopy: "累计 15 天养生打卡 · 茁壮树已解锁",
    },
  },
  {
    days: 30,
    stageClass: "stage-bloom",
    icon: "🌸",
    en: {
      label: "30 Days",
      tree: "Blooming Tree",
      title: "🌸 One Month of Wellness",
      lockedTitle: "Reach 30 days",
      homeTitle: "Blooming Tree",
      homeCopy: "Your healthy habits are starting to bloom.",
      detailCopy: "After 30 days, your Wellness Tree begins to bloom.",
      insight: "Your healthy habits are starting to bloom.",
      shareTitle: "🌸 One Month of Wellness!",
      shareCopy: "I completed one month of wellness check-ins. My healthy habits are starting to bloom.",
      systemCopy: "30 wellness check-ins complete · Blooming Tree unlocked",
    },
    zh: {
      label: "累计 30 天",
      tree: "开花树",
      title: "🌸 健康打卡满一个月",
      lockedTitle: "累计 30 天",
      homeTitle: "开花树",
      homeCopy: "你的健康习惯，正在慢慢开花。",
      detailCopy: "累计 30 天后，健康树开始进入开花阶段。",
      insight: "你的健康习惯，正在慢慢开花。",
      shareTitle: "🌸 我完成一个月健康打卡了！",
      shareCopy: "我已完成一个月养生打卡。健康习惯，正在慢慢开花。",
      systemCopy: "累计 30 天养生打卡 · 开花树已解锁",
    },
  },
  {
    days: 60,
    stageClass: "stage-fruit",
    icon: "🍎",
    en: {
      label: "60 Days",
      tree: "Fruit Tree",
      title: "🍎 Fruit Tree",
      lockedTitle: "Reach 60 days",
      homeTitle: "Fruit Tree",
      homeCopy: "The care you invested is now bearing fruit.",
      detailCopy: "After 60 days, your Wellness Tree starts bearing fruit.",
      insight: "The care you invested is now bearing fruit.",
      shareTitle: "🍎 My Wellness Tree is now bearing fruit!",
      shareCopy: "I completed 60 wellness check-ins. The care I invested is now bearing fruit.",
      systemCopy: "60 wellness check-ins complete · Fruit Tree unlocked",
    },
    zh: {
      label: "累计 60 天",
      tree: "结果树",
      title: "🍎 健康树结果了",
      lockedTitle: "累计 60 天",
      homeTitle: "结果树",
      homeCopy: "你投入的照顾，正在结出健康成果。",
      detailCopy: "累计 60 天后，健康树开始结果。",
      insight: "你投入的照顾，正在结出健康成果。",
      shareTitle: "🍎 我的健康树结果了！",
      shareCopy: "我已完成 60 天养生打卡。投入的照顾，正在结出健康成果。",
      systemCopy: "累计 60 天养生打卡 · 结果树已解锁",
    },
  },
  {
    days: 100,
    stageClass: "stage-life",
    icon: "🌳✨",
    en: {
      label: "Day 100",
      tree: "Tree of Life",
      title: "🏆 Your Wellness Journey Complete",
      lockedTitle: "Complete your Wellness Journey",
      homeTitle: "Tree of Life",
      homeCopy: "You completed a 100-day Wellness Journey and earned the Tree of Life badge.",
      detailCopy: "Your Wellness Tree has become a Tree of Life.",
      insight: "This tree is a symbol of your dedication, patience, and commitment to your well-being.",
      shareTitle: "🏆 I completed my Wellness Journey!",
      shareCopy: "I completed a 100-day Wellness Journey and grew my Wellness Tree into a Tree of Life.",
      systemCopy: "100-day Wellness Journey complete · Tree of Life earned",
    },
    zh: {
      label: "Day 100",
      tree: "生命树",
      title: "🏆 健康旅程完成",
      lockedTitle: "完成一次健康旅程",
      homeTitle: "生命树",
      homeCopy: "你完成了 100 天健康旅程，并获得生命树勋章。",
      detailCopy: "你的健康树已经成长为生命树。",
      insight: "这棵树象征着你的投入、耐心，以及对自身健康的持续承诺。",
      shareTitle: "🏆 我完成了一次健康旅程！",
      shareCopy: "我完成了 100 天健康旅程，并把健康树养成了生命树。",
      systemCopy: "100 天健康旅程完成 · 获得生命树",
    },
  },
];

const enToZh = {
  "Meridian Care MVP": "经络养护 MVP",
  "Sign in with Apple": "使用 Apple 登录",
  "Set your plan first. Membership appears when AI is ready to generate it.": "先完成计划设定，AI 准备生成方案时再开通会员。",
  "Close": "关闭",
  "Membership": "会员方案",
  "Subscribe to generate your plan and unlock daily guided massage.": "开通后生成专属计划，并解锁每日引导按摩。",
  "Meridian Care Membership": "经络养护会员",
  "Traditional Chinese Medicine meridian theory acupressure": "传统经络理论穴位按摩",
  "Personalized massage plans": "个性化按摩计划",
  "Daily guided massages": "每日引导按摩",
  "Guided meridian massage": "经络按摩指导",
  "Follow GIF demos designed for self-care at home.": "跟随动作演示，在家完成轻量自助护理。",
  "Monthly": "月度会员",
  "$9.90/month": "$9.90/月",
  "Annual": "年度会员",
  "$49.90/year": "$49.90/年",
  "$4.16/month": "$4.16/月",
  "$49.90 billed yearly": "每年 $49.90",
  "3-day free trial": "3 天免费试用",
  "Start membership": "开通会员",
  "Start 3-day free trial": "立即免费体验 3 天",
  "Annual plan includes a 3-day free trial, then renews automatically.": "年度方案含 3 天免费试用，试用结束后自动续订。",
  "Monthly plan renews automatically at $9.90/month.": "月度方案按 $9.90/月自动续订。",
  "Restore Purchase": "恢复购买",
  "Terms": "用户协议",
  "Build a daily routine around your goal, time, and body focus.": "围绕你的目标、时间和身体重点制定每日练习。",
  "Follow guided demos designed for self-care at home.": "跟随动作引导，在家完成轻量自助护理。",
  "Privacy Policy": "隐私条款",
  "Plan Setup · 1/2": "计划定制 · 1/2",
  "Plan Setup · 1/3": "计划定制 · 1/3",
  "Let’s create your wellness plan.": "一起创建你的养生计划。",
  "What would you like to improve most?": "你最想改善什么？",
  "What would you like to focus on first?": "你想优先关注什么？",
  "Choose one primary goal": "选择一个最重要的目标",
  "Improve Sleep": "改善睡眠",
  "Reduce Fatigue": "缓解疲劳",
  "Release Stress": "释放压力",
  "Neck & Shoulder": "颈肩按摩",
  "Digestive Care": "脾胃调养",
  "Liver Care": "肝脏护理",
  "🌙 Better Sleep": "🌙 改善睡眠",
  "⚡ More Energy": "⚡ 提升精力",
  "🧘 Less Stress": "🧘 减轻压力",
  "💆 Neck & Shoulder Relief": "💆 颈肩舒缓",
  "🌿 Better Digestion": "🌿 改善消化",
  "🩸 Improve Circulation": "🩸 改善循环",
  "👁 Eye Care": "👁 眼睛养护",
  "Eye Care": "眼睛养护",
  "Next": "下一步",
  "Plan Setup · 2/2": "计划定制 · 2/2",
  "Plan Setup · 2/3": "计划定制 · 2/3",
  "Current Status": "当前状态",
  "These answers help AI tune your routine.": "这些回答会帮助 AI 更好地调整你的计划。",
  "How was your sleep over the past 7 days?": "过去 7 天你的睡眠质量如何？",
  "Restless most nights": "多数夜晚不安稳",
  "Light sleep": "睡眠偏浅",
  "Mostly steady": "整体还算稳定",
  "How tired have you felt recently?": "最近你的疲劳感更接近哪种？",
  "How has your energy felt recently?": "最近你的精力状态更接近哪种？",
  "Tired all day": "整天都容易累",
  "Low energy after work": "下班后明显没精神",
  "Occasional fatigue": "偶尔疲劳",
  "Low most of the day": "一天大多没精神",
  "Drops after work": "下班后明显下降",
  "What best describes your current stress?": "你目前的压力状态更接近哪种？",
  "Hard to relax": "很难放松下来",
  "Tense during the day": "白天经常紧绷",
  "Mostly manageable": "基本可控",
  "How does your neck and shoulder feel?": "你的颈肩状态更接近哪种？",
  "Very tight": "明显紧绷",
  "Sore after sitting": "久坐后酸胀",
  "Mild stiffness": "轻微僵硬",
  "How has your digestion felt lately?": "最近你的脾胃状态如何？",
  "Often bloated": "经常胀气",
  "Irregular appetite": "食欲不太规律",
  "Mostly stable": "整体稳定",
  "What best matches your current liver-care goal?": "你目前的肝脏护理目标更接近哪种？",
  "How does your circulation feel lately?": "最近你的循环状态更接近哪种？",
  "Feel heavy or tired": "容易沉重疲惫",
  "Support daily balance": "支持日常平衡",
  "Maintain wellness": "保持养护状态",
  "Cold hands or feet": "手脚容易发凉",
  "Tight or heavy limbs": "四肢紧绷沉重",
  "Mostly comfortable": "整体比较舒适",
  "Wellness Settings": "计划设置",
  "Wellness Goal": "养生目标",
  "Suggested massage area": "建议按摩部位",
  "Head & Neck": "头颈",
  "Daily time": "每天花费时间",
  "Default 10 minutes": "默认 10 分钟",
  "Default 5 minutes": "默认 5 分钟",
  "3 min": "3 分钟",
  "5 min": "5 分钟",
  "10 min": "10 分钟",
  "15 min": "15 分钟",
  "Plan Setup · 3/3": "计划定制 · 3/3",
  "Generate plan": "生成计划",
  "AI is creating your personalized wellness check-in plan": "AI 正在为您制定专属养生打卡计划",
  "Analyzing your goal, suggested massage area, and daily time.": "正在分析你的目标、建议按摩部位和每日时间。",
  "Analyzing your goal, current status, and daily time.": "正在分析你的目标、当前状态和每日时间。",
  "AI Generated": "AI 计划已生成",
  "Today’s Plan": "今日计划",
  "Massage": "按摩",
  "Shoulder & Neck Relief": "肩颈放松",
  "Start using": "进入 App",
  "Allow": "允许",
  "Set Up Later": "稍后设置",
  "Home": "首页",
  "Welcome": "欢迎",
  "Kevin": "Kevin",
  "Your Wellness Plan:": "你的养生计划：",
  "Explore": "探索",
  "Picked for your routine": "为你的日常计划挑选",
  "Related plan": "关联计划",
  "Daily reset": "日常重置",
  "Next focus": "下个方向",
  "Less Stress": "减轻压力",
  "More Energy": "提升精力",
  "Neck Relief": "颈肩舒缓",
  "Short support for your day.": "为今天补充一段轻量练习。",
  "Another gentle path to try.": "换一种温和的方式试试看。",
  "Picked to support your current routine.": "根据你当前计划推荐。",
  "Related to your current plan": "与你当前计划相关",
  "Why this plan": "为什么推荐",
  "Your current routine focuses on evening recovery. This plan adds a short calming reset for daytime tension.": "你当前的计划偏向晚间恢复。这个计划会补充白天紧张时的轻量舒缓。",
  "Daily time": "每日时长",
  "Guided routine": "引导练习",
  "4 steps": "4 步",
  "Start check-in": "开始打卡",
  "Replace current plan": "替换现有计划",
  "Better Sleep": "改善睡眠",
  "Head & Neck Meridian Massage": "头颈经络按摩",
  "Designed to support a calmer evening rhythm.": "帮助晚间放松，进入更安稳的休息节奏。",
  "Today": "今天",
  "5 minutes": "5 分钟",
  "Check In Today": "今日打卡",
  "Check In": "打卡",
  "Check In Again": "再次打卡",
  "0 check-ins ›": "0 次打卡 ›",
  "1 check-in ›": "1 次打卡 ›",
  "2 check-ins ›": "2 次打卡 ›",
  "0 days checked in this week": "本周已打卡 0 天",
  "1 days checked in this week": "本周已打卡 1 天",
  "2 days checked in this week": "本周已打卡 2 天",
  "3 days checked in this week": "本周已打卡 3 天",
  "Wellness Sapling": "养生小树苗",
  "Complete your first check-in to receive a wellness sapling.": "完成首日打卡即可获得养生小树苗。",
  "Growing steadily": "正在稳稳长大",
  "Your check-ins are helping this sapling grow. Reach 3 days to unlock your first fruit.": "你的每日打卡正在让小树苗成长。打卡满 3 天即可解锁第一颗果实。",
  "First fruit unlocked": "第一颗果实已解锁",
  "Your steady check-ins helped the sapling bear fruit. Tap the fruit to review this milestone.": "你的稳定打卡让小树苗结出了果实。点击果实可查看这个里程碑。",
  "Milestone Fruit": "里程碑果实",
  "You checked in 3 days this week. Your Better Sleep routine is becoming a real habit.": "你本周已打卡 3 天。你的改善睡眠练习正在慢慢变成习惯。",
  "Keep growing": "继续成长",
  "Not subscribed": "未订阅",
  "View subscription": "查看会员方案",
  "Personal Plan": "个人计划",
  "Completed today": "今日已完成",
  "Today’s plan completed": "今日计划已完成",
  "You completed today’s guided massage. Nice and steady.": "你已完成今日引导按摩，保持得很稳。",
  "View routine": "查看练习",
  "Start check-in": "开始打卡",
  "12 min": "12 分钟",
  "Weekly Wellness Summary": "本周打卡小结",
  "This Week": "本周",
  "View history": "查看历史",
  "Wellness Growth": "养生成长",
  "Milestones": "里程碑",
  "Current stage": "当前阶段",
  "Start your sapling": "开始获得小树苗",
  "Every check-in helps your wellness tree grow. Future shapes stay hidden until you unlock them.": "每一次打卡都会推动养生树成长。未解锁阶段会先保持问号，达成后才会展示真实形态。",
  "First Day": "首日",
  "Complete 1 check-in to unlock.": "完成 1 天打卡后解锁。",
  "No check-ins completed this week yet.": "本周暂未完成打卡。",
  "Share": "分享",
  "Check-in Records": "打卡记录",
  "History": "历史记录",
  "Last Week": "上周",
  "Earlier": "更早",
  "Jun 8": "6月8日",
  "Jun 9": "6月9日",
  "Jun 10": "6月10日",
  "Jun 11": "6月11日",
  "Jun 12": "6月12日",
  "Jun 13": "6月13日",
  "Jun 14": "6月14日",
  "Jun 1": "6月1日",
  "Jun 2": "6月2日",
  "Jun 3": "6月3日",
  "Jun 4": "6月4日",
  "Jun 5": "6月5日",
  "Jun 6": "6月6日",
  "Jun 7": "6月7日",
  "May 26": "5月26日",
  "May 28": "5月28日",
  "May 30": "5月30日",
  "Jun 8 - Jun 14": "6月8日 - 6月14日",
  "Jun 1 - Jun 7": "6月1日 - 6月7日",
  "May 25 - May 31": "5月25日 - 5月31日",
  "2 days checked in this week. Complete today to light up Jun 10.": "本周已打卡 2 天，完成今日打卡即可点亮 6月10日。",
  "3 days checked in this week. Jun 10 is now complete.": "本周已打卡 3 天，6月10日已点亮。",
  "2 check-ins completed this week.": "本周已完成 2 次打卡。",
  "3 check-ins completed this week.": "本周已完成 3 次打卡。",
  "4 check-ins completed.": "已完成 4 次打卡。",
  "3 check-ins completed.": "已完成 3 次打卡。",
  "Continue original plan": "继续原计划打卡",
  "AI will customize your next stage": "AI 将为你的下一阶段定制计划",
  "AI will use your check-in results and these answers to create a new plan.": "AI 会结合打卡结果和本次反馈，为你重新生成新计划。",
  "Has your sleep quality improved?": "你的睡眠质量是否有改善？",
  "Choose one": "选择一项",
  "Clearly improved": "明显改善",
  "Slightly improved": "略有改善",
  "No clear change": "暂无明显变化",
  "What changed most?": "哪方面变化最明显？",
  "Fall asleep faster": "入睡更快",
  "Wake up less often": "夜间醒来减少",
  "Feel better in the morning": "醒后精神更好",
  "Generate and start check-in": "生成并进入打卡",
  "AI Review · Direct to check-in": "AI 复盘 · 直接进入打卡",
  "Streak": "连续",
  "5 days": "5 天",
  "Done": "已完成",
  "7 items": "7 项",
  "5 routines": "5 次",
  "Focus": "重点",
  "Liver": "肝脏",
  "Wellness Trend": "调理趋势",
  "Needs data": "需资料",
  "Upload a pre-care health report screenshot before AI can generate trend comparisons.": "上传开始调理前的体检报告截图后，AI 才会生成趋势对比。",
  "AI is analyzing your health report. Trends such as transaminase indicators will appear after analysis.": "AI 正在分析你的体检报告，完成后将展示转氨酶等指标趋势。",
  "Upload health report screenshot": "上传体检报告截图",
  "Focus on ALT / AST and other transaminase values": "重点查看 ALT / AST 等转氨酶数值",
  "AI analyzing": "AI 分析中",
  "Add baseline data": "添加基准资料",
  "Baseline Data": "基准资料",
  "Upload Report": "上传资料",
  "Back": "返回",
  "Upload a pre-care health report screenshot": "上传开始调理前的体检报告截图",
  "AI will prioritize ALT / AST and other transaminase values for future trend comparison.": "AI 会优先识别 ALT / AST 等转氨酶数值，用于后续趋势对比。",
  "Choose one photo from Library": "从相册选择一张照片",
  "Selected": "已选择",
  "health-report.jpg": "体检报告截图.jpg",
  "Single photo · ready to upload": "单张照片 · 等待上传",
  "Upload and analyze": "上传并分析",
  "Used to select a health report screenshot so AI can create your pre-care baseline.": "用于选择体检报告截图，帮助 AI 建立调理前的基准资料。",
  "Allow Full Access": "允许访问所有照片",
  "Don’t Allow": "不允许",
  "Photos": "照片",
  "Choose Photo": "选择照片",
  "Cancel": "取消",
  "Report": "报告",
  "Record": "记录",
  "Screenshot": "截图",
  "Use This Photo": "选择这张照片",
  "Check-in": "打卡",
  "Retune Plan": "重新定制计划",
  "Locked": "未解锁",
  "Subscribe to view full check-in": "订阅后查看完整打卡",
  "Start membership": "开启会员",
  "Shoulder-Neck Meridian": "肩颈经络",
  "GIF guide · can check in alone": "GIF 引导 · 可单独打卡",
  "Can complete alone": "可单独完成",
  "Massage Check-in": "按摩打卡",
  "Shoulder-Neck Meridian Massage": "肩颈经络按摩",
  "Follow the GIF gently. Stop immediately if you feel discomfort.": "跟随 GIF 轻柔按揉。如有不适，请立即停止。",
  "Step 2 / 6": "第 2 / 6 步",
  "Complete massage check-in": "完成按摩打卡",
  "Massage checked in": "按摩已打卡",
  "Today’s Progress": "今日进度",
  "Content & Consultation": "内容与咨询",
  "Wellness": "养生",
  "Subscribe to view wellness content": "订阅后查看养生内容",
  "Today’s Pick": "今日推荐",
  "Wellness Content": "养生内容",
  "Featured": "精选",
  "Shoulder-neck relief for desk workers": "久坐人群的肩颈放松",
  "3 self-massage points after work": "3 个适合下班后的自助按摩点",
  "AI Consultation": "AI 咨询",
  "Describe how you feel today": "描述你今天的状态",
  "Start consultation": "开始咨询",
  "Profile": "设置",
  "Subscription": "订阅情况",
  "Annual member · trial active": "年度会员 · 试用中",
  "Renew or manage": "续订 / 管理",
  "Language": "语言",
  "English": "英文",
  "EN": "EN",
  "V1.0.0": "V1.0.0",
  "AI Meridian Care": "AI 经络养护",
  "Personalized massage care in minutes": "几分钟完成专属按摩养护",
  "Get a simple daily self-massage plan based on your goal, body focus, and routine.": "根据你的目标、身体重点和日常节奏，生成简单的每日自助按摩计划。",
  "Scan your tongue first. AI will create a massage plan from your wellness signal.": "先进行舌苔扫描，AI 将根据你的养护信号生成按摩计划。",
  "AI wellness scan": "AI 养护扫描",
  "Tongue Scan": "舌苔扫描",
  "Set by Questions": "通过问答设置",
  "Align your tongue inside the guide. AI will scan it and create the most suitable massage plan.": "将舌头对准引导区域，AI 会完成扫描并创建最合适的按摩计划。",
  "Camera access is required before taking a photo.": "需要先授权手机相机权限后才能进行拍照。",
  "Allow Camera Access": "授权手机相机权限",
  "Camera ready": "相机已就绪",
  "Scanning...": "扫描中...",
  "Capture": "点击拍照",
  "AI is scanning your photo and creating your wellness plan": "AI 正在扫描照片并生成养生计划",
  "Tongue analysis is based on traditional wellness principles and is intended for self-care guidance only. It does not diagnose, treat, or replace medical advice.": "舌象分析基于传统养护理念，仅用于自我养护参考，不用于诊断、治疗，也不能替代专业医疗建议。",
  "“Meridian Care” Would Like to Access the Camera": "“经络养护”想访问你的相机",
  "Camera access is used to scan your tongue photo and create your wellness massage plan.": "相机权限用于拍摄舌苔照片，并生成你的养生按摩计划。",
  "AI Scan": "AI 扫描",
  "Your wellness plan is ready": "你的养生计划已生成",
  "About this scan": "关于本次扫描",
  "Scan result": "扫描结果",
  "Tongue signals found": "发现舌象信号",
  "Red tongue tip": "舌尖偏红",
  "Thick coating": "舌苔厚腻",
  "Clear teeth marks": "齿痕明显",
  "These signals may suggest a sense of body heaviness and inner restlessness. AI recommends an energy reset acupoint massage plan to support daily relaxation and circulation.": "这些舌象信号可能与身体沉重感、内在烦闷感有关。AI 建议进行一套精力重置穴位按摩计划，帮助日常放松并支持循环感。",
  "Massage point plan": "穴位按摩计划",
  "Subscribe to reveal exact points": "订阅后查看具体穴位",
  "Head": "头部",
  "Baihui": "百会",
  "Hands": "手部",
  "Hegu": "合谷",
  "Lower legs": "小腿",
  "Zusanli": "足三里",
  "Subscribe now for daily check-ins and exact massage points.": "立即订阅，每日打卡，查看具体按摩穴位。",
  "Start Now": "立即开始",
  "Get your AI massage plan": "生成你的 AI 按摩计划",
  "Personalized massage plan": "个性化按摩计划",
  "Build a daily routine around your goal, time, and body focus.": "围绕你的目标、时间和身体重点制定每日练习。",
  "Progress insights": "进度记录",
  "Track your routine, streak, and weekly progress in one place.": "在首页查看练习、连续完成和本周进度。",
  "Retune Plan": "重新定制",
  "Hand guide · 4 steps": "手部引导 · 4 步",
  "Guided massage steps and highlighted meridian points will appear here.": "这里会显示按摩步骤和高亮经络点。",
  "Today’s Check-in": "今日打卡",
  "Expected change": "预期变化",
  "After this routine, you may feel lighter in the neck and shoulders, calmer breathing, and a steadier evening rhythm.": "完成这套练习后，你可能会感觉颈肩更轻松、呼吸更平稳，晚间节奏也更安定。",
  "This routine is complete. Repeat it if you want the same gentle reset again today.": "今日练习已完成。如需再次放松，可以再练一次。",
  "Today’s check-in completed": "今日打卡已完成",
  "You can repeat today’s routine anytime.": "你可以随时再练一次今天的内容。",
  "Practice again": "再练一次",
  "4 guided steps · tap the timer anytime to pause.": "4 个引导步骤 · 点击计时器可暂停。",
  "Start check-in": "开始打卡",
  "Gentle head and neck release for evening relaxation.": "通过头颈轻柔放松，帮助进入晚间休息状态。",
  "Shoulder and neck release to reset daily tension.": "通过肩颈放松，缓解日常紧绷感。",
  "Gentle abdominal meridian care for daily balance.": "通过腹部经络轻柔护理，支持日常平衡。",
  "Hands and feet massage to support warmth and circulation.": "通过手足按摩，辅助温暖与循环。",
  "Abdominal and leg massage for a light daily reset.": "通过腹部与腿部按摩，完成轻量日常调理。",
  "Meridian Massage Plan": "经络按摩计划",
  "Guided meridian points for your daily self-massage routine.": "每日自助按摩的经络穴位引导。",
  "Foot reflex massage and shoulder-neck release, about 10 min daily.": "足部反射区按摩 + 肩颈放松，每天约 10 分钟。",
  "Today": "今日",
  "Focus": "重点",
  "AI suggested areas": "AI 建议部位",
  "“Meridian Care” Would Like to Send You Notifications": "“经络养护”想给你发送通知",
  "Notifications may include daily massage reminders and plan progress updates.": "用于提醒每日按摩练习和计划进度。",
  "Subscribe to unlock your plan": "开通后解锁你的计划",
  "You can browse first. Guided routines, AI plans, and weekly summaries unlock after subscription.": "你可以先浏览界面。开通后解锁动作引导、AI 计划和本周小结。",
  "Subscribe to start daily check-ins": "订阅 App，立即开始每日打卡",
  "Your plan is ready. Subscribe to unlock guided massage and begin today’s check-in.": "你的计划已准备好。订阅后即可解锁按摩引导，并开始今日打卡。",
  "Your wellness plan is ready. Subscribe to unlock daily guided massages.": "你的养护计划已准备好。订阅后即可解锁每日引导按摩。",
  "Subscribe now": "立即订阅",
  "Remake Plan": "重新制定计划",
  "Subscribe": "订阅",
  "Retune plan": "重新制定计划",
  "Complete today’s 10-minute guided massage.": "完成今天 10 分钟引导按摩。",
  "Start routine": "开始打卡",
  "Today’s Routine": "今日练习",
  "10 min": "10 分钟",
  "Your evening routine is most consistent. Keep today’s session light and steady.": "你的晚间练习最稳定。今天保持轻柔、稳定即可。",
  "Today’s check-in is complete. Your weekly progress has been updated.": "今日打卡已完成，本周进度已更新。",
  "“Meridian Care” Would Like to Access Your Photos": "“经络养护”想访问你的照片",
  "Lab": "化验",
  "Daily Routine": "每日练习",
  "Subscribe to view your routine": "开通后查看你的练习",
  "No active plan": "暂无可用计划",
  "Your check-in is waiting": "你的打卡内容待解锁",
  "Subscribe to unlock the hand guide, timer, and highlighted meridian points.": "订阅后解锁手部引导、倒计时和经络点高亮。",
  "Subscribe to check in": "订阅并开始打卡",
  "Guided massage steps and GIF demos will appear here.": "这里会显示按摩步骤和 GIF 演示。",
  "Guided Routine": "按摩引导",
  "Hand Meridian Reset": "手部经络放松",
  "01:00": "01:00",
  "01:30": "01:30",
  "Step 1 / 4": "第 1 / 4 步",
  "Step 2 / 4": "第 2 / 4 步",
  "Step 3 / 4": "第 3 / 4 步",
  "Step 4 / 4": "第 4 / 4 步",
  "Ready": "准备",
  "Get ready for this massage point.": "请准备按摩当前点位。",
  "Press the thumb base with slow circles.": "在拇指根部缓慢画圈按揉。",
  "Glide along the center palm line.": "沿掌心中线轻柔推按。",
  "Hold the wrist point and breathe slowly.": "按住腕部点位并缓慢呼吸。",
  "Massage each fingertip with light pressure.": "用轻压力揉按每个指尖。",
  "Thumb base": "拇指根部",
  "Palm line": "掌心线",
  "Wrist point": "腕部点位",
  "Fingertips": "指尖",
  "Complete check-in": "完成本次打卡",
  "Check-in complete": "打卡完成",
  "1 routine": "1 组练习",
  "Massage education and AI consultation will appear here.": "这里会提供按摩知识和 AI 咨询入口。",
  "No content yet": "暂无内容",
  "Wellness content is locked": "养生内容待解锁",
  "Subscribe to unlock massage education and AI suggestions.": "订阅后解锁按摩知识和 AI 建议。",
  "Release Tension Gently": "轻柔释放紧绷",
  "Start with light pressure around the neck, shoulders, and feet.": "从颈部、肩部和足部的轻压力开始。",
  "Neck tension after long desk hours": "久坐后的颈部紧绷",
  "Simple pressure points to relax tight areas": "用简单按压点放松紧绷部位",
  "N": "颈",
  "Share sleep, stress, soreness, or energy level, and AI will suggest a massage routine.": "描述睡眠、压力、酸痛或精力状态，AI 会建议对应按摩练习。",
  "Meridian Care User": "经络养护用户",
  "AI massage plans, guided routines, and weekly summaries are unlocked.": "已解锁 AI 按摩计划、动作引导和本周小结。",
  "Subscribe to generate your personal massage plan.": "开通后生成你的专属按摩计划。",
  "M": "按",
  "About Us": "关于我们",
  "Share App": "分享 App",
  "Invite friends": "邀请朋友",
  "Share Check-in": "打卡分享",
  "Invite a friend to check in with you": "邀请朋友一起打卡",
  "You have completed 3 check-ins this week and unlocked your first wellness fruit.": "你本周已完成 3 次打卡，并解锁了第一颗养生果实。",
  "days this week": "本周天数",
  "fruit unlocked": "果实已解锁",
  "Instagram": "Instagram",
  "TikTok": "TikTok",
  "More": "更多",
  "Share your steady progress and invite friends to join Meridian Care.": "分享你的坚持，邀请朋友一起加入 Meridian Care。",
  "Instagram story is ready to share.": "Instagram 分享内容已准备好。",
  "TikTok post is ready to share.": "TikTok 分享内容已准备好。",
  "Share Meridian Care": "分享 Meridian Care",
  "Meridian Care": "Meridian Care",
  "Build a gentle daily meridian massage habit.": "建立温和的每日经络按摩习惯。",
  "Your check-in progress": "你的打卡进度",
  "3 check-ins this week · first wellness fruit unlocked": "本周 3 次打卡 · 第一颗养生果实已解锁",
  "Messages": "信息",
  "Mail": "邮件",
  "Copy Link": "复制链接",
  "View": "查看",
  "Delete Account": "注销账号",
  "Permanent": "永久删除",
  "Account Deletion": "账号注销",
  "Delete your account?": "确认注销账号？",
  "This will permanently delete your account, personal plan, check-in history, and saved preferences. Active subscriptions should still be managed through the App Store.": "这将永久删除你的账号、个人计划、打卡记录和偏好设置。有效订阅仍需前往 App Store 管理。",
  "Cancel": "取消",
  "Delete account": "注销账号",
  "Log Out": "退出登录",
  "Back to login": "返回登录",
  "Complements your plan": "补充你的当前计划",
  "Why it fits": "推荐理由",
  "Duration": "时长",
  "Acupoints": "穴位",
  "Tea pairing": "搭配茶饮",
  "A warm pairing for your routine": "与你的当前计划搭配",
  "Best time": "建议饮用时间",
  "Traditional wellness intention": "传统养护用途",
  "What you need": "所需材料",
  "How to prepare": "冲泡方法",
  "Save Tea Plan": "保存茶饮方案",
  "Tea Plan Saved": "已保存茶饮方案",
  "Tea suggestions are based on traditional wellness principles for daily self-care only. They are not medical advice.": "茶饮建议基于传统养护理念，仅用于日常自我照顾，不构成医疗建议。",
};

const zhToEn = Object.fromEntries(Object.entries(enToZh).map(([en, zh]) => [zh, en]));

const appScreens = new Set(["today", "explore-plan-detail", "tea-plan-detail"]);
const onboardingScreens = new Set([
  "login",
  "tongue-care",
  "tongue-report",
  "subscribe",
  "plan-step-1",
  "plan-step-2",
  "plan-step-3",
  "ai-generating",
  "plan-result",
  "explore-plan-detail",
  "tea-plan-detail",
  "checkin-history",
]);

function setMode(mode) {
  app.classList.remove("is-subscribed", "is-unsubscribed");
  app.classList.add(mode === "subscribed" ? "is-subscribed" : "is-unsubscribed");
}

function translateTextNodes(targetLanguage) {
  const dictionary = targetLanguage === "zh" ? enToZh : zhToEn;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const text = node.nodeValue.trim();

    if (!text || !dictionary[text]) {
      return;
    }

    node.nodeValue = node.nodeValue.replace(text, dictionary[text]);
  });
}

function refreshSelectedFocus() {
  const purpose = getSelectedPurpose();
  const [title, copy, massage] = purposeFocus[purpose] || purposeFocus.default;

  focusTitle.textContent = title;
  focusCopy.textContent = copy;
  massageTarget.textContent = massage;
}

function getSelectedPurpose() {
  return document.querySelector(".feedback-chip.active")?.dataset.purpose || "default";
}

function setPlanFromTongueScan() {
  const targetButton = document.querySelector(`.feedback-chip[data-purpose="${TONGUE_SCAN_PURPOSE}"]`);
  if (targetButton) {
    document.querySelectorAll(".feedback-chip").forEach((button) => {
      button.classList.toggle("active", button === targetButton);
    });
  }

  const [title, copy, massage] = purposeFocus[TONGUE_SCAN_PURPOSE] || purposeFocus.default;
  if (focusTitle) focusTitle.textContent = title;
  if (focusCopy) focusCopy.textContent = copy;
  if (massageTarget) massageTarget.textContent = massage;
  renderStatusOptions(TONGUE_SCAN_PURPOSE);

  const statusButtons = Array.from(statusOptions?.querySelectorAll("button") || []);
  statusButtons.forEach((button, index) => {
    button.classList.toggle("active", index === TONGUE_SCAN_STATUS_INDEX);
  });

  todayCheckinCompleted = false;
  lastSharedMilestoneDays = 0;
  updateTodayCompletionState();
}

function getSelectedDurationLabel() {
  const selected = document.querySelector(".time-options .selected");
  const fallback = currentLanguage === "zh" ? "5 分钟" : "5 minutes";
  const raw = selected?.textContent.trim();

  if (!raw) {
    return fallback;
  }

  const minutes = raw.match(/\d+/)?.[0] || "5";
  return currentLanguage === "zh" ? `${minutes} 分钟` : `${minutes} minutes`;
}

function getSelectedDurationMinutes() {
  const selected = document.querySelector(".time-options .selected");
  return selected?.textContent.match(/\d+/)?.[0] || "5";
}

function getSelectedStatusIndex() {
  const options = Array.from(statusOptions?.querySelectorAll("button") || []);
  const selected = options.findIndex((button) => button.classList.contains("active"));
  return Math.max(0, selected);
}

function getCurrentPlanContent() {
  const purpose = getSelectedPurpose();
  const base = syncedPlanContentByLanguage[currentLanguage][purpose] || syncedPlanContentByLanguage[currentLanguage].default;

  if (!base?.statuses?.length) {
    return base;
  }

  const status = base.statuses[getSelectedStatusIndex()] || base.statuses[0];
  const duration = getSelectedDurationMinutes();
  const steps = status.plans[duration] || status.plans["5"] || status.plans["3"] || [];

  return {
    ...base,
    statusLabel: status.label,
    steps,
  };
}

function getPlanContentForPurpose(purpose) {
  const base = syncedPlanContentByLanguage[currentLanguage][purpose] || syncedPlanContentByLanguage[currentLanguage].default;

  if (!base?.statuses?.length) {
    return base;
  }

  const status = base.statuses[getSelectedStatusIndex()] || base.statuses[0];
  const duration = getSelectedDurationMinutes();
  const steps = status.plans[duration] || status.plans["5"] || status.plans["3"] || [];

  return {
    ...base,
    statusLabel: status.label,
    steps,
  };
}

function getSupplementalPlanContent(purpose) {
  const base = syncedPlanContentByLanguage[currentLanguage][purpose] || syncedPlanContentByLanguage[currentLanguage].default;

  if (!base?.statuses?.length) {
    return base;
  }

  const status = base.statuses[getSelectedStatusIndex()] || base.statuses[0];
  const steps = status.plans["3"] || status.plans["5"] || [];

  return {
    ...base,
    statusLabel: status.label,
    steps,
  };
}

function getRelatedPurpose() {
  const currentPurpose = getSelectedPurpose();
  const related = selectedExplorePurpose || relatedPlanByPurpose[currentPurpose] || relatedPlanByPurpose.default;

  return related === currentPurpose ? relatedPlanByPurpose.default : related;
}

function getExplorePurposes() {
  const currentPurpose = getSelectedPurpose();
  const primary = relatedPlanByPurpose[currentPurpose] || relatedPlanByPurpose.default;
  const candidates = [primary, ...explorePurposeOrder].filter((purpose) => purpose !== currentPurpose);

  return [...new Set(candidates)].slice(0, 3);
}

function getExploreRecommendation(purpose = getSelectedPurpose()) {
  return exploreRecommendationsByLanguage[currentLanguage][purpose] || exploreRecommendationsByLanguage[currentLanguage].default;
}

const acupointVisualByCode = {
  "EX-HN3": { kind: "head", x: 60, y: 45 },
  "EX-HN5": { kind: "eye", x: 87, y: 51 },
  GV20: { kind: "head", x: 60, y: 19 },
  TF4: { kind: "ear", x: 57, y: 48 },
  GB20: { kind: "head", x: 43, y: 77 },
  BL10: { kind: "head", x: 48, y: 73 },
  HT7: { kind: "wrist", x: 61, y: 77 },
  PC6: { kind: "wrist", x: 60, y: 61 },
  TE5: { kind: "wrist", x: 60, y: 55 },
  LI4: { kind: "hand", x: 65, y: 57 },
  ST36: { kind: "leg", x: 68, y: 48 },
  SP6: { kind: "leg", x: 54, y: 76 },
  KI1: { kind: "foot", x: 62, y: 51 },
  KI6: { kind: "leg", x: 53, y: 84 },
  BL60: { kind: "leg", x: 68, y: 83 },
  LR3: { kind: "foot", x: 58, y: 42 },
  LV3: { kind: "foot", x: 58, y: 42 },
  CV12: { kind: "torso", x: 60, y: 54 },
  SI14: { kind: "torso", x: 77, y: 31 },
  BL2: { kind: "eye", x: 42, y: 40 },
  ST2: { kind: "eye", x: 55, y: 61 },
  TE23: { kind: "eye", x: 84, y: 50 },
};

const acupointDiagramPathByKind = {
  head: "M38 78 C30 68 27 50 31 35 C36 18 47 12 60 12 C77 12 88 24 90 41 C92 57 85 70 76 78 L76 94 M44 78 L44 94 M43 45 Q60 36 77 45",
  ear: "M70 19 C43 8 25 27 27 54 C29 79 49 94 69 79 C79 71 77 61 67 60 C55 60 53 76 42 68 C31 60 35 35 53 31 C67 28 70 39 62 47 C57 52 51 50 49 43",
  eye: "M18 52 Q60 18 102 52 Q60 86 18 52 M28 52 Q60 34 92 52 Q60 70 28 52 M60 43 A9 9 0 1 0 60 61 A9 9 0 1 0 60 43",
  wrist: "M42 12 C35 35 36 61 43 96 M78 12 C85 35 84 61 77 96 M39 75 Q60 82 81 75 M40 58 Q60 65 80 58",
  hand: "M48 96 C38 85 31 72 29 56 L25 33 C24 26 34 24 36 32 L41 50 L39 20 C39 12 50 11 51 20 L53 46 L55 14 C56 7 67 8 67 16 L67 46 L72 20 C74 12 84 15 82 23 L78 51 L85 34 C89 26 98 32 94 40 L83 68 C79 82 72 91 64 96 Z",
  torso: "M43 14 Q60 7 77 14 L91 38 L82 48 L76 92 L44 92 L38 48 L29 38 Z M43 36 Q60 44 77 36 M45 63 Q60 70 75 63",
  leg: "M43 10 Q60 4 77 10 L73 48 L70 91 L53 91 L50 49 Z M50 49 Q61 55 73 48 M50 78 Q61 83 71 78",
  foot: "M25 67 C34 58 40 43 43 23 C45 11 61 10 65 22 C70 37 79 45 96 53 C108 59 102 75 89 77 L42 82 C27 84 17 76 25 67 Z M45 42 Q65 52 84 55",
};

function getAcupointVisual(title, description) {
  const normalizedTitle = title.toUpperCase();
  const code = Object.keys(acupointVisualByCode).find((item) => normalizedTitle.includes(item));
  if (code) return acupointVisualByCode[code];

  const normalizedCopy = description.toLowerCase();
  if (/ear|耳/.test(normalizedCopy)) return { kind: "ear", x: 57, y: 48 };
  if (/eye|brow|temple|眼|眉|太阳穴/.test(normalizedCopy)) return { kind: "eye", x: 70, y: 50 };
  if (/wrist|forearm|腕|前臂/.test(normalizedCopy)) return { kind: "wrist", x: 60, y: 67 };
  if (/hand|palm|finger|手|掌|指/.test(normalizedCopy)) return { kind: "hand", x: 62, y: 58 };
  if (/ankle|knee|leg|踝|膝|腿/.test(normalizedCopy)) return { kind: "leg", x: 61, y: 70 };
  if (/foot|sole|instep|足|脚/.test(normalizedCopy)) return { kind: "foot", x: 61, y: 52 };
  if (/abdomen|shoulder|back|腹|肩|背/.test(normalizedCopy)) return { kind: "torso", x: 60, y: 52 };
  return { kind: "head", x: 60, y: 48 };
}

function createAcupointVisual(title, description) {
  const visual = getAcupointVisual(title, description);
  const wrapper = document.createElement("div");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  wrapper.className = "acupoint-visual";
  wrapper.setAttribute("aria-hidden", "true");
  svg.setAttribute("viewBox", "0 0 120 104");
  path.setAttribute("d", acupointDiagramPathByKind[visual.kind]);
  path.setAttribute("class", "acupoint-outline");
  halo.setAttribute("cx", visual.x);
  halo.setAttribute("cy", visual.y);
  halo.setAttribute("r", "9");
  halo.setAttribute("class", "acupoint-halo");
  point.setAttribute("cx", visual.x);
  point.setAttribute("cy", visual.y);
  point.setAttribute("r", "4");
  point.setAttribute("class", "acupoint-dot");
  svg.append(path, halo, point);
  wrapper.append(svg);
  return wrapper;
}

function simplifyMassageInstruction(copy) {
  const withoutArea = copy.replace(/^[^:：]{1,28}[:：]\s*/, "");
  const segments = withoutArea.split(currentLanguage === "zh" ? "。" : ". ").filter(Boolean);
  const summary = segments.slice(0, 2).join(currentLanguage === "zh" ? "。" : ". ");
  const punctuation = currentLanguage === "zh" ? "。" : ".";
  const compact = summary.endsWith(".") || summary.endsWith("。") ? summary : `${summary}${punctuation}`;
  return compact.length > 118 ? `${compact.slice(0, 115).trim()}…` : compact;
}

function setActivePurpose(purpose) {
  const targetButton = document.querySelector(`.feedback-chip[data-purpose="${purpose}"]`);

  if (!targetButton) {
    return;
  }

  document.querySelectorAll(".feedback-chip").forEach((button) => {
    button.classList.toggle("active", button === targetButton);
  });

  const [title, copy, massage] = purposeFocus[purpose] || purposeFocus.default;
  if (focusTitle) focusTitle.textContent = title;
  if (focusCopy) focusCopy.textContent = copy;
  if (massageTarget) massageTarget.textContent = massage;
  renderStatusOptions(purpose);
}

function renderExplorePlan() {
  const currentPurpose = getSelectedPurpose();
  const recommendation = getExploreRecommendation(currentPurpose);
  const explorePurposes = [recommendation.primary.purpose, recommendation.secondary.purpose];
  const relatedPurpose = selectedExplorePurpose && explorePurposes.includes(selectedExplorePurpose)
    ? selectedExplorePurpose
    : recommendation.primary.purpose;
  const plan = getSupplementalPlanContent(relatedPurpose);
  const selectedRecommendation = relatedPurpose === recommendation.secondary.purpose
    ? recommendation.secondary
    : recommendation.primary;
  const duration = currentLanguage === "zh" ? "3 分钟" : "3 minutes";
  const stepCount = plan?.steps?.length || 4;
  const reason = currentLanguage === "zh"
    ? "补充主计划未覆盖的部位，适合快速放松。"
    : "A quick reset for an area your main routine does not cover.";
  const stepLabel = currentLanguage === "zh" ? `${stepCount} 个` : `${stepCount} points`;
  exploreCards.forEach((card, index) => {
    const slot = Number(card.dataset.exploreCard || index % 3);
    const isTea = card.dataset.exploreKind === "tea";
    const cardRecommendation = slot === 2 ? recommendation.secondary : recommendation.primary;

    if (isTea) {
      delete card.dataset.explorePurpose;
      card.classList.remove("selected");
      card.removeAttribute("aria-pressed");
    } else {
      card.dataset.explorePurpose = cardRecommendation.purpose;
      card.classList.toggle("selected", cardRecommendation.purpose === relatedPurpose);
      card.setAttribute("aria-pressed", String(cardRecommendation.purpose === relatedPurpose));
    }
    if (exploreCardKickers[index]) {
      exploreCardKickers[index].textContent = isTea
        ? currentLanguage === "zh" ? "搭配茶饮" : "Tea pairing"
        : slot === 0
          ? currentLanguage === "zh" ? "与你的计划搭配" : "For your routine"
          : currentLanguage === "zh" ? "适合现在" : "For right now";
    }
    if (explorePreviewTitles[index]) {
      explorePreviewTitles[index].textContent = isTea ? recommendation.tea.title : cardRecommendation.title;
    }
    if (explorePreviewCopies[index]) {
      explorePreviewCopies[index].textContent = isTea ? recommendation.tea.meta : cardRecommendation.meta;
    }
  });

  if (exploreDetailTitle) exploreDetailTitle.textContent = selectedRecommendation.title;
  if (exploreDetailRoutine) exploreDetailRoutine.textContent = plan.routineTitle;
  if (exploreDetailCopy) {
    exploreDetailCopy.textContent = currentLanguage === "zh"
      ? "跟随 3 个穴位完成一组简短按摩。"
      : "Follow 3 acupoints for a short guided massage.";
  }
  if (exploreDetailReason) exploreDetailReason.textContent = reason;
  if (exploreDetailTime) exploreDetailTime.textContent = duration;
  if (exploreDetailSteps) exploreDetailSteps.textContent = stepLabel;

  if (exploreDetailPoints) {
    exploreDetailPoints.replaceChildren(
      ...(plan.steps || []).slice(0, 3).map((step) => {
        const article = document.createElement("article");
        const content = document.createElement("div");
        const title = document.createElement("b");
        const copy = document.createElement("p");

        title.textContent = step[0];
        copy.textContent = simplifyMassageInstruction(step[1]);
        content.className = "acupoint-copy";
        content.append(title, copy);
        article.append(createAcupointVisual(step[0], step[1]), content);
        return article;
      })
    );
  }
}

function renderTeaPlan() {
  const purpose = getSelectedPurpose();
  const tea = getExploreRecommendation(purpose).tea;
  const ingredientLabel = currentLanguage === "zh" ? `${tea.ingredients.length} 种材料` : `${tea.ingredients.length} ingredients`;
  const preparationSteps = currentLanguage === "zh"
    ? ["清洗所有材料。", "加入热水冲泡 8–10 分钟。", "温热饮用。"]
    : ["Rinse the ingredients.", "Steep in hot water for 8–10 minutes.", "Enjoy warm."];

  if (teaDetailTitle) teaDetailTitle.textContent = tea.title;
  if (teaDetailHeadline) teaDetailHeadline.textContent = tea.title;
  if (teaDetailLabel) teaDetailLabel.textContent = tea.label;
  if (teaDetailCopy) teaDetailCopy.textContent = tea.copy;
  if (teaDetailTime) teaDetailTime.textContent = tea.time;
  if (teaDetailIntention) teaDetailIntention.textContent = tea.intention;
  if (teaDetailCount) teaDetailCount.textContent = ingredientLabel;
  if (teaDetailIngredients) {
    teaDetailIngredients.replaceChildren(...tea.ingredients.map((ingredient) => {
      const item = document.createElement("li");
      item.textContent = ingredient;
      return item;
    }));
  }
  if (teaDetailSteps) {
    teaDetailSteps.replaceChildren(...preparationSteps.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }));
  }
  if (teaSaveButton) {
    const isSaved = savedTeaPurpose === purpose;
    teaSaveButton.classList.toggle("is-saved", isSaved);
    teaSaveButton.textContent = isSaved
      ? currentLanguage === "zh" ? "已保存茶饮方案" : "Tea Plan Saved"
      : currentLanguage === "zh" ? "保存茶饮方案" : "Save Tea Plan";
  }
}

function applyRoutineSteps(plan) {
  if (!plan?.steps?.length) {
    return;
  }

  meridianStepButtons.forEach((button, index) => {
    const step = plan.steps[index];

    button.hidden = !step;

    if (!step) {
      return;
    }

    button.textContent = step[0];
    button.dataset.copy = step[1];
    button.dataset.seconds = step[2];
  });

  meridianPoints.forEach((point, index) => {
    point.hidden = index >= plan.steps.length;
  });

  activeStepIndex = 0;
  remainingSeconds = Number(meridianStepButtons[0]?.dataset.seconds || 60);
  updateRoutineDisplay();
}

function getCompletedCheckinDays() {
  return Math.min(100, journeyBaseDays + (todayCheckinCompleted ? 1 : 0));
}

function getDisplayedWeeklyCheckins() {
  return earlierWeeklyCheckins + (todayCheckinCompleted ? 1 : 0);
}

function getJourneyProgressPercent() {
  return Math.min(100, Math.max(0, getCompletedCheckinDays()));
}

function getUnlockedMilestones() {
  const completedDays = getCompletedCheckinDays();
  return milestoneDefinitions.filter((milestone) => completedDays >= milestone.days);
}

function getCurrentMilestone() {
  const unlocked = getUnlockedMilestones();
  return unlocked[unlocked.length - 1] || null;
}

function getMilestoneByDays(days) {
  return milestoneDefinitions.find((milestone) => milestone.days === Number(days)) || milestoneDefinitions[0];
}

function getNextMilestone() {
  const completedDays = getCompletedCheckinDays();
  return milestoneDefinitions.find((milestone) => completedDays < milestone.days) || milestoneDefinitions[milestoneDefinitions.length - 1];
}

function applyGrowthStage(milestone) {
  if (!growthStage) {
    return;
  }

  growthStage.classList.remove(
    "stage-sapling",
    "stage-medium",
    "stage-large",
    "stage-tree",
    "stage-tall",
    "stage-bloom",
    "stage-fruit",
    "stage-life",
    "is-growing"
  );
  growthStage.classList.add(milestone?.stageClass || "stage-sapling");
  if (todayCheckinCompleted) {
    growthStage.classList.add("is-growing");
  }
  growthStage.querySelectorAll("[data-milestone-open]").forEach((button) => {
    const isUnlocked = getCompletedCheckinDays() >= Number(button.dataset.milestoneOpen);
    button.classList.toggle("locked", !isUnlocked);
  });
}

function renderMilestoneDetail() {
  const isZh = currentLanguage === "zh";
  const completedDays = getCompletedCheckinDays();
  const currentMilestone = getCurrentMilestone();
  const nextMilestone = getNextMilestone();

  if (milestoneOverviewKicker) milestoneOverviewKicker.textContent = isZh ? "Wellness Journey · 健康旅程" : "Wellness Journey";
  if (milestoneOverviewTitle) {
    milestoneOverviewTitle.textContent = currentMilestone
      ? currentMilestone[currentLanguage].tree
      : isZh
        ? "种下你的第一棵健康树"
        : "Plant your first Wellness Tree";
  }
  if (milestoneOverviewCopy) {
    milestoneOverviewCopy.textContent = currentMilestone
      ? `${completedDays} / 100 Days · ${currentMilestone[currentLanguage].insight}`
      : isZh
        ? "每一次养生，都会滋养你的健康树。未解锁阶段会先保持问号，达成后才会展示真实形态。"
        : "Every wellness session helps your tree grow. Future shapes stay hidden until you unlock them.";
  }

  if (!milestoneList) {
    return;
  }

  milestoneList.replaceChildren(
    ...milestoneDefinitions.map((milestone) => {
      const copy = milestone[currentLanguage];
      const unlocked = completedDays >= milestone.days;
      const row = document.createElement("button");
      row.type = "button";
      row.className = `milestone-row ${unlocked ? "unlocked" : "locked"}`;
      row.dataset.milestoneOpen = milestone.days;
      row.innerHTML = `
        <div class="milestone-tree-preview ${unlocked ? "unlocked" : ""}">${unlocked ? milestone.icon : "?"}</div>
        <div>
          <span>${copy.label}</span>
          <h2>${unlocked ? copy.tree : "?"}</h2>
          <p>${unlocked ? copy.detailCopy : isZh ? `累计完成 ${milestone.days} 天打卡后揭晓。` : `Reach ${milestone.days} ${milestone.days === 1 ? "day" : "days"} to reveal.`}</p>
        </div>
      `;
      row.addEventListener("click", () => openMilestone(milestone.days));
      return row;
    })
  );
}

function updateTodayCompletionState() {
  const plan = getCurrentPlanContent();
  const duration = getSelectedDurationLabel();
  const routineStepCount = plan.steps?.length || 4;
  const routineStepLabel = currentLanguage === "zh" ? `${routineStepCount} 个引导步骤` : `${routineStepCount} guided steps`;
  const weeklyCount = getDisplayedWeeklyCheckins();
  const completedDays = getCompletedCheckinDays();
  const currentMilestone = getCurrentMilestone();
  const nextMilestone = getNextMilestone();
  const labels = {
    en: {
      planLabel: todayCheckinCompleted ? "Completed today" : "Personal Plan",
      planCopy: todayCheckinCompleted
        ? "You completed today’s guided massage. Nice and steady."
        : `Complete today’s ${duration} guided massage.`,
      action: todayCheckinCompleted ? "Check In Again" : "Check In",
      status: todayCheckinCompleted ? "Completed today" : duration,
      pill: "Completed today",
      routineCopy: todayCheckinCompleted ? "Today’s plan completed" : routineStepLabel,
      practiceStatus: todayCheckinCompleted ? "Today’s check-in completed" : "Today’s Check-in",
      practiceTitle: plan.routineTitle,
      practiceCopy: todayCheckinCompleted
        ? "You can repeat today’s routine anytime."
        : `${routineStepLabel} · tap the timer anytime to pause.`,
      practiceAction: todayCheckinCompleted ? "Check In Again" : "Check In",
      expectedChangeTitle: "Expected change",
      expectedChangeCopy: todayCheckinCompleted
        ? "This routine is complete. Repeat it if you want the same gentle reset again today."
        : plan.expectedChange,
      historySummary: todayCheckinCompleted ? "7 check-ins" : "6 check-ins",
      homeWeek: `${weeklyCount} ${weeklyCount === 1 ? "check-in" : "check-ins"} ›`,
      growthKicker: `Wellness Tree · Day ${completedDays}`,
      growthDay: `${completedDays} / 100 Days`,
      growthTitle: currentMilestone ? currentMilestone.en.homeTitle : "Your Wellness Tree",
      growthCopy: currentMilestone
        ? currentMilestone.en.homeCopy
        : `Every wellness session helps your tree grow. Next milestone: ${nextMilestone.en.label}.`,
    },
    zh: {
      planLabel: todayCheckinCompleted ? "今日已完成" : "个人计划",
      planCopy: todayCheckinCompleted ? "你已完成今日引导按摩，保持得很稳。" : `完成今天 ${duration} 引导按摩。`,
      action: todayCheckinCompleted ? "再次打卡" : "打卡",
      status: todayCheckinCompleted ? "今日已完成" : duration,
      pill: "今日已完成",
      routineCopy: todayCheckinCompleted ? "今日计划已完成" : routineStepLabel,
      practiceStatus: todayCheckinCompleted ? "今日打卡已完成" : "今日打卡",
      practiceTitle: plan.routineTitle,
      practiceCopy: todayCheckinCompleted ? "你可以随时再练一次今天的内容。" : `${routineStepLabel} · 点击计时器可暂停。`,
      practiceAction: todayCheckinCompleted ? "再次打卡" : "打卡",
      expectedChangeTitle: "预期变化",
      expectedChangeCopy: todayCheckinCompleted
        ? "今日练习已完成。如需再次放松，可以再练一次。"
        : plan.expectedChange,
      historySummary: todayCheckinCompleted ? "7 次打卡" : "6 次打卡",
      homeWeek: `${weeklyCount} 次打卡 ›`,
      growthKicker: `健康树 · Day ${completedDays}`,
      growthDay: `${completedDays} / 100 天`,
      growthTitle: currentMilestone ? currentMilestone.zh.homeTitle : "你的健康树",
      growthCopy: currentMilestone
        ? currentMilestone.zh.homeCopy
        : `每一次养生，都会滋养你的健康树。下一阶段：${nextMilestone.zh.label}。`,
    },
  };
  const copy = labels[currentLanguage];
  const [, , focusArea] = purposeFocus[getSelectedPurpose()] || purposeFocus.default;

  app.classList.toggle("today-complete", todayCheckinCompleted);
  app.classList.toggle("has-earlier-checkins", earlierWeeklyCheckins > 0);
  homePlanTitles.forEach((title) => {
    title.textContent = plan.goalTitle;
  });
  if (homePlanCopy) homePlanCopy.textContent = copy.homeWeek;
  if (homeEarlierProgress) homeEarlierProgress.classList.toggle("active", earlierWeeklyCheckins > 0);
  if (homeTodayProgress) homeTodayProgress.classList.toggle("active", todayCheckinCompleted);
  if (homeRoutineTime) homeRoutineTime.textContent = duration;
  if (homeRoutineTitle) homeRoutineTitle.textContent = plan.routineTitle;
  if (homeRoutineCopy) homeRoutineCopy.textContent = todayCheckinCompleted ? copy.planCopy : plan.routineCopy;
  if (growthKicker) growthKicker.textContent = copy.growthKicker;
  if (growthTitle) growthTitle.textContent = copy.growthTitle;
  if (growthCopy) growthCopy.textContent = copy.growthCopy;
  if (growthDay) growthDay.textContent = copy.growthDay;
  if (growthProgress) growthProgress.style.width = `${getJourneyProgressPercent()}%`;
  applyGrowthStage(currentMilestone);
  if (routineGuideTitle) routineGuideTitle.textContent = plan.routineTitle;
  if (resultPlanTitle) resultPlanTitle.textContent = plan.goalTitle;
  if (resultPlanCopy) resultPlanCopy.textContent = plan.planCopy;
  if (resultRoutineTitle) resultRoutineTitle.textContent = plan.routineTitle;
  if (resultRoutineCopy) resultRoutineCopy.textContent = routineStepLabel;
  if (resultFocusArea) resultFocusArea.textContent = plan.massageTarget || focusArea;
  if (todayPlanLabel) todayPlanLabel.textContent = copy.planLabel;
  if (todayPlanCopy) todayPlanCopy.textContent = copy.planCopy;
  if (todayPlanAction) todayPlanAction.textContent = copy.action;
  if (todayRoutineStatus) todayRoutineStatus.textContent = copy.status;
  if (todayRoutineCopy) todayRoutineCopy.textContent = copy.routineCopy;
  if (completionPill) completionPill.textContent = copy.pill;
  if (practiceStatusLabel) practiceStatusLabel.textContent = copy.practiceStatus;
  if (practiceTitle) practiceTitle.textContent = copy.practiceTitle;
  if (practiceCopy) practiceCopy.textContent = copy.practiceCopy;
  startRoutineButtons.forEach((button) => {
    if (button.dataset.todayPlanAction !== undefined) {
      button.textContent = copy.practiceAction;
    }
  });
  if (expectedChange) {
    expectedChange.querySelector("span").textContent = copy.expectedChangeTitle;
    expectedChange.querySelector("p").textContent = copy.expectedChangeCopy;
  }
  historyToday?.classList.toggle("done", todayCheckinCompleted);
  if (historyCurrentCopy) historyCurrentCopy.textContent = copy.historySummary;
  applyRoutineSteps(plan);
  renderExplorePlan();
  renderMilestoneDetail();
}

function renderStatusOptions(purpose = "default") {
  if (!statusTitle || !statusOptions) {
    return;
  }

  const status = syncedStatusQuestionsByLanguage[currentLanguage][purpose] || syncedStatusQuestionsByLanguage[currentLanguage].default;
  statusTitle.textContent = status.title;
  statusOptions.replaceChildren(
    ...status.options.map((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      if (index === 0) {
        button.classList.add("active");
      }
      return button;
    })
  );
}

function setLanguage(language) {
  if (language === currentLanguage) {
    return;
  }

  translateTextNodes(language);
  currentLanguage = language;
  purposeFocus = syncedPurposeFocusByLanguage[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  languageLabel.textContent = language === "zh" ? "中文" : "English";

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });

  refreshSelectedFocus();
  renderStatusOptions(document.querySelector(".feedback-chip.active")?.dataset.purpose || "default");
  updateTodayCompletionState();
  updateRoutineDisplay();
  if (currentScreen === "tea-plan-detail") {
    renderTeaPlan();
  }
}

function closeProfile() {
  app.classList.remove("profile-open");
}

function closeDeleteAccount() {
  app.classList.remove("delete-account-open");
}

function closePermission() {
  app.classList.remove("permission-open", "notification-open", "delete-account-open");
}

function closeShareSurfaces() {
  app.classList.remove("share-open", "system-share-open", "milestone-open", "journey-complete-open", "milestone-celebrating");
}

function openCheckinShare(source = "checkin") {
  lastShareType = "checkin";
  const isZh = currentLanguage === "zh";
  const completedDays = getCompletedCheckinDays();
  const milestone = getCurrentMilestone() || getMilestoneByDays(1);
  const copy = milestone[currentLanguage];

  if (shareKicker) shareKicker.textContent = isZh ? "Wellness Journey 分享" : "Wellness Journey";
  if (shareTitle) {
    shareTitle.textContent = todayCheckinCompleted
      ? copy.shareTitle
      : isZh
        ? "邀请朋友一起开始健康旅程"
        : "Invite a friend to start a Wellness Journey";
  }
  if (shareCopy) {
    shareCopy.textContent = todayCheckinCompleted
      ? copy.shareCopy
      : isZh
        ? "邀请朋友加入，一起开始每日养生打卡。"
        : "Invite a friend to start a daily wellness check-in routine together.";
  }
  if (shareDays) shareDays.textContent = completedDays;
  if (shareRewardCount) shareRewardCount.textContent = todayCheckinCompleted ? milestone.days : 0;
  if (shareRewardLabel) {
    shareRewardLabel.textContent = todayCheckinCompleted
      ? isZh
        ? "天成就"
        : "day achievement"
      : isZh
        ? "待解锁"
        : "to unlock";
  }
  if (shareStatus) {
    shareStatus.textContent = isZh
      ? "分享你的坚持，邀请朋友一起加入 Meridian Care。"
      : "Share your steady progress and invite friends to join Meridian Care.";
  }
  app.classList.add("share-open");
}

function openSystemShare(type = "app") {
  lastShareType = type;
  const isZh = currentLanguage === "zh";

  if (type === "checkin") {
    const milestone = getCurrentMilestone() || getMilestoneByDays(1);
    if (systemShareTitle) systemShareTitle.textContent = isZh ? "分享打卡进度" : "Share check-in progress";
    if (systemSharePreview) systemSharePreview.textContent = isZh ? "你的打卡进度" : "Your check-in progress";
    if (systemShareCopy) {
      systemShareCopy.textContent = milestone[currentLanguage].systemCopy;
    }
  } else {
    if (systemShareTitle) systemShareTitle.textContent = isZh ? "分享 Meridian Care" : "Share Meridian Care";
    if (systemSharePreview) systemSharePreview.textContent = "Meridian Care";
    if (systemShareCopy) {
      systemShareCopy.textContent = isZh
        ? "建立温和的每日经络按摩习惯。"
        : "Build a gentle daily meridian massage habit.";
    }
  }

  app.classList.remove("share-open");
  app.classList.add("system-share-open");
}

function openMilestone(days = getCurrentMilestone()?.days || 1) {
  const isZh = currentLanguage === "zh";
  const milestone = getMilestoneByDays(days);
  const unlocked = getCompletedCheckinDays() >= milestone.days;
  const copy = milestone[currentLanguage];

  if (milestoneKicker) milestoneKicker.textContent = unlocked ? (isZh ? "Wellness Achievement · 健康成就" : "Wellness Achievement") : (isZh ? "未解锁阶段" : "Locked Milestone");
  if (milestoneVisual) {
    milestoneVisual.textContent = unlocked ? milestone.icon : "?";
    milestoneVisual.classList.toggle("locked", !unlocked);
  }
  if (milestoneTitle) milestoneTitle.textContent = unlocked ? copy.title : copy.lockedTitle;
  if (milestoneCopy) {
    milestoneCopy.textContent = unlocked
      ? copy.insight
      : isZh
        ? `累计完成 ${milestone.days} 天打卡后，这一阶段的树木形态才会揭晓。`
        : `Complete ${milestone.days} total check-ins to reveal this tree stage.`;
  }
  app.classList.add("milestone-open");
}

function playMilestoneCelebration(days, onComplete) {
  const isZh = currentLanguage === "zh";
  const milestone = getMilestoneByDays(days);
  const copy = milestone[currentLanguage];

  if (celebrationVisual) celebrationVisual.textContent = milestone.icon;
  if (celebrationKicker) {
    celebrationKicker.textContent = isZh ? "Wellness Tree · 新阶段解锁" : "Wellness Tree · New Stage";
  }
  if (celebrationTitle) celebrationTitle.textContent = copy.homeTitle || copy.title;
  if (celebrationCopy) celebrationCopy.textContent = copy.insight || copy.homeCopy;

  app.classList.remove("milestone-open", "journey-complete-open", "share-open", "milestone-celebrating");
  window.setTimeout(() => app.classList.add("milestone-celebrating"), 20);
  window.setTimeout(() => {
    app.classList.remove("milestone-celebrating");
    if (typeof onComplete === "function") onComplete();
  }, 2200);
}

function openJourneyComplete() {
  const isZh = currentLanguage === "zh";
  const title = document.querySelector("[data-journey-complete-title]");
  const copy = document.querySelector("[data-journey-complete-copy]");
  const kicker = document.querySelector("[data-journey-complete-kicker]");

  if (kicker) kicker.textContent = isZh ? "Wellness Achievement · 健康成就" : "Wellness Achievement";
  if (title) title.textContent = isZh ? "🏆 恭喜完成！" : "🏆 Congratulations!";
  if (copy) {
    copy.textContent = isZh
      ? "你完成了第一次 100 天健康旅程，建立了更稳定的健康节奏，并把健康树养成了生命树。"
      : "You completed your first Wellness Journey, built a healthier routine, and grew your Wellness Tree into a Tree of Life.";
  }
  app.classList.add("journey-complete-open");
}

function startNewJourney() {
  completedJourneyCount += 1;
  journeyBaseDays = 0;
  todayCheckinCompleted = false;
  lastSharedMilestoneDays = 0;
  app.classList.remove("journey-complete-open", "milestone-open", "share-open", "routine-active", "today-complete");
  updateTodayCompletionState();
  showScreen("today");
}

function finishNotificationPrompt(allowed) {
  app.classList.toggle("notification-enabled", allowed);
  setMode("subscribed");
  showScreen("today");
}

function updateTongueCareState(state = "idle") {
  app.classList.toggle("tongue-authorized", tonguePhotoAuthorized);
  app.classList.toggle("tongue-denied", tonguePermissionAnswered && !tonguePhotoAuthorized);
  app.classList.toggle("tongue-scanning", state === "scanning");
  if (tongueCaptureButton) {
    tongueCaptureButton.setAttribute(
      "aria-label",
      state === "scanning"
        ? (currentLanguage === "zh" ? "扫描中" : "Scanning")
        : (currentLanguage === "zh" ? "点击拍照" : "Capture photo")
    );
  }
  if (tongueCaptureLabel) {
    tongueCaptureLabel.textContent = state === "scanning"
      ? (currentLanguage === "zh" ? "扫描中..." : "Scanning...")
      : (currentLanguage === "zh" ? "点击拍照" : "Capture");
  }
  if (tongueStatusText) {
    tongueStatusText.textContent = currentLanguage === "zh" ? "相机已就绪" : "Camera ready";
  }
}

function openTonguePermissionPrompt() {
  if (tonguePermissionAnswered) {
    updateTongueCareState();
    return;
  }

  app.classList.add("tongue-permission-open");
  updateTongueCareState();
}

function allowTonguePhotoAccess() {
  tonguePermissionAnswered = true;
  tonguePhotoAuthorized = true;
  app.classList.remove("tongue-permission-open");
  updateTongueCareState();
}

function denyTonguePhotoAccess() {
  tonguePermissionAnswered = true;
  tonguePhotoAuthorized = false;
  app.classList.remove("tongue-permission-open");
  updateTongueCareState();
}

function captureTonguePhoto() {
  if (!tonguePhotoAuthorized || app.classList.contains("tongue-scanning")) {
    openTonguePermissionPrompt();
    return;
  }

  window.clearTimeout(tongueScanTimer);
  updateTongueCareState("scanning");
  tongueScanTimer = window.setTimeout(() => {
    updateTongueCareState();
    setPlanFromTongueScan();
    showScreen("tongue-report");
  }, 1800);
}

function closeTongueDisclaimer() {
  app.classList.remove("tongue-disclaimer-open");
  tongueDisclaimerToggle?.setAttribute("aria-expanded", "false");
}

function toggleTongueDisclaimer() {
  const willOpen = !app.classList.contains("tongue-disclaimer-open");
  app.classList.toggle("tongue-disclaimer-open", willOpen);
  tongueDisclaimerToggle?.setAttribute("aria-expanded", String(willOpen));
}

function showScreen(target, options = {}) {
  const shouldPush = options.push !== false;

  closeProfile();
  closePermission();
  closeShareSurfaces();
  closeTongueDisclaimer();
  resetRoutine();
  app.classList.remove("tongue-permission-open", "tongue-scanning");
  if (aiGeneratingTimer && target !== "ai-generating") {
    window.clearTimeout(aiGeneratingTimer);
    aiGeneratingTimer = null;
  }
  if (tongueScanTimer && target !== "tongue-care") {
    window.clearTimeout(tongueScanTimer);
    tongueScanTimer = null;
  }
  if (shouldPush && currentScreen && currentScreen !== target) {
    screenHistory.push(currentScreen);
  }
  screens.forEach((screen) => screen.classList.remove("active"));
  document.getElementById(target).classList.add("active");
  currentScreen = target;

  app.classList.toggle("onboarding-mode", onboardingScreens.has(target) && !appScreens.has(target));

  if (target === "ai-generating") {
    aiGeneratingTimer = window.setTimeout(() => {
      if (currentScreen !== "ai-generating") {
        return;
      }

      showScreen(app.classList.contains("is-subscribed") ? "plan-result" : "subscribe");
    }, 1700);
  }

  if (target === "tongue-care") {
    window.setTimeout(openTonguePermissionPrompt, 180);
  }

  if (target === "checkin-history") {
    window.setTimeout(() => {
      const historyScroll = document.querySelector(".history-scroll");
      if (historyScroll) {
        historyScroll.scrollTop = historyScroll.scrollHeight;
      }
    }, 0);
  }

  if (target === "explore-plan-detail") {
    renderExplorePlan();
  }

  if (target === "tea-plan-detail") {
    renderTeaPlan();
  }
}

function goBack() {
  const fallbackByScreen = {
    subscribe: app.classList.contains("is-subscribed") ? "today" : "plan-step-3",
    "plan-step-1": app.classList.contains("is-subscribed") ? "today" : "tongue-care",
    "plan-step-2": "plan-step-1",
    "plan-step-3": "plan-step-2",
    "ai-generating": "plan-step-3",
    "tongue-care": "login",
    "tongue-report": "tongue-care",
    "explore-plan-detail": "today",
    "tea-plan-detail": "today",
    "checkin-history": "today",
    "milestone-detail": "today",
    "report-upload": "today",
    "photo-picker": "report-upload",
  };
  let previous = screenHistory.pop();

  while (previous === currentScreen) {
    previous = screenHistory.pop();
  }

  showScreen(previous || fallbackByScreen[currentScreen] || "today", { push: false });
}

function closePaywall() {
  if (!app.classList.contains("is-subscribed")) {
    setMode("unsubscribed");
    showScreen("today");
    return;
  }

  goBack();
}

function setSelectedPlan(plan) {
  const notes = {
    en: {
      annual: "Annual plan includes a 3-day free trial, then renews automatically.",
      monthly: "Monthly plan renews automatically at $9.90/month.",
    },
    zh: {
      annual: "年度方案含 3 天免费试用，试用结束后自动续订。",
      monthly: "月度方案按 $9.90/月自动续订。",
    },
  };
  const ctaLabels = {
    en: {
      annual: "Start 3-day free trial",
      monthly: "Start membership",
    },
    zh: {
      annual: "立即免费体验 3 天",
      monthly: "开通会员",
    },
  };

  planOptionButtons.forEach((button) => {
    button.classList.toggle("selected", button.dataset.planOption === plan);
  });

  planNote.textContent = notes[currentLanguage][plan];
  subscribeCta.textContent = ctaLabels[currentLanguage][plan];
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const rest = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${rest}`;
}

function stopRoutineTimer() {
  window.clearInterval(routineTimer);
  routineTimer = null;
}

function getActiveMeridianButtons() {
  return Array.from(meridianStepButtons).filter((button) => !button.hidden);
}

function updateRoutineDisplay() {
  const activeButtons = getActiveMeridianButtons();
  const button = activeButtons[activeStepIndex];

  if (!button) {
    return;
  }

  const stepNumber = activeStepIndex + 1;
  const stepTotal = activeButtons.length;
  const isPreparing = routinePhase === "prepare";
  const totalSeconds = Number(button.dataset.seconds || 60);
  const timerProgress = isPreparing ? 0 : Math.max(0, Math.min(1, (totalSeconds - remainingSeconds) / totalSeconds));

  stepTime.textContent = formatTime(remainingSeconds);
  stepCount.textContent =
    currentLanguage === "zh"
      ? isPreparing
        ? `准备 · 第 ${stepNumber} / ${stepTotal} 步`
        : `第 ${stepNumber} / ${stepTotal} 步`
      : isPreparing
        ? `Ready · Step ${stepNumber} / ${stepTotal}`
        : `Step ${stepNumber} / ${stepTotal}`;
  stepCopy.textContent = isPreparing
    ? currentLanguage === "zh"
      ? "请准备按摩当前点位。"
      : "Get ready for this massage point."
    : button.dataset.copy;
  timerToggleButton?.classList.toggle("is-preparing", isPreparing);
  timerToggleButton?.style.setProperty("--timer-progress", `${Math.round(timerProgress * 100)}%`);

  guidanceProgressSegments.forEach((segment, index) => {
    segment.hidden = index >= stepTotal;
    segment.classList.toggle("is-complete", index < activeStepIndex);
    segment.classList.toggle("is-active", index === activeStepIndex);
  });

  if (completeRoutineButton) {
    const isLastStep = activeStepIndex >= stepTotal - 1;
    completeRoutineButton.textContent = isLastStep
      ? currentLanguage === "zh"
        ? "完成"
        : "Done"
      : currentLanguage === "zh"
        ? "下一步"
        : "Next";
  }
}

function setMeridianStep(index, shouldRun = false) {
  const activeButtons = getActiveMeridianButtons();
  const button = activeButtons[index];

  if (!button) {
    stopRoutineTimer();
    return;
  }

  activeStepIndex = index;
  routinePhase = shouldRun || routineTimer ? "prepare" : "massage";
  remainingSeconds = routinePhase === "prepare" ? PREP_SECONDS : Number(button.dataset.seconds || 60);

  meridianStepButtons.forEach((item) => item.classList.toggle("active", item === button));
  meridianPoints.forEach((point, pointIndex) => {
    point.classList.toggle("active", pointIndex === activeStepIndex);
  });

  updateRoutineDisplay();

  if (shouldRun) {
    startRoutineTimer();
  }
}

function tickRoutine() {
  if (routinePaused) {
    return;
  }

  remainingSeconds = Math.max(remainingSeconds - 1, 0);
  updateRoutineDisplay();

  if (remainingSeconds > 0) {
    return;
  }

  if (routinePhase === "prepare") {
    const activeButtons = getActiveMeridianButtons();
    routinePhase = "massage";
    remainingSeconds = Number(activeButtons[activeStepIndex]?.dataset.seconds || 60);
    updateRoutineDisplay();
    return;
  }

  if (activeStepIndex < getActiveMeridianButtons().length - 1) {
    setMeridianStep(activeStepIndex + 1, true);
    return;
  }

  stopRoutineTimer();
}

function startRoutineTimer() {
  stopRoutineTimer();
  routineTimer = window.setInterval(tickRoutine, 1000);
}

function resetRoutine() {
  stopRoutineTimer();
  app.classList.remove("routine-active");
  routinePaused = false;
  routinePhase = "massage";
  timerToggleButton?.classList.remove("is-paused");
  timerToggleButton?.classList.remove("is-preparing");
  setMeridianStep(0, false);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.requireFeedback && button.classList.contains("disabled")) {
      return;
    }

    if (button.dataset.mode) {
      setMode(button.dataset.mode);
    }

    if (button.dataset.planReady) {
      setMode("subscribed");
    }

    if (button.dataset.exploreKind === "massage" && button.dataset.explorePurpose) {
      selectedExplorePurpose = button.dataset.explorePurpose;
    }

    let target = button.dataset.target;

    showScreen(target);
  });

  button.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    button.click();
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", goBack);
});

closePaywallButton?.addEventListener("click", closePaywall);

planOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setSelectedPlan(button.dataset.planOption);
  });
});

exploreStartButton?.addEventListener("click", () => {
  if (!app.classList.contains("is-subscribed")) {
    showScreen("subscribe");
    return;
  }

  const relatedPurpose = getRelatedPurpose();
  const plan = getSupplementalPlanContent(relatedPurpose);

  applyRoutineSteps(plan);
  if (routineGuideTitle) routineGuideTitle.textContent = plan.routineTitle;
  showScreen("today");
  app.classList.add("routine-active");
  routinePaused = false;
  setMeridianStep(0, false);
});

exploreReplaceButton?.addEventListener("click", () => {
  const relatedPurpose = getRelatedPurpose();

  todayCheckinCompleted = false;
  lastSharedMilestoneDays = 0;
  setActivePurpose(relatedPurpose);
  selectedExplorePurpose = null;
  updateTodayCompletionState();
  showScreen("today");
});

teaSaveButton?.addEventListener("click", () => {
  savedTeaPurpose = getSelectedPurpose();
  renderTeaPlan();
});

checkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isDone = button.classList.toggle("is-done");
    const labels = {
      en: {
        massageDone: "Massage checked in",
        massage: "Complete check-in",
      },
      zh: {
        massageDone: "按摩已打卡",
        massage: "完成练习",
      },
    };

    button.textContent = isDone
      ? labels[currentLanguage][`${button.dataset.check}Done`]
      : labels[currentLanguage][button.dataset.check];
  });
});

taskButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.taskTarget;

    taskButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    taskPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.taskPanel === target);
    });
  });
});

choiceGroups.forEach((group) => {
  group.addEventListener("click", (event) => {
    const choice = event.target.closest("button");

    if (!choice || !group.contains(choice)) {
      return;
    }

    group.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active", "featured", "selected");
    });

    if (choice.classList.contains("body-card")) {
      choice.classList.add("featured");
    } else if (choice.parentElement.classList.contains("time-options")) {
      choice.classList.add("selected");
    } else {
      choice.classList.add("active");
    }

    if (choice.dataset.purpose) {
      todayCheckinCompleted = false;
      lastSharedMilestoneDays = 0;
      const [title, copy, massage] = purposeFocus[choice.dataset.purpose] || purposeFocus.default;
      focusTitle.textContent = title;
      focusCopy.textContent = copy;
      massageTarget.textContent = massage;
      renderStatusOptions(choice.dataset.purpose);
      updateTodayCompletionState();
    } else if (choice.parentElement.classList.contains("feedback-grid")) {
      todayCheckinCompleted = false;
      lastSharedMilestoneDays = 0;
      const [title, copy, massage] = purposeFocus.default;
      focusTitle.textContent = title;
      focusCopy.textContent = copy;
      massageTarget.textContent = massage;
      renderStatusOptions("default");
      updateTodayCompletionState();
    } else if (choice.parentElement.classList.contains("status-grid")) {
      todayCheckinCompleted = false;
      lastSharedMilestoneDays = 0;
      updateTodayCompletionState();
    } else if (choice.parentElement.classList.contains("time-options")) {
      todayCheckinCompleted = false;
      lastSharedMilestoneDays = 0;
      updateTodayCompletionState();
    }
  });
});

renderStatusOptions(document.querySelector(".feedback-chip.active")?.dataset.purpose || "default");

photoPermissionButton?.addEventListener("click", () => {
  app.classList.add("permission-open");
});

permissionCloseButton?.addEventListener("click", closePermission);

photoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    photoButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

confirmPhotoButton?.addEventListener("click", () => {
  app.classList.add("photo-selected");
});

uploadReportButton?.addEventListener("click", () => {
  if (!app.classList.contains("photo-selected")) {
    app.classList.add("permission-open");
    return;
  }

  app.classList.add("baseline-ready");
  showScreen("today");
});

tonguePermissionAllowButton?.addEventListener("click", allowTonguePhotoAccess);
tonguePermissionDenyButton?.addEventListener("click", denyTonguePhotoAccess);
tonguePermissionRetryButton?.addEventListener("click", () => {
  tonguePermissionAnswered = false;
  app.classList.add("tongue-permission-open");
});
tongueCaptureButton?.addEventListener("click", captureTonguePhoto);
tongueCameraCard?.addEventListener("click", (event) => {
  if (event.target.closest("button") || app.classList.contains("tongue-scanning")) {
    return;
  }

  captureTonguePhoto();
});
tongueReportCta?.addEventListener("click", () => {
  setPlanFromTongueScan();
  showScreen(app.classList.contains("is-subscribed") ? "plan-result" : "subscribe");
});
tongueDisclaimerToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleTongueDisclaimer();
});
tongueDisclaimerPopover?.addEventListener("click", (event) => {
  event.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (!app.classList.contains("tongue-disclaimer-open")) {
    return;
  }

  if (event.target.closest("[data-tongue-disclaimer-toggle], [data-tongue-disclaimer-popover]")) {
    return;
  }

  closeTongueDisclaimer();
});

notificationOpenButton?.addEventListener("click", () => {
  app.classList.add("notification-open");
});

notificationAllowButton?.addEventListener("click", () => {
  finishNotificationPrompt(true);
});

notificationLaterButton?.addEventListener("click", () => {
  finishNotificationPrompt(false);
});

profileOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    app.classList.add("profile-open");
  });
});

profileCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProfile);
});

deleteAccountOpenButton?.addEventListener("click", () => {
  app.classList.add("delete-account-open");
});

deleteAccountCloseButtons.forEach((button) => {
  button.addEventListener("click", closeDeleteAccount);
});

deleteAccountConfirmButton?.addEventListener("click", () => {
  closeDeleteAccount();
  closeProfile();
});

checkinShareButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openCheckinShare(button.dataset.shareOpen);
  });
});

shareCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    app.classList.remove("share-open");
  });
});

socialShareButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!shareStatus) {
      return;
    }

    const isZh = currentLanguage === "zh";
    const label = button.dataset.socialShare === "instagram" ? "Instagram" : "TikTok";
    shareStatus.textContent = isZh ? `${label} 分享内容已准备好。` : `${label} post is ready to share.`;
  });
});

systemShareOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openSystemShare(button.dataset.appShare !== undefined ? "app" : "checkin");
  });
});

systemShareCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    app.classList.remove("system-share-open");
  });
});

milestoneOpenButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openMilestone(button.dataset.milestoneOpen);
  });
});

milestoneCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    app.classList.remove("milestone-open");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

meridianStepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextIndex = Array.from(meridianStepButtons).indexOf(button);
    setMeridianStep(nextIndex, Boolean(routineTimer));
  });
});

startRoutineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    app.classList.add("routine-active");
    routinePaused = false;
    timerToggleButton?.classList.remove("is-paused");
    setMeridianStep(0, true);
  });
});

timerToggleButton?.addEventListener("click", () => {
  if (!app.classList.contains("routine-active")) {
    return;
  }

  routinePaused = !routinePaused;
  timerToggleButton.classList.toggle("is-paused", routinePaused);
});

exitRoutineButtons.forEach((button) => {
  button.addEventListener("click", resetRoutine);
});

completeRoutineButton?.addEventListener("click", () => {
  const activeButtons = getActiveMeridianButtons();

  if (activeStepIndex < activeButtons.length - 1) {
    setMeridianStep(activeStepIndex + 1, true);
    return;
  }

  stopRoutineTimer();
  const previousDays = getCompletedCheckinDays();
  todayCheckinCompleted = true;
  updateTodayCompletionState();
  completeRoutineButton.textContent = currentLanguage === "zh" ? "打卡完成" : "Check-in complete";
  window.setTimeout(() => {
    completeRoutineButton.textContent = currentLanguage === "zh" ? "完成打卡" : "Complete check-in";
    showScreen("today");
    const unlockedMilestone = getCurrentMilestone();
    const reachedNewMilestone =
      unlockedMilestone &&
      previousDays < unlockedMilestone.days &&
      getCompletedCheckinDays() >= unlockedMilestone.days &&
      unlockedMilestone.days > lastSharedMilestoneDays;

    if (reachedNewMilestone) {
      lastSharedMilestoneDays = unlockedMilestone.days;
      window.setTimeout(() => {
        playMilestoneCelebration(unlockedMilestone.days, () => {
          openCheckinShare(`milestone-${unlockedMilestone.days}`);
        });
      }, 220);
    }
  }, 450);
});

journeyCompleteCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    app.classList.remove("journey-complete-open");
  });
});

newJourneyButton?.addEventListener("click", startNewJourney);

updateTodayCompletionState();
