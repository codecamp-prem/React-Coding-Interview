// Manage Complex state objects with useObjectState

import { useCallback, useState } from "react";
import { initialStateProps } from "../ObjectState";

const isPlainObject = (value: object) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};
const useObjectState = (initialValue: initialStateProps) => {
  const [state, setState] = useState<initialStateProps>(initialValue);

  const handleUpdate = useCallback((arg) => {
    if (typeof arg === "function") {
      setState((s) => {
        const newState = arg(s);

        if (isPlainObject(newState)) {
          return {
            ...s,
            ...newState,
          };
        }
      });
    }

    if (isPlainObject(arg)) {
      setState((s) => ({
        ...s,
        ...arg,
      }));
    }
  }, []);
  return [state, handleUpdate];
};

export default useObjectState;
