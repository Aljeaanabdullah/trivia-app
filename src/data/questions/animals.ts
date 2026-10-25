import type { Question } from '@/types/trivia';

export const animalsQuestions: Question[] = [
  {
    id: 'an-001',
    categoryId: 'animals',
    question: {
      en: 'What is the largest animal that has ever lived?',
      ar: 'ما أكبر حيوان عاش على الإطلاق؟',
    },
    answers: {
      en: ['African elephant', 'Blue whale', 'Megalodon', 'Argentinosaurus'],
      ar: ['الفيل الأفريقي', 'الحوت الأزرق', 'الميغالودون', 'الأرجنتينوصور'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Blue whales can exceed 30 metres in length.',
      ar: 'قد يتجاوز طول الحوت الأزرق 30 مترًا.',
    },
  },
  {
    id: 'an-002',
    categoryId: 'animals',
    question: {
      en: 'Which of these is the fastest land animal?',
      ar: 'أي من هذه الحيوانات هو الأسرع على اليابسة؟',
    },
    answers: {
      en: ['Lion', 'Horse', 'Greyhound', 'Cheetah'],
      ar: ['الأسد', 'الحصان', 'السلوقي', 'الفهد'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Cheetahs can sprint at around 100 km/h over short distances.',
      ar: 'يمكن للفهد أن يعدو بسرعة تقارب 100 كم/ساعة لمسافات قصيرة.',
    },
  },
  {
    id: 'an-003',
    categoryId: 'animals',
    question: {
      en: 'What does a camel’s hump mainly store?',
      ar: 'ماذا يخزّن سنام الجمل بشكل رئيسي؟',
    },
    answers: {
      en: ['Water', 'Fat', 'Milk', 'Air'],
      ar: ['الماء', 'الدهون', 'الحليب', 'الهواء'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The fat can be broken down for energy when food is scarce.',
      ar: 'يمكن تحويل هذه الدهون إلى طاقة عند شحّ الطعام.',
    },
  },
  {
    id: 'an-004',
    categoryId: 'animals',
    question: {
      en: 'What is a baby kangaroo called?',
      ar: 'ماذا يُسمّى صغير الكنغر؟',
    },
    answers: {
      en: ['Cub', 'Kid', 'Joey', 'Calf'],
      ar: ['شبل', 'جدي', 'جوي', 'عجل'],
    },
    correctIndex: 2,
  },
  {
    id: 'an-005',
    categoryId: 'animals',
    question: {
      en: 'What is the largest living bird?',
      ar: 'ما أكبر طائر حيّ؟',
    },
    answers: {
      en: ['Ostrich', 'Emu', 'Andean condor', 'Wandering albatross'],
      ar: ['النعامة', 'الإيمو', 'كندور الأنديز', 'القطرس الجوّال'],
    },
    correctIndex: 0,
  },
  {
    id: 'an-006',
    categoryId: 'animals',
    question: {
      en: 'How many legs does a spider have?',
      ar: 'كم عدد أرجل العنكبوت؟',
    },
    answers: {
      en: ['6', '10', '12', '8'],
      ar: ['6', '10', '12', '8'],
    },
    correctIndex: 3,
  },
  {
    id: 'an-007',
    categoryId: 'animals',
    question: {
      en: 'Which is the only mammal capable of true powered flight?',
      ar: 'ما الثديي الوحيد القادر على الطيران الحقيقي؟',
    },
    answers: {
      en: ['Flying squirrel', 'Bat', 'Sugar glider', 'Colugo'],
      ar: ['السنجاب الطائر', 'الخفاش', 'السنجاب السكري', 'الليمور الطائر'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Flying squirrels and similar animals only glide.',
      ar: 'السنجاب الطائر والحيوانات المشابهة له تنزلق في الهواء فقط.',
    },
  },
  {
    id: 'an-008',
    categoryId: 'animals',
    question: {
      en: 'What makes up most of a giant panda’s diet?',
      ar: 'ما الغذاء الذي يشكّل معظم طعام الباندا العملاقة؟',
    },
    answers: {
      en: ['Fish', 'Fruit', 'Bamboo', 'Insects'],
      ar: ['الأسماك', 'الفاكهة', 'الخيزران', 'الحشرات'],
    },
    correctIndex: 2,
  },
  {
    id: 'an-009',
    categoryId: 'animals',
    question: {
      en: 'How many hearts does an octopus have?',
      ar: 'كم قلبًا لدى الأخطبوط؟',
    },
    answers: {
      en: ['1', '2', '3', '4'],
      ar: ['1', '2', '3', '4'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Two hearts pump blood to the gills and one to the rest of the body.',
      ar: 'يضخ قلبان الدم إلى الخياشيم، ويضخه قلب ثالث إلى باقي الجسم.',
    },
  },
  {
    id: 'an-010',
    categoryId: 'animals',
    question: {
      en: 'What is the tallest living animal?',
      ar: 'ما أطول حيوان حيّ؟',
    },
    answers: {
      en: ['Giraffe', 'African elephant', 'Ostrich', 'Moose'],
      ar: ['الزرافة', 'الفيل الأفريقي', 'النعامة', 'الموظ'],
    },
    correctIndex: 0,
  },
  {
    id: 'an-011',
    categoryId: 'animals',
    question: {
      en: 'Which is the largest species of big cat?',
      ar: 'ما أكبر أنواع السنوريات الكبيرة؟',
    },
    answers: {
      en: ['Lion', 'Jaguar', 'Leopard', 'Tiger'],
      ar: ['الأسد', 'اليغور', 'النمر المرقط', 'النمر (الببر)'],
    },
    correctIndex: 3,
  },
  {
    id: 'an-012',
    categoryId: 'animals',
    question: {
      en: 'Which of these sea creatures is a mammal?',
      ar: 'أي من هذه الكائنات البحرية من الثدييات؟',
    },
    answers: {
      en: ['Shark', 'Dolphin', 'Tuna', 'Seahorse'],
      ar: ['القرش', 'الدلفين', 'التونة', 'فرس البحر'],
    },
    correctIndex: 1,
  },
  {
    id: 'an-013',
    categoryId: 'animals',
    question: {
      en: 'What is the young, water-dwelling stage of a frog called?',
      ar: 'ماذا تُسمّى المرحلة اليافعة المائية من حياة الضفدع؟',
    },
    answers: {
      en: ['Tadpole', 'Caterpillar', 'Nymph', 'Pupa'],
      ar: ['الشرغوف', 'اليسروع', 'الحورية', 'العذراء'],
    },
    correctIndex: 0,
  },
  {
    id: 'an-014',
    categoryId: 'animals',
    question: {
      en: 'Penguins belong to which group of animals?',
      ar: 'إلى أي مجموعة من الحيوانات ينتمي البطريق؟',
    },
    answers: {
      en: ['Mammals', 'Fish', 'Birds', 'Reptiles'],
      ar: ['الثدييات', 'الأسماك', 'الطيور', 'الزواحف'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Penguins are flightless birds that use their wings to swim.',
      ar: 'البطاريق طيور لا تطير وتستخدم أجنحتها للسباحة.',
    },
  },
  {
    id: 'an-015',
    categoryId: 'animals',
    question: {
      en: 'Which lizard can change colour and move its eyes independently?',
      ar: 'أي سحلية تستطيع تغيير لونها وتحريك عينيها كلٌّ على حدة؟',
    },
    answers: {
      en: ['Iguana', 'Gecko', 'Komodo dragon', 'Chameleon'],
      ar: ['الإغوانا', 'الوزغ', 'تنين كومودو', 'الحرباء'],
    },
    correctIndex: 3,
  },
  {
    id: 'an-016',
    categoryId: 'animals',
    question: {
      en: 'What do honeybees collect from flowers to make honey?',
      ar: 'ماذا يجمع نحل العسل من الأزهار لصنع العسل؟',
    },
    answers: {
      en: ['Seeds', 'Nectar', 'Leaves', 'Water'],
      ar: ['البذور', 'الرحيق', 'الأوراق', 'الماء'],
    },
    correctIndex: 1,
  },
];
