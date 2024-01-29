import { ReactNode, createContext, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};
type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};
const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);
export function useTimersContext() {
  const timerCTX = useContext(TimersContext);
  if (timerCTX === null) {
    throw new Error("TimersContext should not be null.");
  }

  return timerCTX;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  useReducer(reducer, initialState);
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
export default TimersContextProvider;
