import { useRef } from "react";
import "../index.css";
import Button from "./Button";
import Container from "./Container";
import Form from "./Form";
import Input from "./Input";

const DynamicInput = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  return (
    <main className="w-11/12 max-w-[40rem] m-1 mx-auto p-4 bg-[#3a4346] text-[#f0f6f8] border-2 rounded-md shadow-slate-800">
      <Input label="Name" id="name" type="text" ref={nameRef} />
      <Input label="Age" id="age" type="number" ref={ageRef} />
      <p className="flex space-x-3 m-4">
        {/*ComponentPropsWithoutRef only allows attribute set in it's Generic type
        // suppose passing href in button will be error.*/}
        <Button href="#">some url link</Button>
        <Button type="submit">Submit Button</Button>
      </p>
      <Container
        as={Button}
        onClick={() => alert("Polymorphic Component Example")}
      >
        PolyMorphic Alert Btn
      </Container>
      <Container as="p">
        send jsx element /jsx component / function anything.
      </Container>
      {/*Form component*/}
      <Form>
        <h1 className="text-center m-4 text-xl underline font-semibold">
          Dynamic Form
        </h1>
        <Input label="Occupation" id="occupation" type="text" />
        <Input label="Salary" id="salary" type="number" />
        <p className="flex space-x-3 m-4 justify-center">
          <Button>Submit Form</Button>
        </p>
      </Form>
    </main>
  );
};

export default DynamicInput;
