import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, ZoomIn } from 'react-native-reanimated';

import { hapticSuccess } from '@/animation/haptics';
import { AnimatedScore } from '@/components/AnimatedScore';
import { AnimatedTrophy } from '@/components/AnimatedTrophy';
import { NeonButton } from '@/components/NeonButton';
import { ParticleBurst } from '@/components/ParticleBurst';
import { Screen } from '@/components/Screen';
import { aiCategoryFor, categoryTitle, getCategory } from '@/data/categories';
import { accuracyOf, performanceFor, personalBest } from '@/features/history/leaderboard';
import { useHistory } from '@/state/HistoryProvider';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { directionProps } from '@/theme/direction';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

export default function ResultsScreen() {
  const { gameId } = useLocalSearchParams<{ gameId?: string }>();
  const { t, language } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { games, getGame } = useHistory();
  const game = gameId ? getGame(gameId) : undefined;
  const category = game?.topic ? aiCategoryFor(game.topic) : getCategory(game?.categoryId);

  useEffect(() => {
    if (game && game.score > 0) hapticSuccess();
  }, [game]);

  if (!game || !category) return <Redirect href="/" />;

  const wrong = game.total - game.score;
  const accuracy = Math.round(accuracyOf(game) * 100);
  const performance = performanceFor(game.score, game.total);
  const previousBest = personalBest(games, game.playerId, game.categoryId, game.id);
  const isNewBest = game.score > 0 && (previousBest === undefined || game.score > previousBest);
  const tierColor = performance === 'perfect' || performance === 'great' ? c.gold : performance === 'good' ? c.primaryGlow : c.accent;

  return (
    <Screen maxWidth={560}>
      <View style={styles.hero}>
        <AnimatedTrophy color={tierColor} icon={performance === 'low' ? 'medal' : 'trophy'} />
        {performance !== 'low' && (
          <>
            <ParticleBurst spread={1.7} durationMs={1400} />
            <ParticleBurst key="second" spread={1.2} durationMs={1100} />
          </>
        )}
      </View>

      <Animated.View entering={FadeInDown.delay(250).duration(450)} style={styles.titleBlock}>
        <Text style={styles.title} accessibilityRole="header">
          {t.resultsTitle}
        </Text>
        <Text style={styles.player}>{game.playerName}</Text>
        <Text style={[styles.category, { color: category.color }]}>{categoryTitle(category, language)}</Text>
      </Animated.View>

      <Animated.View entering={ZoomIn.delay(400).duration(450)} style={[styles.scoreCard, { borderColor: tierColor }]}>
        <View style={styles.scoreRow} {...directionProps('ltr')} accessible accessibilityLabel={t.outOf(game.score, game.total)}>
          <AnimatedScore value={game.score} style={[styles.score, { color: tierColor }]} />
          <Text style={styles.total}>/ {game.total}</Text>
        </View>
        {isNewBest && (
          <View style={[styles.badge, { backgroundColor: c.goldSoft, borderColor: c.gold }]}>
            <Text style={[styles.badgeText, { color: c.gold }]}>★ {t.newBest}</Text>
          </View>
        )}
        <Text style={styles.message}>{t.perfMessages[performance]}</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(550).duration(450)} style={styles.stats}>
        <Stat label={t.correctLabel} value={String(game.score)} color={c.gold} />
        <Stat label={t.wrongLabel} value={String(wrong)} color={c.danger} />
        <Stat label={t.accuracy} value={`${accuracy}%`} color={c.primaryGlow} />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(700).duration(450)} style={styles.actions}>
        <NeonButton
          label={t.playAgain}
          icon="replay"
          onPress={() =>
            game.topic
              ? router.replace({ pathname: '/ai-game', params: { topic: game.topic } })
              : router.replace({ pathname: '/game', params: { category: category.id } })
          }
        />
        {game.topic ? (
          <NeonButton label={t.newTopic} icon="pencil" variant="ghost" onPress={() => router.dismissTo('/ai-quiz')} />
        ) : (
          <NeonButton
            label={t.changeCategory}
            icon="view-grid-outline"
            variant="ghost"
            onPress={() => (router.canGoBack() ? router.back() : router.replace('/categories'))}
          />
        )}
        <NeonButton
          label={t.viewLeaderboard}
          icon="podium"
          variant="ghost"
          onPress={() => router.push({ pathname: '/leaderboard', params: { category: category.id } })}
        />
      </Animated.View>
    </Screen>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  const styles = useThemedStyles(makeStyles);
  return (
    <View style={styles.stat} accessible accessibilityLabel={`${label}: ${value}`}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    hero: { alignItems: 'center', justifyContent: 'center', marginTop: spacing.sm },
    titleBlock: { alignItems: 'center', gap: 2 },
    title: { color: c.text, fontSize: fontSize.title + 2, fontFamily: fonts.black, lineHeight: 36 },
    player: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.bold },
    category: { fontSize: fontSize.body, fontFamily: fonts.bold, textAlign: 'center' },
    scoreCard: {
      alignItems: 'center',
      gap: spacing.sm,
      padding: spacing.lg,
      borderRadius: radius.lg,
      borderWidth: 1.5,
      backgroundColor: c.surface,
      boxShadow: glow(c.glowGold, 24),
    },
    scoreRow: { flexDirection: 'row', alignItems: 'baseline', gap: spacing.sm },
    score: { fontSize: 64, fontFamily: fonts.display, lineHeight: 76 },
    total: { color: c.textMuted, fontSize: fontSize.title, fontFamily: fonts.displayBold },
    badge: { paddingHorizontal: spacing.md, paddingVertical: 2, borderRadius: radius.pill, borderWidth: 1 },
    badgeText: { fontSize: fontSize.caption + 1, fontFamily: fonts.extrabold },
    message: { color: c.text, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center', lineHeight: 24 },
    stats: { flexDirection: 'row', gap: spacing.sm },
    stat: {
      flex: 1,
      alignItems: 'center',
      gap: 2,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xs,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.borderMuted,
      backgroundColor: c.chip,
    },
    statValue: { fontSize: fontSize.title, fontFamily: fonts.displayBold },
    statLabel: { color: c.textMuted, fontSize: fontSize.caption, fontFamily: fonts.semibold, textAlign: 'center' },
    actions: { gap: spacing.md },
  });
