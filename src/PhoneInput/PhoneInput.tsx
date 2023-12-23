import { useState } from "react";

const TOTAL_LENGTH_OF_TEL_INPUT = 14; // 10 digits + '(', ')', 'space', '-'
const PhoneInput = () => {
  const [value, setValue] = useState("");
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(format(e.target.value));
  };

  return (
    <>
      <input
        type="tel"
        value={value}
        onChange={handlePhoneInput}
        placeholder="(999) 999-9999"
      />
      <button
        disabled={value.length < TOTAL_LENGTH_OF_TEL_INPUT}
        onClick={() => setValue("")}
      >
        Submit
      </button>
    </>
  );
};

function format(str: string) {
  const rawString = str.replace(/\D/g, "");
  let output = "";

  if (rawString.length > 0) {
    output += "(";
    output += rawString.substring(0, 3);
  }

  if (rawString.length > 3) {
    output += ") ";
    output += rawString.substring(3, 6);
  }

  if (rawString.length > 6) {
    output += "-";
    output += rawString.substring(6, 10);
  }
  return output;
}

export default PhoneInput;
