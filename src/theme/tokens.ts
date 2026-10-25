/**
 * Design tokens. Dark and light palettes share one shape so every component
 * is written once and themed through `useTheme()`.
 */
export type ThemeMode = 'dark' | 'light';

export interface ColorTokens {
  background: string;
  /** Gradient stops for the full-screen backdrop. */
  backdrop: readonly [string, string, string];
  /** Radial glow colors painted behind content. */
  backdropGlowA: string;
  backdropGlowB: string;
  glowOpacity: number;
  surface: string;
  surfaceRaised: string;
  /** Translucent pill/chip background. */
  chip: string;
  border: string;
  borderMuted: string;
  track: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryGlow: string;
  accent: string;
  gold: string;
  goldSoft: string;
  danger: string;
  dangerSoft: string;
  onPrimary: string;
  onGold: string;
  /** Glass gradient for floating cards. */
  cardGradient: readonly [string, string, string];
  cardSheen: string;
  /** Shadow colors used with `glow()`; softer in light mode. */
  glowPrimary: string;
  glowGold: string;
  glowDanger: string;
  depthShadow: string;
  statusBar: 'light' | 'dark';
}

export const darkColors: ColorTokens = {
  background: '#05070F',
  backdrop: ['#05070F', '#0A1030', '#150A2E'],
  backdropGlowA: '#2F8CFF',
  backdropGlowB: '#9B5CFF',
  glowOpacity: 0.36,
  surface: 'rgba(17, 26, 61, 0.88)',
  surfaceRaised: '#131D45',
  chip: 'rgba(10, 16, 48, 0.72)',
  border: 'rgba(79, 155, 255, 0.35)',
  borderMuted: 'rgba(147, 164, 204, 0.16)',
  track: 'rgba(147, 164, 204, 0.2)',
  text: '#EAF2FF',
  textMuted: '#9AABD1',
  primary: '#2F8CFF',
  primaryGlow: '#4FC3FF',
  accent: '#9B5CFF',
  gold: '#FFC83D',
  goldSoft: 'rgba(255, 200, 61, 0.16)',
  danger: '#FF4D6D',
  dangerSoft: 'rgba(255, 77, 109, 0.16)',
  onPrimary: '#04122B',
  onGold: '#2A1C00',
  cardGradient: ['rgba(47,140,255,0.22)', 'rgba(17,26,61,0.92)', 'rgba(155,92,255,0.2)'],
  cardSheen: 'rgba(255,255,255,0.14)',
  glowPrimary: 'rgba(79, 195, 255, 0.5)',
  glowGold: 'rgba(255, 200, 61, 0.6)',
  glowDanger: 'rgba(255, 77, 109, 0.55)',
  depthShadow: 'rgba(0, 0, 0, 0.55)',
  statusBar: 'light',
};

export const lightColors: ColorTokens = {
  background: '#F3F5FA',
  backdrop: ['#FAFBFF', '#EEF1F8', '#E7E9F4'],
  backdropGlowA: '#5AA2FF',
  backdropGlowB: '#B79BFF',
  glowOpacity: 0.32,
  surface: 'rgba(255, 255, 255, 0.94)',
  surfaceRaised: '#FFFFFF',
  chip: 'rgba(255, 255, 255, 0.9)',
  border: 'rgba(31, 111, 235, 0.28)',
  borderMuted: 'rgba(85, 97, 127, 0.16)',
  track: 'rgba(85, 97, 127, 0.16)',
  text: '#0E1630',
  textMuted: '#4F5B78',
  primary: '#1F6FEB',
  primaryGlow: '#2F8CFF',
  accent: '#7B4DFF',
  gold: '#9A6700',
  goldSoft: 'rgba(214, 160, 20, 0.16)',
  danger: '#D42347',
  dangerSoft: 'rgba(212, 35, 71, 0.1)',
  onPrimary: '#FFFFFF',
  onGold: '#FFFFFF',
  cardGradient: ['rgba(90,162,255,0.18)', 'rgba(255,255,255,0.97)', 'rgba(183,155,255,0.18)'],
  cardSheen: 'rgba(255,255,255,0.7)',
  glowPrimary: 'rgba(31, 111, 235, 0.22)',
  glowGold: 'rgba(214, 160, 20, 0.35)',
  glowDanger: 'rgba(212, 35, 71, 0.28)',
  depthShadow: 'rgba(30, 45, 90, 0.16)',
  statusBar: 'dark',
};

export const palettes: Record<ThemeMode, ColorTokens> = { dark: darkColors, light: lightColors };

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

export const radius = { sm: 10, md: 16, lg: 24, pill: 999 } as const;

export const fontSize = { caption: 12, body: 15, label: 17, title: 22, display: 34 } as const;

/** Cross-platform neon glow using the New Architecture `boxShadow` style. */
export const glow = (color: string, blur = 18) => `0 0 ${blur}px ${color}`;
