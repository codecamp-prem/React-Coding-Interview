import { useCallback, useEffect, useRef } from "react";

const useTimeout = (cb: () => void, ms: number) => {
  const callbackRef = useRef(cb);
  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  const handleClearTimeout = useCallback(() => {
    window.clearTimeout(intervalRef.current);
  }, []);

  useEffect(() => {
    intervalRef.current = window.setTimeout(cb, ms);

    return handleClearTimeout;
  }, [ms, handleClearTimeout]);

  return handleClearTimeout;
};

export default useTimeout;
