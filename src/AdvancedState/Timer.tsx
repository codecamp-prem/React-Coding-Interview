import { useEffect, useRef, useState } from "react";
import Container from "../DynamicInput/Container";
import "./progressBar.css";
import { Timer as TimerProps, useTimersContext } from "./store/timers-context";

const Timer = ({ name, duration }: TimerProps) => {
  const intervalRef = useRef<number | null>(null);

  const [remainingTime, SetRemaninigTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && intervalRef.current) {
    // timer got down to 0:00
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(function () {
        SetRemaninigTime((prevTime) => prevTime - 50);
      }, 50);

      intervalRef.current = timer;
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2 className="text-4xl text-center m-0">{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p className="text-center text-3xl text-black">
        {formattedRemainingTime}
      </p>
    </Container>
  );
};

export default Timer;
