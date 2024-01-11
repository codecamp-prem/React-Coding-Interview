import { useCallback, useState } from "react";

const useCounter = (
  startingVal: number,
  rangeObj: { min: number; max: number }
) => {
  const { min, max } = rangeObj;

  if (max < startingVal || min > startingVal)
    throw new Error(
      `starting value should be between Provided Min(${min}) and Max(${max}) range`
    );

  const [count, setCount] = useState(startingVal);

  const increment = useCallback(() => {
    setCount((c) => {
      const nextCount = c + 1;

      if (typeof max === "number" && nextCount > max) return c;

      return nextCount;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((c) => {
      const nextCount = c - 1;

      if (typeof min === "number" && nextCount < min) return c;

      return nextCount;
    });
  }, [min]);

  const set = useCallback(
    (nextCount: number) => {
      setCount((c) => {
        if (typeof max === "number" && nextCount > max) return c;

        if (typeof min === "number" && nextCount < min) return c;

        return nextCount;
      });
    },
    [min, max]
  );

  const reset = useCallback(() => {
    setCount(startingVal);
  }, [startingVal]);

  return [count, { increment, decrement, set, reset }];
};

export default useCounter;
