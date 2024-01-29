import Button from "../DynamicInput/Button";
import { useTimersContext } from "./store/timers-context";

const Header = () => {
  const timerCTX = useTimersContext();

  return (
    <header className="flex justify-between items-center max-w-2xl mt-0 mx-auto p-2">
      <h1 className="font-bold underline">ReactTimer</h1>
      <Button>{timerCTX.isRunning ? "Stop Timer" : "Start Timer"}</Button>
    </header>
  );
};

export default Header;
