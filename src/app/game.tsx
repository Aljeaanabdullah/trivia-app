import { Redirect } from 'expo-router';

import { GameScreen } from '@/features/game/GameScreen';
import { usePlayers } from '@/state/PlayerProvider';

export default function GameRoute() {
  const { activePlayer } = usePlayers();
  // Every game belongs to a player; send newcomers to the name screen first.
  if (!activePlayer) return <Redirect href={{ pathname: '/player', params: { next: 'play' } }} />;
  return <GameScreen playerName={activePlayer.name} />;
}
