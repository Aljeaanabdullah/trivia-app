import { createOpenTriviaClient, networkFetch, type ClientDeps } from '@/services/openTrivia';

/**
 * Development-only switches for demonstrating the Loading, Error and Empty
 * screens (e.g. `/game?category=geography&simulate=empty`). Ignored in
 * production builds (`__DEV__ === false`), so no mock ever ships.
 */
export const SIMULATIONS = ['slow', 'error', 'empty', 'ratelimit'] as const;
export type Simulation = (typeof SIMULATIONS)[number];

/** Extra delay for `slow`, long enough to see the Loading screen. */
export const SLOW_DELAY_MS = 4000;

export function parseSimulation(value: unknown, isDev: boolean): Simulation | null {
  if (!isDev || typeof value !== 'string') return null;
  return (SIMULATIONS as readonly string[]).includes(value) ? (value as Simulation) : null;
}

const json = (body: unknown) => ({ ok: true, status: 200, json: async () => body });
const isQuestionsRequest = (url: string) => url.includes('/api.php');

/** Wraps the real network so only the chosen failure is faked; everything else is the live API. */
export function simulatedFetch(simulation: Simulation, base: ClientDeps['fetch'] = networkFetch): ClientDeps['fetch'] {
  let rateLimited = false;
  return async (url, init) => {
    if (!isQuestionsRequest(url)) return base(url, init);
    switch (simulation) {
      case 'slow':
        await new Promise((resolve) => setTimeout(resolve, SLOW_DELAY_MS));
        return base(url, init);
      case 'error':
        throw new TypeError('Network request failed (simulated)');
      case 'empty':
        return json({ response_code: 1, results: [] });
      case 'ratelimit':
        // First request is rejected with code 5; the client waits >= 5 s and retries for real.
        if (!rateLimited) {
          rateLimited = true;
          return json({ response_code: 5, results: [] });
        }
        return base(url, init);
    }
  };
}

/** A separate client per simulation so the real app client's token and rate clock are untouched. */
export function createSimulatedClient(simulation: Simulation, base?: ClientDeps['fetch']) {
  return createOpenTriviaClient({ fetch: simulatedFetch(simulation, base) });
}

