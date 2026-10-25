import { useEffect, type ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { useI18n } from '@/state/SettingsProvider';
import { spacing } from '@/theme/tokens';

export const STAGE_EXIT_MS = 220;

/**
 * Wraps one question (card + answers) and plays the 3D swipe-out exit when
 * `leaving` turns true. The swipe follows reading direction. Key it per
 * question so each one mounts fresh.
 */
export function QuestionStage({ leaving, children }: { leaving: boolean; children: ReactNode }) {
  const { flipX } = useI18n();
  const out = useSharedValue(0);

  useEffect(() => {
    if (leaving) out.set(withTiming(1, { duration: STAGE_EXIT_MS }));
  }, [leaving, out]);

  const style = useAnimatedStyle(() => ({
    opacity: 1 - out.value,
    transform: [
      { perspective: 900 },
      { translateX: interpolate(out.value, [0, 1], [0, -60 * flipX]) },
      { rotateY: `${interpolate(out.value, [0, 1], [0, 14 * flipX])}deg` },
      { scale: interpolate(out.value, [0, 1], [1, 0.94]) },
    ],
  }));

  return <Animated.View style={[styles.stage, style]}>{children}</Animated.View>;
}

const styles = StyleSheet.create({
  stage: { gap: spacing.xl },
});
