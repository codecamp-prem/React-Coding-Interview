import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// unknown: type used when we don't know what value will be.
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }: FormProps, ref) => {
    const form = useRef<HTMLFormElement>(null);

    //useImperativeHandle():expose callable function from component to another in the app
    // this hooks only works in forwardRef
    // need two parameters
    // 1. ref from forwardRef
    // 2. object that will be expose outside component
    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("clearing..");
          form.current?.reset();
        },
      };
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);

      onSave(data);
    };
    return (
      <form ref={form} onSubmit={handleSubmit} {...otherProps}>
        {children}
      </form>
    );
  }
);

export default Form;
