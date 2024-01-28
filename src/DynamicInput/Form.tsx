import { ComponentPropsWithoutRef, FormEvent } from "react";

// unknown: type used when we don't know what value will be.
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...otherProps }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
  };
  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
};

export default Form;
