import type { Question } from '@/types/trivia';

export const computersQuestions: Question[] = [
  {
    id: 'cp-001',
    categoryId: 'computers',
    question: {
      en: 'What does CPU stand for?',
      ar: 'ماذا يعني الاختصار CPU؟',
    },
    answers: {
      en: ['Central Processing Unit', 'Computer Power Unit', 'Central Program Utility', 'Core Processing Unit'],
      ar: ['وحدة المعالجة المركزية', 'وحدة طاقة الحاسوب', 'أداة البرامج المركزية', 'وحدة المعالجة الأساسية'],
    },
    correctIndex: 0,
  },
  {
    id: 'cp-002',
    categoryId: 'computers',
    question: {
      en: 'How many bits are in one byte?',
      ar: 'كم بتًا في البايت الواحد؟',
    },
    answers: {
      en: ['4', '16', '8', '10'],
      ar: ['4', '16', '8', '10'],
    },
    correctIndex: 2,
  },
  {
    id: 'cp-003',
    categoryId: 'computers',
    question: {
      en: 'What does HTML stand for?',
      ar: 'ماذا يعني الاختصار HTML؟',
    },
    answers: {
      en: ['High Transfer Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'HyperText Machine Language'],
      ar: ['لغة ترميز النقل العالي', 'لغة ترميز النص التشعبي', 'لغة ترميز الأدوات المنزلية', 'لغة آلة النص التشعبي'],
    },
    correctIndex: 1,
    explanation: {
      en: 'HTML is the standard language used to structure web pages.',
      ar: 'HTML هي اللغة القياسية المستخدمة لبناء هيكل صفحات الويب.',
    },
  },
  {
    id: 'cp-004',
    categoryId: 'computers',
    question: {
      en: 'Which two digits are used in the binary number system?',
      ar: 'ما الرقمان المستخدمان في النظام الثنائي؟',
    },
    answers: {
      en: ['1 and 2', '0 and 9', '0 and 1', '1 and 10'],
      ar: ['1 و 2', '0 و 9', '0 و 1', '1 و 10'],
    },
    correctIndex: 2,
  },
  {
    id: 'cp-005',
    categoryId: 'computers',
    question: {
      en: 'Who is often called the first computer programmer?',
      ar: 'من التي يُطلق عليها غالبًا لقب أول مبرمجة حاسوب؟',
    },
    answers: {
      en: ['Grace Hopper', 'Hedy Lamarr', 'Marie Curie', 'Ada Lovelace'],
      ar: ['غريس هوبر', 'هيدي لامار', 'ماري كوري', 'آدا لوفليس'],
    },
    correctIndex: 3,
    explanation: {
      en: 'In the 1840s she wrote an algorithm for Charles Babbage’s Analytical Engine.',
      ar: 'كتبت في أربعينيات القرن التاسع عشر خوارزمية للمحرك التحليلي الذي صممه تشارلز باباج.',
    },
  },
  {
    id: 'cp-006',
    categoryId: 'computers',
    question: {
      en: 'Which mathematician proposed the "Imitation Game", now called the Turing test?',
      ar: 'أي عالم رياضيات اقترح "لعبة المحاكاة" المعروفة اليوم باختبار تورنغ؟',
    },
    answers: {
      en: ['Alan Turing', 'John von Neumann', 'Claude Shannon', 'Charles Babbage'],
      ar: ['آلان تورنغ', 'جون فون نيومان', 'كلود شانون', 'تشارلز باباج'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Turing described it in his 1950 paper "Computing Machinery and Intelligence".',
      ar: 'وصفه تورنغ في ورقته البحثية "الآلات الحاسبة والذكاء" عام 1950.',
    },
  },
  {
    id: 'cp-007',
    categoryId: 'computers',
    question: {
      en: 'What does RAM stand for?',
      ar: 'ماذا يعني الاختصار RAM؟',
    },
    answers: {
      en: ['Read Access Memory', 'Random Access Memory', 'Rapid Action Memory', 'Run All Memory'],
      ar: ['ذاكرة الوصول للقراءة', 'ذاكرة الوصول العشوائي', 'ذاكرة الحركة السريعة', 'ذاكرة تشغيل الكل'],
    },
    correctIndex: 1,
  },
  {
    id: 'cp-008',
    categoryId: 'computers',
    question: {
      en: 'What is the binary number 1010 in decimal?',
      ar: 'ما قيمة العدد الثنائي 1010 في النظام العشري؟',
    },
    answers: {
      en: ['8', '12', '5', '10'],
      ar: ['8', '12', '5', '10'],
    },
    correctIndex: 3,
    explanation: {
      en: '1010 = 8 + 0 + 2 + 0 = 10.',
      ar: '1010 = 8 + 0 + 2 + 0 = 10.',
    },
  },
  {
    id: 'cp-009',
    categoryId: 'computers',
    question: {
      en: 'Which company developed the Windows operating system?',
      ar: 'أي شركة طوّرت نظام التشغيل ويندوز؟',
    },
    answers: {
      en: ['Apple', 'IBM', 'Microsoft', 'Google'],
      ar: ['آبل', 'آي بي إم', 'مايكروسوفت', 'غوغل'],
    },
    correctIndex: 2,
  },
  {
    id: 'cp-010',
    categoryId: 'computers',
    question: {
      en: 'What does URL stand for?',
      ar: 'ماذا يعني الاختصار URL؟',
    },
    answers: {
      en: ['Uniform Resource Locator', 'Universal Routing Link', 'User Resource Library', 'Unified Remote Login'],
      ar: ['محدد موقع الموارد الموحد', 'رابط التوجيه العالمي', 'مكتبة موارد المستخدم', 'تسجيل الدخول الموحد عن بُعد'],
    },
    correctIndex: 0,
  },
  {
    id: 'cp-011',
    categoryId: 'computers',
    question: {
      en: 'Which programming language was created by Guido van Rossum?',
      ar: 'ما لغة البرمجة التي ابتكرها غيدو فان روسوم؟',
    },
    answers: {
      en: ['Java', 'Ruby', 'C++', 'Python'],
      ar: ['جافا', 'روبي', 'C++', 'بايثون'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Python was first released in 1991.',
      ar: 'صدرت بايثون لأول مرة عام 1991.',
    },
  },
  {
    id: 'cp-012',
    categoryId: 'computers',
    question: {
      en: 'Who invented the World Wide Web?',
      ar: 'من اخترع الشبكة العالمية (الويب)؟',
    },
    answers: {
      en: ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Mark Zuckerberg'],
      ar: ['بيل غيتس', 'تيم بيرنرز لي', 'ستيف جوبز', 'مارك زوكربيرغ'],
    },
    correctIndex: 1,
    explanation: {
      en: 'He proposed it in 1989 while working at CERN.',
      ar: 'اقترحها عام 1989 أثناء عمله في مختبر سيرن (CERN).',
    },
  },
  {
    id: 'cp-013',
    categoryId: 'computers',
    question: {
      en: 'What does GUI stand for?',
      ar: 'ماذا يعني الاختصار GUI؟',
    },
    answers: {
      en: ['General User Input', 'Global Unit Interface', 'Graphical User Interface', 'Guided Utility Index'],
      ar: ['مدخلات المستخدم العامة', 'واجهة الوحدة العالمية', 'واجهة المستخدم الرسومية', 'فهرس الأدوات الموجّه'],
    },
    correctIndex: 2,
  },
  {
    id: 'cp-014',
    categoryId: 'computers',
    question: {
      en: 'What is the base of the hexadecimal number system?',
      ar: 'ما أساس النظام الست عشري؟',
    },
    answers: {
      en: ['16', '8', '12', '6'],
      ar: ['16', '8', '12', '6'],
    },
    correctIndex: 0,
    explanation: {
      en: 'It uses the digits 0–9 and the letters A–F.',
      ar: 'يستخدم الأرقام 0–9 والحروف A–F.',
    },
  },
  {
    id: 'cp-015',
    categoryId: 'computers',
    question: {
      en: 'Who created the Linux kernel in 1991?',
      ar: 'من أنشأ نواة لينكس عام 1991؟',
    },
    answers: {
      en: ['Dennis Ritchie', 'Linus Torvalds', 'Steve Wozniak', 'Bill Gates'],
      ar: ['دينيس ريتشي', 'لينوس تورفالدس', 'ستيف وزنياك', 'بيل غيتس'],
    },
    correctIndex: 1,
  },
  {
    id: 'cp-016',
    categoryId: 'computers',
    question: {
      en: 'Which logic gate outputs 1 only when both of its inputs are 1?',
      ar: 'أي بوابة منطقية تُخرج 1 فقط عندما يكون كلا مدخليها 1؟',
    },
    answers: {
      en: ['OR', 'XOR', 'NOT', 'AND'],
      ar: ['OR (أو)', 'XOR (أو الحصرية)', 'NOT (النفي)', 'AND (و)'],
    },
    correctIndex: 3,
  },
];
