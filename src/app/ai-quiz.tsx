import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { hapticError } from '@/animation/haptics';
import { LiveStatusArt } from '@/components/LiveStatusArt';
import { NeonButton } from '@/components/NeonButton';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { AI_QUIZ_AVAILABLE, aiConfig } from '@/config/aiConfig';
import { cleanTopic, TOPIC_MAX, TOPIC_MIN } from '@/services/openRouter';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';

/** AI Quiz entry: the player types any topic (Arabic or English) and taps "Quiz me". */
export default function AiQuizScreen() {
  const { t, textStart } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { activePlayer } = usePlayers();
  const [topic, setTopic] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [focused, setFocused] = useState(false);

  // The web build stays on Live Questions only (no AI key in website code).
  if (!AI_QUIZ_AVAILABLE) return <Redirect href="/" />;
  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;

  const start = () => {
    const clean = cleanTopic(topic);
    if (!clean) {
      hapticError();
      setInvalid(true);
      return;
    }
    router.push({ pathname: '/ai-game', params: { topic: clean } });
  };

  return (
    <Screen maxWidth={560}>
      <ScreenHeader title={t.aiQuiz} subtitle={activePlayer.name} />
      <View style={styles.card}>
        <LiveStatusArt kind="empty" icon="robot-happy-outline" />
        <Text style={[styles.label, { textAlign: textStart }]}>{t.aiTopicLabel}</Text>
        <TextInput
          value={topic}
          onChangeText={(text) => {
            setTopic(text);
            if (invalid) setInvalid(false);
          }}
          onSubmitEditing={start}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={t.aiTopicPlaceholder}
          placeholderTextColor={c.textMuted}
          maxLength={TOPIC_MAX + 10}
          returnKeyType="go"
          autoCorrect={false}
          accessibilityLabel={t.aiTopicLabel}
          style={[styles.input, { textAlign: textStart }, focused && styles.focused, invalid && { borderColor: c.danger }]}
        />
        <Text style={[styles.hint, { textAlign: textStart }, invalid && { color: c.danger }]}>
          {t.aiTopicHint(TOPIC_MIN, TOPIC_MAX)}
        </Text>
        <NeonButton label={t.quizMe} icon="creation" onPress={start} disabled={!topic.trim()} pulse />
      </View>

      <View style={styles.note}>
        <MaterialCommunityIcons name={aiConfig.apiKey ? 'information-outline' : 'key-alert-outline'} size={18} color={c.textMuted} />
        <Text style={[styles.noteText, { textAlign: textStart }]}>
          {aiConfig.apiKey ? t.aiDisclaimer : t.aiKeyMissingNote}
        </Text>
      </View>
    </Screen>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    card: {
      gap: spacing.md,
      padding: spacing.lg,
      borderRadius: radius.lg,
      borderWidth: 1.5,
      borderColor: c.border,
      backgroundColor: c.surface,
      boxShadow: glow(c.glowPrimary, 18),
    },
    label: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold },
    input: {
      minHeight: 56,
      paddingHorizontal: spacing.lg,
      borderRadius: radius.md,
      borderWidth: 1.5,
      borderColor: c.border,
      backgroundColor: c.chip,
      color: c.text,
      fontSize: fontSize.label,
      fontFamily: fonts.bold,
    },
    focused: { borderColor: c.primaryGlow, boxShadow: glow(c.glowPrimary, 14) },
    hint: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.semibold },
    note: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.sm },
    noteText: { flex: 1, color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.regular, lineHeight: 20 },
  });
