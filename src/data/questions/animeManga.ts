import type { Question } from '@/types/trivia';

export const animeMangaQuestions: Question[] = [
  {
    id: 'am-001',
    categoryId: 'anime-manga',
    question: {
      en: 'Son Goku is the main character of which anime and manga series?',
      ar: 'سون غوكو هو الشخصية الرئيسية في أي سلسلة أنمي ومانغا؟',
    },
    answers: {
      en: ['Naruto', 'Dragon Ball', 'One Piece', 'Bleach'],
      ar: ['ناروتو', 'دراغون بول', 'ون بيس', 'بليتش'],
    },
    correctIndex: 1,
  },
  {
    id: 'am-002',
    categoryId: 'anime-manga',
    question: {
      en: 'In One Piece, what is Monkey D. Luffy’s greatest dream?',
      ar: 'في ون بيس، ما أكبر أحلام مونكي دي لوفي؟',
    },
    answers: {
      en: ['To become King of the Pirates', 'To become the greatest swordsman', 'To become a Navy admiral', 'To draw a map of the world'],
      ar: ['أن يصبح ملك القراصنة', 'أن يصبح أعظم مبارز', 'أن يصبح أدميرالًا في البحرية', 'أن يرسم خريطة للعالم'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Becoming the greatest swordsman is Zoro’s dream, and mapping the world is Nami’s.',
      ar: 'أن يصبح أعظم مبارز هو حلم زورو، ورسم خريطة العالم هو حلم نامي.',
    },
  },
  {
    id: 'am-003',
    categoryId: 'anime-manga',
    question: {
      en: 'What type of Pokémon is Pikachu?',
      ar: 'من أي نوع البوكيمون بيكاتشو؟',
    },
    answers: {
      en: ['Fire', 'Water', 'Electric', 'Grass'],
      ar: ['ناري', 'مائي', 'كهربائي', 'عشبي'],
    },
    correctIndex: 2,
  },
  {
    id: 'am-004',
    categoryId: 'anime-manga',
    question: {
      en: 'Which of these Studio Ghibli films won the Academy Award for Best Animated Feature in 2003?',
      ar: 'أي من أفلام استوديو جيبلي التالية فاز بجائزة الأوسكار لأفضل فيلم رسوم متحركة طويل عام 2003؟',
    },
    answers: {
      en: ['My Neighbor Totoro', 'Princess Mononoke', 'Howl’s Moving Castle', 'Spirited Away'],
      ar: ['جاري توتورو', 'الأميرة مونونوكي', 'قلعة هاول المتحركة', 'المخطوفة'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Spirited Away, directed by Hayao Miyazaki, won the Oscar in 2003.',
      ar: 'فاز فيلم "المخطوفة" من إخراج هاياو ميازاكي بجائزة الأوسكار عام 2003.',
    },
  },
  {
    id: 'am-005',
    categoryId: 'anime-manga',
    question: {
      en: 'Which sport is at the heart of Captain Tsubasa?',
      ar: 'ما الرياضة التي تدور حولها أحداث "الكابتن ماجد"؟',
    },
    answers: {
      en: ['Basketball', 'Football (soccer)', 'Baseball', 'Tennis'],
      ar: ['كرة السلة', 'كرة القدم', 'البيسبول', 'التنس'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Captain Tsubasa is known in the Arab world as "Captain Majed".',
      ar: 'يُعرف "كابتن تسوباسا" في العالم العربي باسم "الكابتن ماجد".',
    },
  },
  {
    id: 'am-006',
    categoryId: 'anime-manga',
    question: {
      en: 'In Detective Conan, what is the real name of the boy known as Conan Edogawa?',
      ar: 'في "المحقق كونان"، ما الاسم الحقيقي للفتى المعروف باسم كونان إدوغاوا؟',
    },
    answers: {
      en: ['Kaito Kid', 'Heiji Hattori', 'Kogoro Mouri', 'Shinichi Kudo'],
      ar: ['كايتو كيد', 'هيجي هاتوري', 'كوغورو موري', 'شينيتشي كودو'],
    },
    correctIndex: 3,
  },
  {
    id: 'am-007',
    categoryId: 'anime-manga',
    question: {
      en: 'Which ninja village is Naruto Uzumaki from?',
      ar: 'من أي قرية نينجا ينحدر ناروتو أوزوماكي؟',
    },
    answers: {
      en: ['Hidden Leaf Village', 'Hidden Sand Village', 'Hidden Mist Village', 'Hidden Cloud Village'],
      ar: ['قرية أوراق الشجر المخفية (كونوها)', 'قرية الرمل المخفية', 'قرية الضباب المخفية', 'قرية السحاب المخفية'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The Hidden Leaf Village is also known by its Japanese name, Konoha.',
      ar: 'تُعرف قرية أوراق الشجر المخفية أيضًا باسمها الياباني "كونوها".',
    },
  },
  {
    id: 'am-008',
    categoryId: 'anime-manga',
    question: {
      en: 'Who is the main protagonist of Attack on Titan?',
      ar: 'من هو البطل الرئيسي في "هجوم العمالقة"؟',
    },
    answers: {
      en: ['Levi Ackerman', 'Armin Arlert', 'Eren Yeager', 'Reiner Braun'],
      ar: ['ليفاي أكرمان', 'أرمين أرليرت', 'إرين ييغر', 'راينر براون'],
    },
    correctIndex: 2,
  },
  {
    id: 'am-009',
    categoryId: 'anime-manga',
    question: {
      en: 'Director Hayao Miyazaki co-founded which famous animation studio?',
      ar: 'شارك المخرج هاياو ميازاكي في تأسيس أي استوديو رسوم متحركة شهير؟',
    },
    answers: {
      en: ['Toei Animation', 'Studio Ghibli', 'Madhouse', 'Sunrise'],
      ar: ['توي أنيميشن', 'استوديو جيبلي', 'مادهاوس', 'صن رايز'],
    },
    correctIndex: 1,
  },
  {
    id: 'am-010',
    categoryId: 'anime-manga',
    question: {
      en: 'In My Neighbor Totoro, what magical creature serves as a bus?',
      ar: 'في فيلم "جاري توتورو"، أي مخلوق سحري يعمل كحافلة؟',
    },
    answers: {
      en: ['A cat', 'A dragon', 'A giant rabbit', 'A flying fish'],
      ar: ['قط', 'تنين', 'أرنب عملاق', 'سمكة طائرة'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The famous "Catbus" carries the sisters Satsuki and Mei.',
      ar: 'تنقل "الحافلة القطة" الشهيرة الأختين ساتسوكي وماي.',
    },
  },
  {
    id: 'am-011',
    categoryId: 'anime-manga',
    question: {
      en: 'Doraemon is a robot shaped like which animal?',
      ar: 'دورايمون روبوت على هيئة أي حيوان؟',
    },
    answers: {
      en: ['Dog', 'Mouse', 'Rabbit', 'Cat'],
      ar: ['كلب', 'فأر', 'أرنب', 'قط'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Doraemon is a robotic cat who travels back in time from the 22nd century.',
      ar: 'دورايمون قط آلي يعود بالزمن من القرن الثاني والعشرين.',
    },
  },
  {
    id: 'am-012',
    categoryId: 'anime-manga',
    question: {
      en: 'In which direction are traditional Japanese manga pages read?',
      ar: 'في أي اتجاه تُقرأ صفحات المانغا اليابانية التقليدية؟',
    },
    answers: {
      en: ['Left to right', 'Bottom to top', 'Right to left', 'Diagonally'],
      ar: ['من اليسار إلى اليمين', 'من الأسفل إلى الأعلى', 'من اليمين إلى اليسار', 'بشكل قُطري'],
    },
    correctIndex: 2,
  },
  {
    id: 'am-013',
    categoryId: 'anime-manga',
    question: {
      en: 'Which manga artist created Dragon Ball?',
      ar: 'أي رسام مانغا ابتكر "دراغون بول"؟',
    },
    answers: {
      en: ['Akira Toriyama', 'Masashi Kishimoto', 'Eiichiro Oda', 'Rumiko Takahashi'],
      ar: ['أكيرا تورياما', 'ماساشي كيشيموتو', 'إيتشيرو أودا', 'روميكو تاكاهاشي'],
    },
    correctIndex: 0,
  },
  {
    id: 'am-014',
    categoryId: 'anime-manga',
    question: {
      en: 'Which manga artist, often called the "God of Manga", created Astro Boy?',
      ar: 'أي رسام مانغا، يُلقب غالبًا بـ"إله المانغا"، ابتكر "أسترو بوي"؟',
    },
    answers: {
      en: ['Hayao Miyazaki', 'Go Nagai', 'Leiji Matsumoto', 'Osamu Tezuka'],
      ar: ['هاياو ميازاكي', 'غو ناغاي', 'ليجي ماتسوموتو', 'أوسامو تيزوكا'],
    },
    correctIndex: 3,
  },
  {
    id: 'am-015',
    categoryId: 'anime-manga',
    question: {
      en: 'In One Piece, which ship did the Straw Hat Pirates sail before the Thousand Sunny?',
      ar: 'في ون بيس، ما السفينة التي أبحر بها قراصنة قبعة القش قبل "ثاوزند صني"؟',
    },
    answers: {
      en: ['Red Force', 'Moby Dick', 'Going Merry', 'Oro Jackson'],
      ar: ['ريد فورس', 'موبي ديك', 'غوينغ ميري', 'أورو جاكسون'],
    },
    correctIndex: 2,
  },
  {
    id: 'am-016',
    categoryId: 'anime-manga',
    question: {
      en: 'In the Pokémon anime, what is the name of Ash Ketchum’s hometown?',
      ar: 'في أنمي بوكيمون، ما اسم البلدة التي ينحدر منها آش كاتشم؟',
    },
    answers: {
      en: ['Viridian City', 'Pallet Town', 'Cerulean City', 'Pewter City'],
      ar: ['مدينة فيريديان', 'بلدة باليت', 'مدينة سيروليان', 'مدينة بيوتر'],
    },
    correctIndex: 1,
  },
];
