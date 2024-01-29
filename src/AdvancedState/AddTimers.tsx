import { useRef } from "react";
import Button from "../DynamicInput/Button";
import Form, { FormHandle } from "../DynamicInput/Form";
import Input from "../DynamicInput/Input";

const AddTimers = () => {
  const form = useRef<FormHandle>(null);

  const handleSaveTimer = (data: unknown) => {
    const extractData = data as { name: string; duration: string };
    console.log(extractData);
    form.current?.clear();
  };

  return (
    <Form
      id="add-timer"
      onSave={handleSaveTimer}
      ref={form}
      className="max-w-xs mt-12 mx-auto text-center"
    >
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
};

export default AddTimers;
