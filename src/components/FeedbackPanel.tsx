import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { en } from '@/i18n/en';
import { darkColors as c, fontSize, radius, spacing } from '@/theme/tokens';
import { NeonButton } from './NeonButton';

interface FeedbackPanelProps {
  outcome: 'correct' | 'wrong' | 'timeout';
  correctAnswer: string;
  explanation?: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

export function FeedbackPanel({ outcome, correctAnswer, explanation, isLastQuestion, onNext }: FeedbackPanelProps) {
  const title = outcome === 'correct' ? en.correct : outcome === 'timeout' ? en.timeUp : en.wrong;
  const accent = outcome === 'correct' ? c.gold : c.danger;

  return (
    <Animated.View entering={FadeInUp.duration(320)} style={styles.wrap}>
      <View style={[styles.panel, { borderColor: accent }]} accessibilityLiveRegion="polite">
        <Text style={[styles.title, { color: accent }]}>{title}</Text>
        {outcome !== 'correct' && <Text style={styles.body}>{en.correctAnswerWas(correctAnswer)}</Text>}
        {explanation ? <Text style={styles.explanation}>{explanation}</Text> : null}
      </View>
      <NeonButton label={isLastQuestion ? en.seeResults : en.nextQuestion} onPress={onNext} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: spacing.md },
  panel: {
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing.md,
    backgroundColor: 'rgba(10,16,48,0.7)',
    gap: spacing.xs,
  },
  title: { fontSize: fontSize.label, fontWeight: '900' },
  body: { color: c.text, fontSize: fontSize.body, fontWeight: '600' },
  explanation: { color: c.textMuted, fontSize: fontSize.body - 1, lineHeight: 20 },
});
