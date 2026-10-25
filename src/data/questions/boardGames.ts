import type { Question } from '@/types/trivia';

export const boardGamesQuestions: Question[] = [
  {
    id: 'bg-001',
    categoryId: 'board-games',
    question: {
      en: 'How many squares are on a standard chessboard?',
      ar: 'كم عدد المربعات على رقعة الشطرنج القياسية؟',
    },
    answers: {
      en: ['48', '64', '81', '100'],
      ar: ['48', '64', '81', '100'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The board is an 8 × 8 grid.',
      ar: 'الرقعة عبارة عن شبكة من 8 × 8 مربعات.',
    },
  },
  {
    id: 'bg-002',
    categoryId: 'board-games',
    question: {
      en: 'In chess, which piece can only move diagonally?',
      ar: 'في الشطرنج، أي قطعة لا تتحرك إلا قطريًا؟',
    },
    answers: {
      en: ['Rook', 'Knight', 'Queen', 'Bishop'],
      ar: ['الرخ (القلعة)', 'الحصان', 'الوزير', 'الفيل'],
    },
    correctIndex: 3,
  },
  {
    id: 'bg-003',
    categoryId: 'board-games',
    question: {
      en: 'In classic US Monopoly, how much money do you collect for passing GO?',
      ar: 'في لعبة مونوبولي الأمريكية الكلاسيكية، كم تحصل من المال عند المرور بخانة "انطلق"؟',
    },
    answers: {
      en: ['$100', '$150', '$200', '$500'],
      ar: ['100 دولار', '150 دولارًا', '200 دولار', '500 دولار'],
    },
    correctIndex: 2,
  },
  {
    id: 'bg-004',
    categoryId: 'board-games',
    question: {
      en: 'In Scrabble, how many letter tiles does each player keep on their rack?',
      ar: 'في لعبة سكرابل، كم عدد قطع الحروف التي يحتفظ بها كل لاعب على حامله؟',
    },
    answers: {
      en: ['7', '5', '6', '8'],
      ar: ['7', '5', '6', '8'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Using all 7 tiles in one turn earns a 50-point bonus.',
      ar: 'استخدام القطع السبع كلها في دور واحد يمنح مكافأة قدرها 50 نقطة.',
    },
  },
  {
    id: 'bg-005',
    categoryId: 'board-games',
    question: {
      en: 'In standard 8 × 8 checkers (draughts), how many pieces does each player start with?',
      ar: 'في لعبة الداما القياسية على رقعة 8 × 8، بكم قطعة يبدأ كل لاعب؟',
    },
    answers: {
      en: ['10', '16', '15', '12'],
      ar: ['10', '16', '15', '12'],
    },
    correctIndex: 3,
  },
  {
    id: 'bg-006',
    categoryId: 'board-games',
    question: {
      en: 'What is the total number of dots on a standard six-sided die?',
      ar: 'ما مجموع النقاط على حجر نرد قياسي ذي ستة أوجه؟',
    },
    answers: {
      en: ['18', '21', '24', '36'],
      ar: ['18', '21', '24', '36'],
    },
    correctIndex: 1,
    explanation: {
      en: '1 + 2 + 3 + 4 + 5 + 6 = 21.',
      ar: '1 + 2 + 3 + 4 + 5 + 6 = 21.',
    },
  },
  {
    id: 'bg-007',
    categoryId: 'board-games',
    question: {
      en: 'Professor Plum and Colonel Mustard are suspects in which board game?',
      ar: 'البروفيسور بلَم والعقيد مسترد مشتبه بهما في أي لعبة لوحية؟',
    },
    answers: {
      en: ['Monopoly', 'Risk', 'Cluedo', 'The Game of Life'],
      ar: ['مونوبولي', 'ريسك', 'كلودو', 'لعبة الحياة'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The game is known as "Clue" in North America.',
      ar: 'تُعرف اللعبة باسم "كلو" في أمريكا الشمالية.',
    },
  },
  {
    id: 'bg-008',
    categoryId: 'board-games',
    question: {
      en: 'In which board game do players try to conquer territories on a world map?',
      ar: 'في أي لعبة لوحية يحاول اللاعبون السيطرة على أقاليم على خريطة العالم؟',
    },
    answers: {
      en: ['Risk', 'Scrabble', 'Cluedo', 'Ticket to Ride'],
      ar: ['ريسك', 'سكرابل', 'كلودو', 'تذكرة ركوب (Ticket to Ride)'],
    },
    correctIndex: 0,
  },
  {
    id: 'bg-009',
    categoryId: 'board-games',
    question: {
      en: 'Which chess move lets the king and a rook move in the same turn?',
      ar: 'أي حركة في الشطرنج تسمح للملك والرخ بالتحرك في الدور نفسه؟',
    },
    answers: {
      en: ['En passant', 'Castling', 'Promotion', 'Fork'],
      ar: ['الأخذ بالتجاوز', 'التبييت', 'الترقية', 'الشوكة'],
    },
    correctIndex: 1,
  },
  {
    id: 'bg-010',
    categoryId: 'board-games',
    question: {
      en: 'Which ancient Indian game is considered the ancestor of chess?',
      ar: 'أي لعبة هندية قديمة تُعدّ سلف لعبة الشطرنج؟',
    },
    answers: {
      en: ['Go', 'Xiangqi', 'Shogi', 'Chaturanga'],
      ar: ['غو', 'شيانغتشي', 'شوغي', 'تشاتورانغا'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The game spread from India to Persia, and the Arabs later called it shatranj.',
      ar: 'انتقلت اللعبة من الهند إلى بلاد فارس، ثم أخذها العرب وسمّوها الشطرنج.',
    },
  },
  {
    id: 'bg-011',
    categoryId: 'board-games',
    question: {
      en: 'In the game of Go, which color of stones moves first?',
      ar: 'في لعبة غو، أي لون من الأحجار يلعب أولًا؟',
    },
    answers: {
      en: ['White', 'Red', 'Black', 'Blue'],
      ar: ['الأبيض', 'الأحمر', 'الأسود', 'الأزرق'],
    },
    correctIndex: 2,
  },
  {
    id: 'bg-012',
    categoryId: 'board-games',
    question: {
      en: 'Which of these is one of the five resources in the base game of Catan?',
      ar: 'أي مما يلي من الموارد الخمسة في النسخة الأساسية من لعبة كاتان؟',
    },
    answers: {
      en: ['Gold', 'Wool', 'Oil', 'Silk'],
      ar: ['الذهب', 'الصوف', 'النفط', 'الحرير'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The five resources are brick, lumber, wool, grain and ore.',
      ar: 'الموارد الخمسة هي الطوب والخشب والصوف والحبوب والخام.',
    },
  },
  {
    id: 'bg-013',
    categoryId: 'board-games',
    question: {
      en: 'The game Snakes and Ladders originated in which country?',
      ar: 'في أي بلد نشأت لعبة السلم والثعبان؟',
    },
    answers: {
      en: ['India', 'China', 'Egypt', 'England'],
      ar: ['الهند', 'الصين', 'مصر', 'إنجلترا'],
    },
    correctIndex: 0,
  },
  {
    id: 'bg-014',
    categoryId: 'board-games',
    question: {
      en: 'Which chess piece moves in an "L" shape?',
      ar: 'أي قطعة شطرنج تتحرك على شكل حرف "L"؟',
    },
    answers: {
      en: ['Bishop', 'King', 'Rook', 'Knight'],
      ar: ['الفيل', 'الملك', 'الرخ (القلعة)', 'الحصان'],
    },
    correctIndex: 3,
  },
  {
    id: 'bg-015',
    categoryId: 'board-games',
    question: {
      en: 'Which is the most expensive property on the classic US Monopoly board?',
      ar: 'ما أغلى عقار على لوحة مونوبولي الأمريكية الكلاسيكية؟',
    },
    answers: {
      en: ['Park Place', 'Illinois Avenue', 'Boardwalk', 'Marvin Gardens'],
      ar: ['بارك بليس', 'شارع إلينوي', 'بوردووك', 'حدائق مارفن'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Boardwalk costs $400 to buy.',
      ar: 'يبلغ سعر شراء بوردووك 400 دولار.',
    },
  },
  {
    id: 'bg-016',
    categoryId: 'board-games',
    question: {
      en: 'How many columns does a standard Connect Four grid have?',
      ar: 'كم عمودًا في شبكة لعبة "كونكت فور" القياسية؟',
    },
    answers: {
      en: ['6', '7', '8', '9'],
      ar: ['6', '7', '8', '9'],
    },
    correctIndex: 1,
    explanation: {
      en: 'The grid has 7 columns and 6 rows.',
      ar: 'تتكون الشبكة من 7 أعمدة و6 صفوف.',
    },
  },
];
