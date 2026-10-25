/** Locally unique id (time + randomness). Good enough for on-device records; no crypto needed. */
export function createId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
