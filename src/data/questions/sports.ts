import type { Question } from '@/types/trivia';

export const sportsQuestions: Question[] = [
  {
    id: 'sp-001',
    categoryId: 'sports',
    question: {
      en: 'How many players does each team have on the pitch in football (soccer)?',
      ar: 'كم عدد لاعبي كل فريق في الملعب في كرة القدم؟',
    },
    answers: {
      en: ['9', '10', '11', '12'],
      ar: ['9', '10', '11', '12'],
    },
    correctIndex: 2,
  },
  {
    id: 'sp-002',
    categoryId: 'sports',
    question: {
      en: 'How many rings are on the Olympic flag?',
      ar: 'كم عدد الحلقات على العلم الأولمبي؟',
    },
    answers: {
      en: ['5', '6', '4', '7'],
      ar: ['5', '6', '4', '7'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The five interlocking rings represent the union of the continents.',
      ar: 'ترمز الحلقات الخمس المتشابكة إلى اتحاد القارات.',
    },
  },
  {
    id: 'sp-003',
    categoryId: 'sports',
    question: {
      en: 'Which country hosted the first FIFA World Cup in 1930?',
      ar: 'أيّ دولة استضافت أول كأس عالم لكرة القدم عام 1930؟',
    },
    answers: {
      en: ['Brazil', 'Italy', 'Argentina', 'Uruguay'],
      ar: ['البرازيل', 'إيطاليا', 'الأرجنتين', 'الأوروغواي'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Uruguay also won that first tournament, beating Argentina in the final.',
      ar: 'فازت الأوروغواي أيضًا بتلك البطولة الأولى بعد تغلبها على الأرجنتين في النهائي.',
    },
  },
  {
    id: 'sp-004',
    categoryId: 'sports',
    question: {
      en: 'In which sport is a shuttlecock used?',
      ar: 'في أيّ رياضة تُستخدم الكرة الريشية؟',
    },
    answers: {
      en: ['Tennis', 'Badminton', 'Squash', 'Table tennis'],
      ar: ['التنس', 'البادمنتون', 'الإسكواش', 'تنس الطاولة'],
    },
    correctIndex: 1,
  },
  {
    id: 'sp-005',
    categoryId: 'sports',
    question: {
      en: 'What is the official length of a marathon?',
      ar: 'ما الطول الرسمي لسباق الماراثون؟',
    },
    answers: {
      en: ['40 km', '41.5 km', '45 km', '42.195 km'],
      ar: ['40 كم', '41.5 كم', '45 كم', '42.195 كم'],
    },
    correctIndex: 3,
  },
  {
    id: 'sp-006',
    categoryId: 'sports',
    question: {
      en: 'How many points is a touchdown worth in American football?',
      ar: 'كم نقطة يُحتسب الهبوط (التاتش داون) في كرة القدم الأمريكية؟',
    },
    answers: {
      en: ['7', '3', '6', '2'],
      ar: ['7', '3', '6', '2'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The scoring team then attempts an extra point or a two-point conversion.',
      ar: 'يحاول الفريق المسجّل بعدها إضافة نقطة إضافية أو نقطتين.',
    },
  },
  {
    id: 'sp-007',
    categoryId: 'sports',
    question: {
      en: 'Which tennis Grand Slam tournament is played on grass?',
      ar: 'أيّ بطولة من البطولات الأربع الكبرى في التنس تُلعب على العشب؟',
    },
    answers: {
      en: ['Wimbledon', 'French Open', 'US Open', 'Australian Open'],
      ar: ['ويمبلدون', 'بطولة فرنسا المفتوحة', 'بطولة أمريكا المفتوحة', 'بطولة أستراليا المفتوحة'],
    },
    correctIndex: 0,
  },
  {
    id: 'sp-008',
    categoryId: 'sports',
    question: {
      en: 'How many players per team are on the court in basketball?',
      ar: 'كم عدد لاعبي كل فريق داخل الملعب في كرة السلة؟',
    },
    answers: {
      en: ['4', '5', '6', '7'],
      ar: ['4', '5', '6', '7'],
    },
    correctIndex: 1,
  },
  {
    id: 'sp-009',
    categoryId: 'sports',
    question: {
      en: 'Which city hosted the first modern Olympic Games in 1896?',
      ar: 'أيّ مدينة استضافت أول دورة ألعاب أولمبية حديثة عام 1896؟',
    },
    answers: {
      en: ['Paris', 'London', 'Athens', 'Rome'],
      ar: ['باريس', 'لندن', 'أثينا', 'روما'],
    },
    correctIndex: 2,
  },
  {
    id: 'sp-010',
    categoryId: 'sports',
    question: {
      en: 'In golf, what is a score of one under par on a hole called?',
      ar: 'في الغولف، ماذا تُسمّى النتيجة الأقل من المعدل (البار) بضربة واحدة في الحفرة؟',
    },
    answers: {
      en: ['Bogey', 'Eagle', 'Par', 'Birdie'],
      ar: ['بوغي', 'إيغل', 'بار', 'بيردي'],
    },
    correctIndex: 3,
    explanation: {
      en: 'An eagle is two under par, while a bogey is one over par.',
      ar: 'الإيغل أقل من البار بضربتين، أما البوغي فهو أكثر منه بضربة.',
    },
  },
  {
    id: 'sp-011',
    categoryId: 'sports',
    question: {
      en: 'The Stanley Cup is the championship trophy of which sport?',
      ar: 'كأس ستانلي هي كأس البطولة في أيّ رياضة؟',
    },
    answers: {
      en: ['Basketball', 'Ice hockey', 'Baseball', 'American football'],
      ar: ['كرة السلة', 'هوكي الجليد', 'البيسبول', 'كرة القدم الأمريكية'],
    },
    correctIndex: 1,
  },
  {
    id: 'sp-012',
    categoryId: 'sports',
    question: {
      en: 'What is the highest possible score with three darts?',
      ar: 'ما أعلى نتيجة ممكنة بثلاث رميات في لعبة السهام (الدارتس)؟',
    },
    answers: {
      en: ['150', '180', '200', '170'],
      ar: ['150', '180', '200', '170'],
    },
    correctIndex: 1,
    explanation: {
      en: 'It takes three darts in the treble 20, worth 60 each.',
      ar: 'تتحقق بإصابة الحلقة الثلاثية للرقم 20 ثلاث مرات، وقيمة كل منها 60.',
    },
  },
  {
    id: 'sp-013',
    categoryId: 'sports',
    question: {
      en: 'In which country did the martial art judo originate?',
      ar: 'في أيّ دولة نشأت رياضة الجودو؟',
    },
    answers: {
      en: ['China', 'Korea', 'Japan', 'Thailand'],
      ar: ['الصين', 'كوريا', 'اليابان', 'تايلاند'],
    },
    correctIndex: 2,
  },
  {
    id: 'sp-014',
    categoryId: 'sports',
    question: {
      en: 'What is a perfect score in a game of ten-pin bowling?',
      ar: 'ما النتيجة المثالية في مباراة البولينغ ذي القوارير العشر؟',
    },
    answers: {
      en: ['100', '200', '250', '300'],
      ar: ['100', '200', '250', '300'],
    },
    correctIndex: 3,
    explanation: {
      en: 'A perfect game requires 12 strikes in a row.',
      ar: 'تتطلب المباراة المثالية 12 ضربة كاملة متتالية.',
    },
  },
  {
    id: 'sp-015',
    categoryId: 'sports',
    question: {
      en: 'How long is an Olympic-size swimming pool?',
      ar: 'ما طول المسبح الأولمبي؟',
    },
    answers: {
      en: ['50 m', '25 m', '75 m', '100 m'],
      ar: ['50 م', '25 م', '75 م', '100 م'],
    },
    correctIndex: 0,
  },
  {
    id: 'sp-016',
    categoryId: 'sports',
    question: {
      en: 'In which sport is a score of zero called "love"?',
      ar: 'في أيّ رياضة تُسمّى النتيجة صفر "لَف" (love)؟',
    },
    answers: {
      en: ['Tennis', 'Golf', 'Cricket', 'Volleyball'],
      ar: ['التنس', 'الغولف', 'الكريكيت', 'الكرة الطائرة'],
    },
    correctIndex: 0,
  },
];
