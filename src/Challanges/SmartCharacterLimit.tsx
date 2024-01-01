import { ChangeEvent, FormEvent, useState } from "react";
import "./smartCharacterLimit.css";

function LimitedTextInput({ characterLimit = 10 }: { characterLimit: number }) {
  const [inputValue, setInputValue] = useState("");
  const remainingChar = characterLimit - inputValue.length;
  const limitExceeded = remainingChar < 0;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (limitExceeded) {
      alert("The input exceeds the character limit. Please shorten the text");
    } else {
      setInputValue("");
      alert("Thanks for your submission");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited">Limited Text Input:</label>
        <span className={limitExceeded ? "error" : "no-error"}>
          Characters remaining: {remainingChar}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text here"
        id="limited"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}
const SmartCharacterLimit = () => {
  return <LimitedTextInput characterLimit={20} />;
};

export default SmartCharacterLimit;
