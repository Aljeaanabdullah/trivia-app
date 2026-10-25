import type { Question } from '@/types/trivia';

export const musicQuestions: Question[] = [
  {
    id: 'mu-001',
    categoryId: 'music',
    question: {
      en: 'How many keys does a standard modern piano have?',
      ar: 'كم عدد مفاتيح البيانو الحديث القياسي؟',
    },
    answers: {
      en: ['76', '88', '92', '64'],
      ar: ['76', '88', '92', '64'],
    },
    correctIndex: 1,
    explanation: {
      en: 'It has 52 white keys and 36 black keys.',
      ar: 'يضم 52 مفتاحًا أبيض و36 مفتاحًا أسود.',
    },
  },
  {
    id: 'mu-002',
    categoryId: 'music',
    question: {
      en: 'Which composer kept composing after becoming almost completely deaf?',
      ar: 'أي مؤلف موسيقي واصل التأليف بعد أن فقد سمعه تقريبًا بالكامل؟',
    },
    answers: {
      en: ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frédéric Chopin', 'Ludwig van Beethoven'],
      ar: ['فولفغانغ أماديوس موتسارت', 'يوهان سيباستيان باخ', 'فريدريك شوبان', 'لودفيغ فان بيتهوفن'],
    },
    correctIndex: 3,
    explanation: {
      en: 'He wrote his Ninth Symphony while deaf.',
      ar: 'ألّف سيمفونيته التاسعة وهو أصم.',
    },
  },
  {
    id: 'mu-003',
    categoryId: 'music',
    question: {
      en: 'John Lennon was a founding member of which band?',
      ar: 'كان جون لينون عضوًا مؤسسًا في أي فرقة؟',
    },
    answers: {
      en: ['The Beatles', 'The Rolling Stones', 'The Who', 'The Doors'],
      ar: ['البيتلز', 'رولينغ ستونز', 'ذا هو', 'ذا دورز'],
    },
    correctIndex: 0,
  },
  {
    id: 'mu-004',
    categoryId: 'music',
    question: {
      en: 'The legendary singer Umm Kulthum came from which country?',
      ar: 'من أي بلد كانت المطربة الأسطورية أم كلثوم؟',
    },
    answers: {
      en: ['Lebanon', 'Syria', 'Egypt', 'Iraq'],
      ar: ['لبنان', 'سوريا', 'مصر', 'العراق'],
    },
    correctIndex: 2,
    explanation: {
      en: 'She is often called "the Star of the East".',
      ar: 'تُلقَّب غالبًا بـ"كوكب الشرق".',
    },
  },
  {
    id: 'mu-005',
    categoryId: 'music',
    question: {
      en: 'What type of instrument is the oud?',
      ar: 'إلى أي نوع من الآلات الموسيقية ينتمي العود؟',
    },
    answers: {
      en: ['Wind', 'Percussion', 'Keyboard', 'String'],
      ar: ['نفخ', 'إيقاع', 'لوحة مفاتيح', 'وترية'],
    },
    correctIndex: 3,
  },
  {
    id: 'mu-006',
    categoryId: 'music',
    question: {
      en: 'How many lines make up a standard musical staff?',
      ar: 'من كم خطًا يتكوّن المدرج الموسيقي القياسي؟',
    },
    answers: {
      en: ['4', '6', '5', '7'],
      ar: ['4', '6', '5', '7'],
    },
    correctIndex: 2,
  },
  {
    id: 'mu-007',
    categoryId: 'music',
    question: {
      en: 'Who composed "The Four Seasons"?',
      ar: 'من ألّف "الفصول الأربعة"؟',
    },
    answers: {
      en: ['Antonio Vivaldi', 'George Frideric Handel', 'Joseph Haydn', 'Johann Sebastian Bach'],
      ar: ['أنطونيو فيفالدي', 'جورج فريدريك هاندل', 'جوزيف هايدن', 'يوهان سيباستيان باخ'],
    },
    correctIndex: 0,
    explanation: {
      en: 'It is a set of four violin concertos by the Italian composer.',
      ar: 'هي مجموعة من أربعة كونشيرتوات للكمان ألّفها المؤلف الإيطالي.',
    },
  },
  {
    id: 'mu-008',
    categoryId: 'music',
    question: {
      en: 'Freddie Mercury was the lead singer of which band?',
      ar: 'كان فريدي ميركوري المغني الرئيسي لأي فرقة؟',
    },
    answers: {
      en: ['Led Zeppelin', 'Queen', 'Pink Floyd', 'Aerosmith'],
      ar: ['ليد زبلن', 'كوين', 'بينك فلويد', 'إيروسميث'],
    },
    correctIndex: 1,
  },
  {
    id: 'mu-009',
    categoryId: 'music',
    question: {
      en: 'Which singer is widely known as the "King of Pop"?',
      ar: 'أي مغنٍّ يُعرف على نطاق واسع بلقب "ملك البوب"؟',
    },
    answers: {
      en: ['Elvis Presley', 'Prince', 'Stevie Wonder', 'Michael Jackson'],
      ar: ['إلفيس بريسلي', 'برينس', 'ستيفي وندر', 'مايكل جاكسون'],
    },
    correctIndex: 3,
  },
  {
    id: 'mu-010',
    categoryId: 'music',
    question: {
      en: 'What does the tempo marking "Allegro" mean?',
      ar: 'ماذا تعني علامة السرعة الموسيقية "أليغرو"؟',
    },
    answers: {
      en: ['Slowly', 'Very softly', 'Fast and lively', 'Gradually louder'],
      ar: ['ببطء', 'بهدوء شديد', 'بسرعة وحيوية', 'بصوت يعلو تدريجيًا'],
    },
    correctIndex: 2,
  },
  {
    id: 'mu-011',
    categoryId: 'music',
    question: {
      en: 'In which country was the composer Frédéric Chopin born?',
      ar: 'في أي بلد وُلد المؤلف الموسيقي فريدريك شوبان؟',
    },
    answers: {
      en: ['Poland', 'France', 'Austria', 'Hungary'],
      ar: ['بولندا', 'فرنسا', 'النمسا', 'المجر'],
    },
    correctIndex: 0,
    explanation: {
      en: 'He was born near Warsaw in 1810 and later settled in Paris.',
      ar: 'وُلد قرب وارسو عام 1810 ثم استقر لاحقًا في باريس.',
    },
  },
  {
    id: 'mu-012',
    categoryId: 'music',
    question: {
      en: 'Who composed the opera "The Magic Flute"?',
      ar: 'من ألّف أوبرا "الناي السحري"؟',
    },
    answers: {
      en: ['Franz Schubert', 'Wolfgang Amadeus Mozart', 'Joseph Haydn', 'Johann Strauss II'],
      ar: ['فرانز شوبرت', 'فولفغانغ أماديوس موتسارت', 'جوزيف هايدن', 'يوهان شتراوس الابن'],
    },
    correctIndex: 1,
  },
  {
    id: 'mu-013',
    categoryId: 'music',
    question: {
      en: 'Which instrument does a timpanist play?',
      ar: 'على أي آلة يعزف عازف التيمباني؟',
    },
    answers: {
      en: ['Trumpet', 'Harp', 'Flute', 'Kettledrums'],
      ar: ['البوق', 'الهارب', 'الفلوت', 'الطبول النحاسية الكبيرة'],
    },
    correctIndex: 3,
  },
  {
    id: 'mu-014',
    categoryId: 'music',
    question: {
      en: 'How many musicians play in a quartet?',
      ar: 'كم عدد العازفين في فرقة الرباعي (الكوارتيت)؟',
    },
    answers: {
      en: ['3', '5', '4', '8'],
      ar: ['3', '5', '4', '8'],
    },
    correctIndex: 2,
  },
  {
    id: 'mu-015',
    categoryId: 'music',
    question: {
      en: 'Which Lebanese singer is nicknamed "our Ambassador to the Stars"?',
      ar: 'أي مطربة لبنانية تُلقَّب بـ"سفيرتنا إلى النجوم"؟',
    },
    answers: {
      en: ['Fairuz', 'Sabah', 'Majida El Roumi', 'Samira Tawfik'],
      ar: ['فيروز', 'صباح', 'ماجدة الرومي', 'سميرة توفيق'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Many of her songs were written by the Rahbani brothers.',
      ar: 'كتب الأخوان رحباني كثيرًا من أغانيها.',
    },
  },
  {
    id: 'mu-016',
    categoryId: 'music',
    question: {
      en: 'In which US city is Graceland, the former home of Elvis Presley?',
      ar: 'في أي مدينة أمريكية يقع غريسلاند، منزل إلفيس بريسلي السابق؟',
    },
    answers: {
      en: ['Nashville', 'Memphis', 'New Orleans', 'Chicago'],
      ar: ['ناشفيل', 'ممفيس', 'نيو أورلينز', 'شيكاغو'],
    },
    correctIndex: 1,
  },
];
