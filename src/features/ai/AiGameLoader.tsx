import { router } from 'expo-router';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { hapticError } from '@/animation/haptics';
import { LiveStatusArt } from '@/components/LiveStatusArt';
import { NeonButton, type IconName } from '@/components/NeonButton';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { StateCard } from '@/components/StateCard';
import { aiConfig } from '@/config/aiConfig';
import { aiCategoryFor, categoryTitle } from '@/data/categories';
import { GameScreen } from '@/features/game/GameScreen';
import { shuffleAnswers } from '@/features/game/selectQuestions';
import { AiQuizError, createOpenRouterClient, type AiErrorKind } from '@/services/openRouter';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { Player } from '@/types/trivia';
import { aiLoadReducer, initialAiLoadState } from './aiLoadState';

/** One app-wide client built from the local (git-ignored) settings. */
const aiClient = createOpenRouterClient(aiConfig);

const ERROR_ICONS: Record<Exclude<AiErrorKind, 'invalidResponse'>, IconName> = {
  missingKey: 'key-alert-outline',
  paidModel: 'credit-card-off-outline',
  unauthorized: 'key-remove',
  credits: 'credit-card-off-outline',
  notFound: 'robot-confused-outline',
  rateLimit: 'timer-sand',
  server: 'cloud-alert',
  network: 'wifi-off',
  timeout: 'timer-sand',
};

/**
 * AI Quiz: sends ONE OpenRouter request for 5 questions about the topic, then
 * hands them to the regular GameScreen. Failures show Error (with the HTTP
 * code in small print) or Invalid Response, both with Try again.
 */
export function AiGameLoader({ player, topic }: { player: Player; topic: string }) {
  const { t, language } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const [state, dispatch] = useReducer(aiLoadReducer, initialAiLoadState);
  const [attempt, setAttempt] = useState(0);
  const category = useMemo(() => aiCategoryFor(topic), [topic]);

  useEffect(() => {
    let cancelled = false;
    aiClient
      .generate(topic, language)
      .then((questions) => {
        // The model is asked to vary positions; shuffling guarantees it.
        if (!cancelled) dispatch({ type: 'loaded', questions: questions.map((q) => shuffleAnswers(q)) });
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        hapticError();
        if (error instanceof AiQuizError) dispatch({ type: 'failed', kind: error.kind, httpStatus: error.status });
        else dispatch({ type: 'failed', kind: 'invalidResponse' });
      });
    return () => {
      cancelled = true;
    };
    // language is read once per attempt; changing it mid-load must not fire a second request.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, attempt]);

  if (state.status === 'ready') {
    return <GameScreen player={player} category={category} initialQuestions={state.questions} topic={topic} />;
  }

  const retry = () => {
    dispatch({ type: 'retry' });
    setAttempt((n) => n + 1);
  };
  const failed = state.status === 'error' || state.status === 'invalid';
  const httpStatus = failed ? state.httpStatus : undefined;

  return (
    <Screen maxWidth={560} contentStyle={styles.fill}>
      <ScreenHeader title={categoryTitle(category, language)} subtitle={player.name} />
      <View style={styles.center}>
        {state.status === 'loading' && (
          <StateCard key="loading" style={[styles.card, { borderColor: c.accent, boxShadow: glow(c.glowPrimary, 20) }]}>
            <LiveStatusArt kind="loading" icon="robot-happy-outline" />
            <Text style={styles.title} accessibilityRole="header" accessibilityLiveRegion="polite">
              {t.aiLoading}
            </Text>
            <Text style={styles.message}>{t.aiLoadingHint(topic)}</Text>
            <Text style={styles.caption}>{t.aiPoweredBy(aiClient.model)}</Text>
          </StateCard>
        )}

        {failed && (
          <StateCard
            key={state.status}
            style={[styles.card, { borderColor: c.danger, boxShadow: glow(c.glowDanger, 20) }]}
            liveRegion="assertive"
          >
            <LiveStatusArt kind="error" icon={state.status === 'invalid' ? 'code-json' : ERROR_ICONS[state.kind]} />
            <Text style={[styles.title, { color: c.danger }]} accessibilityRole="header">
              {state.status === 'invalid' ? t.aiInvalidTitle : t.aiErrorTitle}
            </Text>
            <Text style={styles.message}>
              {state.status === 'invalid' ? t.aiErrors.invalidResponse : t.aiErrors[state.kind]}
            </Text>
            {httpStatus ? <Text style={styles.code}>{t.httpCode(httpStatus)}</Text> : null}
            <View style={styles.actions}>
              <NeonButton label={t.tryAgain} icon="refresh" onPress={retry} />
              <NeonButton label={t.newTopic} icon="pencil" variant="ghost" onPress={() => router.dismissTo('/ai-quiz')} />
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
    },
    title: { color: c.text, fontSize: fontSize.title, fontFamily: fonts.black, textAlign: 'center' },
    message: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center', lineHeight: 24 },
    caption: { color: c.textMuted, fontSize: fontSize.caption, fontFamily: fonts.semibold, textAlign: 'center', opacity: 0.8 },
    // Small print for the HTTP status code.
    code: { color: c.textMuted, fontSize: fontSize.caption - 1, fontFamily: fonts.regular, opacity: 0.7, letterSpacing: 0.5 },
    actions: { alignSelf: 'stretch', gap: spacing.md, marginTop: spacing.sm },
  });
