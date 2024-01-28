import "../index.css";
import Button from "./Button";
import Input from "./Input";

const DynamicInput = () => {
  return (
    <main className="w-11/12 max-w-[40rem] m-1 mx-auto p-4 bg-[#3a4346] text-[#f0f6f8] border-2 rounded-md shadow-slate-800">
      <Input label="Name" id="name" type="text" />
      <Input label="Age" id="age" type="number" />
      <p className="flex space-x-3">
        {/*ComponentPropsWithoutRef only allows attribute set in it's Generic type
        // suppose passing href in button will be error.*/}
        <Button el="anchor" href="#">
          some url link
        </Button>
        <Button el="button" type="submit">
          Submit Button
        </Button>
      </p>
    </main>
  );
};

export default DynamicInput;
