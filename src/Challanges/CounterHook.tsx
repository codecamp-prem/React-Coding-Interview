import "./common.css";
import useCounter from "./hooks/useCounter";

const CounterHook = () => {
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 5,
    max: 10,
  });
  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        <h2>useCounter</h2>
        <h6 style={{ fontWeight: "normal" }}>with optional min/max</h6>
        <button disabled={count >= 10} className="link" onClick={increment}>
          increment
        </button>
        <button disabled={count <= 5} className="link" onClick={decrement}>
          Decrement
        </button>
        <button className="link" onClick={() => set(6)}>
          Set to 6
        </button>
        <button className="link" onClick={reset}>
          Reset
        </button>
        <p style={{ fontSize: "72px", fontWeight: "bold" }}>{count}</p>
      </section>
    </div>
  );
};

export default CounterHook;
