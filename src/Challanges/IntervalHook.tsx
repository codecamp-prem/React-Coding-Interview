import { useState } from "react";
import "./common.css";
import useInterval from "./hooks/useInterval";

const colors = ["green", "blue", "purple", "red", "pink", "beige", "yellow"];

const IntervalHook = () => {
  const [running, setIsRunning] = useState(true);
  const [index, setIndex] = useState(0);

  const clear = useInterval(() => {
    setIndex(index + 1);
  }, 1000);

  const handleStop = () => {
    clear();
    setIsRunning(false);
  };

  const color = colors[index % colors.length];

  const styles = {
    div: {
      width: "300px",
      aspectRatio: "1",
      maxWidth: "100%",
      margin: "auto",
      marginTop: "24px",
      transition: "background-color 0.3s cubic-bezier(0.165,0.84,0.44,1)",
      borderRadius: "16px",
      background: `${color}`,
    },
  };
  return (
    <div className="container">
      <section>
        <h2>useInterval</h2>
        <button disabled={!running} className="link" onClick={handleStop}>
          {running ? "Stop" : "Stopped"}
        </button>
        <div style={styles.div} />
      </section>
    </div>
  );
};

export default IntervalHook;
