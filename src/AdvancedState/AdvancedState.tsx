import "../index.css";
import AddTimers from "./AddTimers";
import Header from "./Header";
import Timers from "./Timers";

const AdvancedState = () => {
  return (
    <>
      <Header />
      <main>
        <AddTimers />
        <Timers />
      </main>
    </>
  );
};

export default AdvancedState;
