import type { Question } from '@/types/trivia';

export const artQuestions: Question[] = [
  {
    id: 'ar-001',
    categoryId: 'art',
    question: {
      en: 'Who painted the Mona Lisa?',
      ar: 'من رسم لوحة الموناليزا؟',
    },
    answers: {
      en: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Donatello'],
      ar: ['مايكل أنجلو', 'رافائيل', 'ليوناردو دا فينشي', 'دوناتيلو'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The painting is displayed at the Louvre Museum in Paris.',
      ar: 'تُعرض اللوحة في متحف اللوفر في باريس.',
    },
  },
  {
    id: 'ar-002',
    categoryId: 'art',
    question: {
      en: 'Which artist painted "The Starry Night"?',
      ar: 'أي فنان رسم لوحة "ليلة النجوم"؟',
    },
    answers: {
      en: ['Vincent van Gogh', 'Claude Monet', 'Paul Cézanne', 'Edgar Degas'],
      ar: ['فنسنت فان غوخ', 'كلود مونيه', 'بول سيزان', 'إدغار ديغا'],
    },
    correctIndex: 0,
  },
  {
    id: 'ar-003',
    categoryId: 'art',
    question: {
      en: 'Who painted the ceiling of the Sistine Chapel?',
      ar: 'من رسم سقف كنيسة سيستينا؟',
    },
    answers: {
      en: ['Caravaggio', 'Michelangelo', 'Botticelli', 'Titian'],
      ar: ['كارافاجيو', 'مايكل أنجلو', 'بوتيتشيلي', 'تيتيان'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Michelangelo worked on the ceiling from 1508 to 1512.',
      ar: 'عمل مايكل أنجلو على السقف من عام 1508 إلى عام 1512.',
    },
  },
  {
    id: 'ar-004',
    categoryId: 'art',
    question: {
      en: 'Which artist painted "The Persistence of Memory", with its melting clocks?',
      ar: 'أي فنان رسم لوحة "إصرار الذاكرة" بساعاتها الذائبة؟',
    },
    answers: {
      en: ['René Magritte', 'Joan Miró', 'Max Ernst', 'Salvador Dalí'],
      ar: ['رينيه ماغريت', 'خوان ميرو', 'ماكس إرنست', 'سلفادور دالي'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Dalí was a leading figure of the Surrealist movement.',
      ar: 'كان دالي من أبرز رموز الحركة السريالية.',
    },
  },
  {
    id: 'ar-005',
    categoryId: 'art',
    question: {
      en: 'Which Norwegian artist painted "The Scream"?',
      ar: 'أي فنان نرويجي رسم لوحة "الصرخة"؟',
    },
    answers: {
      en: ['Gustav Klimt', 'Edvard Munch', 'Egon Schiele', 'Wassily Kandinsky'],
      ar: ['غوستاف كليمت', 'إدفارد مونك', 'إيغون شيله', 'فاسيلي كاندينسكي'],
    },
    correctIndex: 1,
  },
  {
    id: 'ar-006',
    categoryId: 'art',
    question: {
      en: 'Pablo Picasso and Georges Braque pioneered which art movement?',
      ar: 'أي حركة فنية كان بابلو بيكاسو وجورج براك من روّادها؟',
    },
    answers: {
      en: ['Impressionism', 'Baroque', 'Cubism', 'Pop Art'],
      ar: ['الانطباعية', 'الباروك', 'التكعيبية', 'فن البوب'],
    },
    correctIndex: 2,
  },
  {
    id: 'ar-007',
    categoryId: 'art',
    question: {
      en: 'In which Indian city is the Taj Mahal located?',
      ar: 'في أي مدينة هندية يقع تاج محل؟',
    },
    answers: {
      en: ['Agra', 'Delhi', 'Jaipur', 'Mumbai'],
      ar: ['أغرا', 'دلهي', 'جايبور', 'مومباي'],
    },
    correctIndex: 0,
    explanation: {
      en: 'It was built by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.',
      ar: 'بناه الإمبراطور المغولي شاه جهان تخليدًا لذكرى زوجته ممتاز محل.',
    },
  },
  {
    id: 'ar-008',
    categoryId: 'art',
    question: {
      en: 'In which city is the Louvre Museum?',
      ar: 'في أي مدينة يقع متحف اللوفر؟',
    },
    answers: {
      en: ['Rome', 'London', 'Madrid', 'Paris'],
      ar: ['روما', 'لندن', 'مدريد', 'باريس'],
    },
    correctIndex: 3,
  },
  {
    id: 'ar-009',
    categoryId: 'art',
    question: {
      en: 'Which angular Arabic calligraphy style is named after an Iraqi city?',
      ar: 'أي خط عربي ذي زوايا حادة سُمّي نسبةً إلى مدينة عراقية؟',
    },
    answers: {
      en: ['Naskh', 'Kufic', 'Thuluth', 'Diwani'],
      ar: ['النسخ', 'الكوفي', 'الثلث', 'الديواني'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Kufic script takes its name from the city of Kufa.',
      ar: 'يُنسب الخط الكوفي إلى مدينة الكوفة.',
    },
  },
  {
    id: 'ar-010',
    categoryId: 'art',
    question: {
      en: 'The famous woodblock print "The Great Wave off Kanagawa" comes from which country?',
      ar: 'من أي بلد جاءت الطبعة الخشبية الشهيرة "الموجة العظيمة قبالة كاناغاوا"؟',
    },
    answers: {
      en: ['China', 'Korea', 'Japan', 'Vietnam'],
      ar: ['الصين', 'كوريا', 'اليابان', 'فيتنام'],
    },
    correctIndex: 2,
    explanation: {
      en: 'It was created by the Japanese artist Hokusai.',
      ar: 'أبدعها الفنان الياباني هوكوساي.',
    },
  },
  {
    id: 'ar-011',
    categoryId: 'art',
    question: {
      en: 'Which Dutch artist painted "Girl with a Pearl Earring"?',
      ar: 'أي فنان هولندي رسم لوحة "الفتاة ذات القرط اللؤلؤي"؟',
    },
    answers: {
      en: ['Rembrandt', 'Frans Hals', 'Vincent van Gogh', 'Johannes Vermeer'],
      ar: ['رامبرانت', 'فرانس هالس', 'فنسنت فان غوخ', 'يوهانس فيرمير'],
    },
    correctIndex: 3,
  },
  {
    id: 'ar-012',
    categoryId: 'art',
    question: {
      en: 'Which Impressionist painted the famous "Water Lilies" series?',
      ar: 'أي رسام انطباعي رسم سلسلة لوحات "زنابق الماء" الشهيرة؟',
    },
    answers: {
      en: ['Claude Monet', 'Pierre-Auguste Renoir', 'Camille Pissarro', 'Paul Gauguin'],
      ar: ['كلود مونيه', 'بيير أوغست رينوار', 'كاميل بيسارو', 'بول غوغان'],
    },
    correctIndex: 0,
  },
  {
    id: 'ar-013',
    categoryId: 'art',
    question: {
      en: 'In which Spanish city is the Alhambra palace?',
      ar: 'في أي مدينة إسبانية يقع قصر الحمراء؟',
    },
    answers: {
      en: ['Córdoba', 'Granada', 'Seville', 'Toledo'],
      ar: ['قرطبة', 'غرناطة', 'إشبيلية', 'طليطلة'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The Alhambra was largely built by the Nasrid dynasty.',
      ar: 'بُني معظم قصر الحمراء في عهد الدولة النصرية.',
    },
  },
  {
    id: 'ar-014',
    categoryId: 'art',
    question: {
      en: 'Which architect designed the Sagrada Família in Barcelona?',
      ar: 'أي معماري صمّم كنيسة ساغرادا فاميليا في برشلونة؟',
    },
    answers: {
      en: ['Le Corbusier', 'Frank Lloyd Wright', 'Antoni Gaudí', 'Oscar Niemeyer'],
      ar: ['لو كوربوزييه', 'فرانك لويد رايت', 'أنطوني غاودي', 'أوسكار نيماير'],
    },
    correctIndex: 2,
  },
  {
    id: 'ar-015',
    categoryId: 'art',
    question: {
      en: 'Which French sculptor created "The Thinker"?',
      ar: 'أي نحات فرنسي صنع تمثال "المفكر"؟',
    },
    answers: {
      en: ['Edgar Degas', 'Henri Matisse', 'Camille Claudel', 'Auguste Rodin'],
      ar: ['إدغار ديغا', 'هنري ماتيس', 'كامي كلوديل', 'أوغست رودان'],
    },
    correctIndex: 3,
  },
  {
    id: 'ar-016',
    categoryId: 'art',
    question: {
      en: 'A true fresco is painted onto which surface?',
      ar: 'على أي سطح تُرسم اللوحة الجدارية "الفريسكو" الحقيقية؟',
    },
    answers: {
      en: ['Canvas', 'Wet plaster', 'Wooden panel', 'Glass'],
      ar: ['قماش الرسم', 'الجص الرطب', 'لوح خشبي', 'الزجاج'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The pigments bind with the plaster as it dries.',
      ar: 'تلتحم الأصباغ بالجص أثناء جفافه.',
    },
  },
];
