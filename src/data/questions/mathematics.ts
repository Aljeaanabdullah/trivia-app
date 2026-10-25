import type { Question } from '@/types/trivia';

export const mathematicsQuestions: Question[] = [
  {
    id: 'ma-001',
    categoryId: 'mathematics',
    question: {
      en: 'What is the value of pi (π) rounded to two decimal places?',
      ar: 'ما قيمة العدد باي (π) مقرّبة إلى منزلتين عشريتين؟',
    },
    answers: {
      en: ['3.14', '3.41', '3.12', '3.16'],
      ar: ['3.14', '3.41', '3.12', '3.16'],
    },
    correctIndex: 0,
    explanation: {
      en: 'π is the ratio of a circle’s circumference to its diameter, about 3.14159.',
      ar: 'π هو نسبة محيط الدائرة إلى قطرها، ويساوي نحو 3.14159.',
    },
  },
  {
    id: 'ma-002',
    categoryId: 'mathematics',
    question: {
      en: 'What is the sum of the interior angles of a triangle?',
      ar: 'ما مجموع الزوايا الداخلية للمثلث؟',
    },
    answers: {
      en: ['90°', '360°', '180°', '270°'],
      ar: ['90°', '360°', '180°', '270°'],
    },
    correctIndex: 2,
  },
  {
    id: 'ma-003',
    categoryId: 'mathematics',
    question: {
      en: 'What is 7 × 8?',
      ar: 'كم يساوي 7 × 8؟',
    },
    answers: {
      en: ['54', '56', '63', '48'],
      ar: ['54', '56', '63', '48'],
    },
    correctIndex: 1,
  },
  {
    id: 'ma-004',
    categoryId: 'mathematics',
    question: {
      en: 'What is the smallest prime number?',
      ar: 'ما أصغر عدد أولي؟',
    },
    answers: {
      en: ['0', '1', '3', '2'],
      ar: ['0', '1', '3', '2'],
    },
    correctIndex: 3,
    explanation: {
      en: '2 is also the only even prime number; 1 is not considered prime.',
      ar: 'العدد 2 هو أيضًا العدد الأولي الزوجي الوحيد، والعدد 1 لا يُعدّ أوليًا.',
    },
  },
  {
    id: 'ma-005',
    categoryId: 'mathematics',
    question: {
      en: 'What is 15% of 200?',
      ar: 'كم يساوي 15% من 200؟',
    },
    answers: {
      en: ['15', '20', '30', '35'],
      ar: ['15', '20', '30', '35'],
    },
    correctIndex: 2,
    explanation: {
      en: '0.15 × 200 = 30.',
      ar: '0.15 × 200 = 30.',
    },
  },
  {
    id: 'ma-006',
    categoryId: 'mathematics',
    question: {
      en: 'How many sides does an octagon have?',
      ar: 'كم ضلعًا للمضلع الثماني؟',
    },
    answers: {
      en: ['8', '6', '10', '12'],
      ar: ['8', '6', '10', '12'],
    },
    correctIndex: 0,
  },
  {
    id: 'ma-007',
    categoryId: 'mathematics',
    question: {
      en: 'What is 2 to the power of 10?',
      ar: 'كم يساوي 2 مرفوعًا للقوة 10؟',
    },
    answers: {
      en: ['512', '1000', '2048', '1024'],
      ar: ['512', '1000', '2048', '1024'],
    },
    correctIndex: 3,
  },
  {
    id: 'ma-008',
    categoryId: 'mathematics',
    question: {
      en: 'Which formula gives the area of a circle with radius r?',
      ar: 'ما الصيغة التي تعطي مساحة دائرة نصف قطرها r؟',
    },
    answers: {
      en: ['2πr', 'πr²', '2πr²', '4πr²'],
      ar: ['2πr', 'πr²', '2πr²', '4πr²'],
    },
    correctIndex: 1,
    explanation: {
      en: '2πr is the circumference, not the area.',
      ar: 'الصيغة 2πr تعطي المحيط وليس المساحة.',
    },
  },
  {
    id: 'ma-009',
    categoryId: 'mathematics',
    question: {
      en: 'What is the cube of 3 (3³)?',
      ar: 'ما مكعب العدد 3 (3³)؟',
    },
    answers: {
      en: ['9', '27', '81', '18'],
      ar: ['9', '27', '81', '18'],
    },
    correctIndex: 1,
  },
  {
    id: 'ma-010',
    categoryId: 'mathematics',
    question: {
      en: 'What value does the Roman numeral L represent?',
      ar: 'ما القيمة التي يمثلها الرقم الروماني L؟',
    },
    answers: {
      en: ['5', '100', '50', '500'],
      ar: ['5', '100', '50', '500'],
    },
    correctIndex: 2,
  },
  {
    id: 'ma-011',
    categoryId: 'mathematics',
    question: {
      en: 'What is 0! (zero factorial)?',
      ar: 'كم يساوي 0! (مضروب الصفر)؟',
    },
    answers: {
      en: ['1', '0', 'Undefined', 'Infinity'],
      ar: ['1', '0', 'غير معرّف', 'ما لا نهاية'],
    },
    correctIndex: 0,
    explanation: {
      en: 'By definition 0! = 1, which keeps formulas like n! = n × (n − 1)! consistent.',
      ar: 'بحسب التعريف 0! = 1، وهذا يحافظ على صحة صيغ مثل n! = n × (n − 1)!.',
    },
  },
  {
    id: 'ma-012',
    categoryId: 'mathematics',
    question: {
      en: 'A right triangle has legs of 3 and 4. How long is its hypotenuse?',
      ar: 'مثلث قائم الزاوية طولا ضلعي القائمة فيه 3 و 4. ما طول وتره؟',
    },
    answers: {
      en: ['6', '7', '4.5', '5'],
      ar: ['6', '7', '4.5', '5'],
    },
    correctIndex: 3,
    explanation: {
      en: 'By the Pythagorean theorem: 3² + 4² = 9 + 16 = 25 = 5².',
      ar: 'حسب مبرهنة فيثاغورس: 3² + 4² = 9 + 16 = 25 = 5².',
    },
  },
  {
    id: 'ma-013',
    categoryId: 'mathematics',
    question: {
      en: 'How many edges does a cube have?',
      ar: 'كم حرفًا (ضلعًا) للمكعب؟',
    },
    answers: {
      en: ['8', '12', '6', '24'],
      ar: ['8', '12', '6', '24'],
    },
    correctIndex: 1,
    explanation: {
      en: 'A cube has 6 faces, 8 vertices and 12 edges.',
      ar: 'للمكعب 6 أوجه و8 رؤوس و12 حرفًا.',
    },
  },
  {
    id: 'ma-014',
    categoryId: 'mathematics',
    question: {
      en: 'What is 1/4 written as a decimal?',
      ar: 'كيف يُكتب الكسر 1/4 في صورة عدد عشري؟',
    },
    answers: {
      en: ['0.4', '0.14', '0.25', '0.5'],
      ar: ['0.4', '0.14', '0.25', '0.5'],
    },
    correctIndex: 2,
  },
  {
    id: 'ma-015',
    categoryId: 'mathematics',
    question: {
      en: 'If 2x + 6 = 20, what is x?',
      ar: 'إذا كان 2x + 6 = 20، فما قيمة x؟',
    },
    answers: {
      en: ['7', '13', '10', '8'],
      ar: ['7', '13', '10', '8'],
    },
    correctIndex: 0,
    explanation: {
      en: '2x = 20 − 6 = 14, so x = 7.',
      ar: '2x = 20 − 6 = 14، إذن x = 7.',
    },
  },
  {
    id: 'ma-016',
    categoryId: 'mathematics',
    question: {
      en: 'What is the least common multiple of 4 and 6?',
      ar: 'ما المضاعف المشترك الأصغر للعددين 4 و 6؟',
    },
    answers: {
      en: ['24', '2', '10', '12'],
      ar: ['24', '2', '10', '12'],
    },
    correctIndex: 3,
  },
];
