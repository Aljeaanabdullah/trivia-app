# BrainByte

A premium, futuristic **offline** trivia game for Android and iOS, built with React Native + Expo (SDK 58, Expo Router).

- Arabic (RTL) and English (LTR), switchable instantly
- Dark (navy / electric-blue neon) and Light (pearl / blue & gold) themes
- Local player profiles: no accounts, no network
- 24 categories, 384 bilingual questions (16 per category), all bundled in the app
- 5-question rounds with a 20-second timer, animated feedback, haptics, and a results screen
- Local game history and a leaderboard per player and category
- Runs in **Expo Go**; no development build required

## Run it

```bash
npm install
npx expo start
```

Scan the QR code with **Expo Go** (Android: scan from inside Expo Go; iOS: Camera app).
If your phone is not on the same Wi-Fi, use a tunnel:

```bash
npx expo start --tunnel ngrok
```

On Windows PowerShell with script execution disabled, use `npx.cmd` instead of `npx`.

## Checks

```bash
npm run typecheck   # TypeScript
npx expo lint       # ESLint
npm test            # game logic, question bank, leaderboard, names, i18n, offline guard
npx expo-doctor     # Expo dependency/config health
```

## Project layout

```
src/app/            Screens (Expo Router): home, player, categories, game, results, leaderboard, settings
src/components/     Reusable UI (QuestionCard, AnswerButton, CountdownTimer, AnimatedTrophy, ...)
src/features/       Pure logic: game reducer & question selection, player names, leaderboard, search
src/data/           Categories and the offline question bank (one file per category)
src/state/          Settings, player and history providers (AsyncStorage persistence)
src/i18n/           English and Arabic strings
src/theme/          Color tokens (dark/light), typography, layout direction helper
tests/              node:test suites (run TypeScript sources directly on Node 24)
```

## Adding questions

Add entries to the category file in `src/data/questions/` (ids like `geo-017`, four answers per
language in the same order, `correctIndex` 0–3). `npm test` validates structure, counts,
duplicates and EN/AR alignment.
