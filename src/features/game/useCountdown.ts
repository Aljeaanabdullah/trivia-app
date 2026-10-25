import { useEffect, useEffectEvent, useRef, useState } from 'react';

interface CountdownOptions {
  durationSeconds: number;
  /** Ticks only while true; flipping to false pauses and keeps the remaining time. */
  running: boolean;
  onExpire: () => void;
}

/**
 * Drift-free countdown. Time is measured against a wall-clock deadline, so
 * slow frames never stretch a question. Only one interval exists at a time,
 * and it is cleared on pause and unmount. To restart, remount the owning
 * component with a new `key`.
 */
export function useCountdown({ durationSeconds, running, onExpire }: CountdownOptions) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  const remainingMs = useRef(durationSeconds * 1000);
  const expired = useRef(false);
  const fireExpire = useEffectEvent(onExpire);

  useEffect(() => {
    if (!running || expired.current) return;
    const deadline = Date.now() + remainingMs.current;

    const id = setInterval(() => {
      const left = Math.max(0, deadline - Date.now());
      remainingMs.current = left;
      setSecondsLeft(Math.ceil(left / 1000));
      if (left === 0 && !expired.current) {
        expired.current = true;
        clearInterval(id);
        fireExpire();
      }
    }, 200);

    return () => {
      clearInterval(id);
      remainingMs.current = Math.max(0, deadline - Date.now());
    };
  }, [running]);

  return { secondsLeft, remainingMs };
}
