import { useEffect, useState } from "react";
import "./multiStepForm.css";

const Clock = () => {
  const [time, setTime] = useState<Date | undefined>();
  useEffect(() => {
    const timerID = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(timerID);
    };
  }, []);

  if (time === null) return null;
  return (
    <div className="container">
      <section>
        <h1>Current Time</h1>
        <p>{time?.toLocaleTimeString()}</p>
      </section>
    </div>
  );
};

export default Clock;
