import { useRef, useState } from "react";
import "./pomodoro.css";

// teaches useRef importance in React JS
const Pomodoro = () => {
  const [title, setTitle] = useState("let the countdown begin!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(0);

  const startTimer = () => {
    if (intervalRef.current !== 0) return;

    setTitle("Pomodoro mode!!");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current === 0) return;

    clearInterval(intervalRef.current);
    setTitle("Just do it!! Keep going!!");
    setIsRunning(false);
    intervalRef.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    setTitle("let the countdown begin!");
    setTimeLeft(25 * 60);
    setIsRunning(false);
    intervalRef.current = 0;
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{padTime(minutes)}</span>
        <span>:</span>
        <span>{padTime(seconds)}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

function padTime(time: number) {
  // add 0 to single digit number like 1 to 01
  return time.toString().padStart(2, "0");
}
export default Pomodoro;
