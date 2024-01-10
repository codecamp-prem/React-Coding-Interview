import { useState } from "react";

const usePrevious = (value: string) => {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState("");

  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
  }
  return previous;
};

export default usePrevious;
