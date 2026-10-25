import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PlayerProvider, usePlayers } from '@/state/PlayerProvider';
import { SettingsProvider, useSettings, useTheme } from '@/state/SettingsProvider';
import { fontAssets } from '@/theme/typography';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <PlayerProvider>
          <AppShell />
        </PlayerProvider>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}

function AppShell() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);
  const { ready: settingsReady } = useSettings();
  const { ready: playersReady } = usePlayers();
  const ready = settingsReady && playersReady;
  const { colors } = useTheme();
  // Fall back to system fonts rather than block the app if a font fails to load.
  const appReady = ready && (fontsLoaded || !!fontError);

  useEffect(() => {
    if (appReady) SplashScreen.hideAsync().catch(() => {});
  }, [appReady]);

  if (!appReady) return null;

  return (
    <>
      <StatusBar style={colors.statusBar} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </>
  );
}
