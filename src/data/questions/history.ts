import type { Question } from '@/types/trivia';

export const historyQuestions: Question[] = [
  {
    id: 'hi-001',
    categoryId: 'history',
    question: {
      en: 'Who was the first person to walk on the Moon?',
      ar: 'من أول إنسان مشى على سطح القمر؟',
    },
    answers: {
      en: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'John Glenn'],
      ar: ['باز ألدرين', 'يوري غاغارين', 'نيل أرمسترونغ', 'جون غلين'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Armstrong stepped onto the Moon in July 1969 during the Apollo 11 mission.',
      ar: 'وطئ أرمسترونغ سطح القمر في يوليو 1969 خلال مهمة أبولو 11.',
    },
  },
  {
    id: 'hi-002',
    categoryId: 'history',
    question: {
      en: 'In which year did the Berlin Wall fall?',
      ar: 'في أيّ عام سقط جدار برلين؟',
    },
    answers: {
      en: ['1987', '1989', '1991', '1985'],
      ar: ['1987', '1989', '1991', '1985'],
    },
    correctIndex: 1,
  },
  {
    id: 'hi-003',
    categoryId: 'history',
    question: {
      en: 'Which civilization built the city of Machu Picchu?',
      ar: 'أيّ حضارة بنت مدينة ماتشو بيتشو؟',
    },
    answers: {
      en: ['Aztec', 'Maya', 'Olmec', 'Inca'],
      ar: ['الأزتك', 'المايا', 'الأولمك', 'الإنكا'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The Inca built it high in the Andes of Peru in the 15th century.',
      ar: 'بناها الإنكا في أعالي جبال الأنديز في بيرو في القرن الخامس عشر.',
    },
  },
  {
    id: 'hi-004',
    categoryId: 'history',
    question: {
      en: 'Who was the first emperor of Rome?',
      ar: 'من أول إمبراطور لروما؟',
    },
    answers: {
      en: ['Augustus', 'Julius Caesar', 'Nero', 'Trajan'],
      ar: ['أغسطس', 'يوليوس قيصر', 'نيرون', 'تراجان'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Julius Caesar was a dictator; his heir Augustus became the first emperor in 27 BC.',
      ar: 'كان يوليوس قيصر دكتاتورًا، وأصبح وريثه أغسطس أول إمبراطور عام 27 ق.م.',
    },
  },
  {
    id: 'hi-005',
    categoryId: 'history',
    question: {
      en: 'Which ship sank in 1912 after hitting an iceberg on its first voyage?',
      ar: 'أيّ سفينة غرقت عام 1912 بعد اصطدامها بجبل جليدي في رحلتها الأولى؟',
    },
    answers: {
      en: ['Lusitania', 'Titanic', 'Britannic', 'Olympic'],
      ar: ['لوسيتانيا', 'تيتانيك', 'بريتانيك', 'أوليمبيك'],
    },
    correctIndex: 1,
  },
  {
    id: 'hi-006',
    categoryId: 'history',
    question: {
      en: 'The Rosetta Stone was the key to deciphering which writing system?',
      ar: 'كان حجر رشيد مفتاح فك رموز أيّ نظام كتابة؟',
    },
    answers: {
      en: ['Cuneiform', 'Linear B', 'Egyptian hieroglyphs', 'Maya glyphs'],
      ar: ['الكتابة المسمارية', 'الخط الخطي ب', 'الهيروغليفية المصرية', 'كتابة المايا'],
    },
    correctIndex: 2,
    explanation: {
      en: 'It carries the same text in hieroglyphic, Demotic and Greek scripts.',
      ar: 'يحمل النص نفسه بالخط الهيروغليفي والديموطيقي واليوناني.',
    },
  },
  {
    id: 'hi-007',
    categoryId: 'history',
    question: {
      en: 'In which year did World War II end?',
      ar: 'في أيّ عام انتهت الحرب العالمية الثانية؟',
    },
    answers: {
      en: ['1945', '1944', '1946', '1939'],
      ar: ['1945', '1944', '1946', '1939'],
    },
    correctIndex: 0,
  },
  {
    id: 'hi-008',
    categoryId: 'history',
    question: {
      en: 'Which Wonder of the Ancient World stood in Alexandria?',
      ar: 'أيّ عجيبة من عجائب الدنيا السبع القديمة كانت في الإسكندرية؟',
    },
    answers: {
      en: ['Colossus', 'Hanging Gardens', 'Mausoleum', 'Lighthouse'],
      ar: ['التمثال العملاق', 'الحدائق المعلقة', 'الضريح', 'المنارة'],
    },
    correctIndex: 3,
  },
  {
    id: 'hi-009',
    categoryId: 'history',
    question: {
      en: 'In which year did Christopher Columbus first reach the Americas?',
      ar: 'في أيّ عام وصل كريستوفر كولومبوس إلى الأمريكتين أول مرة؟',
    },
    answers: {
      en: ['1488', '1492', '1498', '1502'],
      ar: ['1488', '1492', '1498', '1502'],
    },
    correctIndex: 1,
  },
  {
    id: 'hi-010',
    categoryId: 'history',
    question: {
      en: 'Who was the first President of the United States?',
      ar: 'من أول رئيس للولايات المتحدة الأمريكية؟',
    },
    answers: {
      en: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
      ar: ['أبراهام لينكولن', 'توماس جيفرسون', 'جورج واشنطن', 'جون آدامز'],
    },
    correctIndex: 2,
  },
  {
    id: 'hi-011',
    categoryId: 'history',
    question: {
      en: 'Genghis Khan founded which empire?',
      ar: 'أيّ إمبراطورية أسسها جنكيز خان؟',
    },
    answers: {
      en: ['Ottoman Empire', 'Mongol Empire', 'Persian Empire', 'Roman Empire'],
      ar: ['الدولة العثمانية', 'الإمبراطورية المغولية', 'الإمبراطورية الفارسية', 'الإمبراطورية الرومانية'],
    },
    correctIndex: 1,
    explanation: {
      en: 'It became the largest contiguous land empire in history.',
      ar: 'أصبحت أكبر إمبراطورية برية متصلة في التاريخ.',
    },
  },
  {
    id: 'hi-012',
    categoryId: 'history',
    question: {
      en: 'Which Babylonian king is famous for one of the earliest written law codes?',
      ar: 'أيّ ملك بابلي اشتهر بإحدى أقدم الشرائع القانونية المكتوبة؟',
    },
    answers: {
      en: ['Sargon of Akkad', 'Nebuchadnezzar II', 'Ashurbanipal', 'Hammurabi'],
      ar: ['سرجون الأكدي', 'نبوخذ نصر الثاني', 'آشوربانيبال', 'حمورابي'],
    },
    correctIndex: 3,
  },
  {
    id: 'hi-013',
    categoryId: 'history',
    question: {
      en: 'In which year did the Ottomans capture Constantinople?',
      ar: 'في أيّ عام فتح العثمانيون القسطنطينية؟',
    },
    answers: {
      en: ['1453', '1492', '1389', '1517'],
      ar: ['1453', '1492', '1389', '1517'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The city was taken by Sultan Mehmed II, ending the Byzantine Empire.',
      ar: 'فتحها السلطان محمد الثاني، فانتهت بذلك الإمبراطورية البيزنطية.',
    },
  },
  {
    id: 'hi-014',
    categoryId: 'history',
    question: {
      en: 'In which country did the Industrial Revolution begin?',
      ar: 'في أيّ دولة بدأت الثورة الصناعية؟',
    },
    answers: {
      en: ['France', 'Germany', 'United States', 'Great Britain'],
      ar: ['فرنسا', 'ألمانيا', 'الولايات المتحدة', 'بريطانيا العظمى'],
    },
    correctIndex: 3,
  },
  {
    id: 'hi-015',
    categoryId: 'history',
    question: {
      en: 'Which Roman city was buried by the eruption of Mount Vesuvius in 79 AD?',
      ar: 'أيّ مدينة رومانية طمرها ثوران بركان فيزوف عام 79م؟',
    },
    answers: {
      en: ['Pompeii', 'Carthage', 'Ostia', 'Ravenna'],
      ar: ['بومبي', 'قرطاج', 'أوستيا', 'رافينا'],
    },
    correctIndex: 0,
  },
  {
    id: 'hi-016',
    categoryId: 'history',
    question: {
      en: 'Who was the first woman to win a Nobel Prize?',
      ar: 'من أول امرأة فازت بجائزة نوبل؟',
    },
    answers: {
      en: ['Florence Nightingale', 'Marie Curie', 'Ada Lovelace', 'Rosalind Franklin'],
      ar: ['فلورنس نايتينغيل', 'ماري كوري', 'آدا لوفليس', 'روزاليند فرانكلين'],
    },
    correctIndex: 1,
    explanation: {
      en: 'She shared the 1903 Nobel Prize in Physics and later won the 1911 Chemistry prize.',
      ar: 'تقاسمت جائزة نوبل في الفيزياء عام 1903، ثم فازت بجائزة الكيمياء عام 1911.',
    },
  },
];
