import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { useTheme } from '@/state/SettingsProvider';
import { glow, spacing } from '@/theme/tokens';
import type { AnswerRecord } from '@/types/trivia';

interface ProgressIndicatorProps {
  total: number;
  currentIndex: number;
  history: AnswerRecord[];
}

/** One segment per question; follows reading direction automatically via flex row. */
export function ProgressIndicator({ total, currentIndex, history }: ProgressIndicatorProps) {
  const { colors: c } = useTheme();
  return (
    <View
      style={styles.row}
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: total, now: history.length }}
    >
      {Array.from({ length: total }, (_, i) => {
        const record = history[i];
        const color = record ? (record.correct ? c.gold : c.danger) : i === currentIndex ? c.primaryGlow : c.track;
        return <Segment key={i} color={color} active={i === currentIndex && !record} />;
      })}
    </View>
  );
}

function Segment({ color, active }: { color: string; active: boolean }) {
  const style = useAnimatedStyle(() => ({ flexGrow: withSpring(active ? 1.8 : 1) }));
  return <Animated.View style={[styles.segment, { backgroundColor: color }, active && { boxShadow: glow(color, 10) }, style]} />;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: spacing.xs + 2 },
  segment: { flexBasis: 0, height: 6, borderRadius: 3 },
});
