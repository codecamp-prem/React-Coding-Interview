import { useState } from "react";
import "./lightswitch.css";

const LightSwitch = () => {
  const [mode, setMode] = useState("dark");

  const handleButtonClick = () => {
    setMode(mode == "light" ? "dark" : "light");
  };
  return (
    <main className={mode}>
      <button onClick={handleButtonClick}>
        {mode === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
      </button>
    </main>
  );
};

export default LightSwitch;
