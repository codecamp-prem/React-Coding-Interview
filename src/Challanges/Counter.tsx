import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
};

export default Counter;
