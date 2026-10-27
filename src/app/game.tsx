import { Redirect, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';

import { getCategory } from '@/data/categories';
import { GameScreen } from '@/features/game/GameScreen';
import { LiveGameLoader } from '@/features/game/LiveGameLoader';
import { createSimulatedClient, parseSimulation } from '@/services/liveSimulation';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n } from '@/state/SettingsProvider';

export default function GameRoute() {
  const { category, simulate } = useLocalSearchParams<{ category?: string; simulate?: string }>();
  const { activePlayer } = usePlayers();
  const { language } = useI18n();
  const selected = getCategory(category);
  // Dev-only demo of the Loading / Error / Empty screens; always null in production builds.
  const simulation = parseSimulation(simulate, __DEV__);
  const client = useMemo(() => (simulation ? createSimulatedClient(simulation) : undefined), [simulation]);

  // Every game belongs to a player and a valid category.
  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;
  if (!selected) return <Redirect href="/categories" />;
  // English: live Open Trivia DB questions. Arabic: the built-in bilingual bank.
  if (language === 'en') {
    return <LiveGameLoader key={`${selected.id}-${simulation ?? 'live'}`} player={activePlayer} category={selected} client={client} />;
  }
  return <GameScreen key={selected.id} player={activePlayer} category={selected} />;
}
