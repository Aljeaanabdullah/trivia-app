import type { Translation } from './en';

/** Arabic UI strings (Modern Standard Arabic). Western digits are kept for consistency with scores. */
export const ar: Translation = {
  appName: 'BrainByte',
  tagline: 'أسئلة بلا إنترنت. بروح المستقبل.',

  // Home
  play: 'العب',
  leaderboard: 'لوحة الصدارة',
  settings: 'الإعدادات',
  welcome: (name: string) => `أهلًا، ${name}`,
  whoIsPlaying: 'من يلعب الآن؟',
  switchPlayer: 'تبديل اللاعب',
  offlineBadge: 'يعمل دون اتصال بالإنترنت',

  // Settings
  language: 'اللغة',
  appearance: 'المظهر',
  darkMode: 'داكن',
  lightMode: 'فاتح',
  languageEnglish: 'English',
  languageArabic: 'العربية',
  settingsSaved: 'تُحفظ التفضيلات على هذا الجهاز.',

  // Player
  playerTitle: 'ملف اللاعب',
  enterName: 'أدخل اسمك',
  namePlaceholder: 'اسمك',
  nameHint: (min: number, max: number) => `بالعربية أو الإنجليزية، من ${min} إلى ${max} حرفًا`,
  continue: 'متابعة',
  savedPlayers: 'اللاعبون المحفوظون',
  rename: 'إعادة تسمية',
  save: 'حفظ',
  cancel: 'إلغاء',
  active: 'نشط',
  nameRequired: 'يرجى إدخال اسم.',
  nameTooShort: (min: number) => `الحد الأدنى لطول الاسم ${min} أحرف.`,
  nameTooLong: (max: number) => `الحد الأقصى لطول الاسم ${max} حرفًا.`,
  nameInvalid: 'استخدم الحروف والأرقام والمسافات والنقاط والشرطات أو الفواصل العليا فقط.',
  nameTaken: 'هذا الاسم مستخدم من قبل لاعب آخر.',
  selectPlayer: (name: string) => `العب باسم ${name}`,
  gamesPlayed: (n: number) =>
    n === 1 ? 'لعبة واحدة' : n === 2 ? 'لعبتان' : n >= 3 && n <= 10 ? `${n} ألعاب` : `${n} لعبة`,

  // Categories
  chooseCategory: 'اختر فئة',
  searchCategories: 'ابحث في الفئات',
  noCategoryMatch: 'لا توجد فئة مطابقة لبحثك.',
  questionCount: (n: number) => `${n} سؤالًا`,

  // Game
  questionOf: (current: number, total: number) => `السؤال ${current} من ${total}`,
  score: 'النقاط',
  correct: 'إجابة صحيحة! +1',
  wrong: 'إجابة خاطئة',
  timeUp: 'انتهى الوقت!',
  correctAnswerWas: (answer: string) => `الإجابة الصحيحة: ${answer}`,
  nextQuestion: 'السؤال التالي',
  seeResults: 'عرض النتائج',
  quit: 'إنهاء اللعبة',
  secondsLeft: (n: number) => `الوقت المتبقي ${n} ث`,
  noQuestions: 'لا توجد أسئلة متاحة لهذه الفئة بعد.',
  answerOption: (letter: string, label: string) => `الخيار ${letter}: ${label}`,

  // Live questions (Open Trivia DB, English mode)
  loadingLive: 'جارٍ تحميل أسئلتك…',
  loadingLiveHint: 'نجلب 5 أسئلة جديدة لهذه الفئة.',
  liveAttribution: 'الأسئلة من Open Trivia DB (رخصة CC BY-SA 4.0)',
  liveErrorTitle: 'حدث خطأ ما',
  liveErrors: {
    network: 'لا يوجد اتصال بالإنترنت. يرجى المحاولة مجددًا.',
    timeout: 'استغرق خادم الأسئلة وقتًا طويلًا للرد. حاول مجددًا.',
    rateLimit: 'خادم الأسئلة مشغول الآن. انتظر بضع ثوانٍ ثم حاول مجددًا.',
    server: 'أرسل خادم الأسئلة ردًا غير متوقع. حاول مجددًا.',
  },
  tryAgain: 'حاول مجددًا',
  emptyTitle: 'لم يتم العثور على أسئلة لهذه الفئة.',
  emptyHint: 'لم يُرجع Open Trivia DB أسئلة كافية هذه المرة. حاول مجددًا أو اختر فئة أخرى.',
  chooseAnotherCategory: 'اختر فئة أخرى',

  // AI Quiz (OpenRouter)
  aiQuiz: 'اختبار الذكاء الاصطناعي',
  aiTopicLabel: 'عن أي موضوع تريد اختبارك؟',
  aiTopicPlaceholder: 'مثل: البراكين، مصر القديمة، Coffee',
  aiTopicHint: (min: number, max: number) => `أي موضوع بالعربية أو الإنجليزية، من ${min} إلى ${max} حرفًا.`,
  quizMe: 'اختبرني',
  aiPoweredBy: (model: string) => `الأسئلة من إعداد ${model} عبر OpenRouter`,
  aiDisclaimer: 'قد يخطئ الذكاء الاصطناعي. تُولَّد الأسئلة مباشرة ولا تُراجَع.',
  aiKeyMissingNote: 'يحتاج اختبار الذكاء الاصطناعي إلى مفتاح OpenRouter في ملف ‎.env.local‎ على هذا الحاسوب.',
  aiLoading: 'الذكاء الاصطناعي يكتب أسئلتك…',
  aiLoadingHint: (topic: string) => `5 أسئلة جديدة عن «${topic}».`,
  aiErrorTitle: 'تعذّر إنشاء اختبارك',
  aiInvalidTitle: 'تعذّرت قراءة رد الذكاء الاصطناعي',
  aiErrors: {
    missingKey: 'لم يُضبط مفتاح OpenRouter. أضفه إلى ملف ‎.env.local‎ ثم أعد تشغيل Expo.',
    paidModel: 'يُسمح بالنماذج المجانية فقط. استخدم نموذجًا ينتهي اسمه بـ ‎:free‎.',
    unauthorized: 'رُفض مفتاح OpenRouter. تحقّق من المفتاح في ملف ‎.env.local‎.',
    credits: 'يتطلب هذا الطلب رصيدًا في OpenRouter. اختر نموذجًا مجانيًا وحاول مجددًا.',
    notFound: 'لم يُعثر على النموذج. تحقّق من اسم النموذج في ملف ‎.env.local‎.',
    rateLimit: 'النموذج المجاني مشغول الآن. انتظر قليلًا ثم حاول مجددًا.',
    server: 'حدثت مشكلة في خدمة الذكاء الاصطناعي. حاول مجددًا.',
    network: 'لا يوجد اتصال بالإنترنت. يرجى المحاولة مجددًا.',
    timeout: 'استغرق الذكاء الاصطناعي وقتًا طويلًا للرد. حاول مجددًا.',
    invalidResponse: 'أرسل الذكاء الاصطناعي الأسئلة بتنسيق غير صحيح. حاول مجددًا، فالمحاولة الجديدة تنجح غالبًا.',
  },
  httpCode: (code: number) => `رمز HTTP ‏${code}`,
  newTopic: 'موضوع جديد',

  // Results
  resultsTitle: 'انتهت الجولة',
  outOf: (score: number, total: number) => `${score} من ${total}`,
  correctLabel: 'صحيحة',
  wrongLabel: 'خاطئة / انتهى وقتها',
  accuracy: 'الدقة',
  perfMessages: {
    perfect: 'أداء مثالي! أنت أسطورة BrainByte.',
    great: 'جولة رائعة! كدت تصل إلى العلامة الكاملة.',
    good: 'نتيجة جيدة. واصل التقدم!',
    low: 'محاولة طيبة. حاول مجددًا لترتقي!',
  },
  newBest: 'رقم شخصي جديد!',
  playAgain: 'العب مجددًا',
  changeCategory: 'تغيير الفئة',
  viewLeaderboard: 'عرض لوحة الصدارة',
  home: 'الرئيسية',

  // Leaderboard
  allCategories: 'الكل',
  bestPerPlayer: 'الأفضل لكل لاعب',
  allGames: 'كل الألعاب',
  emptyLeaderboard: 'لا توجد ألعاب بعد. أنهِ جولة لتتصدر القائمة!',
  rankLabel: (rank: number) => `المركز ${rank}`,

  // Accessibility
  back: 'رجوع',
};
