import Container from "../DynamicInput/Container";
import { Timer as TimerProps } from "./store/timers-context";

const Timer = ({ name, duration }: TimerProps) => {
  return (
    <Container as="article">
      <h2 className="text-4xl text-center m-0">{name}</h2>
      <p className="text-center text-3xl text-white">{duration}</p>
    </Container>
  );
};

export default Timer;
