import { Redirect, useLocalSearchParams } from 'expo-router';

import { getCategory } from '@/data/categories';
import { GameScreen } from '@/features/game/GameScreen';
import { LiveGameLoader } from '@/features/game/LiveGameLoader';
import { usePlayers } from '@/state/PlayerProvider';
import { useI18n } from '@/state/SettingsProvider';

export default function GameRoute() {
  const { category } = useLocalSearchParams<{ category?: string }>();
  const { activePlayer } = usePlayers();
  const { language } = useI18n();
  const selected = getCategory(category);
  // Every game belongs to a player and a valid category.
  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;
  if (!selected) return <Redirect href="/categories" />;
  // English: live Open Trivia DB questions. Arabic: the built-in bilingual bank.
  if (language === 'en') return <LiveGameLoader key={selected.id} player={activePlayer} category={selected} />;
  return <GameScreen key={selected.id} player={activePlayer} category={selected} />;
}
