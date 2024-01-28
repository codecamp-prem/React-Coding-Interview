import "../index.css";
import Input from "./Input";

const DynamicInput = () => {
  return (
    <main className="w-11/12 max-w-[40rem] m-1 mx-auto p-4 bg-[#3a4346] text-[#f0f6f8] border-2 rounded-md shadow-slate-800">
      <Input label="Name" id="name" type="text" />
      <Input label="Age" id="age" type="number" />
    </main>
  );
};

export default DynamicInput;
