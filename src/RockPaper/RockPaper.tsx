import { useEffect, useState } from "react";
import DisplayResult from "./DisplayResult";
import MainUi from "./MainUi";
import ScoreStats from "./ScoreStats";
import { ChoiceType, gameChoices } from "./commonType";
import "./rockpaper.css";

const RockPaper = () => {
  const [userChoice, setUserChoice] = useState<ChoiceType>();
  const [computerChoice, setComputerChoice] = useState<ChoiceType>();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState<string | undefined>();

  const handleRestartGame = () => {
    const randomChoice =
      gameChoices[Math.floor(Math.random() * gameChoices.length)];
    setComputerChoice(randomChoice);
    setGameState(undefined);
    setUserChoice(undefined);
  };

  useEffect(() => {
    handleRestartGame();
  }, []);

  const handleUserChoice = (choosenId: number) => {
    const userClickedChoice = gameChoices.find((c) => c.id === choosenId);
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

  const renderComponent = (choice: ChoiceType) => {
    const DynamicComponent = choice.component;
    return <DynamicComponent />;
  };

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <ScoreStats wins={wins} losses={losses} />
      </div>

      {/* the popup to show win/lose/draw-3 game state option */}
      {gameState != undefined && (
        <DisplayResult
          gameState={gameState}
          renderComponent={renderComponent}
          userChoice={userChoice!}
          computerChoice={computerChoice!}
          handleRestartGame={handleRestartGame}
        />
      )}

      <MainUi
        handleUserChoice={handleUserChoice}
        renderComponent={renderComponent}
        gameChoices={gameChoices}
      />
    </div>
  );
};

export default RockPaper;
