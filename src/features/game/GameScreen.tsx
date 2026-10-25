import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';

import { hapticError, hapticSuccess, hapticTap } from '@/animation/haptics';
import { AnswerButton, type AnswerState } from '@/components/AnswerButton';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FeedbackPanel } from '@/components/FeedbackPanel';
import { GameHeader } from '@/components/GameHeader';
import { ParticleBurst } from '@/components/ParticleBurst';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { QuestionCard } from '@/components/QuestionCard';
import { QuestionStage, STAGE_EXIT_MS } from '@/components/QuestionStage';
import { RoundSummary } from '@/components/RoundSummary';
import { Screen } from '@/components/Screen';
import { goBackOrHome } from '@/components/ScreenHeader';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { getQuestionsForCategory } from '@/data/questions';
import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { fontSize, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { CategoryId, LocalizedText } from '@/types/trivia';
import { GAME_CONFIG } from './config';
import { createGameState, gameReducer, type GameState } from './gameReducer';
import { selectQuestions } from './selectQuestions';

// Category becomes a real input in Phase 5.
const CATEGORY: CategoryId = 'general-knowledge';
const CATEGORY_NAME: LocalizedText = { en: 'General Knowledge', ar: 'معلومات عامة' };

function newRound(recentIds: readonly string[] = []) {
  return selectQuestions(getQuestionsForCategory(CATEGORY), GAME_CONFIG.questionsPerGame, { recentIds });
}

function answerStateFor(i: number, state: GameState): AnswerState {
  if (state.phase === 'answering') return 'idle';
  const correctIndex = state.questions[state.index].correctIndex;
  if (i === state.selectedIndex) return i === correctIndex ? 'correct' : 'wrong';
  if (i === correctIndex) return 'reveal';
  return 'dimmed';
}

export function GameScreen({ playerName }: { playerName: string }) {
  const { t, language } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const [state, dispatch] = useReducer(gameReducer, undefined, () => createGameState(newRound()));
  const [appActive, setAppActive] = useState(AppState.currentState === 'active');
  // Index of the question currently playing its exit animation, if any.
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaving = leavingIndex === state.index;

  // Pause the countdown while the app is backgrounded.
  useEffect(() => {
    const sub = AppState.addEventListener('change', (s) => setAppActive(s === 'active'));
    return () => sub.remove();
  }, []);

  useEffect(
    () => () => {
      if (exitTimer.current) clearTimeout(exitTimer.current);
    },
    [],
  );

  const question = state.questions[state.index];
  const total = state.questions.length;

  const handleAnswer = useCallback(
    (choiceIndex: number) => {
      if (state.phase !== 'answering') return;
      hapticTap();
      if (choiceIndex === state.questions[state.index].correctIndex) hapticSuccess();
      else hapticError();
      dispatch({ type: 'answer', questionIndex: state.index, choiceIndex });
    },
    [state.phase, state.index, state.questions],
  );

  const handleTimeout = useCallback(() => {
    hapticError();
    dispatch({ type: 'timeout', questionIndex: state.index });
  }, [state.index]);

  const handleNext = useCallback(() => {
    if (leaving) return;
    if (reduceMotion) {
      dispatch({ type: 'next' });
      return;
    }
    setLeavingIndex(state.index);
    exitTimer.current = setTimeout(() => dispatch({ type: 'next' }), STAGE_EXIT_MS);
  }, [leaving, reduceMotion, state.index]);

  const handlePlayAgain = useCallback(() => {
    setLeavingIndex(null);
    dispatch({ type: 'reset', questions: newRound(state.questions.map((q) => q.id)) });
  }, [state.questions]);

  if (state.phase === 'finished' || !question) {
    return (
      <Screen contentStyle={styles.centered}>
        {total === 0 ? (
          <Text style={styles.empty}>{t.noQuestions}</Text>
        ) : (
          <RoundSummary score={state.score} total={total} onPlayAgain={handlePlayAgain} onHome={goBackOrHome} />
        )}
      </Screen>
    );
  }

  const locked = state.phase !== 'answering';
  const roundKey = `${state.round}-${state.index}`;
  const answers = question.answers[language];
  const outcome = state.timedOut ? 'timeout' : state.selectedIndex === question.correctIndex ? 'correct' : 'wrong';

  return (
    <Screen maxWidth={560}>
      <GameHeader
        playerName={playerName}
        categoryName={CATEGORY_NAME[language]}
        questionNumber={state.index + 1}
        totalQuestions={total}
        onQuit={goBackOrHome}
      />
      <ProgressIndicator total={total} currentIndex={state.index} history={state.history} />

      <View style={styles.hud}>
        <ScoreDisplay score={state.score} />
        <CountdownTimer
          key={roundKey}
          durationSeconds={GAME_CONFIG.secondsPerQuestion}
          running={!locked && appActive}
          onExpire={handleTimeout}
        />
      </View>

      <QuestionStage key={roundKey} leaving={leaving}>
        <View>
          <QuestionCard text={question.question[language]} settled={locked} />
          {locked && outcome === 'correct' && <ParticleBurst />}
        </View>
        <View style={styles.answers}>
          {answers.map((label, i) => (
            <AnswerButton
              key={i}
              index={i}
              label={label}
              state={answerStateFor(i, state)}
              disabled={locked}
              onPress={handleAnswer}
            />
          ))}
        </View>
      </QuestionStage>

      {locked && (
        <FeedbackPanel
          outcome={outcome}
          correctAnswer={answers[question.correctIndex]}
          explanation={question.explanation?.[language]}
          isLastQuestion={state.index === total - 1}
          onNext={handleNext}
        />
      )}
    </Screen>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    centered: { flexGrow: 1, justifyContent: 'center' },
    hud: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    answers: { gap: spacing.md },
    empty: { color: c.textMuted, fontSize: fontSize.label, fontFamily: fonts.semibold, textAlign: 'center' },
  });
