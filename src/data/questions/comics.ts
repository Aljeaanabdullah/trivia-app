import type { Question } from '@/types/trivia';

export const comicsQuestions: Question[] = [
  {
    id: 'cm-001',
    categoryId: 'comics',
    question: {
      en: 'What is the name of Superman’s home planet?',
      ar: 'ما اسم الكوكب الأصلي لسوبرمان؟',
    },
    answers: {
      en: ['Krypton', 'Thanagar', 'Apokolips', 'Oa'],
      ar: ['كريبتون', 'ثاناغار', 'أبوكوليبس', 'أوا'],
    },
    correctIndex: 0,
  },
  {
    id: 'cm-002',
    categoryId: 'comics',
    question: {
      en: 'Which city does Batman protect?',
      ar: 'أي مدينة يحميها باتمان؟',
    },
    answers: {
      en: ['Metropolis', 'Star City', 'Gotham City', 'Central City'],
      ar: ['متروبوليس', 'ستار سيتي', 'مدينة غوثام', 'سنترال سيتي'],
    },
    correctIndex: 2,
  },
  {
    id: 'cm-003',
    categoryId: 'comics',
    question: {
      en: 'What is Spider-Man’s real name?',
      ar: 'ما الاسم الحقيقي للرجل العنكبوت؟',
    },
    answers: {
      en: ['Bruce Wayne', 'Peter Parker', 'Clark Kent', 'Tony Stark'],
      ar: ['بروس واين', 'بيتر باركر', 'كلارك كنت', 'توني ستارك'],
    },
    correctIndex: 1,
  },
  {
    id: 'cm-004',
    categoryId: 'comics',
    question: {
      en: 'Which artist co-created Spider-Man with Stan Lee?',
      ar: 'أي رسام شارك ستان لي في ابتكار شخصية الرجل العنكبوت؟',
    },
    answers: {
      en: ['Jack Kirby', 'Bob Kane', 'Jim Lee', 'Steve Ditko'],
      ar: ['جاك كيربي', 'بوب كين', 'جيم لي', 'ستيف ديتكو'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Spider-Man first appeared in "Amazing Fantasy" #15 in 1962.',
      ar: 'ظهر الرجل العنكبوت لأول مرة في العدد 15 من مجلة "أميزنغ فانتسي" عام 1962.',
    },
  },
  {
    id: 'cm-005',
    categoryId: 'comics',
    question: {
      en: 'Which comic book publisher is home to Batman and Wonder Woman?',
      ar: 'أي دار نشر للقصص المصورة تنتمي إليها شخصيتا باتمان والمرأة الخارقة؟',
    },
    answers: {
      en: ['Marvel Comics', 'DC Comics', 'Image Comics', 'Dark Horse Comics'],
      ar: ['مارفل كومكس', 'دي سي كومكس', 'إيميج كومكس', 'دارك هورس كومكس'],
    },
    correctIndex: 1,
  },
  {
    id: 'cm-006',
    categoryId: 'comics',
    question: {
      en: 'What is the name of Tintin’s faithful white dog?',
      ar: 'ما اسم كلب تان تان الأبيض الوفي؟',
    },
    answers: {
      en: ['Dogmatix', 'Odie', 'Snowy (Milou)', 'Pluto'],
      ar: ['أيديفيكس', 'أودي', 'ميلو', 'بلوتو'],
    },
    correctIndex: 2,
    explanation: {
      en: 'He is called Milou in the original French and Snowy in English.',
      ar: 'اسمه ميلو في النسخة الفرنسية الأصلية وسنوي في الإنجليزية.',
    },
  },
  {
    id: 'cm-007',
    categoryId: 'comics',
    question: {
      en: 'Which Belgian artist created "The Adventures of Tintin"?',
      ar: 'أي رسام بلجيكي ابتكر سلسلة "مغامرات تان تان"؟',
    },
    answers: {
      en: ['Hergé', 'Peyo', 'Albert Uderzo', 'René Goscinny'],
      ar: ['هيرجيه', 'بيو', 'ألبير أوديرزو', 'رينيه غوسيني'],
    },
    correctIndex: 0,
  },
  {
    id: 'cm-008',
    categoryId: 'comics',
    question: {
      en: 'What gives Asterix his superhuman strength?',
      ar: 'ما الذي يمنح أستريكس قوته الخارقة؟',
    },
    answers: {
      en: ['A lucky amulet', 'A magic ring', 'A magic sword', 'A magic potion'],
      ar: ['تميمة الحظ', 'خاتم سحري', 'سيف سحري', 'جرعة سحرية'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The potion is brewed by the village druid, Getafix.',
      ar: 'يُعِدّ هذه الجرعة حكيمُ القرية (الدرويد) غيتافيكس.',
    },
  },
  {
    id: 'cm-009',
    categoryId: 'comics',
    question: {
      en: 'Wolverine’s skeleton and claws are bonded with which fictional metal?',
      ar: 'بأي معدن خيالي غُلّف هيكل وولفرين العظمي ومخالبه؟',
    },
    answers: {
      en: ['Vibranium', 'Adamantium', 'Kryptonite', 'Uru'],
      ar: ['الفايبرانيوم', 'الأدامانتيوم', 'الكريبتونايت', 'الأورو'],
    },
    correctIndex: 1,
  },
  {
    id: 'cm-010',
    categoryId: 'comics',
    question: {
      en: 'What is the name of Wonder Woman’s home island?',
      ar: 'ما اسم الجزيرة التي تنحدر منها المرأة الخارقة؟',
    },
    answers: {
      en: ['Atlantis', 'Genosha', 'Themyscira', 'Asgard'],
      ar: ['أتلانتس', 'جينوشا', 'ثيميسكيرا', 'أسغارد'],
    },
    correctIndex: 2,
  },
  {
    id: 'cm-011',
    categoryId: 'comics',
    question: {
      en: 'What is the Hulk’s human name?',
      ar: 'ما الاسم البشري لشخصية الرجل الأخضر (هالك)؟',
    },
    answers: {
      en: ['Bruce Banner', 'Steve Rogers', 'Reed Richards', 'Hank Pym'],
      ar: ['بروس بانر', 'ستيف روجرز', 'ريد ريتشاردز', 'هانك بيم'],
    },
    correctIndex: 0,
  },
  {
    id: 'cm-012',
    categoryId: 'comics',
    question: {
      en: 'Who created the comic strip "Peanuts", starring Charlie Brown and Snoopy?',
      ar: 'من ابتكر سلسلة الرسوم المصورة "بينتس" التي يقوم ببطولتها تشارلي براون وسنوبي؟',
    },
    answers: {
      en: ['Jim Davis', 'Bill Watterson', 'Hergé', 'Charles M. Schulz'],
      ar: ['جيم ديفيس', 'بيل واترسون', 'هيرجيه', 'تشارلز م. شولتز'],
    },
    correctIndex: 3,
  },
  {
    id: 'cm-013',
    categoryId: 'comics',
    question: {
      en: 'What is Garfield the cat’s favorite food?',
      ar: 'ما الطعام المفضل للقط غارفيلد؟',
    },
    answers: {
      en: ['Pizza', 'Lasagna', 'Spaghetti', 'Hamburgers'],
      ar: ['البيتزا', 'اللازانيا', 'السباغيتي', 'البرغر'],
    },
    correctIndex: 1,
  },
  {
    id: 'cm-014',
    categoryId: 'comics',
    question: {
      en: 'The Smurfs were created by the artist Peyo, who came from which country?',
      ar: 'ابتكر الرسام بيو شخصيات السنافر، فمن أي بلد كان؟',
    },
    answers: {
      en: ['France', 'Netherlands', 'Belgium', 'Switzerland'],
      ar: ['فرنسا', 'هولندا', 'بلجيكا', 'سويسرا'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The Smurfs first appeared in 1958 in a Belgian comic magazine.',
      ar: 'ظهرت السنافر لأول مرة عام 1958 في مجلة قصص مصورة بلجيكية.',
    },
  },
  {
    id: 'cm-015',
    categoryId: 'comics',
    question: {
      en: 'In which year did Superman debut in "Action Comics" #1?',
      ar: 'في أي عام ظهر سوبرمان لأول مرة في العدد 1 من "أكشن كومكس"؟',
    },
    answers: {
      en: ['1933', '1941', '1945', '1938'],
      ar: ['1933', '1941', '1945', '1938'],
    },
    correctIndex: 3,
    explanation: {
      en: 'He was created by Jerry Siegel and Joe Shuster.',
      ar: 'ابتكره جيري سيغل وجو شوستر.',
    },
  },
  {
    id: 'cm-016',
    categoryId: 'comics',
    question: {
      en: 'What is the name of the fictional African nation ruled by the Black Panther?',
      ar: 'ما اسم الدولة الأفريقية الخيالية التي يحكمها النمر الأسود؟',
    },
    answers: {
      en: ['Latveria', 'Wakanda', 'Genosha', 'Sokovia'],
      ar: ['لاتفيريا', 'واكاندا', 'جينوشا', 'سوكوفيا'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Wakanda is rich in the fictional metal vibranium.',
      ar: 'تزخر واكاندا بمعدن الفايبرانيوم الخيالي.',
    },
  },
];
