import { useEffect, useRef, useState } from "react";
import Container from "../DynamicInput/Container";
import "./progressBar.css";
import { Timer as TimerProps } from "./store/timers-context";
const Timer = ({ name, duration }: TimerProps) => {
  const intervalRef = useRef<number | null>(null);

  const [remainingTime, SetRemaninigTime] = useState(duration * 1000);

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }
  useEffect(() => {
    const timer = setInterval(function () {
      SetRemaninigTime((prevTime) => prevTime - 50);
    }, 50);

    intervalRef.current = timer;

    return () => clearInterval(timer);
  }, []);

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
