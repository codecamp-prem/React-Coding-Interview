import { GoalProps } from "./CourseGoal";

type Props = {
  allgoals: GoalProps[];
  handleDeleteGoal: (id: string) => void;
};

const CourseGoalList = ({ allgoals, handleDeleteGoal }: Props) => {
  return (
    <ul className="list-none m-0 p-0 grid gap-4 grid-cols-autoFit">
      {allgoals.map((goal: GoalProps) => (
        <li className="bg-[#475357] p-4 rounded-md shadow-lg" key={goal.id}>
          <article className="flex justify-between items-start">
            <div className="flex flex-col">
              <h2 className="m-0 font-[1.25rem] text-[#b1c1c3]">
                {goal.title}
              </h2>
              <p className="m-0 font-[0.85rem] text-[#dfd9be]">
                {goal.description}
              </p>
            </div>
            <button
              className="capitalize bg-transparent border-none text-[#909a9a] cursor-pointer hover:text-[#f9513b]"
              onClick={() => handleDeleteGoal(goal.id)}
            >
              delete
            </button>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
