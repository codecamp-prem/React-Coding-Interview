import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState<{
    width: null | number;
    height: null | number;
  }>({
    width: null,
    height: null,
  });

  useLayoutEffect(() => {
    const handler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return size;
};

export default useWindowSize;
