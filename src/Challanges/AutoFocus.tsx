import { useEffect, useRef } from "react";
import "./common.css";

const AutoFocus = () => {
  const autoFocus = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus.current) {
      autoFocus.current.focus();
    }
  }, []);
  return (
    <div className="container">
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      <input
        id="focus"
        type="email"
        placeholder="enter your email"
        ref={autoFocus}
      />
    </div>
  );
};
export default AutoFocus;
