import { useState } from "react";
import "../index.css";
import CourseGoalList from "./CourseGoalList";
import Header from "./Header";
import goalsImg from "./goals.jpg";

export type GoalProps = {
  id: string;
  title: string;
  description: string;
};

const CourseGoal = () => {
  const [goals, setGoal] = useState<GoalProps[]>([]);

  const handleSetGoal = () => {
    const newGoal: GoalProps = {
      id: crypto.randomUUID(),
      title: "When coming from Java & .net",
      description: "world is going back to java and .net",
    };
    setGoal((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: string) => {
    setGoal((prevGoals) => {
      return prevGoals.filter((goal) => goal.id != id);
    });
  };
  return (
    <main className="w-11/12 max-w-[40rem] m-1 mx-auto p-2 bg-[#3a4346] text-[#f0f6f8] border-2 rounded-md shadow-slate-800">
      <Header image={{ src: goalsImg, alt: "goals goals" }}>
        <h1>Your goals goals</h1>
      </Header>
      <button
        onClick={handleSetGoal}
        className="m-2 hover:text-green-500 underline hover:underline-offset-4"
      >
        Add Goal
      </button>
      <CourseGoalList allgoals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default CourseGoal;
