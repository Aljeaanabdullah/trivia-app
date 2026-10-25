import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { hapticTap } from '@/animation/haptics';
import { Screen } from '@/components/Screen';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SegmentedControl } from '@/components/SegmentedControl';
import { CATEGORIES, categoryTitle, getCategory } from '@/data/categories';
import { accuracyOf, rankLeaderboard, type LeaderboardEntry } from '@/features/history/leaderboard';
import { useHistory } from '@/state/HistoryProvider';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n, useThemedStyles, useTheme } from '@/state/SettingsProvider';
import { directionProps } from '@/theme/direction';
import { fontSize, glow, radius, spacing, type ColorTokens } from '@/theme/tokens';
import { fonts } from '@/theme/typography';
import type { CategoryId } from '@/types/trivia';

type Mode = 'best' | 'all';

export default function LeaderboardScreen() {
  const { category: initial } = useLocalSearchParams<{ category?: string }>();
  const { t, language, textStart } = useI18n();
  const styles = useThemedStyles(makeStyles);
  const { games } = useHistory();
  const [categoryId, setCategoryId] = useState<CategoryId | undefined>(getCategory(initial)?.id);
  const [mode, setMode] = useState<Mode>('best');

  const entries = useMemo(
    () => rankLeaderboard(games, { categoryId, bestPerPlayer: mode === 'best' }),
    [games, categoryId, mode],
  );

  const chips: { id: CategoryId | undefined; label: string; color?: string }[] = [
    { id: undefined, label: t.allCategories },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.name[language], color: c.color })),
  ];

  return (
    <Screen maxWidth={720}>
      <ScreenHeader title={t.leaderboard} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        {chips.map((chip) => {
          const selected = chip.id === categoryId;
          return (
            <Pressable
              key={chip.id ?? 'all'}
              onPress={() => {
                hapticTap();
                setCategoryId(chip.id);
              }}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              style={[styles.chip, selected && styles.chipSelected, selected && chip.color ? { borderColor: chip.color } : null]}
            >
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{chip.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <SegmentedControl<Mode>
        accessibilityLabel={t.leaderboard}
        value={mode}
        onChange={setMode}
        options={[
          { value: 'best', label: t.bestPerPlayer, icon: 'account-star' },
          { value: 'all', label: t.allGames, icon: 'format-list-numbered' },
        ]}
      />

      {entries.length === 0 ? (
        <View style={styles.empty}>
          <MaterialCommunityIcons name="trophy-outline" size={48} style={styles.emptyIcon} />
          <Text style={styles.emptyText}>{t.emptyLeaderboard}</Text>
        </View>
      ) : (
        <View style={styles.list}>
          {entries.map((entry, i) => (
            <Animated.View key={entry.record.id} entering={FadeInDown.delay(Math.min(i, 10) * 40).duration(280)}>
              <Row entry={entry} showCategory={!categoryId} textStart={textStart} />
            </Animated.View>
          ))}
        </View>
      )}
    </Screen>
  );
}

const MEDALS = ['#FFC83D', '#C9D3E3', '#D98C4A'];

function Row({ entry, showCategory, textStart }: { entry: LeaderboardEntry; showCategory: boolean; textStart: 'left' | 'right' }) {
  const { t, language } = useI18n();
  const { colors: c } = useTheme();
  const styles = useThemedStyles(makeStyles);
  const { activeId } = usePlayers();
  const { record, rank } = entry;
  const category = getCategory(record.categoryId);
  const isMe = record.playerId === activeId;
  const medal = MEDALS[rank - 1];
  const date = new Date(record.completedAt).toLocaleDateString(language === 'ar' ? 'ar-u-nu-latn' : 'en', {
    day: 'numeric',
    month: 'short',
  });
  const accuracy = Math.round(accuracyOf(record) * 100);

  return (
    <View
      style={[styles.row, isMe && styles.rowMe, medal ? { borderColor: medal, boxShadow: glow(`${medal}55`, 12) } : null]}
      accessible
      accessibilityLabel={`${t.rankLabel(rank)}, ${record.playerName}, ${t.outOf(record.score, record.total)}, ${t.accuracy} ${accuracy}%`}
    >
      <View style={[styles.rank, { backgroundColor: medal ?? c.track }]}>
        {rank <= 3 ? (
          <MaterialCommunityIcons name={rank === 1 ? 'crown' : 'medal'} size={20} color="#1A1300" />
        ) : (
          <Text style={styles.rankText}>{rank}</Text>
        )}
      </View>
      <View style={styles.flex}>
        <Text style={[styles.name, { textAlign: textStart }]} numberOfLines={1}>
          {record.playerName}
        </Text>
        <Text style={[styles.meta, { textAlign: textStart }]} numberOfLines={1}>
          {showCategory && category ? `${categoryTitle(category, language)} · ` : ''}
          {date}
        </Text>
      </View>
      <View style={styles.scoreCol} {...directionProps('ltr')}>
        <Text style={styles.score}>
          {record.score}
          <Text style={styles.scoreTotal}>/{record.total}</Text>
        </Text>
        <Text style={styles.accuracy}>{accuracy}%</Text>
      </View>
    </View>
  );
}

const makeStyles = (c: ColorTokens) =>
  StyleSheet.create({
    chips: { gap: spacing.sm, paddingVertical: spacing.xs },
    chip: {
      minHeight: 40,
      justifyContent: 'center',
      paddingHorizontal: spacing.md,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: c.borderMuted,
      backgroundColor: c.chip,
    },
    chipSelected: { backgroundColor: c.surface, borderColor: c.primaryGlow },
    chipText: { color: c.textMuted, fontSize: fontSize.caption + 1, fontFamily: fonts.bold },
    chipTextSelected: { color: c.text },
    list: { gap: spacing.sm },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      padding: spacing.md,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.borderMuted,
      backgroundColor: c.surface,
    },
    rowMe: { backgroundColor: c.goldSoft },
    rank: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
    rankText: { color: c.text, fontSize: fontSize.body, fontFamily: fonts.black },
    flex: { flex: 1 },
    name: { color: c.text, fontSize: fontSize.label, fontFamily: fonts.extrabold, lineHeight: 26 },
    meta: { color: c.textMuted, fontSize: fontSize.caption, fontFamily: fonts.semibold },
    scoreCol: { alignItems: 'flex-end' },
    score: { color: c.gold, fontSize: fontSize.title, fontFamily: fonts.displayBold },
    scoreTotal: { color: c.textMuted, fontSize: fontSize.body },
    accuracy: { color: c.textMuted, fontSize: fontSize.caption, fontFamily: fonts.bold },
    empty: { alignItems: 'center', gap: spacing.md, paddingVertical: spacing.xxl },
    emptyIcon: { color: c.textMuted },
    emptyText: { color: c.textMuted, fontSize: fontSize.body, fontFamily: fonts.semibold, textAlign: 'center' },
  });
