export const GAME_CONFIG = {
  questionsPerGame: 5,
  secondsPerQuestion: 20,
  /** At or below this many seconds the timer switches to its urgent style. */
  urgentThresholdSeconds: 5,
} as const;
