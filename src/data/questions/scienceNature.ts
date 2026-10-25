import type { Question } from '@/types/trivia';

export const scienceNatureQuestions: Question[] = [
  {
    id: 'sn-001',
    categoryId: 'science-nature',
    question: {
      en: 'Which gas do plants absorb from the air for photosynthesis?',
      ar: 'ما الغاز الذي تمتصه النباتات من الهواء لعملية البناء الضوئي؟',
    },
    answers: {
      en: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
      ar: ['الأكسجين', 'ثاني أكسيد الكربون', 'النيتروجين', 'الهيدروجين'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Plants use carbon dioxide, water and sunlight to make glucose and release oxygen.',
      ar: 'تستخدم النباتات ثاني أكسيد الكربون والماء وضوء الشمس لصنع الغلوكوز وتطلق الأكسجين.',
    },
  },
  {
    id: 'sn-002',
    categoryId: 'science-nature',
    question: {
      en: 'How many bones are in the adult human body?',
      ar: 'كم عدد العظام في جسم الإنسان البالغ؟',
    },
    answers: {
      en: ['206', '186', '212', '300'],
      ar: ['206', '186', '212', '300'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Babies are born with around 300 bones, many of which fuse as they grow.',
      ar: 'يولد الرضع بنحو 300 عظمة يلتحم كثير منها مع النمو.',
    },
  },
  {
    id: 'sn-003',
    categoryId: 'science-nature',
    question: {
      en: 'What is the chemical symbol for iron?',
      ar: 'ما الرمز الكيميائي للحديد؟',
    },
    answers: {
      en: ['Ir', 'In', 'Fe', 'I'],
      ar: ['Ir', 'In', 'Fe', 'I'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Fe comes from "ferrum", the Latin word for iron.',
      ar: 'الرمز Fe مأخوذ من الكلمة اللاتينية "ferrum" وتعني الحديد.',
    },
  },
  {
    id: 'sn-004',
    categoryId: 'science-nature',
    question: {
      en: 'Which cell organelle is known as the "powerhouse of the cell"?',
      ar: 'أي عُضيّة خلوية تُعرف بأنها "مصنع الطاقة في الخلية"؟',
    },
    answers: {
      en: ['Nucleus', 'Ribosome', 'Golgi apparatus', 'Mitochondrion'],
      ar: ['النواة', 'الريبوسوم', 'جهاز غولجي', 'الميتوكوندريا'],
    },
    correctIndex: 3,
  },
  {
    id: 'sn-005',
    categoryId: 'science-nature',
    question: {
      en: 'Which planet is closest to the Sun?',
      ar: 'ما الكوكب الأقرب إلى الشمس؟',
    },
    answers: {
      en: ['Venus', 'Mercury', 'Mars', 'Earth'],
      ar: ['الزهرة', 'عطارد', 'المريخ', 'الأرض'],
    },
    correctIndex: 1,
  },
  {
    id: 'sn-006',
    categoryId: 'science-nature',
    question: {
      en: 'Approximately how fast does light travel in a vacuum?',
      ar: 'ما السرعة التقريبية للضوء في الفراغ؟',
    },
    answers: {
      en: ['300,000 km/s', '30,000 km/s', '3,000 km/s', '3,000,000 km/s'],
      ar: ['300,000 كم/ث', '30,000 كم/ث', '3,000 كم/ث', '3,000,000 كم/ث'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The exact value is 299,792,458 metres per second.',
      ar: 'القيمة الدقيقة هي 299,792,458 مترًا في الثانية.',
    },
  },
  {
    id: 'sn-007',
    categoryId: 'science-nature',
    question: {
      en: 'What is the largest organ of the human body?',
      ar: 'ما أكبر عضو في جسم الإنسان؟',
    },
    answers: {
      en: ['Liver', 'Brain', 'Skin', 'Lungs'],
      ar: ['الكبد', 'الدماغ', 'الجلد', 'الرئتان'],
    },
    correctIndex: 2,
  },
  {
    id: 'sn-008',
    categoryId: 'science-nature',
    question: {
      en: 'Which blood cells carry oxygen around the body?',
      ar: 'ما خلايا الدم التي تنقل الأكسجين في الجسم؟',
    },
    answers: {
      en: ['White blood cells', 'Platelets', 'Plasma cells', 'Red blood cells'],
      ar: ['خلايا الدم البيضاء', 'الصفائح الدموية', 'خلايا البلازما', 'خلايا الدم الحمراء'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Red blood cells contain hemoglobin, a protein that binds oxygen.',
      ar: 'تحتوي خلايا الدم الحمراء على الهيموغلوبين، وهو بروتين يرتبط بالأكسجين.',
    },
  },
  {
    id: 'sn-009',
    categoryId: 'science-nature',
    question: {
      en: 'How many chambers does the human heart have?',
      ar: 'كم عدد حجرات قلب الإنسان؟',
    },
    answers: {
      en: ['2', '3', '4', '5'],
      ar: ['2', '3', '4', '5'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The heart has two atria and two ventricles.',
      ar: 'يتكون القلب من أذينين وبطينين.',
    },
  },
  {
    id: 'sn-010',
    categoryId: 'science-nature',
    question: {
      en: 'Which gas makes up most of Earth’s atmosphere?',
      ar: 'ما الغاز الذي يشكّل الجزء الأكبر من الغلاف الجوي للأرض؟',
    },
    answers: {
      en: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
      ar: ['النيتروجين', 'الأكسجين', 'ثاني أكسيد الكربون', 'الأرغون'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Nitrogen makes up about 78% of dry air.',
      ar: 'يشكّل النيتروجين نحو 78% من الهواء الجاف.',
    },
  },
  {
    id: 'sn-011',
    categoryId: 'science-nature',
    question: {
      en: 'What is the pH of pure water at 25 °C?',
      ar: 'ما الرقم الهيدروجيني (pH) للماء النقي عند 25 °C؟',
    },
    answers: {
      en: ['0', '5', '14', '7'],
      ar: ['0', '5', '14', '7'],
    },
    correctIndex: 3,
    explanation: {
      en: 'A pH of 7 is neutral: neither acidic nor basic.',
      ar: 'الرقم 7 يعني أن المحلول متعادل، لا حمضي ولا قاعدي.',
    },
  },
  {
    id: 'sn-012',
    categoryId: 'science-nature',
    question: {
      en: 'What is the atomic number of carbon?',
      ar: 'ما العدد الذري للكربون؟',
    },
    answers: {
      en: ['12', '6', '8', '14'],
      ar: ['12', '6', '8', '14'],
    },
    correctIndex: 1,
  },
  {
    id: 'sn-013',
    categoryId: 'science-nature',
    question: {
      en: 'Which scientist discovered penicillin in 1928?',
      ar: 'أي عالم اكتشف البنسلين عام 1928؟',
    },
    answers: {
      en: ['Louis Pasteur', 'Robert Koch', 'Alexander Fleming', 'Marie Curie'],
      ar: ['لويس باستور', 'روبرت كوخ', 'ألكسندر فليمنغ', 'ماري كوري'],
    },
    correctIndex: 2,
  },
  {
    id: 'sn-014',
    categoryId: 'science-nature',
    question: {
      en: 'What is the closest star to Earth?',
      ar: 'ما أقرب نجم إلى الأرض؟',
    },
    answers: {
      en: ['Proxima Centauri', 'Sirius', 'The Sun', 'Polaris'],
      ar: ['بروكسيما قنطورس', 'الشعرى اليمانية', 'الشمس', 'النجم القطبي'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Proxima Centauri is the closest star to the Sun, about 4.2 light-years away.',
      ar: 'بروكسيما قنطورس هو أقرب نجم إلى الشمس، ويبعد عنها نحو 4.2 سنة ضوئية.',
    },
  },
  {
    id: 'sn-015',
    categoryId: 'science-nature',
    question: {
      en: 'Which pigment gives plants their green color?',
      ar: 'ما الصبغة التي تمنح النباتات لونها الأخضر؟',
    },
    answers: {
      en: ['Melanin', 'Carotene', 'Hemoglobin', 'Chlorophyll'],
      ar: ['الميلانين', 'الكاروتين', 'الهيموغلوبين', 'الكلوروفيل'],
    },
    correctIndex: 3,
  },
  {
    id: 'sn-016',
    categoryId: 'science-nature',
    question: {
      en: 'What is the chemical formula of table salt?',
      ar: 'ما الصيغة الكيميائية لملح الطعام؟',
    },
    answers: {
      en: ['NaCl', 'KCl', 'NaOH', 'CaCO3'],
      ar: ['NaCl', 'KCl', 'NaOH', 'CaCO3'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Table salt is sodium chloride, made of sodium and chlorine.',
      ar: 'ملح الطعام هو كلوريد الصوديوم المكوّن من الصوديوم والكلور.',
    },
  },
];
