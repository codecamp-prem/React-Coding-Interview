import { useCallback, useEffect, useRef } from "react";

const useInterval = (cb: () => void, ms: number) => {
  const callbackRef = useRef(cb);
  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  const handleClearInterval = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      callbackRef.current();
    }, ms);

    intervalRef.current = intervalId;

    return handleClearInterval;
  }, [ms, handleClearInterval]);

  return handleClearInterval;
};

export default useInterval;
