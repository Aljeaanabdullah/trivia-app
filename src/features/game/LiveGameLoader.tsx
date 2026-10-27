import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { hapticError } from '@/animation/haptics';
import { NeonButton } from '@/components/NeonButton';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { categoryTitle, type Category } from '@/data/categories';
import { LiveQuestionsError, openTrivia, type LiveErrorKind } from '@/services/openTrivia';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { Player, PreparedQuestion } from '@/types/trivia';
import { GameScreen } from './GameScreen';
import { shuffleAnswers } from './selectQuestions';

type LoadState =
  | { status: 'loading' }
  | { status: 'ready'; questions: PreparedQuestion[] }
  | { status: 'error'; kind: LiveErrorKind };

const ERROR_ICONS: Record<LiveErrorKind, 'wifi-off' | 'timer-sand' | 'alert-circle-outline'> = {
  network: 'wifi-off',
  timeout: 'timer-sand',
  rateLimit: 'timer-sand',
  noResults: 'alert-circle-outline',
  server: 'alert-circle-outline',
};

/**
 * English mode: fetches 5 live questions for the category, then hands them to
 * the regular GameScreen. Failures show an error with Try Again — never a
 * silent switch to the built-in questions.
 */
export function LiveGameLoader({ player, category }: { player: Player; category: Category }) {
  const { t, language } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<LoadState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    openTrivia
      .fetchQuestions({ categoryId: category.id, openTdbCategory: category.openTdbId })
      .then((questions) => {
        // Randomize where the correct answer sits for every question.
        if (!cancelled) setState({ status: 'ready', questions: questions.map((q) => shuffleAnswers(q)) });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        hapticError();
        setState({ status: 'error', kind: error instanceof LiveQuestionsError ? error.kind : 'network' });
      });
    return () => {
      cancelled = true;
    };
  }, [category.id, category.openTdbId, attempt]);

  if (state.status === 'ready') {
    return <GameScreen player={player} category={category} initialQuestions={state.questions} />;
  }

  const title = categoryTitle(category, language);

  return (
    <Screen maxWidth={560} contentStyle={styles.fill}>
      <ScreenHeader title={title} subtitle={player.name} />
      <View style={styles.center}>
        {state.status === 'loading' ? (
          <Animated.View entering={FadeIn.duration(250)} style={[styles.card, { borderColor: c.border }]}>
            <ActivityIndicator size="large" color={c.primaryGlow} />
            <Text style={styles.title} accessibilityLiveRegion="polite">
              {t.loadingLive}
            </Text>
            <Text style={styles.caption}>{t.liveAttribution}</Text>
          </Animated.View>
        ) : (
          <Animated.View
            entering={FadeIn.duration(250)}
            style={[styles.card, { borderColor: c.danger, boxShadow: glow(c.glowDanger, 18) }]}
            accessibilityLiveRegion="assertive"
          >
            <MaterialCommunityIcons name={ERROR_ICONS[state.kind]} size={44} color={c.danger} />
            <Text style={styles.title} accessibilityRole="header">
              {t.liveErrorTitle}
            </Text>
            <Text style={styles.message}>{t.liveErrors[state.kind]}</Text>
            <View style={styles.actions}>
              <NeonButton
                label={t.tryAgain}
                icon="refresh"
                onPress={() => {
                  setState({ status: 'loading' });
                  setAttempt((n) => n + 1);
                }}
              />
              <NeonButton
                label={t.changeCategory}
                icon="view-grid-outline"
                variant="ghost"
                onPress={() => (router.canGoBack() ? router.back() : router.replace('/categories'))}
              />
            </View>
          </Animated.View>
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
    title: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold, textAlign: 'center' },
    message: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center', lineHeight: 24 },
    caption: { color: c.textMuted, fontSize: fontSize.caption, fontFamily: fonts.semibold, textAlign: 'center' },
    actions: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.sm },
  });
