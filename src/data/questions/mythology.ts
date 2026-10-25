import type { Question } from '@/types/trivia';

export const mythologyQuestions: Question[] = [
  {
    id: 'my-001',
    categoryId: 'mythology',
    question: {
      en: 'Who is the Greek god of the sea?',
      ar: 'من هو إله البحر عند الإغريق؟',
    },
    answers: {
      en: ['Zeus', 'Poseidon', 'Hades', 'Apollo'],
      ar: ['زيوس', 'بوسيدون', 'هاديس', 'أبولو'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Poseidon is usually shown carrying a three-pronged trident.',
      ar: 'يُصوَّر بوسيدون عادةً حاملًا رمحًا ثلاثي الشُّعب.',
    },
  },
  {
    id: 'my-002',
    categoryId: 'mythology',
    question: {
      en: 'Which Norse god wields the hammer Mjölnir?',
      ar: 'أيّ إله في الأساطير الإسكندنافية يحمل المطرقة ميولنير؟',
    },
    answers: {
      en: ['Odin', 'Loki', 'Thor', 'Freyr'],
      ar: ['أودين', 'لوكي', 'ثور', 'فراير'],
    },
    correctIndex: 2,
  },
  {
    id: 'my-003',
    categoryId: 'mythology',
    question: {
      en: 'Which ancient Egyptian god was the god of the sun?',
      ar: 'أيٌّ من آلهة مصر القديمة كان إله الشمس؟',
    },
    answers: {
      en: ['Ra', 'Anubis', 'Osiris', 'Set'],
      ar: ['رع', 'أنوبيس', 'أوزوريس', 'ست'],
    },
    correctIndex: 0,
  },
  {
    id: 'my-004',
    categoryId: 'mythology',
    question: {
      en: 'What is the Roman equivalent of Ares, the Greek god of war?',
      ar: 'ما المقابل الروماني لآريس إله الحرب عند الإغريق؟',
    },
    answers: {
      en: ['Mercury', 'Jupiter', 'Neptune', 'Mars'],
      ar: ['ميركوري', 'جوبيتر', 'نبتون', 'مارس'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The planet Mars and the month of March are both named after him.',
      ar: 'سُمّي كوكب المريخ (مارس) وشهر مارس باسمه.',
    },
  },
  {
    id: 'my-005',
    categoryId: 'mythology',
    question: {
      en: 'Which Greek hero beheaded the Gorgon Medusa?',
      ar: 'أيّ بطل إغريقي قطع رأس الغورغونة ميدوسا؟',
    },
    answers: {
      en: ['Heracles', 'Perseus', 'Theseus', 'Jason'],
      ar: ['هرقل', 'برسيوس', 'ثيسيوس', 'ياسون'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Perseus used a polished shield as a mirror to avoid her petrifying gaze.',
      ar: 'استخدم برسيوس درعًا مصقولًا كمرآة ليتجنب نظرتها التي تحوّل من يراها إلى حجر.',
    },
  },
  {
    id: 'my-006',
    categoryId: 'mythology',
    question: {
      en: 'What half-man, half-bull creature lived in the Labyrinth of Crete?',
      ar: 'ما المخلوق الذي نصفه إنسان ونصفه ثور وعاش في متاهة كريت؟',
    },
    answers: {
      en: ['Centaur', 'Cyclops', 'Minotaur', 'Satyr'],
      ar: ['القنطور', 'السيكلوب', 'المينوتور', 'الساتير'],
    },
    correctIndex: 2,
  },
  {
    id: 'my-007',
    categoryId: 'mythology',
    question: {
      en: 'In the Epic of Gilgamesh, Gilgamesh is king of which city?',
      ar: 'في ملحمة جلجامش، جلجامش ملك أيّ مدينة؟',
    },
    answers: {
      en: ['Uruk', 'Babylon', 'Nineveh', 'Ur'],
      ar: ['أوروك', 'بابل', 'نينوى', 'أور'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The epic is one of the oldest surviving works of literature, from ancient Mesopotamia.',
      ar: 'تُعد الملحمة من أقدم الأعمال الأدبية الباقية، وهي من بلاد الرافدين القديمة.',
    },
  },
  {
    id: 'my-008',
    categoryId: 'mythology',
    question: {
      en: 'Which jackal-headed Egyptian god was linked to mummification?',
      ar: 'أيّ إله مصري برأس ابن آوى ارتبط بالتحنيط؟',
    },
    answers: {
      en: ['Horus', 'Thoth', 'Anubis', 'Sobek'],
      ar: ['حورس', 'تحوت', 'أنوبيس', 'سوبك'],
    },
    correctIndex: 2,
  },
  {
    id: 'my-009',
    categoryId: 'mythology',
    question: {
      en: 'What is the name of Odin’s eight-legged horse?',
      ar: 'ما اسم حصان أودين ذي الأرجل الثماني؟',
    },
    answers: {
      en: ['Fenrir', 'Sleipnir', 'Huginn', 'Jörmungandr'],
      ar: ['فنرير', 'سليبنير', 'هوغين', 'يورمونغاندر'],
    },
    correctIndex: 1,
  },
  {
    id: 'my-010',
    categoryId: 'mythology',
    question: {
      en: 'Which Greek goddess of wisdom gave her name to Athens?',
      ar: 'أيّ إلهة إغريقية للحكمة سُمّيت أثينا باسمها؟',
    },
    answers: {
      en: ['Hera', 'Aphrodite', 'Artemis', 'Athena'],
      ar: ['هيرا', 'أفروديت', 'أرتميس', 'أثينا'],
    },
    correctIndex: 3,
  },
  {
    id: 'my-011',
    categoryId: 'mythology',
    question: {
      en: 'In Greek myth, who opened a container that released evils into the world?',
      ar: 'في الأساطير الإغريقية، من فتحت وعاءً أطلق الشرور في العالم؟',
    },
    answers: {
      en: ['Pandora', 'Persephone', 'Helen', 'Medea'],
      ar: ['باندورا', 'بيرسيفوني', 'هيلين', 'ميديا'],
    },
    correctIndex: 0,
    explanation: {
      en: 'According to the myth, only hope remained inside.',
      ar: 'تقول الأسطورة إن الأمل وحده بقي في الداخل.',
    },
  },
  {
    id: 'my-012',
    categoryId: 'mythology',
    question: {
      en: 'Which Titan stole fire from the gods and gave it to humans?',
      ar: 'أيّ تيتان سرق النار من الآلهة وأعطاها للبشر؟',
    },
    answers: {
      en: ['Atlas', 'Cronus', 'Prometheus', 'Hyperion'],
      ar: ['أطلس', 'كرونوس', 'بروميثيوس', 'هيبريون'],
    },
    correctIndex: 2,
  },
  {
    id: 'my-013',
    categoryId: 'mythology',
    question: {
      en: 'In Norse myth, which hall receives warriors slain in battle?',
      ar: 'في الأساطير الإسكندنافية، أيّ قاعة تستقبل المحاربين الذين يُقتلون في المعارك؟',
    },
    answers: {
      en: ['Asgard', 'Midgard', 'Niflheim', 'Valhalla'],
      ar: ['أسغارد', 'ميدغارد', 'نيفلهايم', 'فالهالا'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Valhalla is Odin’s great hall in Asgard.',
      ar: 'فالهالا هي قاعة أودين الكبرى في أسغارد.',
    },
  },
  {
    id: 'my-014',
    categoryId: 'mythology',
    question: {
      en: 'Which part of Achilles’ body was his only weak spot?',
      ar: 'ما الجزء الوحيد الضعيف في جسد أخيل؟',
    },
    answers: {
      en: ['Heel', 'Neck', 'Shoulder', 'Knee'],
      ar: ['الكعب', 'الرقبة', 'الكتف', 'الركبة'],
    },
    correctIndex: 0,
  },
  {
    id: 'my-015',
    categoryId: 'mythology',
    question: {
      en: 'Which mythical king turned everything he touched into gold?',
      ar: 'أيّ ملك أسطوري كان يحوّل كل ما يلمسه إلى ذهب؟',
    },
    answers: {
      en: ['Minos', 'Midas', 'Priam', 'Oedipus'],
      ar: ['مينوس', 'ميداس', 'بريام', 'أوديب'],
    },
    correctIndex: 1,
  },
  {
    id: 'my-016',
    categoryId: 'mythology',
    question: {
      en: 'Which two-faced Roman god gave his name to January?',
      ar: 'أيّ إله روماني ذي وجهين سُمّي شهر يناير باسمه؟',
    },
    answers: {
      en: ['Saturn', 'Vulcan', 'Janus', 'Pluto'],
      ar: ['ساتورن', 'فولكان', 'يانوس', 'بلوتو'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Janus was the god of beginnings, gates and transitions.',
      ar: 'كان يانوس إله البدايات والأبواب والتحولات.',
    },
  },
];
