import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1 use new FormData(e.currentTarget) needs <input name="goal" />
    // 2. or use ref to extract value
    const inputGoal = goal.current!.value;
    const inputSummary = summary.current!.value;

    onAddGoal(inputGoal, inputSummary);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 m-2">
      <p className="m-0 font-[0.85rem] text-[#dfd9be]">
        <label
          htmlFor="goal"
          className="block font-bold text-sm uppercase text-[#dfd9be]"
        >
          Your Goal
        </label>
        <input
          ref={goal}
          type="text"
          id="goal"
          className="w-full p-2 bg-[#b4b6c4] border-none rounded-md text-black"
        />
      </p>
      <p className="m-0 font-[0.85rem] text-[#dfd9be]">
        <label
          htmlFor="summary"
          className="block font-bold text-sm uppercase text-[#dfd9be]"
        >
          Short summary
        </label>
        <input
          ref={summary}
          type="text"
          id="summary"
          className="w-full p-2 bg-[#b4b6c4] border-none rounded-md text-black"
        />
      </p>
      <button className="block w-full p-3 mt-4 bg-[#f7e596] border-none rounded-md font-bold text-[#3a4346] cursor-pointer hover:bg-[#f9e175]">
        Add Goal
      </button>
    </form>
  );
};

export default NewGoal;
