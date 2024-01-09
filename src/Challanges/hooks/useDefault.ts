import { useState } from "react";

type FuncParaProps = {
  name: string;
};
/*
const useDefault = (
  initialVal: FuncParaProps,
  defaultVal: FuncParaProps
): [FuncParaProps, React.Dispatch<React.SetStateAction<FuncParaProps>>] => {
  const [state, setState] = useState(initialVal);

  if (typeof state === "undefined" || state === null) {
    return [defaultVal, setState];
  }
  return [state, setState];
};
*/
// or
const useDefault = (initialVal: FuncParaProps, defaultVal: FuncParaProps) => {
  const [state, setState] = useState(initialVal);

  if (typeof state === "undefined" || state === null) {
    return [defaultVal, setState] as const;
  }
  return [state, setState] as const;
};
export default useDefault;

/* React's useState  type definition
function useState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>]

they have a return type that is an array with explicit types. So rather than an array of elements that can be one of two types, it's explicitly an array with two elements where the first is the type of state and the second is a Dispatch SetStateAction for that type of state.

*/
