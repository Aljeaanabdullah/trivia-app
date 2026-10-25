import type { Question } from '@/types/trivia';

export const generalKnowledgeQuestions: Question[] = [
  {
    id: 'gk-001',
    categoryId: 'general-knowledge',
    question: {
      en: 'What is the largest planet in our solar system?',
      ar: 'ما أكبر كوكب في مجموعتنا الشمسية؟',
    },
    answers: {
      en: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
      ar: ['المشتري', 'زحل', 'نبتون', 'الأرض'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Jupiter is more than twice as massive as all the other planets combined.',
      ar: 'كتلة المشتري أكبر من ضعف كتلة جميع الكواكب الأخرى مجتمعة.',
    },
  },
  {
    id: 'gk-002',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many sides does a hexagon have?',
      ar: 'كم عدد أضلاع الشكل السداسي؟',
    },
    answers: {
      en: ['5', '6', '7', '8'],
      ar: ['5', '6', '7', '8'],
    },
    correctIndex: 1,
  },
  {
    id: 'gk-003',
    categoryId: 'general-knowledge',
    question: {
      en: 'What is the chemical symbol for gold?',
      ar: 'ما الرمز الكيميائي للذهب؟',
    },
    answers: {
      en: ['Ag', 'Gd', 'Au', 'Go'],
      ar: ['Ag', 'Gd', 'Au', 'Go'],
    },
    correctIndex: 2,
    explanation: {
      en: '"Au" comes from the Latin word for gold, "aurum".',
      ar: 'الرمز "Au" مأخوذ من الكلمة اللاتينية "aurum" وتعني الذهب.',
    },
  },
  {
    id: 'gk-004',
    categoryId: 'general-knowledge',
    question: {
      en: 'Which is the largest ocean on Earth?',
      ar: 'ما أكبر محيط على كوكب الأرض؟',
    },
    answers: {
      en: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      ar: ['المحيط الأطلسي', 'المحيط الهندي', 'المحيط المتجمد الشمالي', 'المحيط الهادئ'],
    },
    correctIndex: 3,
  },
  {
    id: 'gk-005',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many minutes are there in one day?',
      ar: 'كم دقيقة في اليوم الواحد؟',
    },
    answers: {
      en: ['1,240', '1,340', '1,440', '1,540'],
      ar: ['1,240', '1,340', '1,440', '1,540'],
    },
    correctIndex: 2,
    explanation: {
      en: '24 hours × 60 minutes = 1,440 minutes.',
      ar: '24 ساعة × 60 دقيقة = 1,440 دقيقة.',
    },
  },
  {
    id: 'gk-006',
    categoryId: 'general-knowledge',
    question: {
      en: 'What is the hardest naturally occurring substance?',
      ar: 'ما أصلب مادة موجودة في الطبيعة؟',
    },
    answers: {
      en: ['Quartz', 'Diamond', 'Iron', 'Granite'],
      ar: ['الكوارتز', 'الألماس', 'الحديد', 'الجرانيت'],
    },
    correctIndex: 1,
  },
  {
    id: 'gk-007',
    categoryId: 'general-knowledge',
    question: {
      en: 'Which colour do you get by mixing blue and yellow paint?',
      ar: 'ما اللون الناتج عن خلط الطلاء الأزرق بالأصفر؟',
    },
    answers: {
      en: ['Green', 'Purple', 'Orange', 'Brown'],
      ar: ['الأخضر', 'البنفسجي', 'البرتقالي', 'البني'],
    },
    correctIndex: 0,
  },
  {
    id: 'gk-008',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many days are there in a leap year?',
      ar: 'كم عدد أيام السنة الكبيسة؟',
    },
    answers: {
      en: ['364', '365', '366', '367'],
      ar: ['364', '365', '366', '367'],
    },
    correctIndex: 2,
    explanation: {
      en: 'A leap year adds 29 February, giving 366 days.',
      ar: 'تضيف السنة الكبيسة يوم 29 فبراير فيصبح عدد أيامها 366 يومًا.',
    },
  },
  {
    id: 'gk-009',
    categoryId: 'general-knowledge',
    question: {
      en: 'At what temperature does pure water freeze at sea level?',
      ar: 'عند أي درجة حرارة يتجمد الماء النقي عند مستوى سطح البحر؟',
    },
    answers: {
      en: ['0 °C', '4 °C', '-10 °C', '32 °C'],
      ar: ['0 °م', '4 °م', '-10 °م', '32 °م'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Water freezes at 0 °C, which equals 32 °F.',
      ar: 'يتجمد الماء عند 0 درجة مئوية، أي ما يعادل 32 درجة فهرنهايت.',
    },
  },
  {
    id: 'gk-010',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many hours are there in one week?',
      ar: 'كم ساعة في الأسبوع الواحد؟',
    },
    answers: {
      en: ['148', '158', '168', '178'],
      ar: ['148', '158', '168', '178'],
    },
    correctIndex: 2,
    explanation: {
      en: '7 days × 24 hours = 168 hours.',
      ar: '7 أيام × 24 ساعة = 168 ساعة.',
    },
  },
  {
    id: 'gk-011',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many months of the year have 31 days?',
      ar: 'كم شهرًا في السنة يتكون من 31 يومًا؟',
    },
    answers: {
      en: ['5', '6', '7', '8'],
      ar: ['5', '6', '7', '8'],
    },
    correctIndex: 2,
    explanation: {
      en: 'January, March, May, July, August, October and December each have 31 days.',
      ar: 'يناير ومارس ومايو ويوليو وأغسطس وأكتوبر وديسمبر كلها من 31 يومًا.',
    },
  },
  {
    id: 'gk-012',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many centimetres are there in one metre?',
      ar: 'كم سنتيمترًا في المتر الواحد؟',
    },
    answers: {
      en: ['100', '10', '1,000', '60'],
      ar: ['100', '10', '1,000', '60'],
    },
    correctIndex: 0,
  },
  {
    id: 'gk-013',
    categoryId: 'general-knowledge',
    question: {
      en: 'What colour is the circle in the middle of Japan’s flag?',
      ar: 'ما لون الدائرة في وسط علم اليابان؟',
    },
    answers: {
      en: ['Yellow', 'Blue', 'Black', 'Red'],
      ar: ['أصفر', 'أزرق', 'أسود', 'أحمر'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The red disc on a white background represents the sun.',
      ar: 'يرمز القرص الأحمر على الخلفية البيضاء إلى الشمس.',
    },
  },
  {
    id: 'gk-014',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many letters are in the Arabic alphabet?',
      ar: 'كم عدد حروف الأبجدية العربية؟',
    },
    answers: {
      en: ['24', '28', '26', '32'],
      ar: ['24', '28', '26', '32'],
    },
    correctIndex: 1,
  },
  {
    id: 'gk-015',
    categoryId: 'general-knowledge',
    question: {
      en: 'In which direction does the Sun rise?',
      ar: 'من أي اتجاه تشرق الشمس؟',
    },
    answers: {
      en: ['West', 'North', 'East', 'South'],
      ar: ['الغرب', 'الشمال', 'الشرق', 'الجنوب'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Earth spins from west to east, so the Sun appears to rise in the east.',
      ar: 'تدور الأرض من الغرب إلى الشرق، لذلك تبدو الشمس وكأنها تشرق من الشرق.',
    },
  },
  {
    id: 'gk-016',
    categoryId: 'general-knowledge',
    question: {
      en: 'How many zeros are in the number one million?',
      ar: 'كم صفرًا في العدد مليون؟',
    },
    answers: {
      en: ['5', '6', '7', '9'],
      ar: ['5', '6', '7', '9'],
    },
    correctIndex: 1,
    explanation: {
      en: 'One million is written as 1,000,000.',
      ar: 'يُكتب المليون هكذا: 1,000,000.',
    },
  },
];
