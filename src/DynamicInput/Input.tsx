import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">; //ComponentPropsWithoutRef

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <p>
      <label
        htmlFor={id}
        className="block text-sm text-[#bbe3dd] font-bold uppercase mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="block font-black w-full p-2 rounded-md border border-solid border-[#486560] bg-[#daedea] mb-4 text-xs text-[#23433e]"
      />
    </p>
  );
};

export default Input;
