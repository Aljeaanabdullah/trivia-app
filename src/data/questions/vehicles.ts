import type { Question } from '@/types/trivia';

export const vehiclesQuestions: Question[] = [
  {
    id: 've-001',
    categoryId: 'vehicles',
    question: {
      en: 'Which company manufactures the 911 sports car?',
      ar: 'أي شركة تصنع السيارة الرياضية 911؟',
    },
    answers: {
      en: ['Ferrari', 'Porsche', 'Lamborghini', 'Aston Martin'],
      ar: ['فيراري', 'بورشه', 'لامبورغيني', 'أستون مارتن'],
    },
    correctIndex: 1,
  },
  {
    id: 've-002',
    categoryId: 'vehicles',
    question: {
      en: 'In which year did the Wright brothers make their first powered airplane flight?',
      ar: 'في أي عام قام الأخوان رايت بأول رحلة طيران بطائرة ذات محرك؟',
    },
    answers: {
      en: ['1885', '1896', '1903', '1927'],
      ar: ['1885', '1896', '1903', '1927'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The flight took place on 17 December 1903 near Kitty Hawk, North Carolina.',
      ar: 'جرت الرحلة في 17 ديسمبر 1903 قرب كيتي هوك في ولاية كارولاينا الشمالية.',
    },
  },
  {
    id: 've-003',
    categoryId: 'vehicles',
    question: {
      en: 'The car maker Volvo was founded in which country?',
      ar: 'في أي دولة تأسست شركة السيارات فولفو؟',
    },
    answers: {
      en: ['Norway', 'Germany', 'Denmark', 'Sweden'],
      ar: ['النرويج', 'ألمانيا', 'الدنمارك', 'السويد'],
    },
    correctIndex: 3,
  },
  {
    id: 've-004',
    categoryId: 'vehicles',
    question: {
      en: 'What was the name of the world’s first nuclear-powered submarine?',
      ar: 'ما اسم أول غواصة تعمل بالطاقة النووية في العالم؟',
    },
    answers: {
      en: ['USS Nautilus', 'USS Seawolf', 'USS Skipjack', 'USS Triton'],
      ar: ['نوتيلوس', 'سي وولف', 'سكيبجاك', 'تريتون'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Nautilus was launched in 1954 and in 1958 became the first vessel to reach the North Pole under the ice.',
      ar: 'أُطلقت نوتيلوس عام 1954، وفي عام 1958 أصبحت أول سفينة تصل إلى القطب الشمالي تحت الجليد.',
    },
  },
  {
    id: 've-005',
    categoryId: 'vehicles',
    question: {
      en: 'Which two countries jointly developed the Concorde supersonic airliner?',
      ar: 'ما الدولتان اللتان طورتا معًا طائرة الركاب الأسرع من الصوت كونكورد؟',
    },
    answers: {
      en: ['USA and UK', 'France and Germany', 'UK and France', 'Italy and France'],
      ar: ['الولايات المتحدة وبريطانيا', 'فرنسا وألمانيا', 'بريطانيا وفرنسا', 'إيطاليا وفرنسا'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Concorde was built by Britain and France and flew passengers from 1976 to 2003.',
      ar: 'صنعت بريطانيا وفرنسا طائرة كونكورد، ونقلت الركاب من عام 1976 حتى عام 2003.',
    },
  },
  {
    id: 've-006',
    categoryId: 'vehicles',
    question: {
      en: 'The high-speed "Shinkansen" bullet trains run in which country?',
      ar: 'في أي دولة تعمل قطارات "شينكانسن" فائقة السرعة؟',
    },
    answers: {
      en: ['China', 'Japan', 'South Korea', 'Germany'],
      ar: ['الصين', 'اليابان', 'كوريا الجنوبية', 'ألمانيا'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Japan opened its first Shinkansen line, between Tokyo and Osaka, in 1964.',
      ar: 'افتتحت اليابان أول خط شينكانسن بين طوكيو وأوساكا عام 1964.',
    },
  },
  {
    id: 've-007',
    categoryId: 'vehicles',
    question: {
      en: 'The motorcycle maker Harley-Davidson comes from which country?',
      ar: 'من أي دولة شركة الدراجات النارية هارلي ديفيدسون؟',
    },
    answers: {
      en: ['United States', 'United Kingdom', 'Italy', 'Germany'],
      ar: ['الولايات المتحدة', 'المملكة المتحدة', 'إيطاليا', 'ألمانيا'],
    },
    correctIndex: 0,
  },
  {
    id: 've-008',
    categoryId: 'vehicles',
    question: {
      en: 'Which Italian car maker is famous for its "prancing horse" logo?',
      ar: 'أي شركة سيارات إيطالية تشتهر بشعار "الحصان الجامح"؟',
    },
    answers: {
      en: ['Lamborghini', 'Maserati', 'Alfa Romeo', 'Ferrari'],
      ar: ['لامبورغيني', 'مازيراتي', 'ألفا روميو', 'فيراري'],
    },
    correctIndex: 3,
  },
  {
    id: 've-009',
    categoryId: 'vehicles',
    question: {
      en: 'Who built the 1886 Patent-Motorwagen, often called the first true automobile?',
      ar: 'من صنع "عربة براءة الاختراع ذات المحرك" عام 1886، التي تُعد غالبًا أول سيارة حقيقية؟',
    },
    answers: {
      en: ['Henry Ford', 'Gottlieb Daimler', 'Karl Benz', 'Rudolf Diesel'],
      ar: ['هنري فورد', 'غوتليب دايملر', 'كارل بنز', 'رودولف ديزل'],
    },
    correctIndex: 2,
  },
  {
    id: 've-010',
    categoryId: 'vehicles',
    question: {
      en: 'How many full-length passenger decks does the Airbus A380 have?',
      ar: 'كم طابقًا كاملًا للركاب في طائرة إيرباص A380؟',
    },
    answers: {
      en: ['1', '2', '3', '4'],
      ar: ['1', '2', '3', '4'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The A380 is a double-decker airliner, with two passenger decks along its whole length.',
      ar: 'طائرة A380 ذات طابقين للركاب يمتدان على طول جسمها بالكامل.',
    },
  },
  {
    id: 've-011',
    categoryId: 'vehicles',
    question: {
      en: 'Which car brand uses a logo of four interlocking rings?',
      ar: 'أي علامة سيارات يتكون شعارها من أربع حلقات متشابكة؟',
    },
    answers: {
      en: ['Audi', 'BMW', 'Opel', 'Volkswagen'],
      ar: ['أودي', 'بي إم دبليو', 'أوبل', 'فولكس فاغن'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The four rings stand for the four companies that merged in 1932 to form Auto Union.',
      ar: 'ترمز الحلقات الأربع إلى أربع شركات اندمجت عام 1932 لتكوين "أوتو يونيون".',
    },
  },
  {
    id: 've-012',
    categoryId: 'vehicles',
    question: {
      en: 'What type of aircraft was the famous German Hindenburg?',
      ar: 'ما نوع الطائرة الألمانية الشهيرة "هيندنبورغ"؟',
    },
    answers: {
      en: ['Jet airliner', 'Seaplane', 'Airship', 'Glider'],
      ar: ['طائرة ركاب نفاثة', 'طائرة مائية', 'منطاد', 'طائرة شراعية'],
    },
    correctIndex: 2,
  },
  {
    id: 've-013',
    categoryId: 'vehicles',
    question: {
      en: 'Which company made the classic small car known as the "Beetle"?',
      ar: 'أي شركة صنعت السيارة الصغيرة الكلاسيكية المعروفة باسم "الخنفساء" (بيتل)؟',
    },
    answers: {
      en: ['Fiat', 'Renault', 'Mini', 'Volkswagen'],
      ar: ['فيات', 'رينو', 'ميني', 'فولكس فاغن'],
    },
    correctIndex: 3,
  },
  {
    id: 've-014',
    categoryId: 'vehicles',
    question: {
      en: 'Which American company makes the Mustang sports car?',
      ar: 'أي شركة أمريكية تصنع السيارة الرياضية موستانغ؟',
    },
    answers: {
      en: ['Chevrolet', 'Ford', 'Dodge', 'Cadillac'],
      ar: ['شيفروليه', 'فورد', 'دودج', 'كاديلاك'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Ford launched the Mustang in 1964.',
      ar: 'أطلقت شركة فورد سيارة موستانغ عام 1964.',
    },
  },
  {
    id: 've-015',
    categoryId: 'vehicles',
    question: {
      en: 'Igor Sikorsky is best known as a pioneer of which kind of aircraft?',
      ar: 'يُعرف إيغور سيكورسكي بأنه رائد في تطوير أي نوع من الطائرات؟',
    },
    answers: {
      en: ['Helicopter', 'Jet fighter', 'Hot-air balloon', 'Hovercraft'],
      ar: ['المروحية', 'الطائرة المقاتلة النفاثة', 'منطاد الهواء الساخن', 'المركبة الحوّامة (هوفركرافت)'],
    },
    correctIndex: 0,
  },
  {
    id: 've-016',
    categoryId: 'vehicles',
    question: {
      en: 'What was "Rocket", built by George and Robert Stephenson in 1829?',
      ar: 'ما هو "روكيت" الذي صنعه جورج وروبرت ستيفنسون عام 1829؟',
    },
    answers: {
      en: ['A steamship', 'A racing car', 'A steam locomotive', 'A biplane'],
      ar: ['سفينة بخارية', 'سيارة سباق', 'قاطرة بخارية', 'طائرة ثنائية السطح'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Rocket won the 1829 Rainhill Trials, a famous early railway competition in England.',
      ar: 'فازت القاطرة "روكيت" في تجارب رينهيل عام 1829، وهي مسابقة سكك حديدية مبكرة شهيرة في إنجلترا.',
    },
  },
];
