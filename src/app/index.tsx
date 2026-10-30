import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { hapticTap } from '@/animation/haptics';
import { IconButton } from '@/components/IconButton';
import { NeonButton } from '@/components/NeonButton';
import { Screen } from '@/components/Screen';
import { AI_QUIZ_AVAILABLE } from '@/config/aiConfig';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { directionProps } from '@/theme/direction';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export default function HomeScreen() {
  const { t, textStart, isRTL } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { activePlayer } = usePlayers();

  const play = () => {
    if (activePlayer) router.push('/categories');
    else router.push({ pathname: '/player', params: { next: 'play' } });
  };

  return (
    <Screen contentStyle={styles.content} maxWidth={520}>
      <View style={styles.topBar}>
        <IconButton icon="cog" label={t.settings} onPress={() => router.push('/settings')} />
      </View>

      <Animated.View entering={FadeInUp.duration(600)} style={styles.brand}>
        {/* The brand name stays Latin and LTR in both languages. */}
        <View {...directionProps('ltr')}>
          <Text style={styles.logo} accessibilityRole="header">
            Brain<Text style={styles.logoAccent}>Byte</Text>
          </Text>
        </View>
        <Text style={styles.tagline}>{t.tagline}</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.actions}>
        <Pressable
          style={styles.playerCard}
          onPress={() => {
            hapticTap();
            router.push('/player');
          }}
          accessibilityRole="button"
          accessibilityLabel={activePlayer ? `${t.welcome(activePlayer.name)}. ${t.switchPlayer}` : t.whoIsPlaying}
        >
          <View style={styles.avatar}>
            <MaterialCommunityIcons name={activePlayer ? 'account' : 'account-plus'} size={24} color={c.onPrimary} />
          </View>
          <View style={styles.flex}>
            <Text style={[styles.playerName, { textAlign: textStart }]} numberOfLines={1}>
              {activePlayer ? t.welcome(activePlayer.name) : t.whoIsPlaying}
            </Text>
            {activePlayer && <Text style={[styles.switchText, { textAlign: textStart }]}>{t.switchPlayer}</Text>}
          </View>
          <MaterialCommunityIcons name={isRTL ? 'chevron-left' : 'chevron-right'} size={24} color={c.textMuted} />
        </Pressable>

        <NeonButton label={t.play} icon="play" onPress={play} pulse />
        {AI_QUIZ_AVAILABLE && (
          <NeonButton
            label={t.aiQuiz}
            icon="robot-happy-outline"
            variant="ghost"
            onPress={() =>
              activePlayer ? router.push('/ai-quiz') : router.push({ pathname: '/player', params: { next: 'play' } })
            }
          />
        )}
        <NeonButton label={t.leaderboard} icon="podium" variant="ghost" onPress={() => router.push('/leaderboard')} />
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
    actions: { gap: spacing.md },
    playerCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      minHeight: 64,
      padding: spacing.md,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.surface,
      boxShadow: glow(c.glowPrimary, 12),
    },
    avatar: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: c.primary,
    },
    flex: { flex: 1 },
    playerName: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold },
    switchText: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.semibold },
  });
