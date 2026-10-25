import type { Question } from '@/types/trivia';

export const geographyQuestions: Question[] = [
  {
    id: 'geo-001',
    categoryId: 'geography',
    question: {
      en: 'What is the capital city of Canada?',
      ar: 'ما عاصمة كندا؟',
    },
    answers: {
      en: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
      ar: ['تورونتو', 'فانكوفر', 'أوتاوا', 'مونتريال'],
    },
    correctIndex: 2,
  },
  {
    id: 'geo-002',
    categoryId: 'geography',
    question: {
      en: 'What is the highest mountain on Earth above sea level?',
      ar: 'ما أعلى جبل على الأرض فوق مستوى سطح البحر؟',
    },
    answers: {
      en: ['Mount Everest', 'K2', 'Kangchenjunga', 'Mont Blanc'],
      ar: ['جبل إيفرست', 'كي 2', 'كانشنجونغا', 'مون بلان'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Everest lies in the Himalayas, on the border of Nepal and China.',
      ar: 'يقع إيفرست في جبال الهيمالايا على الحدود بين نيبال والصين.',
    },
  },
  {
    id: 'geo-003',
    categoryId: 'geography',
    question: {
      en: 'What is the largest hot desert in the world?',
      ar: 'ما أكبر صحراء حارة في العالم؟',
    },
    answers: {
      en: ['Gobi', 'Sahara', 'Arabian Desert', 'Kalahari'],
      ar: ['غوبي', 'الصحراء الكبرى', 'صحراء شبه الجزيرة العربية', 'كالاهاري'],
    },
    correctIndex: 1,
  },
  {
    id: 'geo-004',
    categoryId: 'geography',
    question: {
      en: 'Which strait separates southern Spain from Morocco?',
      ar: 'أيّ مضيق يفصل جنوب إسبانيا عن المغرب؟',
    },
    answers: {
      en: ['Bosphorus', 'Strait of Hormuz', 'Bab-el-Mandeb', 'Strait of Gibraltar'],
      ar: ['البوسفور', 'مضيق هرمز', 'باب المندب', 'مضيق جبل طارق'],
    },
    correctIndex: 3,
    explanation: {
      en: 'At its narrowest point the strait is only about 14 km wide.',
      ar: 'يبلغ عرض المضيق في أضيق نقطة نحو 14 كم فقط.',
    },
  },
  {
    id: 'geo-005',
    categoryId: 'geography',
    question: {
      en: 'Which is the largest country in the world by area?',
      ar: 'ما أكبر دولة في العالم من حيث المساحة؟',
    },
    answers: {
      en: ['Canada', 'Russia', 'China', 'United States'],
      ar: ['كندا', 'روسيا', 'الصين', 'الولايات المتحدة'],
    },
    correctIndex: 1,
  },
  {
    id: 'geo-006',
    categoryId: 'geography',
    question: {
      en: 'Which river flows through the city of Baghdad?',
      ar: 'أيّ نهر يمرّ عبر مدينة بغداد؟',
    },
    answers: {
      en: ['Tigris', 'Euphrates', 'Nile', 'Indus'],
      ar: ['دجلة', 'الفرات', 'النيل', 'السند'],
    },
    correctIndex: 0,
  },
  {
    id: 'geo-007',
    categoryId: 'geography',
    question: {
      en: 'What is the capital city of Morocco?',
      ar: 'ما عاصمة المغرب؟',
    },
    answers: {
      en: ['Casablanca', 'Marrakesh', 'Rabat', 'Fez'],
      ar: ['الدار البيضاء', 'مراكش', 'الرباط', 'فاس'],
    },
    correctIndex: 2,
  },
  {
    id: 'geo-008',
    categoryId: 'geography',
    question: {
      en: 'What is the smallest country in the world by area?',
      ar: 'ما أصغر دولة في العالم من حيث المساحة؟',
    },
    answers: {
      en: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
      ar: ['موناكو', 'الفاتيكان', 'سان مارينو', 'ليختنشتاين'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Vatican City covers less than half a square kilometre inside Rome.',
      ar: 'تبلغ مساحة الفاتيكان أقل من نصف كيلومتر مربع داخل مدينة روما.',
    },
  },
  {
    id: 'geo-009',
    categoryId: 'geography',
    question: {
      en: 'In which country is Mount Kilimanjaro?',
      ar: 'في أيّ دولة يقع جبل كليمنجارو؟',
    },
    answers: {
      en: ['Kenya', 'Uganda', 'Ethiopia', 'Tanzania'],
      ar: ['كينيا', 'أوغندا', 'إثيوبيا', 'تنزانيا'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Kilimanjaro is the highest mountain in Africa.',
      ar: 'كليمنجارو هو أعلى جبل في أفريقيا.',
    },
  },
  {
    id: 'geo-010',
    categoryId: 'geography',
    question: {
      en: 'Where is the lowest point on Earth’s land surface?',
      ar: 'أين تقع أخفض نقطة على سطح اليابسة في الأرض؟',
    },
    answers: {
      en: ['Death Valley', 'Shores of the Dead Sea', 'Caspian Depression', 'Qattara Depression'],
      ar: ['وادي الموت', 'شواطئ البحر الميت', 'منخفض بحر قزوين', 'منخفض القطارة'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The Dead Sea shore lies more than 400 metres below sea level.',
      ar: 'تقع شواطئ البحر الميت على عمق يزيد على 400 متر تحت مستوى سطح البحر.',
    },
  },
  {
    id: 'geo-011',
    categoryId: 'geography',
    question: {
      en: 'On which continent are the Andes mountains?',
      ar: 'في أيّ قارة تقع جبال الأنديز؟',
    },
    answers: {
      en: ['South America', 'Africa', 'Asia', 'North America'],
      ar: ['أمريكا الجنوبية', 'أفريقيا', 'آسيا', 'أمريكا الشمالية'],
    },
    correctIndex: 0,
  },
  {
    id: 'geo-012',
    categoryId: 'geography',
    question: {
      en: 'Which country is known as the "Land of the Rising Sun"?',
      ar: 'أيّ دولة تُعرف بـ"أرض الشمس المشرقة"؟',
    },
    answers: {
      en: ['China', 'South Korea', 'Japan', 'Thailand'],
      ar: ['الصين', 'كوريا الجنوبية', 'اليابان', 'تايلاند'],
    },
    correctIndex: 2,
  },
  {
    id: 'geo-013',
    categoryId: 'geography',
    question: {
      en: 'What is the capital city of Brazil?',
      ar: 'ما عاصمة البرازيل؟',
    },
    answers: {
      en: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Brasília'],
      ar: ['ريو دي جانيرو', 'ساو باولو', 'سلفادور', 'برازيليا'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Brasília was purpose-built and became the capital in 1960.',
      ar: 'بُنيت برازيليا خصيصًا وأصبحت العاصمة عام 1960.',
    },
  },
  {
    id: 'geo-014',
    categoryId: 'geography',
    question: {
      en: 'What is the largest island in the world (not counting continents)?',
      ar: 'ما أكبر جزيرة في العالم (دون احتساب القارات)؟',
    },
    answers: {
      en: ['Borneo', 'Madagascar', 'Greenland', 'New Guinea'],
      ar: ['بورنيو', 'مدغشقر', 'غرينلاند', 'غينيا الجديدة'],
    },
    correctIndex: 2,
  },
  {
    id: 'geo-015',
    categoryId: 'geography',
    question: {
      en: 'Which line divides Earth into Northern and Southern Hemispheres?',
      ar: 'أيّ خط يقسم الأرض إلى نصفين شمالي وجنوبي؟',
    },
    answers: {
      en: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'International Date Line'],
      ar: ['خط غرينتش', 'خط الاستواء', 'مدار السرطان', 'خط التاريخ الدولي'],
    },
    correctIndex: 1,
  },
  {
    id: 'geo-016',
    categoryId: 'geography',
    question: {
      en: 'Victoria Falls lies on which African river?',
      ar: 'على أيّ نهر أفريقي تقع شلالات فيكتوريا؟',
    },
    answers: {
      en: ['Zambezi', 'Congo', 'Niger', 'Limpopo'],
      ar: ['زامبيزي', 'الكونغو', 'النيجر', 'ليمبوبو'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The falls lie on the border between Zambia and Zimbabwe.',
      ar: 'تقع الشلالات على الحدود بين زامبيا وزيمبابوي.',
    },
  },
];
