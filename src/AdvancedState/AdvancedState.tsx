import "../index.css";
import AddTimers from "./AddTimers";
import Header from "./Header";
import Timers from "./Timers";
import TimersContextProvider from "./store/timers-context";

const AdvancedState = () => {
  return (
    <>
      <TimersContextProvider>
        <Header />
        <main>
          <AddTimers />
          <Timers />
        </main>
      </TimersContextProvider>
    </>
  );
};

export default AdvancedState;
