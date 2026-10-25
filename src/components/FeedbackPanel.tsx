import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp, useReducedMotion } from 'react-native-reanimated';

import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import { NeonButton } from './NeonButton';

interface FeedbackPanelProps {
  outcome: 'correct' | 'wrong' | 'timeout';
  correctAnswer: string;
  explanation?: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

export function FeedbackPanel({ outcome, correctAnswer, explanation, isLastQuestion, onNext }: FeedbackPanelProps) {
  const { colors: c } = useTheme();
  const { t, textStart, isRTL } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const reduceMotion = useReducedMotion();
  const title = outcome === 'correct' ? t.correct : outcome === 'timeout' ? t.timeUp : t.wrong;
  const accent = outcome === 'correct' ? c.gold : c.danger;
  const align = { textAlign: textStart };

  return (
    <Animated.View entering={reduceMotion ? undefined : FadeInUp.duration(320)} style={styles.wrap}>
      <View style={[styles.panel, { borderColor: accent }]} accessibilityLiveRegion="polite" accessible>
        <Text style={[styles.title, align, { color: accent }]}>{title}</Text>
        {outcome !== 'correct' && <Text style={[styles.body, align]}>{t.correctAnswerWas(correctAnswer)}</Text>}
        {explanation ? <Text style={[styles.explanation, align]}>{explanation}</Text> : null}
      </View>
      <NeonButton
        label={isLastQuestion ? t.seeResults : t.nextQuestion}
        icon={isLastQuestion ? 'trophy' : isRTL ? 'arrow-left' : 'arrow-right'}
        onPress={onNext}
      />
    </Animated.View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    wrap: { gap: spacing.md },
    panel: { borderWidth: 1, borderRadius: radius.md, padding: spacing.md, backgroundColor: c.surface, gap: spacing.xs },
    title: { fontSize: fontSize.label, fontFamily: fonts.black, lineHeight: 28 },
    body: { color: c.text, fontSize: fontSize.body, fontFamily: fonts.semibold, lineHeight: 24 },
    explanation: { color: c.textMuted, fontSize: fontSize.body - 1, fontFamily: fonts.regular, lineHeight: 22 },
  });
