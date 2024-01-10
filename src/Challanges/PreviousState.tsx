import { useState } from "react";
import usePrevious from "./hooks/usePrevious";
import "./previous_state.css";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "red", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const PreviousState = () => {
  const [color, setColor] = useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      if (color === newColor) {
        getNewColor();
      } else {
        setColor(newColor);
      }
    }
    getNewColor();
  };

  return (
    <div className="container">
      <section>
        <h2>usePrevious</h2>
        <button className="link" onClick={handleClick}>
          Next
        </button>
        <article>
          <figure>
            <p style={{ background: `${previousColor}` }} />
            <figcaption>Previous: {previousColor}</figcaption>
          </figure>
          <figure>
            <p style={{ background: `${color}` }} />
            <figcaption>Current: {color}</figcaption>
          </figure>
        </article>
      </section>
    </div>
  );
};

export default PreviousState;
