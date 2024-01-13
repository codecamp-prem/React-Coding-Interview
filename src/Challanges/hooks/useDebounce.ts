// Delay the execution of function or state update with useDebounce

import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      window.clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
