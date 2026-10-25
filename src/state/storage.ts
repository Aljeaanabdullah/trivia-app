import AsyncStorage from '@react-native-async-storage/async-storage';

/** Versioned keys so a future data-shape change can migrate cleanly. */
export const STORAGE_KEYS = {
  settings: 'brainbyte:settings:v1',
  players: 'brainbyte:players:v1',
  history: 'brainbyte:history:v1',
} as const;

export async function readJSON<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    // Corrupt or unreadable data must never crash the game.
    return fallback;
  }
}

export async function writeJSON(key: string, value: unknown): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable: keep the in-memory state and carry on.
  }
}
