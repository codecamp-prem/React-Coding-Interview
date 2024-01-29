import Timer from "./Timer";
import { useTimersContext } from "./store/timers-context";

const Timers = () => {
  const { timers } = useTimersContext();
  return (
    <ul className="list-none max-w-2xl my-8 mx-auto p-0 font-mono grid gap-8 grid-cols-contextUl ">
      {timers.map((timer) => (
        <li
          key={timer.name}
          className="bg-line bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-md text-yellow-300 shadow-red-400"
        >
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
};

export default Timers;
