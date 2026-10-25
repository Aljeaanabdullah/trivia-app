import type { Question } from '@/types/trivia';

export const videoGamesQuestions: Question[] = [
  {
    id: 'vg-001',
    categoryId: 'video-games',
    question: {
      en: 'What was Mario called in the 1981 arcade game "Donkey Kong"?',
      ar: 'ماذا كان اسم ماريو في لعبة الأركيد "دونكي كونغ" عام 1981؟',
    },
    answers: {
      en: ['Plumberman', 'Jumpman', 'Hammer Joe', 'Super Guy'],
      ar: ['بلمبرمان', 'جمب مان', 'هامر جو', 'سوبر غاي'],
    },
    correctIndex: 1,
  },
  {
    id: 'vg-002',
    categoryId: 'video-games',
    question: {
      en: 'Which company created Sonic the Hedgehog?',
      ar: 'أي شركة ابتكرت شخصية سونيك القنفذ؟',
    },
    answers: {
      en: ['Nintendo', 'Capcom', 'Sega', 'Atari'],
      ar: ['نينتندو', 'كابكوم', 'سيغا', 'أتاري'],
    },
    correctIndex: 2,
  },
  {
    id: 'vg-003',
    categoryId: 'video-games',
    question: {
      en: 'How many ghosts chase the player in the original "Pac-Man"?',
      ar: 'كم شبحًا يطارد اللاعب في لعبة "باك مان" الأصلية؟',
    },
    answers: {
      en: ['3', '5', '6', '4'],
      ar: ['3', '5', '6', '4'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The ghosts are Blinky, Pinky, Inky and Clyde.',
      ar: 'الأشباح هي بلينكي وبينكي وإنكي وكلايد.',
    },
  },
  {
    id: 'vg-004',
    categoryId: 'video-games',
    question: {
      en: 'What is the name of the main hero in "The Legend of Zelda" series?',
      ar: 'ما اسم البطل الرئيسي في سلسلة "أسطورة زيلدا"؟',
    },
    answers: {
      en: ['Link', 'Zelda', 'Ganon', 'Navi'],
      ar: ['لينك', 'زيلدا', 'غانون', 'نافي'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Zelda is the princess; many players mistakenly think she is the hero.',
      ar: 'زيلدا هي الأميرة، ويظن كثير من اللاعبين خطأً أنها البطل.',
    },
  },
  {
    id: 'vg-005',
    categoryId: 'video-games',
    question: {
      en: 'In which country was "Tetris" originally created?',
      ar: 'في أي بلد صُنعت لعبة "تتريس" في الأصل؟',
    },
    answers: {
      en: ['Japan', 'United States', 'Soviet Union', 'Finland'],
      ar: ['اليابان', 'الولايات المتحدة', 'الاتحاد السوفيتي', 'فنلندا'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Alexey Pajitnov developed it in Moscow in 1984.',
      ar: 'طوّرها أليكسي باجيتنوف في موسكو عام 1984.',
    },
  },
  {
    id: 'vg-006',
    categoryId: 'video-games',
    question: {
      en: 'In "Minecraft", which block is used to build the frame of a Nether portal?',
      ar: 'في لعبة "ماين كرافت"، أي مكعب يُستخدم لبناء إطار بوابة النذر؟',
    },
    answers: {
      en: ['Diamond', 'Netherrack', 'Cobblestone', 'Obsidian'],
      ar: ['الألماس', 'صخر النذر', 'الحجر المرصوف', 'الأوبسيديان'],
    },
    correctIndex: 3,
  },
  {
    id: 'vg-007',
    categoryId: 'video-games',
    question: {
      en: 'Which Pokémon is number 001 in the National Pokédex?',
      ar: 'أي بوكيمون يحمل الرقم 001 في البوكيديكس الوطني؟',
    },
    answers: {
      en: ['Bulbasaur', 'Pikachu', 'Charmander', 'Mew'],
      ar: ['بولباسور', 'بيكاتشو', 'تشارماندر', 'ميو'],
    },
    correctIndex: 0,
  },
  {
    id: 'vg-008',
    categoryId: 'video-games',
    question: {
      en: 'Which company makes the PlayStation consoles?',
      ar: 'أي شركة تصنع أجهزة بلايستيشن؟',
    },
    answers: {
      en: ['Microsoft', 'Sony', 'Sega', 'Nintendo'],
      ar: ['مايكروسوفت', 'سوني', 'سيغا', 'نينتندو'],
    },
    correctIndex: 1,
  },
  {
    id: 'vg-009',
    categoryId: 'video-games',
    question: {
      en: 'Which Japanese company released the arcade game "Space Invaders" in 1978?',
      ar: 'أي شركة يابانية أصدرت لعبة الأركيد "سبيس إنفيدرز" عام 1978؟',
    },
    answers: {
      en: ['Namco', 'Konami', 'Atari', 'Taito'],
      ar: ['نامكو', 'كونامي', 'أتاري', 'تايتو'],
    },
    correctIndex: 3,
    explanation: {
      en: 'It was designed by Tomohiro Nishikado.',
      ar: 'صمّمها توموهيرو نيشيكادو.',
    },
  },
  {
    id: 'vg-010',
    categoryId: 'video-games',
    question: {
      en: 'Lara Croft is the main character of which video game series?',
      ar: 'لارا كروفت هي الشخصية الرئيسية في أي سلسلة ألعاب فيديو؟',
    },
    answers: {
      en: ['Uncharted', 'Tomb Raider', 'Resident Evil', 'Prince of Persia'],
      ar: ['أنتشارتد', 'تومب رايدر', 'ريزدنت إيفل', 'أمير بلاد فارس'],
    },
    correctIndex: 1,
  },
  {
    id: 'vg-011',
    categoryId: 'video-games',
    question: {
      en: 'Master Chief is the main character of which game franchise?',
      ar: 'ماستر تشيف هو الشخصية الرئيسية في أي سلسلة ألعاب؟',
    },
    answers: {
      en: ['Destiny', 'Gears of War', 'Halo', 'Call of Duty'],
      ar: ['ديستني', 'غيرز أوف وور', 'هيلو', 'كول أوف ديوتي'],
    },
    correctIndex: 2,
  },
  {
    id: 'vg-012',
    categoryId: 'video-games',
    question: {
      en: 'What is the name of Mario’s brother?',
      ar: 'ما اسم شقيق ماريو؟',
    },
    answers: {
      en: ['Luigi', 'Wario', 'Toad', 'Yoshi'],
      ar: ['لويجي', 'واريو', 'تود', 'يوشي'],
    },
    correctIndex: 0,
  },
  {
    id: 'vg-013',
    categoryId: 'video-games',
    question: {
      en: 'In which Japanese city is Nintendo headquartered?',
      ar: 'في أي مدينة يابانية يقع المقر الرئيسي لشركة نينتندو؟',
    },
    answers: {
      en: ['Tokyo', 'Osaka', 'Nagoya', 'Kyoto'],
      ar: ['طوكيو', 'أوساكا', 'ناغويا', 'كيوتو'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Nintendo was founded in Kyoto in 1889.',
      ar: 'تأسست نينتندو في كيوتو عام 1889.',
    },
  },
  {
    id: 'vg-014',
    categoryId: 'video-games',
    question: {
      en: 'In "Angry Birds", which animals are the birds’ enemies?',
      ar: 'في لعبة "الطيور الغاضبة"، ما الحيوانات التي تُعدّ أعداء الطيور؟',
    },
    answers: {
      en: ['Cats', 'Snakes', 'Pigs', 'Foxes'],
      ar: ['القطط', 'الثعابين', 'الخنازير', 'الثعالب'],
    },
    correctIndex: 2,
  },
  {
    id: 'vg-015',
    categoryId: 'video-games',
    question: {
      en: 'Which handheld console did Nintendo release in 1989?',
      ar: 'أي جهاز ألعاب محمول أطلقته نينتندو عام 1989؟',
    },
    answers: {
      en: ['Game Boy Advance', 'Game Boy', 'Nintendo DS', 'Virtual Boy'],
      ar: ['غيم بوي أدفانس', 'غيم بوي', 'نينتندو دي إس', 'فيرتشوال بوي'],
    },
    correctIndex: 1,
  },
  {
    id: 'vg-016',
    categoryId: 'video-games',
    question: {
      en: 'What color is Nintendo’s character Kirby?',
      ar: 'ما لون شخصية كيربي من نينتندو؟',
    },
    answers: {
      en: ['Yellow', 'Blue', 'Green', 'Pink'],
      ar: ['أصفر', 'أزرق', 'أخضر', 'وردي'],
    },
    correctIndex: 3,
  },
];
