/**
 * Design tokens. Phase 2 ships the dark palette only; Phase 3 adds a light
 * palette with the same shape and a ThemeProvider to switch between them.
 */
export interface ColorTokens {
  background: string;
  backgroundAlt: string;
  /** Gradient stops for the full-screen backdrop. */
  backdrop: readonly [string, string, string];
  surface: string;
  surfaceRaised: string;
  border: string;
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
}

export const darkColors: ColorTokens = {
  background: '#05070F',
  backgroundAlt: '#0A1030',
  backdrop: ['#05070F', '#0A1030', '#150A2E'],
  surface: 'rgba(17, 26, 61, 0.88)',
  surfaceRaised: '#131D45',
  border: 'rgba(79, 155, 255, 0.35)',
  text: '#EAF2FF',
  textMuted: '#93A4CC',
  primary: '#2F8CFF',
  primaryGlow: '#4FC3FF',
  accent: '#9B5CFF',
  gold: '#FFC83D',
  goldSoft: 'rgba(255, 200, 61, 0.16)',
  danger: '#FF4D6D',
  dangerSoft: 'rgba(255, 77, 109, 0.16)',
  onPrimary: '#04122B',
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

export const radius = { sm: 10, md: 16, lg: 24, pill: 999 } as const;

export const fontSize = { caption: 12, body: 15, label: 17, title: 22, display: 34 } as const;

/** Cross-platform neon glow using the New Architecture `boxShadow` style. */
export const glow = (color: string, blur = 18) => `0 0 ${blur}px ${color}`;
