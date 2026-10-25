import type { Question } from '@/types/trivia';

export const celebritiesQuestions: Question[] = [
  {
    id: 'ce-001',
    categoryId: 'celebrities',
    question: {
      en: 'Sprinter Usain Bolt represented which country?',
      ar: 'أي دولة مثّلها العدّاء يوسين بولت؟',
    },
    answers: {
      en: ['United States', 'Jamaica', 'Kenya', 'Trinidad and Tobago'],
      ar: ['الولايات المتحدة', 'جامايكا', 'كينيا', 'ترينيداد وتوباغو'],
    },
    correctIndex: 1,
  },
  {
    id: 'ce-002',
    categoryId: 'celebrities',
    question: {
      en: 'Footballer Mohamed Salah is from which country?',
      ar: 'من أي دولة لاعب كرة القدم محمد صلاح؟',
    },
    answers: {
      en: ['Morocco', 'Tunisia', 'Algeria', 'Egypt'],
      ar: ['المغرب', 'تونس', 'الجزائر', 'مصر'],
    },
    correctIndex: 3,
  },
  {
    id: 'ce-003',
    categoryId: 'celebrities',
    question: {
      en: 'Who wrote the Harry Potter book series?',
      ar: 'من كتب سلسلة كتب هاري بوتر؟',
    },
    answers: {
      en: ['J. K. Rowling', 'Roald Dahl', 'J. R. R. Tolkien', 'C. S. Lewis'],
      ar: ['ج. ك. رولينغ', 'رولد دال', 'ج. ر. ر. تولكين', 'سي. إس. لويس'],
    },
    correctIndex: 0,
  },
  {
    id: 'ce-004',
    categoryId: 'celebrities',
    question: {
      en: 'Which scientist is famous for the theory of relativity?',
      ar: 'أي عالِم اشتهر بنظرية النسبية؟',
    },
    answers: {
      en: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Marie Curie'],
      ar: ['إسحاق نيوتن', 'ألبرت أينشتاين', 'نيكولا تسلا', 'ماري كوري'],
    },
    correctIndex: 1,
  },
  {
    id: 'ce-005',
    categoryId: 'celebrities',
    question: {
      en: 'Nobel Peace Prize laureate Malala Yousafzai is from which country?',
      ar: 'من أي بلد الحائزة على جائزة نوبل للسلام ملالا يوسفزاي؟',
    },
    answers: {
      en: ['India', 'Pakistan', 'Afghanistan', 'Bangladesh'],
      ar: ['الهند', 'باكستان', 'أفغانستان', 'بنغلاديش'],
    },
    correctIndex: 1,
    explanation: {
      en: 'She received the prize in 2014 for promoting girls’ education.',
      ar: 'نالت الجائزة عام 2014 لدفاعها عن حق الفتيات في التعليم.',
    },
  },
  {
    id: 'ce-006',
    categoryId: 'celebrities',
    question: {
      en: 'Which singer was nicknamed "Kawkab al-Sharq" (Star of the East)?',
      ar: 'أي مطربة لُقّبت بـ"كوكب الشرق"؟',
    },
    answers: {
      en: ['Fairuz', 'Asmahan', 'Warda', 'Umm Kulthum'],
      ar: ['فيروز', 'أسمهان', 'وردة', 'أم كلثوم'],
    },
    correctIndex: 3,
  },
  {
    id: 'ce-007',
    categoryId: 'celebrities',
    question: {
      en: 'The famous singer Fairuz is from which country?',
      ar: 'من أي دولة المطربة الشهيرة فيروز؟',
    },
    answers: {
      en: ['Syria', 'Lebanon', 'Egypt', 'Jordan'],
      ar: ['سوريا', 'لبنان', 'مصر', 'الأردن'],
    },
    correctIndex: 1,
  },
  {
    id: 'ce-008',
    categoryId: 'celebrities',
    question: {
      en: 'Physicist Stephen Hawking is best known for his work on what?',
      ar: 'بماذا اشتهرت أبحاث الفيزيائي ستيفن هوكينغ؟',
    },
    answers: {
      en: ['Black holes', 'Vaccines', 'Electricity', 'Plate tectonics'],
      ar: ['الثقوب السوداء', 'اللقاحات', 'الكهرباء', 'الصفائح التكتونية'],
    },
    correctIndex: 0,
  },
  {
    id: 'ce-009',
    categoryId: 'celebrities',
    question: {
      en: 'Footballer Lionel Messi is from which country?',
      ar: 'من أي دولة لاعب كرة القدم ليونيل ميسي؟',
    },
    answers: {
      en: ['Argentina', 'Spain', 'Uruguay', 'Brazil'],
      ar: ['الأرجنتين', 'إسبانيا', 'الأوروغواي', 'البرازيل'],
    },
    correctIndex: 0,
  },
  {
    id: 'ce-010',
    categoryId: 'celebrities',
    question: {
      en: 'Tennis player Roger Federer is from which country?',
      ar: 'من أي دولة لاعب التنس روجر فيدرر؟',
    },
    answers: {
      en: ['Austria', 'Germany', 'Sweden', 'Switzerland'],
      ar: ['النمسا', 'ألمانيا', 'السويد', 'سويسرا'],
    },
    correctIndex: 3,
  },
  {
    id: 'ce-011',
    categoryId: 'celebrities',
    question: {
      en: 'In which sport did Muhammad Ali become world champion?',
      ar: 'في أي رياضة أصبح محمد علي بطلًا للعالم؟',
    },
    answers: {
      en: ['Wrestling', 'Boxing', 'Judo', 'Weightlifting'],
      ar: ['المصارعة', 'الملاكمة', 'الجودو', 'رفع الأثقال'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Ali won the world heavyweight boxing title three times.',
      ar: 'فاز محمد علي بلقب بطولة العالم للملاكمة في الوزن الثقيل ثلاث مرات.',
    },
  },
  {
    id: 'ce-012',
    categoryId: 'celebrities',
    question: {
      en: 'Bruce Lee was famous as an actor and expert in what?',
      ar: 'اشتهر بروس لي ممثلًا وخبيرًا في أي مجال؟',
    },
    answers: {
      en: ['Martial arts', 'Magic tricks', 'Opera singing', 'Ballet'],
      ar: ['الفنون القتالية', 'الخدع السحرية', 'الغناء الأوبرالي', 'الباليه'],
    },
    correctIndex: 0,
  },
  {
    id: 'ce-013',
    categoryId: 'celebrities',
    question: {
      en: 'In which city was the famous traveller Ibn Battuta born?',
      ar: 'في أي مدينة وُلد الرحالة الشهير ابن بطوطة؟',
    },
    answers: {
      en: ['Fez', 'Tangier', 'Cairo', 'Tunis'],
      ar: ['فاس', 'طنجة', 'القاهرة', 'تونس'],
    },
    correctIndex: 1,
    explanation: {
      en: 'He was born in Tangier, Morocco, in 1304.',
      ar: 'وُلد في طنجة بالمغرب عام 1304.',
    },
  },
  {
    id: 'ce-014',
    categoryId: 'celebrities',
    question: {
      en: 'Pelé won three FIFA World Cups playing for which country?',
      ar: 'مع أي منتخب فاز بيليه بكأس العالم ثلاث مرات؟',
    },
    answers: {
      en: ['Argentina', 'Brazil', 'Italy', 'Germany'],
      ar: ['الأرجنتين', 'البرازيل', 'إيطاليا', 'ألمانيا'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Pelé won the World Cup in 1958, 1962 and 1970.',
      ar: 'فاز بيليه بكأس العالم أعوام 1958 و1962 و1970.',
    },
  },
  {
    id: 'ce-015',
    categoryId: 'celebrities',
    question: {
      en: 'Footballer Cristiano Ronaldo is from which country?',
      ar: 'من أي دولة لاعب كرة القدم كريستيانو رونالدو؟',
    },
    answers: {
      en: ['Brazil', 'Portugal', 'Spain', 'Italy'],
      ar: ['البرازيل', 'البرتغال', 'إسبانيا', 'إيطاليا'],
    },
    correctIndex: 1,
  },
  {
    id: 'ce-016',
    categoryId: 'celebrities',
    question: {
      en: 'Iraqi-British Zaha Hadid was world-famous in which profession?',
      ar: 'في أي مهنة اشتهرت العراقية البريطانية زها حديد عالميًا؟',
    },
    answers: {
      en: ['Fashion design', 'Architecture', 'Film directing', 'Photography'],
      ar: ['تصميم الأزياء', 'العمارة', 'الإخراج السينمائي', 'التصوير الفوتوغرافي'],
    },
    correctIndex: 1,
    explanation: {
      en: 'In 2004 she became the first woman to win the Pritzker Architecture Prize.',
      ar: 'أصبحت عام 2004 أول امرأة تفوز بجائزة بريتزكر للعمارة.',
    },
  },
];
