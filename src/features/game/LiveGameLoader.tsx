import { router } from 'expo-router';
import { useEffect, useReducer, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { hapticError } from '@/animation/haptics';
import { LiveStatusArt } from '@/components/LiveStatusArt';
import { NeonButton, type IconName } from '@/components/NeonButton';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { StateCard } from '@/components/StateCard';
import { categoryTitle, type Category } from '@/data/categories';
import { LiveQuestionsError, openTrivia, type LiveErrorKind } from '@/services/openTrivia';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { Player } from '@/types/trivia';
import { GameScreen } from './GameScreen';
import { initialLiveLoadState, liveLoadReducer } from './liveLoadState';
import { shuffleAnswers } from './selectQuestions';

type LiveClient = Pick<typeof openTrivia, 'fetchQuestions'>;

const ERROR_ICONS: Record<Exclude<LiveErrorKind, 'empty'>, IconName> = {
  network: 'wifi-off',
  timeout: 'timer-sand',
  rateLimit: 'timer-sand',
  server: 'cloud-alert',
};

interface LiveGameLoaderProps {
  player: Player;
  category: Category;
  /** Defaults to the real Open Trivia DB client; dev-only simulations pass their own. */
  client?: LiveClient;
}

/**
 * English mode: shows Loading while 5 live questions are fetched, then the
 * regular GameScreen. Failures show Error (request failed) or Empty (no / too
 * few questions) with Try Again — never a silent switch to offline questions.
 */
export function LiveGameLoader({ player, category, client = openTrivia }: LiveGameLoaderProps) {
  const { t, language } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const [state, dispatch] = useReducer(liveLoadReducer, initialLiveLoadState);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    client
      .fetchQuestions({ categoryId: category.id, openTdbCategory: category.openTdbId })
      .then((questions) => {
        // Randomize where the correct answer sits for every question.
        if (!cancelled) dispatch({ type: 'loaded', questions: questions.map((q) => shuffleAnswers(q)) });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        hapticError();
        dispatch({ type: 'failed', kind: error instanceof LiveQuestionsError ? error.kind : 'network' });
      });
    return () => {
      cancelled = true;
    };
  }, [client, category.id, category.openTdbId, attempt]);

  if (state.status === 'ready') {
    return <GameScreen player={player} category={category} initialQuestions={state.questions} />;
  }

  const retry = () => {
    dispatch({ type: 'retry' });
    setAttempt((n) => n + 1);
  };
  const chooseCategory = () => router.dismissTo('/categories');

  return (
    <Screen maxWidth={560} contentStyle={styles.fill}>
      <ScreenHeader title={categoryTitle(category, language)} subtitle={player.name} />
      <View style={styles.center}>
        {state.status === 'loading' && (
          <StateCard key="loading" style={[styles.card, { borderColor: c.border }]}>
            <LiveStatusArt kind="loading" icon="brain" />
            <Text style={styles.title} accessibilityRole="header" accessibilityLiveRegion="polite">
              {t.loadingLive}
            </Text>
            <Text style={styles.message}>{t.loadingLiveHint}</Text>
            <Text style={styles.caption}>{t.liveAttribution}</Text>
          </StateCard>
        )}

        {state.status === 'error' && (
          <StateCard
            key="error"
            style={[styles.card, { borderColor: c.danger, boxShadow: glow(c.glowDanger, 20) }]}
            liveRegion="assertive"
          >
            <LiveStatusArt kind="error" icon={ERROR_ICONS[state.kind]} />
            <Text style={[styles.title, { color: c.danger }]} accessibilityRole="header">
              {t.liveErrorTitle}
            </Text>
            <Text style={styles.message}>{t.liveErrors[state.kind]}</Text>
            <View style={styles.actions}>
              <NeonButton label={t.tryAgain} icon="refresh" onPress={retry} />
              <NeonButton label={t.changeCategory} icon="view-grid-outline" variant="ghost" onPress={chooseCategory} />
            </View>
          </StateCard>
        )}

        {state.status === 'empty' && (
          <StateCard
            key="empty"
            style={[styles.card, { borderColor: c.gold, borderStyle: 'dashed', boxShadow: glow(c.glowGold, 18) }]}
            liveRegion="polite"
          >
            <LiveStatusArt kind="empty" icon="text-box-search-outline" />
            <Text style={[styles.title, { color: c.gold }]} accessibilityRole="header">
              {t.emptyTitle}
            </Text>
            <Text style={styles.message}>{t.emptyHint}</Text>
            <View style={styles.actions}>
              <NeonButton label={t.tryAgain} icon="refresh" onPress={retry} />
              <NeonButton label={t.chooseAnotherCategory} icon="view-grid-outline" variant="ghost" onPress={chooseCategory} />
            </View>
          </StateCard>
        )}
      </View>
    </Screen>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    fill: { flexGrow: 1 },
    center: { flex: 1, justifyContent: 'center' },
    card: {
      alignItems: 'center',
      gap: spacing.md,
      padding: spacing.xl,
      borderRadius: radius.lg,
      borderWidth: 1.5,
      backgroundColor: c.surface,
      boxShadow: glow(c.glowPrimary, 18),
    },
    title: { color: c.text, fontSize: fontSize.title, fontFamily: fonts.black, textAlign: 'center' },
    message: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center', lineHeight: 24 },
    caption: { color: c.textMuted, fontSize: fontSize.caption, fontFamily: fonts.semibold, textAlign: 'center', opacity: 0.8 },
    actions: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.sm },
  });
