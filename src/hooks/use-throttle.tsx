import { useRef, useCallback } from "react";

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const lastCall = useRef(0);

  return useCallback(
    (...args: any[]) => {
      const now = Date.now();
      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        callback(...args);
      }
    },
    [callback, delay],
  );
};
