import { router } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NeonBackground } from '@/components/NeonBackground';
import { NeonButton } from '@/components/NeonButton';
import { en } from '@/i18n/en';
import { darkColors as c, fontSize, spacing } from '@/theme/tokens';

/** Minimal launcher for Phase 2. Player entry, settings and categories replace it in later phases. */
export default function HomeScreen() {
  return (
    <NeonBackground>
      <SafeAreaView style={styles.safe}>
        <Animated.View entering={FadeInUp.duration(600)} style={styles.brand}>
          <Text style={styles.logo} accessibilityRole="header">
            Brain<Text style={styles.logoAccent}>Byte</Text>
          </Text>
          <Text style={styles.tagline}>{en.tagline}</Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.cta}>
          <NeonButton label={en.startDemo} onPress={() => router.push('/game')} />
        </Animated.View>
      </SafeAreaView>
    </NeonBackground>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, justifyContent: 'center', padding: spacing.xl, gap: spacing.xxl * 2 },
  brand: { alignItems: 'center', gap: spacing.sm },
  logo: {
    color: c.text,
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: 1,
    textShadowColor: c.primaryGlow,
    textShadowRadius: 18,
  },
  logoAccent: { color: c.primaryGlow },
  tagline: { color: c.textMuted, fontSize: fontSize.body },
  cta: { width: '100%', maxWidth: 420, alignSelf: 'center' },
});
