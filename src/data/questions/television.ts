import type { Question } from '@/types/trivia';

export const televisionQuestions: Question[] = [
  {
    id: 'tv-001',
    categoryId: 'television',
    question: {
      en: 'In "Friends", what is the name of the coffee shop where the friends often meet?',
      ar: 'في مسلسل "فريندز"، ما اسم المقهى الذي يلتقي فيه الأصدقاء عادةً؟',
    },
    answers: {
      en: ['Café Nervosa', 'Central Perk', 'The Max', 'Monk’s Café'],
      ar: ['كافيه نيرفوزا', 'سنترال بيرك', 'ذا ماكس', 'مقهى مونكس'],
    },
    correctIndex: 1,
  },
  {
    id: 'tv-002',
    categoryId: 'television',
    question: {
      en: 'Which catchphrase is associated with Sheldon Cooper in "The Big Bang Theory"?',
      ar: 'ما العبارة الشهيرة المرتبطة بشخصية شيلدون كوبر في مسلسل "نظرية الانفجار العظيم"؟',
    },
    answers: {
      en: ['D’oh!', 'How you doin’?', 'Bazinga!', 'Cowabunga!'],
      ar: ['دوه!', 'كيف حالك؟', 'بازينغا!', 'كاوابنغا!'],
    },
    correctIndex: 2,
  },
  {
    id: 'tv-003',
    categoryId: 'television',
    question: {
      en: 'In which fictional town does the Simpson family live?',
      ar: 'في أي بلدة خيالية تعيش عائلة سيمبسون؟',
    },
    answers: {
      en: ['Quahog', 'Shelbyville', 'South Park', 'Springfield'],
      ar: ['كوهوغ', 'شيلبيفيل', 'ساوث بارك', 'سبرينغفيلد'],
    },
    correctIndex: 3,
  },
  {
    id: 'tv-004',
    categoryId: 'television',
    question: {
      en: 'In which TV baking competition do contestants bake in a large white tent?',
      ar: 'في أي برنامج مسابقات للخَبز يتنافس المشاركون داخل خيمة بيضاء كبيرة؟',
    },
    answers: {
      en: ['MasterChef', 'Top Chef', 'The Great British Bake Off', 'Hell’s Kitchen'],
      ar: ['ماستر شيف', 'توب شيف', 'ذا غريت بريتش بيك أوف', 'هيلز كيتشن'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The show began on the BBC in 2010.',
      ar: 'بدأ عرض البرنامج على هيئة الإذاعة البريطانية عام 2010.',
    },
  },
  {
    id: 'tv-005',
    categoryId: 'television',
    question: {
      en: 'In "Doctor Who", what does the TARDIS look like from the outside?',
      ar: 'كيف تبدو آلة "التارديس" من الخارج؟',
    },
    answers: {
      en: ['A red telephone box', 'A blue police box', 'A London bus', 'A post box'],
      ar: ['كشك هاتف أحمر', 'كشك شرطة أزرق', 'حافلة لندنية', 'صندوق بريد'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Its disguise got stuck as a 1960s British police box, and it is bigger on the inside.',
      ar: 'علق تمويهها على شكل كشك شرطة بريطاني من ستينيات القرن العشرين، وهي أكبر من الداخل.',
    },
  },
  {
    id: 'tv-006',
    categoryId: 'television',
    question: {
      en: 'In which undersea city does SpongeBob SquarePants live?',
      ar: 'في أي مدينة تحت البحر يعيش سبونج بوب؟',
    },
    answers: {
      en: ['Atlantis', 'Coral Cove', 'Seaweed Bay', 'Bikini Bottom'],
      ar: ['أتلانتس', 'خليج المرجان', 'خليج الأعشاب البحرية', 'بيكيني بوتوم'],
    },
    correctIndex: 3,
  },
  {
    id: 'tv-007',
    categoryId: 'television',
    question: {
      en: 'Who plays Sherlock Holmes in the BBC series "Sherlock"?',
      ar: 'من يؤدي دور شيرلوك هولمز في مسلسل "شيرلوك" من إنتاج بي بي سي؟',
    },
    answers: {
      en: ['Martin Freeman', 'Tom Hiddleston', 'Benedict Cumberbatch', 'Robert Downey Jr.'],
      ar: ['مارتن فريمان', 'توم هيدلستون', 'بنديكت كمبرباتش', 'روبرت داوني جونيور'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Martin Freeman co-stars as Dr. John Watson.',
      ar: 'يشارك مارتن فريمان في البطولة بدور الدكتور جون واتسون.',
    },
  },
  {
    id: 'tv-008',
    categoryId: 'television',
    question: {
      en: 'Which naturalist narrates the BBC nature series "Planet Earth"?',
      ar: 'من عالِم الطبيعة الذي يروي سلسلة "كوكب الأرض" الوثائقية من إنتاج هيئة الإذاعة البريطانية؟',
    },
    answers: {
      en: ['David Attenborough', 'Steve Irwin', 'Jacques Cousteau', 'Bear Grylls'],
      ar: ['ديفيد أتينبرة', 'ستيف إروين', 'جاك كوستو', 'بير غريلز'],
    },
    correctIndex: 0,
  },
  {
    id: 'tv-009',
    categoryId: 'television',
    question: {
      en: 'In the US version of "The Office", which paper company do the characters work for?',
      ar: 'في النسخة الأمريكية من مسلسل "ذا أوفيس"، في أي شركة ورق تعمل الشخصيات؟',
    },
    answers: {
      en: ['Wernham Hogg', 'Dunder Mifflin', 'Initech', 'Sterling Cooper'],
      ar: ['ويرنهام هوغ', 'داندر ميفلن', 'إنيتك', 'ستيرلنغ كوبر'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The show follows the company’s branch in Scranton, Pennsylvania.',
      ar: 'يتابع المسلسل فرع الشركة في مدينة سكرانتون بولاية بنسلفانيا.',
    },
  },
  {
    id: 'tv-010',
    categoryId: 'television',
    question: {
      en: 'Which actor created and starred as the comic character Mr. Bean?',
      ar: 'من الممثل الذي ابتكر شخصية "مستر بين" الكوميدية وأدى دورها؟',
    },
    answers: {
      en: ['Hugh Laurie', 'John Cleese', 'Benny Hill', 'Rowan Atkinson'],
      ar: ['هيو لوري', 'جون كليز', 'بيني هيل', 'روان أتكينسون'],
    },
    correctIndex: 3,
  },
  {
    id: 'tv-011',
    categoryId: 'television',
    question: {
      en: 'In which year did "The Simpsons" premiere as a half-hour series?',
      ar: 'في أي عام بدأ عرض "عائلة سيمبسون" كمسلسل مدته نصف ساعة؟',
    },
    answers: {
      en: ['1985', '1993', '1989', '1995'],
      ar: ['1985', '1993', '1989', '1995'],
    },
    correctIndex: 2,
    explanation: {
      en: 'It debuted on Fox in December 1989 after appearing as shorts on another show.',
      ar: 'انطلق على قناة فوكس في ديسمبر 1989 بعد ظهوره في مقاطع قصيرة ضمن برنامج آخر.',
    },
  },
  {
    id: 'tv-012',
    categoryId: 'television',
    question: {
      en: 'What color is Elmo from "Sesame Street"?',
      ar: 'ما لون شخصية إلمو في برنامج "شارع سمسم"؟',
    },
    answers: {
      en: ['Red', 'Blue', 'Green', 'Yellow'],
      ar: ['أحمر', 'أزرق', 'أخضر', 'أصفر'],
    },
    correctIndex: 0,
  },
  {
    id: 'tv-013',
    categoryId: 'television',
    question: {
      en: 'In "Stranger Things", what is the dark parallel dimension called?',
      ar: 'في مسلسل "سترينجر ثينغز"، ما اسم البُعد الموازي المظلم؟',
    },
    answers: {
      en: ['The Shadow Realm', 'The Nether', 'The Upside Down', 'The Other Side'],
      ar: ['عالم الظلال', 'العالم السفلي', 'العالم المقلوب', 'الجانب الآخر'],
    },
    correctIndex: 2,
  },
  {
    id: 'tv-014',
    categoryId: 'television',
    question: {
      en: 'In which country did the quiz show "Who Wants to Be a Millionaire?" originate?',
      ar: 'في أي بلد نشأ برنامج المسابقات "من سيربح المليون؟"',
    },
    answers: {
      en: ['United States', 'United Kingdom', 'Australia', 'Netherlands'],
      ar: ['الولايات المتحدة', 'المملكة المتحدة', 'أستراليا', 'هولندا'],
    },
    correctIndex: 1,
    explanation: {
      en: 'It first aired on British television in 1998 and was adapted worldwide.',
      ar: 'عُرض لأول مرة على التلفزيون البريطاني عام 1998 ثم اقتُبس حول العالم.',
    },
  },
  {
    id: 'tv-015',
    categoryId: 'television',
    question: {
      en: 'In "Avatar: The Last Airbender", Aang is the last surviving member of which people?',
      ar: 'في مسلسل "أفاتار: أسطورة آنج"، آنج هو آخر من تبقّى من أي شعب؟',
    },
    answers: {
      en: ['The Water Tribe', 'The Earth Kingdom', 'The Fire Nation', 'The Air Nomads'],
      ar: ['قبيلة الماء', 'مملكة الأرض', 'أمة النار', 'بدو الهواء'],
    },
    correctIndex: 3,
  },
  {
    id: 'tv-016',
    categoryId: 'television',
    question: {
      en: 'How many seasons of "Friends" were made?',
      ar: 'كم موسمًا أُنتج من مسلسل "فريندز"؟',
    },
    answers: {
      en: ['8', '10', '9', '12'],
      ar: ['8', '10', '9', '12'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The sitcom ran from 1994 to 2004.',
      ar: 'عُرض المسلسل من عام 1994 حتى عام 2004.',
    },
  },
];
