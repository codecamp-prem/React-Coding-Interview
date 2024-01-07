import { ReactNode, memo, useCallback, useEffect, useState } from "react";
import "./common.css";

function ChildComponent({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  console.count("Child component is rendering");
  return <button onClick={onClick}>{children}</button>;
}

const MemoizedChildComponent = memo(ChildComponent);

const OptimizeRender = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleIncrementCount = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div className="container">
      <div>
        <p>Current time: {time}</p>
        <p>Count: {count}</p>
        <MemoizedChildComponent onClick={handleIncrementCount}>
          Increment Count
        </MemoizedChildComponent>
      </div>
    </div>
  );
};

export default OptimizeRender;
