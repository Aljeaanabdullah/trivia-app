import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { IconButton } from '@/components/IconButton';
import { NeonButton } from '@/components/NeonButton';
import { Screen } from '@/components/Screen';
import { useI18n, useThemedStyles } from '@/state/SettingsProvider';
import { directionProps } from '@/theme/direction';
import { fontSize, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export default function HomeScreen() {
  const { t } = useI18n();
  const styles = useThemedStyles(makeStyles);
  return (
    <Screen contentStyle={styles.content} maxWidth={520}>
      <View style={styles.topBar}>
        <IconButton icon="cog" label={t.settings} onPress={() => router.push('/settings')} />
      </View>
      <Animated.View entering={FadeInUp.duration(600)} style={styles.brand}>
        {/* The brand name stays Latin in both languages. */}
        <View {...directionProps('ltr')}>
          <Text style={styles.logo} accessibilityRole="header">
            Brain<Text style={styles.logoAccent}>Byte</Text>
          </Text>
        </View>
        <Text style={styles.tagline}>{t.tagline}</Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.cta}>
        <NeonButton label={t.play} icon="play" onPress={() => router.push('/game')} />
      </Animated.View>
    </Screen>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    content: { flexGrow: 1, justifyContent: 'space-between' },
    topBar: { flexDirection: 'row', justifyContent: 'flex-end' },
    brand: { alignItems: 'center', gap: spacing.sm },
    logo: {
      color: c.text,
      fontSize: 40,
      fontFamily: fonts.display,
      letterSpacing: 1,
      textShadowColor: c.primaryGlow,
      textShadowRadius: 18,
    },
    logoAccent: { color: c.primaryGlow },
    tagline: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center' },
    cta: { gap: spacing.md },
  });
