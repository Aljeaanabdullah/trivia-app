import type { Question } from '@/types/trivia';

export const booksQuestions: Question[] = [
  {
    id: 'bk-001',
    categoryId: 'books',
    question: {
      en: 'Who wrote the novel "Pride and Prejudice"?',
      ar: 'من كتب رواية "كبرياء وتحامل"؟',
    },
    answers: {
      en: ['Charlotte Brontë', 'Jane Austen', 'Emily Brontë', 'Mary Shelley'],
      ar: ['شارلوت برونتي', 'جين أوستن', 'إميلي برونتي', 'ماري شيلي'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Jane Austen published it in 1813.',
      ar: 'نشرتها جين أوستن عام 1813.',
    },
  },
  {
    id: 'bk-002',
    categoryId: 'books',
    question: {
      en: 'In "Moby-Dick", who is the captain hunting the white whale?',
      ar: 'في رواية "موبي ديك"، من هو القبطان الذي يطارد الحوت الأبيض؟',
    },
    answers: {
      en: ['Captain Nemo', 'Captain Flint', 'Captain Ahab', 'Starbuck'],
      ar: ['الكابتن نيمو', 'الكابتن فلينت', 'الكابتن آهاب', 'ستاربك'],
    },
    correctIndex: 2,
  },
  {
    id: 'bk-003',
    categoryId: 'books',
    question: {
      en: 'In which year did Naguib Mahfouz win the Nobel Prize in Literature?',
      ar: 'في أي عام فاز نجيب محفوظ بجائزة نوبل في الأدب؟',
    },
    answers: {
      en: ['1978', '1994', '2001', '1988'],
      ar: ['1978', '1994', '2001', '1988'],
    },
    correctIndex: 3,
    explanation: {
      en: 'He was the first Arabic-language writer to win the prize.',
      ar: 'كان أول كاتب باللغة العربية يفوز بهذه الجائزة.',
    },
  },
  {
    id: 'bk-004',
    categoryId: 'books',
    question: {
      en: 'Which author created the detective Hercule Poirot?',
      ar: 'أي كاتب ابتكر شخصية المحقق هركيول بوارو؟',
    },
    answers: {
      en: ['Agatha Christie', 'Arthur Conan Doyle', 'Dorothy L. Sayers', 'Raymond Chandler'],
      ar: ['أغاثا كريستي', 'آرثر كونان دويل', 'دوروثي سايرز', 'ريموند تشاندلر'],
    },
    correctIndex: 0,
  },
  {
    id: 'bk-005',
    categoryId: 'books',
    question: {
      en: 'Who wrote "Don Quixote"?',
      ar: 'من كتب رواية "دون كيخوته"؟',
    },
    answers: {
      en: ['Lope de Vega', 'Miguel de Cervantes', 'Gabriel García Márquez', 'Federico García Lorca'],
      ar: ['لوبي دي فيغا', 'ميغيل دي ثربانتس', 'غابرييل غارسيا ماركيز', 'فيديريكو غارسيا لوركا'],
    },
    correctIndex: 1,
    explanation: {
      en: 'It was published in two parts, in 1605 and 1615.',
      ar: 'نُشرت على جزأين عامي 1605 و1615.',
    },
  },
  {
    id: 'bk-006',
    categoryId: 'books',
    question: {
      en: 'In the Harry Potter books, what is the name of Harry’s owl?',
      ar: 'في كتب هاري بوتر، ما اسم بومة هاري؟',
    },
    answers: {
      en: ['Errol', 'Hermes', 'Pigwidgeon', 'Hedwig'],
      ar: ['إيرول', 'هيرميس', 'بيغويجن', 'هيدويغ'],
    },
    correctIndex: 3,
  },
  {
    id: 'bk-007',
    categoryId: 'books',
    question: {
      en: 'Who wrote "The Old Man and the Sea"?',
      ar: 'من كتب رواية "العجوز والبحر"؟',
    },
    answers: {
      en: ['John Steinbeck', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'William Faulkner'],
      ar: ['جون شتاينبك', 'سكوت فيتزجيرالد', 'إرنست همنغواي', 'ويليام فوكنر'],
    },
    correctIndex: 2,
    explanation: {
      en: 'The short novel was published in 1952.',
      ar: 'نُشرت هذه الرواية القصيرة عام 1952.',
    },
  },
  {
    id: 'bk-008',
    categoryId: 'books',
    question: {
      en: 'Which French author wrote "Les Misérables"?',
      ar: 'أي كاتب فرنسي كتب رواية "البؤساء"؟',
    },
    answers: {
      en: ['Victor Hugo', 'Alexandre Dumas', 'Émile Zola', 'Gustave Flaubert'],
      ar: ['فيكتور هوغو', 'ألكسندر دوما', 'إميل زولا', 'غوستاف فلوبير'],
    },
    correctIndex: 0,
  },
  {
    id: 'bk-009',
    categoryId: 'books',
    question: {
      en: 'Who wrote "The Prophet", first published in English in 1923?',
      ar: 'من كتب "النبي" الذي صدر بالإنجليزية لأول مرة عام 1923؟',
    },
    answers: {
      en: ['Mikhail Naimy', 'Kahlil Gibran', 'Ahmed Shawqi', 'Taha Hussein'],
      ar: ['ميخائيل نعيمة', 'جبران خليل جبران', 'أحمد شوقي', 'طه حسين'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Gibran was a Lebanese-American writer and artist.',
      ar: 'جبران أديب وفنان لبناني أمريكي.',
    },
  },
  {
    id: 'bk-010',
    categoryId: 'books',
    question: {
      en: 'In which novel does the lawyer Atticus Finch appear?',
      ar: 'في أي رواية تظهر شخصية المحامي أتيكوس فينش؟',
    },
    answers: {
      en: ['The Grapes of Wrath', 'Of Mice and Men', 'The Catcher in the Rye', 'To Kill a Mockingbird'],
      ar: ['عناقيد الغضب', 'فئران ورجال', 'الحارس في حقل الشوفان', 'أن تقتل طائرًا بريئًا'],
    },
    correctIndex: 3,
  },
  {
    id: 'bk-011',
    categoryId: 'books',
    question: {
      en: 'Who wrote the novel "War and Peace"?',
      ar: 'من كتب رواية "الحرب والسلام"؟',
    },
    answers: {
      en: ['Fyodor Dostoevsky', 'Anton Chekhov', 'Leo Tolstoy', 'Ivan Turgenev'],
      ar: ['فيودور دوستويفسكي', 'أنطون تشيخوف', 'ليو تولستوي', 'إيفان تورغينيف'],
    },
    correctIndex: 2,
  },
  {
    id: 'bk-012',
    categoryId: 'books',
    question: {
      en: 'In "Alice’s Adventures in Wonderland", what does Alice follow down the hole?',
      ar: 'في "مغامرات أليس في بلاد العجائب"، ماذا تتبع أليس إلى داخل الجحر؟',
    },
    answers: {
      en: ['The White Rabbit', 'The Cheshire Cat', 'The March Hare', 'The Dormouse'],
      ar: ['الأرنب الأبيض', 'قط شيشاير', 'أرنب مارس', 'فأر الزغبة'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The book was written by Lewis Carroll and published in 1865.',
      ar: 'ألّف الكتاب لويس كارول ونُشر عام 1865.',
    },
  },
  {
    id: 'bk-013',
    categoryId: 'books',
    question: {
      en: 'Who wrote "The Hobbit"?',
      ar: 'من كتب رواية "الهوبيت"؟',
    },
    answers: {
      en: ['C. S. Lewis', 'J. R. R. Tolkien', 'Lewis Carroll', 'Roald Dahl'],
      ar: ['سي. إس. لويس', 'جيه. آر. آر. تولكين', 'لويس كارول', 'رولد دال'],
    },
    correctIndex: 1,
  },
  {
    id: 'bk-014',
    categoryId: 'books',
    question: {
      en: 'On which London street does Sherlock Holmes live?',
      ar: 'في أي شارع في لندن يسكن شيرلوك هولمز؟',
    },
    answers: {
      en: ['Oxford Street', 'Fleet Street', 'Downing Street', 'Baker Street'],
      ar: ['شارع أكسفورد', 'شارع فليت', 'شارع داونينغ', 'شارع بيكر'],
    },
    correctIndex: 3,
    explanation: {
      en: 'His famous address is 221B Baker Street.',
      ar: 'عنوانه الشهير هو 221B شارع بيكر.',
    },
  },
  {
    id: 'bk-015',
    categoryId: 'books',
    question: {
      en: 'Who wrote the novel "Robinson Crusoe"?',
      ar: 'من كتب رواية "روبنسون كروزو"؟',
    },
    answers: {
      en: ['Jonathan Swift', 'Robert Louis Stevenson', 'Daniel Defoe', 'Walter Scott'],
      ar: ['جوناثان سويفت', 'روبرت لويس ستيفنسون', 'دانيال ديفو', 'والتر سكوت'],
    },
    correctIndex: 2,
  },
  {
    id: 'bk-016',
    categoryId: 'books',
    question: {
      en: 'Who wrote "One Hundred Years of Solitude"?',
      ar: 'من كتب رواية "مئة عام من العزلة"؟',
    },
    answers: {
      en: ['Gabriel García Márquez', 'Jorge Luis Borges', 'Mario Vargas Llosa', 'Pablo Neruda'],
      ar: ['غابرييل غارسيا ماركيز', 'خورخي لويس بورخيس', 'ماريو فارغاس يوسا', 'بابلو نيرودا'],
    },
    correctIndex: 0,
    explanation: {
      en: 'The Colombian author published it in 1967.',
      ar: 'نشرها الكاتب الكولومبي عام 1967.',
    },
  },
];
