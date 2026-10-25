import { router } from 'expo-router';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { AppState, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
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
import { Screen } from '@/components/Screen';
import { goBackOrHome } from '@/components/ScreenHeader';
import { ScoreDisplay } from '@/components/ScoreDisplay';
import { categoryTitle, type Category } from '@/data/categories';
import { getQuestionsForCategory } from '@/data/questions';
import { recentQuestionIds } from '@/features/history/leaderboard';
import { useHistory } from '@/state/HistoryProvider';
import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { fontSize, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { GameRecord, Player } from '@/types/trivia';
import { createId } from '@/utils/id';
import { GAME_CONFIG } from './config';
import { createGameState, gameReducer, type GameState } from './gameReducer';
import { selectQuestions } from './selectQuestions';

function answerStateFor(i: number, state: GameState): AnswerState {
  if (state.phase === 'answering') return 'idle';
  const correctIndex = state.questions[state.index].correctIndex;
  if (i === state.selectedIndex) return i === correctIndex ? 'correct' : 'wrong';
  if (i === correctIndex) return 'reveal';
  return 'dimmed';
}

interface GameScreenProps {
  player: Player;
  category: Category;
}

export function GameScreen({ player, category }: GameScreenProps) {
  const { t, language } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const { games, saveGame } = useHistory();
  // One id per round: saving is idempotent, so the score can never be stored twice.
  const [gameId] = useState(() => createId('g'));
  const [state, dispatch] = useReducer(gameReducer, undefined, () =>
    createGameState(
      selectQuestions(getQuestionsForCategory(category.id), GAME_CONFIG.questionsPerGame, {
        recentIds: recentQuestionIds(games, player.id, category.id),
      }),
    ),
  );
  const [appActive, setAppActive] = useState(AppState.currentState === 'active');
  // Index of the question currently playing its exit animation, if any.
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  // Unfolded Z Fold / tablets / landscape: wider stage with a 2×2 answer grid.
  const wide = useWindowDimensions().width >= 700;
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finished = useRef(false);
  const leaving = leavingIndex === state.index;

  // Pause the countdown while the app is backgrounded or the screen is locked.
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
  const isLast = state.index === total - 1;

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

  const finishGame = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    const record: GameRecord = {
      id: gameId,
      playerId: player.id,
      playerName: player.name,
      categoryId: category.id,
      score: state.score,
      total,
      questionIds: state.questions.map((q) => q.id),
      completedAt: Date.now(),
    };
    saveGame(record);
    router.replace({ pathname: '/results', params: { gameId } });
  }, [gameId, player, category.id, state.score, state.questions, total, saveGame]);

  const handleNext = useCallback(() => {
    if (leaving || state.phase !== 'feedback') return;
    const advance = isLast ? finishGame : () => dispatch({ type: 'next' });
    if (reduceMotion) {
      advance();
      return;
    }
    setLeavingIndex(state.index);
    exitTimer.current = setTimeout(advance, STAGE_EXIT_MS);
  }, [leaving, state.phase, state.index, isLast, finishGame, reduceMotion]);

  if (!question) {
    return (
      <Screen contentStyle={styles.centered}>
        <Text style={styles.empty}>{t.noQuestions}</Text>
      </Screen>
    );
  }

  const locked = state.phase !== 'answering';
  const roundKey = `${state.round}-${state.index}`;
  const answers = question.answers[language];
  const outcome = state.timedOut ? 'timeout' : state.selectedIndex === question.correctIndex ? 'correct' : 'wrong';

  return (
    <Screen maxWidth={wide ? 820 : 560}>
      <GameHeader
        playerName={player.name}
        categoryName={categoryTitle(category, language)}
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
        <View style={[styles.answers, wide && styles.answerGrid]}>
          {answers.map((label, i) => (
            <View key={i} style={wide && styles.answerCell}>
              <AnswerButton
                index={i}
                label={label}
                state={answerStateFor(i, state)}
                disabled={locked}
                onPress={handleAnswer}
                fill={wide}
              />
            </View>
          ))}
        </View>
      </QuestionStage>

      {locked && (
        <FeedbackPanel
          outcome={outcome}
          correctAnswer={answers[question.correctIndex]}
          explanation={question.explanation?.[language]}
          isLastQuestion={isLast}
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
    answerGrid: { flexDirection: 'row', flexWrap: 'wrap' },
    // Two per row: half the width minus half the gap.
    answerCell: { width: '48.8%', flexGrow: 1 },
    empty: { color: c.textMuted, fontSize: fontSize.label, fontFamily: fonts.semibold, textAlign: 'center' },
  });
