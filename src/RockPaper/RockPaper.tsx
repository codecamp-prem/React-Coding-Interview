import { useEffect, useState } from "react";
import "./rockpaper.css";
import Rock from "./svgs/Rock";
import Scissors from "./svgs/Scissors";
import Paper from "./svgs/paper";

const choices = [
  { id: 1, name: "rock", component: Rock, losesTo: 2 },
  { id: 2, name: "paper", component: Paper, losesTo: 3 },
  { id: 3, name: "scissors", component: Scissors, losesTo: 1 },
];

type Choice = {
  id: number;
  name: string;
  component: () => JSX.Element;
  losesTo: number;
};

const RockPaper = () => {
  const [userChoice, setUserChoice] = useState<Choice>();
  const [computerChoice, setComputerChoice] = useState<Choice>();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState<string | undefined>();

  const handleRestartGame = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    setGameState(undefined);
    setUserChoice(undefined);
  };

  useEffect(() => {
    handleRestartGame();
  }, []);

  const handleUserChoice = (choice: number) => {
    const userClickedChoice = choices.find((c) => c.id === choice);
    setUserChoice(userClickedChoice);

    // determine the winner, loser or draw
    if (userClickedChoice?.losesTo === computerChoice?.id) {
      // lose
      setLosses((losses) => losses + 1);
      setGameState("lose");
    } else if (computerChoice?.losesTo === userClickedChoice?.id) {
      // win
      setWins((wins) => wins + 1);
      setGameState("win");
    } else if (computerChoice?.id === userClickedChoice?.id) {
      //draw
      setGameState("draw");
    }
  };

  const renderComponent = (choice: Choice) => {
    const DynamicComponent = choice.component;
    return <DynamicComponent />;
  };

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins === 1 ? "Win" : "Wins"}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses === 1 ? "Loss" : "Losses"}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/lose/draw-3 game state option */}
      {gameState != undefined && (
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
      )}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
};

export default RockPaper;
