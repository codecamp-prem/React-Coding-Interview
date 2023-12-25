import { ChoiceType } from "./commonType";

interface Props {
  handleUserChoice: (id: number) => void;
  gameChoices: ChoiceType[];
  renderComponent: (choice: ChoiceType) => JSX.Element;
}
const MainUi = ({ handleUserChoice, renderComponent, gameChoices }: Props) => {
  return (
    <div className="choices">
      {/* choices captions */}
      <div>You</div>
      <div />
      <div>Computer</div>

      {/* buttons for my choice */}
      <div>
        {gameChoices.map((choice) => (
          <button
            className={choice.name}
            onClick={() => handleUserChoice(choice.id)}
            key={choice.id}
          >
            {renderComponent(choice)}
          </button>
        ))}
      </div>

      <div className="vs">vs</div>

      {/* show the computer's choice */}
      <div>
        <button className="computer-choice">?</button>
      </div>
    </div>
  );
};

export default MainUi;
