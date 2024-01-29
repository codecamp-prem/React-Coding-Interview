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

type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};
type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};
type DispatchAction = StartTimersAction | StopTimersAction | AddTimerAction;

const timersReducer = (
  state: TimersState,
  action: DispatchAction
): TimersState => {
  if (action.type === "START_TIMERS") {
    return { ...state, isRunning: true };
  }
  if (action.type === "STOP_TIMERS") {
    return { ...state, isRunning: false };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
};

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
export default TimersContextProvider;
