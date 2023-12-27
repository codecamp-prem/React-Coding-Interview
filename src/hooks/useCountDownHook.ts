import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const useCountDownHook = (
  timeToCount: number = 60 * 1000,
  interval: number = 1000
): [
  number,
  {
    start: (ttc?: number) => void;
    pause: () => void;
    resume: () => void;
    reset: () => void;
  }
] => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const timer = useRef<any>({});

  const run = useCallback(
    (ts: number) => {
      if (!timer.current.started) {
        timer.current.started = ts;
        timer.current.lastInterval = ts;
      }

      const localInterval = Math.min(
        interval,
        timer.current.timeLeft || Infinity
      );
      if (ts - timer.current.lastInterval >= localInterval) {
        timer.current.lastInterval += localInterval;
        setTimeLeft((timeLeft) => {
          timer.current.timeLeft = timeLeft - localInterval;
          return timer.current.timeLeft;
        });
      }

      if (ts - timer.current.started < timer.current.timeToCount) {
        timer.current.requestId = window.requestAnimationFrame(run);
      } else {
        timer.current = {};
        setTimeLeft(0);
      }
    },
    [interval]
  );

  const start = useCallback(
    (ttc?: number) => {
      window.cancelAnimationFrame(timer.current.requestId);

      const newTimeToCount = ttc !== undefined ? ttc : timeToCount;
      timer.current.started = null;
      timer.current.lastInterval = null;
      timer.current.timeToCount = newTimeToCount;
      timer.current.requestId = window.requestAnimationFrame(run);

      setTimeLeft(newTimeToCount);
    },
    [run, timeToCount]
  );

  const pause = useCallback(() => {
    window.cancelAnimationFrame(timer.current.requestId);
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = timer.current.timeLeft;
  }, []);

  const resume = useCallback(() => {
    if (!timer.current.started && timer.current.timeLeft > 0) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current.requestId = window.requestAnimationFrame(run);
    }
  }, [run]);

  const reset = useCallback(() => {
    if (timer.current.timeLeft) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current = {};
      setTimeLeft(0);
    }
  }, []);

  const actions = useMemo(
    () => ({ start, pause, resume, reset }),
    [start, pause, resume, reset]
  );

  useEffect(() => {
    return () => window.cancelAnimationFrame(timer.current.requestId);
  }, []);

  return [timeLeft, actions];
};

export default useCountDownHook;
