import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useI18n } from '@/state/SettingsProvider';
import { directionProps } from '@/theme/direction';
import { spacing } from '@/theme/tokens';
import { NeonBackground } from './NeonBackground';

interface ScreenProps {
  children: ReactNode;
  /** Wrap content in a ScrollView (default true). */
  scroll?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  /** Maximum content width, keeps layouts readable on unfolded/tablet screens. */
  maxWidth?: number;
}

/**
 * Standard screen shell: themed backdrop, safe areas, and the layout direction
 * for the active language. Direction is applied per screen so RTL works in
 * Expo Go without a native restart.
 */
export function Screen({ children, scroll = true, contentStyle, maxWidth = 640 }: ScreenProps) {
  const { direction } = useI18n();
  const inner = [styles.content, { maxWidth }, contentStyle];
  const { style: dirStyle, ...dirAttr } = directionProps(direction);

  return (
    <NeonBackground>
      <SafeAreaView style={[styles.safe, dirStyle]} edges={['top', 'bottom', 'left', 'right']} {...dirAttr}>
        {scroll ? (
          <ScrollView
            contentContainerStyle={inner}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[inner, styles.fill]}>{children}</View>
        )}
      </SafeAreaView>
    </NeonBackground>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  fill: { flex: 1 },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
    width: '100%',
    alignSelf: 'center',
  },
});
