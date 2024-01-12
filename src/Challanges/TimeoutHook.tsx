import { useState } from "react";
import useTimeout from "./hooks/useTimeout";
import "./timeouthook.css";

function Bomb({
  hasExploded,
  hasDefused,
  handleClick,
}: {
  hasExploded: boolean;
  hasDefused: boolean;
  handleClick: () => void;
}) {
  if (hasExploded) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji">
          💥
        </span>
        <figcaption>You lose</figcaption>
      </figure>
    );
  }

  if (hasDefused) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji">
          🎉
        </span>
        <figcaption>You Win</figcaption>
      </figure>
    );
  }

  return (
    <button className="bomb" onClick={handleClick}>
      <span role="img" aria-label="Dynamite Emoji">
        🧨
      </span>
    </button>
  );
}

const TimeoutHook = () => {
  const [hasDefused, setHasDefused] = useState(false);
  const [hasExploded, setHasExploded] = useState(false);

  const clear = useTimeout(() => {
    setHasExploded(!hasExploded);
  }, 1000);

  const handleClick = () => {
    clear();
    setHasDefused(true);
  };

  return (
    <div className="container">
      <section>
        <h1>useTimeout</h1>
        <p>You have 1s to defuse (click) the bomb or it will explode </p>
        <button
          className="link"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
        <Bomb
          hasDefused={hasDefused}
          hasExploded={hasExploded}
          handleClick={handleClick}
        />
      </section>
    </div>
  );
};

export default TimeoutHook;
