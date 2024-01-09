import { useCallback, useState } from "react";

const useToggle = (toggleState = true) => {
  const [on, setOn] = useState(() => {
    if (typeof toggleState === "boolean") {
      return toggleState;
    }
    return Boolean(toggleState);
  });
  const handleToggle = useCallback((val: boolean | string) => {
    if (typeof val === "boolean") {
      return setOn(val);
    }
    return setOn((v) => !v);
  }, []);

  return [on, handleToggle] as const;
};

export default useToggle;
