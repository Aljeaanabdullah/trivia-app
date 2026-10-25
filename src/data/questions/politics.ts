import type { Question } from '@/types/trivia';

export const politicsQuestions: Question[] = [
  {
    id: 'po-001',
    categoryId: 'politics',
    question: {
      en: 'How many permanent members does the UN Security Council have?',
      ar: 'كم عدد الأعضاء الدائمين في مجلس الأمن التابع للأمم المتحدة؟',
    },
    answers: {
      en: ['3', '5', '7', '10'],
      ar: ['3', '5', '7', '10'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The five permanent members are China, France, Russia, the United Kingdom and the United States.',
      ar: 'الأعضاء الدائمون الخمسة هم الصين وفرنسا وروسيا والمملكة المتحدة والولايات المتحدة.',
    },
  },
  {
    id: 'po-002',
    categoryId: 'politics',
    question: {
      en: 'In which city is the headquarters of the United Nations located?',
      ar: 'في أي مدينة يقع المقر الرئيسي لمنظمة الأمم المتحدة؟',
    },
    answers: {
      en: ['Geneva', 'Paris', 'Vienna', 'New York'],
      ar: ['جنيف', 'باريس', 'فيينا', 'نيويورك'],
    },
    correctIndex: 3,
  },
  {
    id: 'po-003',
    categoryId: 'politics',
    question: {
      en: 'In which city is the headquarters of the Arab League?',
      ar: 'في أي مدينة يقع مقر جامعة الدول العربية؟',
    },
    answers: {
      en: ['Cairo', 'Riyadh', 'Beirut', 'Amman'],
      ar: ['القاهرة', 'الرياض', 'بيروت', 'عمّان'],
    },
    correctIndex: 0,
  },
  {
    id: 'po-004',
    categoryId: 'politics',
    question: {
      en: 'What is a system of government headed by a king or queen called?',
      ar: 'ماذا يُسمّى نظام الحكم الذي يرأسه ملك أو ملكة؟',
    },
    answers: {
      en: ['Republic', 'Federation', 'Monarchy', 'Oligarchy'],
      ar: ['جمهورية', 'اتحاد فيدرالي', 'ملكية', 'أوليغارشية'],
    },
    correctIndex: 2,
  },
  {
    id: 'po-005',
    categoryId: 'politics',
    question: {
      en: 'How many branches of government does the US Constitution establish?',
      ar: 'كم عدد فروع السلطة التي ينص عليها دستور الولايات المتحدة؟',
    },
    answers: {
      en: ['2', '4', '5', '3'],
      ar: ['2', '4', '5', '3'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The three branches are the legislative, executive and judicial.',
      ar: 'الفروع الثلاثة هي السلطة التشريعية والتنفيذية والقضائية.',
    },
  },
  {
    id: 'po-006',
    categoryId: 'politics',
    question: {
      en: 'In which city does the International Court of Justice sit?',
      ar: 'في أي مدينة تنعقد محكمة العدل الدولية؟',
    },
    answers: {
      en: ['Brussels', 'The Hague', 'Geneva', 'Strasbourg'],
      ar: ['بروكسل', 'لاهاي', 'جنيف', 'ستراسبورغ'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The ICJ is the principal judicial organ of the United Nations.',
      ar: 'محكمة العدل الدولية هي الجهاز القضائي الرئيسي للأمم المتحدة.',
    },
  },
  {
    id: 'po-007',
    categoryId: 'politics',
    question: {
      en: 'Which of these countries has no single written constitution document?',
      ar: 'أي من هذه الدول ليس لديها دستور مكتوب في وثيقة واحدة؟',
    },
    answers: {
      en: ['United States', 'France', 'United Kingdom', 'Germany'],
      ar: ['الولايات المتحدة', 'فرنسا', 'المملكة المتحدة', 'ألمانيا'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The UK constitution is drawn from statutes, court rulings and conventions.',
      ar: 'يستند الدستور البريطاني إلى القوانين والأحكام القضائية والأعراف.',
    },
  },
  {
    id: 'po-008',
    categoryId: 'politics',
    question: {
      en: 'In which city is the European Commission headquartered?',
      ar: 'في أي مدينة يقع مقر المفوضية الأوروبية؟',
    },
    answers: {
      en: ['Brussels', 'Paris', 'Vienna', 'Amsterdam'],
      ar: ['بروكسل', 'باريس', 'فيينا', 'أمستردام'],
    },
    correctIndex: 0,
  },
  {
    id: 'po-009',
    categoryId: 'politics',
    question: {
      en: 'In which year was the United Nations founded?',
      ar: 'في أي عام تأسست منظمة الأمم المتحدة؟',
    },
    answers: {
      en: ['1919', '1939', '1945', '1955'],
      ar: ['1919', '1939', '1945', '1955'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The UN Charter came into force on 24 October 1945.',
      ar: 'دخل ميثاق الأمم المتحدة حيز التنفيذ في 24 أكتوبر 1945.',
    },
  },
  {
    id: 'po-010',
    categoryId: 'politics',
    question: {
      en: 'In which year was England’s Magna Carta first sealed?',
      ar: 'في أي عام خُتمت وثيقة "ماغنا كارتا" الإنجليزية لأول مرة؟',
    },
    answers: {
      en: ['1066', '1215', '1492', '1688'],
      ar: ['1066', '1215', '1492', '1688'],
    },
    correctIndex: 1,
  },
  {
    id: 'po-011',
    categoryId: 'politics',
    question: {
      en: 'How many member states make up the Gulf Cooperation Council (GCC)?',
      ar: 'كم عدد الدول الأعضاء في مجلس التعاون لدول الخليج العربية؟',
    },
    answers: {
      en: ['5', '7', '8', '6'],
      ar: ['5', '7', '8', '6'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The members are Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the UAE.',
      ar: 'الأعضاء هم البحرين والكويت وعُمان وقطر والسعودية والإمارات.',
    },
  },
  {
    id: 'po-012',
    categoryId: 'politics',
    question: {
      en: 'What is the upper chamber of the US Congress called?',
      ar: 'ما اسم الغرفة العليا في الكونغرس الأمريكي؟',
    },
    answers: {
      en: ['The Senate', 'The House of Representatives', 'The House of Lords', 'The Supreme Court'],
      ar: ['مجلس الشيوخ', 'مجلس النواب', 'مجلس اللوردات', 'المحكمة العليا'],
    },
    correctIndex: 0,
  },
  {
    id: 'po-013',
    categoryId: 'politics',
    question: {
      en: 'Which international organisation was the predecessor of the United Nations?',
      ar: 'ما المنظمة الدولية التي سبقت الأمم المتحدة؟',
    },
    answers: {
      en: ['NATO', 'The Red Cross', 'The League of Nations', 'The Commonwealth'],
      ar: ['حلف الناتو', 'الصليب الأحمر', 'عصبة الأمم', 'الكومنولث'],
    },
    correctIndex: 2,
  },
  {
    id: 'po-014',
    categoryId: 'politics',
    question: {
      en: 'The word "democracy" comes from which language?',
      ar: 'من أي لغة جاءت كلمة "ديمقراطية"؟',
    },
    answers: {
      en: ['Latin', 'Greek', 'Arabic', 'Persian'],
      ar: ['اللاتينية', 'اليونانية', 'العربية', 'الفارسية'],
    },
    correctIndex: 1,
    explanation: {
      en: 'It combines the Greek words "demos" (people) and "kratos" (power or rule).',
      ar: 'تجمع بين الكلمتين اليونانيتين "ديموس" (الشعب) و"كراتوس" (السلطة أو الحكم).',
    },
  },
  {
    id: 'po-015',
    categoryId: 'politics',
    question: {
      en: 'How long is a single term of the US presidency?',
      ar: 'كم تبلغ مدة الولاية الواحدة لرئيس الولايات المتحدة؟',
    },
    answers: {
      en: ['2 years', '5 years', '6 years', '4 years'],
      ar: ['سنتان', '5 سنوات', '6 سنوات', '4 سنوات'],
    },
    correctIndex: 3,
  },
  {
    id: 'po-016',
    categoryId: 'politics',
    question: {
      en: 'What is the name of Japan’s national parliament?',
      ar: 'ما اسم البرلمان الوطني في اليابان؟',
    },
    answers: {
      en: ['The Duma', 'The Cortes', 'The Bundestag', 'The Diet'],
      ar: ['الدوما', 'الكورتيس', 'البوندستاغ', 'الدايت'],
    },
    correctIndex: 3,
  },
];
