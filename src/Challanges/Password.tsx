import { ChangeEvent, FormEvent, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import "./smartCharacterLimit.css";

function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = useState("");
  const [isInputValueVisible, setInputValueVisible] = useState(true);
  const thresholdMet = inputValue.length >= minimum;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleToggleVisibility = () => {
    setInputValueVisible(!isInputValueVisible);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (thresholdMet) {
      alert("password submitted!");
    } else {
      alert("You need a longer password");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password-text-input">Password</label>
        <span className={thresholdMet ? "no-error" : "error"}>
          {inputValue.length}
        </span>
      </div>
      <div>
        <input
          placeholder="Enter a password"
          type={isInputValueVisible ? "text" : "password"}
          id="password-text-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToggleVisibility}>
          {isInputValueVisible ? <FaToggleOn /> : <FaToggleOff />}
        </button>
      </div>
      <button type="submit" className="primaty">
        Submit
      </button>
    </form>
  );
}

const Password = () => {
  return <PasswordInput />;
};

export default Password;
