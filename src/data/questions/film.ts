import type { Question } from '@/types/trivia';

export const filmQuestions: Question[] = [
  {
    id: 'fm-001',
    categoryId: 'film',
    question: {
      en: 'Who directed the 1975 film "Jaws"?',
      ar: 'من أخرج فيلم "الفك المفترس" عام 1975؟',
    },
    answers: {
      en: ['George Lucas', 'Martin Scorsese', 'Steven Spielberg', 'Francis Ford Coppola'],
      ar: ['جورج لوكاس', 'مارتن سكورسيزي', 'ستيفن سبيلبرغ', 'فرانسيس فورد كوبولا'],
    },
    correctIndex: 2,
  },
  {
    id: 'fm-002',
    categoryId: 'film',
    question: {
      en: 'What is the name of the young lion hero of "The Lion King" (1994)?',
      ar: 'ما اسم الشبل بطل فيلم "الأسد الملك" (1994)؟',
    },
    answers: {
      en: ['Simba', 'Mufasa', 'Scar', 'Nala'],
      ar: ['سيمبا', 'موفاسا', 'سكار', 'نالا'],
    },
    correctIndex: 0,
  },
  {
    id: 'fm-003',
    categoryId: 'film',
    question: {
      en: 'Which film won the very first Academy Award for Best Picture?',
      ar: 'أي فيلم فاز بأول جائزة أوسكار لأفضل فيلم؟',
    },
    answers: {
      en: ['Metropolis', 'It Happened One Night', 'Gone with the Wind', 'Wings'],
      ar: ['متروبوليس', 'حدث ذات ليلة', 'ذهب مع الريح', 'أجنحة'],
    },
    correctIndex: 3,
    explanation: {
      en: '"Wings" won at the first Academy Awards ceremony in 1929.',
      ar: 'فاز فيلم "أجنحة" في أول حفل لجوائز الأوسكار عام 1929.',
    },
  },
  {
    id: 'fm-004',
    categoryId: 'film',
    question: {
      en: 'In "The Wizard of Oz" (1939), what is the name of Dorothy’s dog?',
      ar: 'في فيلم "ساحر أوز" (1939)، ما اسم كلب دوروثي؟',
    },
    answers: {
      en: ['Lassie', 'Toto', 'Benji', 'Rex'],
      ar: ['لاسي', 'توتو', 'بنجي', 'ريكس'],
    },
    correctIndex: 1,
  },
  {
    id: 'fm-005',
    categoryId: 'film',
    question: {
      en: 'Who played the title role in "Forrest Gump" (1994)?',
      ar: 'من أدى دور البطولة في فيلم "فورست غامب" (1994)؟',
    },
    answers: {
      en: ['Tom Hanks', 'Kevin Costner', 'Robin Williams', 'Bill Murray'],
      ar: ['توم هانكس', 'كيفن كوستنر', 'روبن ويليامز', 'بيل موراي'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Hanks won the Academy Award for Best Actor for the role.',
      ar: 'فاز هانكس بجائزة الأوسكار لأفضل ممثل عن هذا الدور.',
    },
  },
  {
    id: 'fm-006',
    categoryId: 'film',
    question: {
      en: 'Who played Captain Jack Sparrow in "Pirates of the Caribbean"?',
      ar: 'من أدى دور القبطان جاك سبارو في "قراصنة الكاريبي"؟',
    },
    answers: {
      en: ['Johnny Depp', 'Orlando Bloom', 'Geoffrey Rush', 'Keanu Reeves'],
      ar: ['جوني ديب', 'أورلاندو بلوم', 'جيفري راش', 'كيانو ريفز'],
    },
    correctIndex: 0,
  },
  {
    id: 'fm-007',
    categoryId: 'film',
    question: {
      en: 'In "Star Wars", who is revealed to be Luke Skywalker’s father?',
      ar: 'في "حرب النجوم"، من يتبيّن أنه والد لوك سكايووكر؟',
    },
    answers: {
      en: ['Obi-Wan Kenobi', 'Han Solo', 'Yoda', 'Darth Vader'],
      ar: ['أوبي وان كينوبي', 'هان سولو', 'يودا', 'دارث فيدر'],
    },
    correctIndex: 3,
    explanation: {
      en: 'The reveal comes in "The Empire Strikes Back" (1980).',
      ar: 'جاء هذا الكشف في فيلم "الإمبراطورية تردّ الضربة" (1980).',
    },
  },
  {
    id: 'fm-008',
    categoryId: 'film',
    question: {
      en: 'Who played T. E. Lawrence in "Lawrence of Arabia" (1962)?',
      ar: 'من أدى دور تي. إي. لورنس في فيلم "لورنس العرب" (1962)؟',
    },
    answers: {
      en: ['Omar Sharif', 'Peter O’Toole', 'Alec Guinness', 'Anthony Quinn'],
      ar: ['عمر الشريف', 'بيتر أوتول', 'أليك غينيس', 'أنتوني كوين'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Omar Sharif co-starred in the film as Sherif Ali.',
      ar: 'شارك عمر الشريف في الفيلم بدور الشريف علي.',
    },
  },
  {
    id: 'fm-009',
    categoryId: 'film',
    question: {
      en: 'In which Disney film (2016) does a Polynesian girl sail across the ocean with the demigod Maui?',
      ar: 'في أي فيلم من ديزني (2016) تُبحر فتاة بولينيزية عبر المحيط مع نصف الإله ماوي؟',
    },
    answers: {
      en: ['Moana', 'Brave', 'Frozen', 'Tangled'],
      ar: ['موانا', 'شجاعة', 'ملكة الثلج', 'ربانزل'],
    },
    correctIndex: 0,
  },
  {
    id: 'fm-010',
    categoryId: 'film',
    question: {
      en: 'Which Egyptian actor played the title role in "Doctor Zhivago" (1965)?',
      ar: 'أي ممثل مصري أدى دور البطولة في فيلم "دكتور زيفاغو" (1965)؟',
    },
    answers: {
      en: ['Rushdy Abaza', 'Adel Emam', 'Ahmed Zaki', 'Omar Sharif'],
      ar: ['رشدي أباظة', 'عادل إمام', 'أحمد زكي', 'عمر الشريف'],
    },
    correctIndex: 3,
  },
  {
    id: 'fm-011',
    categoryId: 'film',
    question: {
      en: 'Who directed the 1997 film "Titanic"?',
      ar: 'من أخرج فيلم "تايتانيك" عام 1997؟',
    },
    answers: {
      en: ['James Cameron', 'Ridley Scott', 'Ron Howard', 'Peter Jackson'],
      ar: ['جيمس كاميرون', 'ريدلي سكوت', 'رون هوارد', 'بيتر جاكسون'],
    },
    correctIndex: 0,
  },
  {
    id: 'fm-012',
    categoryId: 'film',
    question: {
      en: 'Who composed the music for "Star Wars" (1977)?',
      ar: 'من ألّف موسيقى فيلم "حرب النجوم" (1977)؟',
    },
    answers: {
      en: ['Hans Zimmer', 'John Williams', 'Ennio Morricone', 'Howard Shore'],
      ar: ['هانز زيمر', 'جون ويليامز', 'إنيو موريكوني', 'هوارد شور'],
    },
    correctIndex: 1,
  },
  {
    id: 'fm-013',
    categoryId: 'film',
    question: {
      en: 'Which film trilogy did Peter Jackson shoot mainly in New Zealand (2001–2003)?',
      ar: 'أي ثلاثية سينمائية صوّرها بيتر جاكسون أساسًا في نيوزيلندا (2001–2003)؟',
    },
    answers: {
      en: ['The Matrix', 'The Hunger Games', 'The Lord of the Rings', 'Harry Potter'],
      ar: ['ذا ماتريكس', 'مباريات الجوع', 'سيد الخواتم', 'هاري بوتر'],
    },
    correctIndex: 2,
  },
  {
    id: 'fm-014',
    categoryId: 'film',
    question: {
      en: 'In "Back to the Future", which car is turned into a time machine?',
      ar: 'في فيلم "العودة إلى المستقبل"، أي سيارة تتحول إلى آلة زمن؟',
    },
    answers: {
      en: ['Ford Mustang', 'Volkswagen Beetle', 'Chevrolet Corvette', 'DeLorean'],
      ar: ['فورد موستانغ', 'فولكس فاغن بيتل', 'شيفروليه كورفيت', 'ديلوريان'],
    },
    correctIndex: 3,
  },
  {
    id: 'fm-015',
    categoryId: 'film',
    question: {
      en: 'What is the name of Charlie Chaplin’s most famous screen character?',
      ar: 'ما اسم أشهر شخصية سينمائية لتشارلي تشابلن؟',
    },
    answers: {
      en: ['The Tramp', 'The Clown', 'The Wanderer', 'The Gentleman'],
      ar: ['المتشرد', 'المهرج', 'الرحّالة', 'السيد النبيل'],
    },
    correctIndex: 0,
  },
  {
    id: 'fm-016',
    categoryId: 'film',
    question: {
      en: 'Which Alfred Hitchcock film contains the famous shower scene?',
      ar: 'أي فيلم لألفريد هيتشكوك يتضمن مشهد الحمّام الشهير؟',
    },
    answers: {
      en: ['Vertigo', 'Psycho', 'The Birds', 'Rear Window'],
      ar: ['دوار', 'سايكو', 'الطيور', 'النافذة الخلفية'],
    },
    correctIndex: 1,
    explanation: {
      en: '"Psycho" was released in 1960.',
      ar: 'عُرض فيلم "سايكو" عام 1960.',
    },
  },
];
