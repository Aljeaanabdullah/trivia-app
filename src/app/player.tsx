import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { hapticError, hapticTap } from '@/animation/haptics';
import { IconButton } from '@/components/IconButton';
import { NeonButton } from '@/components/NeonButton';
import { PlayerNameInput } from '@/components/PlayerNameInput';
import { Screen } from '@/components/Screen';
import { goBackOrHome, ScreenHeader } from '@/components/ScreenHeader';
import type { NameError } from '@/features/players/playerName';
import { gamesPlayedBy } from '@/features/history/leaderboard';
import { useHistory } from '@/state/HistoryProvider';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { Player } from '@/types/trivia';

/** Where to go after a player is chosen: `next=play` continues into a game. */
function proceed(next: string | undefined) {
  if (next === 'play') router.replace('/categories');
  else goBackOrHome();
}

export default function PlayerScreen() {
  const { next } = useLocalSearchParams<{ next?: string }>();
  const { t, textStart } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const { players, activeId, enterName, selectPlayer } = usePlayers();
  const [name, setName] = useState('');
  const [error, setError] = useState<NameError | null>(null);
  // Blocks double taps between a successful submit and the navigation.
  const busy = useRef(false);

  const submit = () => {
    if (busy.current) return;
    busy.current = true;
    const result = enterName(name);
    if (!result.ok) {
      busy.current = false;
      hapticError();
      setError(result.error);
      return;
    }
    proceed(next);
  };

  const choose = (player: Player) => {
    if (busy.current) return;
    busy.current = true;
    hapticTap();
    selectPlayer(player.id);
    proceed(next);
  };

  return (
    <Screen maxWidth={560}>
      <ScreenHeader title={t.playerTitle} />
      <View style={styles.card}>
        <PlayerNameInput
          label={t.enterName}
          value={name}
          onChangeText={(text) => {
            setName(text);
            if (error) setError(null);
          }}
          onSubmit={submit}
          error={error}
          autoFocus={players.length === 0}
        />
        <NeonButton label={t.continue} icon="account-check" onPress={submit} />
      </View>

      {players.length > 0 && (
        <View style={styles.section}>
          <Text style={[styles.heading, { textAlign: textStart }]}>{t.savedPlayers}</Text>
          {players.map((player, i) => (
            <Animated.View key={player.id} entering={FadeInDown.delay(i * 50).duration(300)}>
              <PlayerRow player={player} active={player.id === activeId} onChoose={choose} />
            </Animated.View>
          ))}
        </View>
      )}
    </Screen>
  );
}

function PlayerRow({ player, active, onChoose }: { player: Player; active: boolean; onChoose: (p: Player) => void }) {
  const { t, textStart } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { renamePlayer } = usePlayers();
  const { games } = useHistory();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(player.name);
  const [error, setError] = useState<NameError | null>(null);

  if (editing) {
    const save = () => {
      const result = renamePlayer(player.id, draft);
      if (!result.ok) {
        hapticError();
        setError(result.error);
        return;
      }
      setEditing(false);
    };
    return (
      <View style={[styles.row, styles.editRow]}>
        <PlayerNameInput
          value={draft}
          onChangeText={(text) => {
            setDraft(text);
            if (error) setError(null);
          }}
          onSubmit={save}
          error={error}
          label={t.rename}
          autoFocus
        />
        <View style={styles.editActions}>
          <View style={styles.flex}>
            <NeonButton label={t.save} icon="check" onPress={save} />
          </View>
          <View style={styles.flex}>
            <NeonButton
              label={t.cancel}
              variant="ghost"
              onPress={() => {
                setDraft(player.name);
                setError(null);
                setEditing(false);
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.row, active && styles.activeRow]}>
      <Pressable
        style={styles.rowMain}
        onPress={() => onChoose(player)}
        accessibilityRole="button"
        accessibilityLabel={t.selectPlayer(player.name)}
        accessibilityState={{ selected: active }}
      >
        <View style={[styles.avatar, active && { backgroundColor: c.gold }]}>
          <Text style={[styles.avatarText, active && { color: c.onGold }]}>{[...player.name][0]?.toUpperCase()}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={[styles.name, { textAlign: textStart }]} numberOfLines={1}>
            {player.name}
          </Text>
          <Text style={[styles.activeLabel, { textAlign: textStart }, !active && styles.mutedLabel]}>
            {active ? `${t.active} · ` : ''}
            {t.gamesPlayed(gamesPlayedBy(games, player.id))}
          </Text>
        </View>
        {active && <MaterialCommunityIcons name="check-circle" size={22} color={c.gold} />}
      </Pressable>
      <IconButton
        icon="pencil"
        label={`${t.rename}: ${player.name}`}
        onPress={() => {
          setDraft(player.name);
          setEditing(true);
        }}
      />
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    card: {
      gap: spacing.lg,
      padding: spacing.lg,
      borderRadius: radius.lg,
      borderWidth: 1.5,
      borderColor: c.border,
      backgroundColor: c.surface,
      boxShadow: glow(c.glowPrimary, 18),
    },
    section: { gap: spacing.sm },
    heading: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.bold, marginTop: spacing.sm },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      padding: spacing.sm,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.borderMuted,
      backgroundColor: c.chip,
    },
    activeRow: { borderColor: c.gold, boxShadow: glow(c.glowGold, 10) },
    editRow: { flexDirection: 'column', alignItems: 'stretch', padding: spacing.md, gap: spacing.md },
    editActions: { flexDirection: 'row', gap: spacing.sm },
    rowMain: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: spacing.md, minHeight: 48 },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: c.primary,
    },
    avatarText: { color: c.onPrimary, fontSize: fontSize.label, fontFamily: fonts.black },
    name: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.bold },
    activeLabel: { color: c.gold, fontSize: fontSize.caption, fontFamily: fonts.bold },
    mutedLabel: { color: c.textMuted },
    flex: { flex: 1 },
  });
