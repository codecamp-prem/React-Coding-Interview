import { useState } from "react";
import "../index.css";
import CourseGoalList from "./CourseGoalList";
import Header from "./Header";
import InfoBox from "./InfoBox";
import NewGoal from "./NewGoal";
import goalsImg from "./goals.jpg";

export type GoalProps = {
  id: string;
  title: string;
  description: string;
};

const CourseGoal = () => {
  const [goals, setGoal] = useState<GoalProps[]>([]);

  const handleSetGoal = (title: string, description: string) => {
    const newGoal: GoalProps = {
      id: crypto.randomUUID(),
      title,
      description,
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
    <main className="w-11/12 max-w-[40rem] m-1 mx-auto p-4 bg-[#3a4346] text-[#f0f6f8] border-2 rounded-md shadow-slate-800">
      <Header image={{ src: goalsImg, alt: "goals goals" }}>
        <h1>Your goals goals</h1>
      </Header>
      <NewGoal onAddGoal={handleSetGoal} />
      {goals.length > 7 ? (
        <InfoBox mode="warning" severity="high">
          Stop !! Touch Grass. Get Help!!
        </InfoBox>
      ) : goals.length >= 4 && goals.length <= 7 ? (
        <InfoBox mode="warning" severity="low">
          To much in the plate. Focus on few things to live stress free life
        </InfoBox>
      ) : (
        goals.length == 0 && (
          <InfoBox mode="hint">No goals in the life!!</InfoBox>
        )
      )}
      <CourseGoalList allgoals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
};

export default CourseGoal;
