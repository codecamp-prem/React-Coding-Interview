import { Choice } from "./commonType";

type Props = {
  gameState: string;
  renderComponent: (c: Choice) => JSX.Element;
  userChoice: Choice;
  computerChoice: Choice;
  handleRestartGame: () => void;
};
const DisplayResult = ({
  gameState,
  renderComponent,
  userChoice,
  computerChoice,
  handleRestartGame,
}: Props) => {
  return (
    <div className={`game-state ${gameState}`}>
      <div>
        <div className="game-state-content">
          <p>{renderComponent(userChoice!)}</p>
          <p>you {gameState}!</p>
          <p>{renderComponent(computerChoice!)}</p>
        </div>
        {(gameState === "win" || gameState === "lose") && (
          <p className="game-result-info">
            {`${userChoice?.name} ${gameState} to ${computerChoice?.name}`}
          </p>
        )}
        <button onClick={handleRestartGame}>Play Again</button>
      </div>
    </div>
  );
};

export default DisplayResult;
