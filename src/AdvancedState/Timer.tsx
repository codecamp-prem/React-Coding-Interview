import { useEffect, useState } from "react";
import Container from "../DynamicInput/Container";
import "./progressBar.css";
import { Timer as TimerProps } from "./store/timers-context";
const Timer = ({ name, duration }: TimerProps) => {
  const [remainingTime, SetRemaninigTime] = useState(duration * 100);
  useEffect(() => {
    setInterval(function () {
      SetRemaninigTime((prevTime) => prevTime - 50);
    }, 50);
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
