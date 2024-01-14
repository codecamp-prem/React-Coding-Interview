import { useState } from "react";
import "./common.css";
import useContinuousRetry from "./hooks/useContinuousRetry";

const ContinuousRetry = () => {
  const [count, setCount] = useState(0);
  const hasResolved = useContinuousRetry(
    () => {
      console.log("retrying");
      return count > 10;
    },
    1000,
    { maxRetries: count }
  );

  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Paytone One",
            fontSize: "clamp(1rem, 4vm, 1.5rem)",
          }}
        >
          useContinuousRetry
        </h2>
        <button className="primary" onClick={() => setCount(count + 1)}>
          {count}
        </button>
        <pre
          style={{
            textAlign: "left",
            padding: "16px",
            backgroundColor: "#231f20",
            borderRadius: "16px",
            overflow: "auto",
          }}
        >
          {JSON.stringify({ hasResolved, count }, null, 2)}
        </pre>
      </section>
    </div>
  );
};

export default ContinuousRetry;
