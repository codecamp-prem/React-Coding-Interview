// Automates retries of a callback function until it succeeds with useContinuousRetry

import { useEffect, useRef, useState } from "react";

const useContinuousRetry = (
  callback: () => boolean,
  interval = 100,
  options = { maxRetries: Infinity }
) => {
  const { maxRetries = Infinity } = options;
  const [hasResolved, setHasResolved] = useState(false);
  const onInterval = useRef(callback);

  useEffect(() => {
    onInterval.current = callback;
  }, [callback]);

  useEffect(() => {
    let retries = 0;

    const id = window.setInterval(() => {
      if (onInterval.current()) {
        setHasResolved(true);
        window.clearInterval(id);
      } else if (retries >= maxRetries) {
        window.clearInterval(id);
      } else {
        retries += 1;
      }
    }, interval);

    return () => window.clearInterval(id);
  }, [interval, maxRetries]);
  return hasResolved;
};

export default useContinuousRetry;
