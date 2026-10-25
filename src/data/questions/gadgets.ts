import type { Question } from '@/types/trivia';

export const gadgetsQuestions: Question[] = [
  {
    id: 'gd-001',
    categoryId: 'gadgets',
    question: {
      en: 'Who received the first US patent for the telephone in 1876?',
      ar: 'من حصل على أول براءة اختراع أمريكية للهاتف عام 1876؟',
    },
    answers: {
      en: ['Thomas Edison', 'Alexander Graham Bell', 'Guglielmo Marconi', 'Nikola Tesla'],
      ar: ['توماس إديسون', 'ألكسندر غراهام بيل', 'غولييلمو ماركوني', 'نيكولا تسلا'],
    },
    correctIndex: 1,
  },
  {
    id: 'gd-002',
    categoryId: 'gadgets',
    question: {
      en: 'Which company introduced the iPhone in 2007?',
      ar: 'أي شركة قدّمت هاتف آيفون عام 2007؟',
    },
    answers: {
      en: ['Samsung', 'Nokia', 'Apple', 'Motorola'],
      ar: ['سامسونغ', 'نوكيا', 'آبل', 'موتورولا'],
    },
    correctIndex: 2,
  },
  {
    id: 'gd-003',
    categoryId: 'gadgets',
    question: {
      en: 'Which device converts sound waves into an electrical signal?',
      ar: 'أي جهاز يحوّل الموجات الصوتية إلى إشارة كهربائية؟',
    },
    answers: {
      en: ['Loudspeaker', 'Microphone', 'Amplifier', 'Antenna'],
      ar: ['مكبر الصوت', 'الميكروفون', 'المضخّم', 'الهوائي'],
    },
    correctIndex: 1,
    explanation: {
      en: 'A loudspeaker does the opposite, turning electrical signals back into sound.',
      ar: 'يؤدي مكبر الصوت العمل المعاكس، إذ يحوّل الإشارات الكهربائية إلى صوت.',
    },
  },
  {
    id: 'gd-004',
    categoryId: 'gadgets',
    question: {
      en: 'What does LED stand for?',
      ar: 'ماذا يعني الاختصار LED؟',
    },
    answers: {
      en: ['Light Energy Device', 'Low Electric Diode', 'Laser Emission Display', 'Light-Emitting Diode'],
      ar: ['جهاز طاقة الضوء', 'صمام ثنائي منخفض الكهرباء', 'شاشة الانبعاث الليزري', 'صمام ثنائي باعث للضوء'],
    },
    correctIndex: 3,
  },
  {
    id: 'gd-005',
    categoryId: 'gadgets',
    question: {
      en: 'Which company launched the Walkman portable cassette player in 1979?',
      ar: 'أي شركة أطلقت مشغل الكاسيت المحمول "ووكمان" عام 1979؟',
    },
    answers: {
      en: ['Sony', 'Panasonic', 'Philips', 'Toshiba'],
      ar: ['سوني', 'باناسونيك', 'فيليبس', 'توشيبا'],
    },
    correctIndex: 0,
  },
  {
    id: 'gd-006',
    categoryId: 'gadgets',
    question: {
      en: 'Who developed the movable-type printing press in Europe around 1440?',
      ar: 'من طوّر آلة الطباعة بالحروف المتحركة في أوروبا نحو عام 1440؟',
    },
    answers: {
      en: ['Leonardo da Vinci', 'Galileo Galilei', 'Johannes Gutenberg', 'Isaac Newton'],
      ar: ['ليوناردو دا فينشي', 'غاليليو غاليلي', 'يوهانس غوتنبرغ', 'إسحاق نيوتن'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The Gutenberg Bible, printed in the 1450s, is one of its most famous products.',
      ar: 'يُعد كتاب غوتنبرغ المقدس، المطبوع في خمسينيات القرن الخامس عشر، من أشهر ما أنتجته.',
    },
  },
  {
    id: 'gd-007',
    categoryId: 'gadgets',
    question: {
      en: 'What does GPS stand for?',
      ar: 'ماذا يعني الاختصار GPS؟',
    },
    answers: {
      en: ['General Positioning Service', 'Global Positioning System', 'Geographic Pointing Satellite', 'Global Path Signal'],
      ar: ['خدمة التموضع العامة', 'نظام التموضع العالمي', 'القمر الصناعي للتوجيه الجغرافي', 'إشارة المسار العالمية'],
    },
    correctIndex: 1,
  },
  {
    id: 'gd-008',
    categoryId: 'gadgets',
    question: {
      en: 'The Polaroid company became famous for which product?',
      ar: 'اشتهرت شركة بولارويد بأي منتج؟',
    },
    answers: {
      en: ['Instant cameras', 'Pocket calculators', 'Video game consoles', 'Electric razors'],
      ar: ['الكاميرات الفورية', 'الآلات الحاسبة الجيبية', 'أجهزة ألعاب الفيديو', 'ماكينات الحلاقة الكهربائية'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Its cameras produced a developed print within minutes.',
      ar: 'كانت كاميراتها تُخرج صورة مطبوعة جاهزة خلال دقائق.',
    },
  },
  {
    id: 'gd-009',
    categoryId: 'gadgets',
    question: {
      en: 'What does USB stand for?',
      ar: 'ماذا يعني الاختصار USB؟',
    },
    answers: {
      en: ['Universal Serial Bus', 'Unified System Board', 'Universal Storage Block', 'User Signal Bridge'],
      ar: ['الناقل التسلسلي العام', 'لوحة النظام الموحدة', 'كتلة التخزين العامة', 'جسر إشارة المستخدم'],
    },
    correctIndex: 0,
  },
  {
    id: 'gd-010',
    categoryId: 'gadgets',
    question: {
      en: 'Which inventor patented dynamite in 1867?',
      ar: 'أي مخترع حصل على براءة اختراع الديناميت عام 1867؟',
    },
    answers: {
      en: ['James Watt', 'Michael Faraday', 'Alfred Nobel', 'Thomas Edison'],
      ar: ['جيمس واط', 'مايكل فاراداي', 'ألفريد نوبل', 'توماس إديسون'],
    },
    correctIndex: 2,
    explanation: {
      en: 'His fortune later funded the Nobel Prizes.',
      ar: 'موّلت ثروته لاحقًا جوائز نوبل.',
    },
  },
  {
    id: 'gd-011',
    categoryId: 'gadgets',
    question: {
      en: 'Which instrument is used to measure atmospheric pressure?',
      ar: 'ما الجهاز المستخدم لقياس الضغط الجوي؟',
    },
    answers: {
      en: ['Thermometer', 'Barometer', 'Hygrometer', 'Anemometer'],
      ar: ['مقياس الحرارة (الترمومتر)', 'مقياس الضغط الجوي (البارومتر)', 'مقياس الرطوبة (الهيغرومتر)', 'مقياس سرعة الرياح (الأنيمومتر)'],
    },
    correctIndex: 1,
  },
  {
    id: 'gd-012',
    categoryId: 'gadgets',
    question: {
      en: 'Who invented the phonograph in 1877?',
      ar: 'من اخترع الفونوغراف عام 1877؟',
    },
    answers: {
      en: ['Alexander Graham Bell', 'Nikola Tesla', 'Guglielmo Marconi', 'Thomas Edison'],
      ar: ['ألكسندر غراهام بيل', 'نيكولا تسلا', 'غولييلمو ماركوني', 'توماس إديسون'],
    },
    correctIndex: 3,
    explanation: {
      en: 'It was the first device able to both record and play back sound.',
      ar: 'كان أول جهاز قادر على تسجيل الصوت وإعادة تشغيله.',
    },
  },
  {
    id: 'gd-013',
    categoryId: 'gadgets',
    question: {
      en: 'What does Wi-Fi use to transmit data?',
      ar: 'ما الذي تستخدمه تقنية Wi-Fi لنقل البيانات؟',
    },
    answers: {
      en: ['Sound waves', 'X-rays', 'Radio waves', 'Ultraviolet light'],
      ar: ['الموجات الصوتية', 'الأشعة السينية', 'الموجات الراديوية', 'الأشعة فوق البنفسجية'],
    },
    correctIndex: 2,
  },
  {
    id: 'gd-014',
    categoryId: 'gadgets',
    question: {
      en: 'Which Scottish inventor publicly demonstrated a working television in 1926?',
      ar: 'أي مخترع اسكتلندي عرض علنًا جهاز تلفاز يعمل عام 1926؟',
    },
    answers: {
      en: ['John Logie Baird', 'James Watt', 'Alexander Graham Bell', 'Guglielmo Marconi'],
      ar: ['جون لوجي بيرد', 'جيمس واط', 'ألكسندر غراهام بيل', 'غولييلمو ماركوني'],
    },
    correctIndex: 0,
  },
  {
    id: 'gd-015',
    categoryId: 'gadgets',
    question: {
      en: 'What does "QR" stand for in QR code?',
      ar: 'ماذا يعني "QR" في رمز QR؟',
    },
    answers: {
      en: ['Quality Reader', 'Quick Read', 'Query Record', 'Quick Response'],
      ar: ['قارئ الجودة', 'القراءة السريعة', 'سجل الاستعلام', 'الاستجابة السريعة'],
    },
    correctIndex: 3,
    explanation: {
      en: 'QR codes were invented in Japan in 1994 to track car parts.',
      ar: 'اختُرعت رموز QR في اليابان عام 1994 لتتبّع قطع غيار السيارات.',
    },
  },
  {
    id: 'gd-016',
    categoryId: 'gadgets',
    question: {
      en: 'Which instrument did Galileo improve and use to discover Jupiter’s four largest moons?',
      ar: 'ما الأداة التي طوّرها غاليليو واستخدمها لاكتشاف أكبر أربعة أقمار للمشتري؟',
    },
    answers: {
      en: ['Microscope', 'Telescope', 'Compass', 'Prism'],
      ar: ['المجهر', 'التلسكوب (المِقراب)', 'البوصلة', 'المنشور'],
    },
    correctIndex: 1,
  },
];
