/** English UI strings. `ar.ts` must provide the same keys (enforced by the Translation type). */
export const en = {
  appName: 'BrainByte',
  tagline: 'Offline trivia. Futuristic vibes.',

  // Home
  play: 'Play',
  leaderboard: 'Leaderboard',
  settings: 'Settings',
  welcome: (name: string) => `Welcome, ${name}`,
  whoIsPlaying: "Who's playing?",
  switchPlayer: 'Switch player',
  offlineBadge: 'Works 100% offline',

  // Settings
  language: 'Language',
  appearance: 'Appearance',
  darkMode: 'Dark',
  lightMode: 'Light',
  languageEnglish: 'English',
  languageArabic: 'العربية',
  settingsSaved: 'Preferences are saved on this device.',

  // Player
  playerTitle: 'Player Profile',
  enterName: 'Enter your name',
  namePlaceholder: 'Your name',
  nameHint: (min: number, max: number) => `Arabic or English, ${min}–${max} characters`,
  continue: 'Continue',
  savedPlayers: 'Saved players',
  rename: 'Rename',
  save: 'Save',
  cancel: 'Cancel',
  active: 'Active',
  nameRequired: 'Please enter a name.',
  nameTooShort: (min: number) => `Name must be at least ${min} characters.`,
  nameTooLong: (max: number) => `Name must be at most ${max} characters.`,
  nameInvalid: 'Use letters, numbers, spaces, dots, hyphens or apostrophes only.',
  nameTaken: 'Another player already uses this name.',
  selectPlayer: (name: string) => `Play as ${name}`,
  gamesPlayed: (n: number) => (n === 1 ? '1 game' : `${n} games`),

  // Categories
  chooseCategory: 'Choose a Category',
  searchCategories: 'Search categories',
  noCategoryMatch: 'No category matches your search.',
  questionCount: (n: number) => `${n} questions`,

  // Game
  questionOf: (current: number, total: number) => `Question ${current} / ${total}`,
  score: 'Score',
  correct: 'Correct! +1',
  wrong: 'Not quite',
  timeUp: "Time's up!",
  correctAnswerWas: (answer: string) => `Correct answer: ${answer}`,
  nextQuestion: 'Next Question',
  seeResults: 'See Results',
  quit: 'Quit game',
  secondsLeft: (n: number) => `${n} seconds left`,
  noQuestions: 'No questions are available for this category yet.',
  answerOption: (letter: string, label: string) => `Option ${letter}: ${label}`,

  // Results
  resultsTitle: 'Round Complete',
  outOf: (score: number, total: number) => `${score} out of ${total}`,
  correctLabel: 'Correct',
  wrongLabel: 'Wrong / timed out',
  accuracy: 'Accuracy',
  perfMessages: {
    perfect: 'Flawless! You are a BrainByte legend.',
    great: 'Brilliant run! Almost perfect.',
    good: 'Solid score. Keep the streak going!',
    low: 'Good effort. Try again to level up!',
  },
  newBest: 'New personal best!',
  playAgain: 'Play Again',
  changeCategory: 'Change Category',
  viewLeaderboard: 'View Leaderboard',
  home: 'Home',

  // Leaderboard
  allCategories: 'All',
  bestPerPlayer: 'Best per player',
  allGames: 'All games',
  emptyLeaderboard: 'No games yet. Finish a round to claim the top spot!',
  rankLabel: (rank: number) => `Rank ${rank}`,

  // Accessibility
  back: 'Back',
};

export type Translation = typeof en;
