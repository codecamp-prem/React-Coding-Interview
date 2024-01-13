import "./common.css";
import useObjectState from "./hooks/useObjectState";

export type initialStateProps = {
  team: string;
  wins: number;
  losses: number;
  championships: number;
};
const initialState: initialStateProps = {
  team: "Utah Jazz",
  wins: 2138,
  losses: 1789,
  championships: 0,
};

const ObjectState = () => {
  const [stats, setStats] = useObjectState(initialState);

  const addWin = () => {
    setStats((s) => ({
      wins: s.wins + 1,
    }));
  };

  const addLoss = () => {
    setStats((s) => ({
      losses: s.losses + 1,
    }));
  };

  const addChampionShip = () => {
    setStats((s) => ({
      championships: s.championships + 1,
    }));
  };

  const reset = () => {
    setStats(initialState);
  };

  return (
    <div className="container">
      <section
        style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}
      >
        <h2
          style={{
            fontFamily: "monospace",
            overflow: "auto",
            fontSize: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          useObjectState
        </h2>

        <button className="link" onClick={addWin}>
          Add Win
        </button>
        <button className="link" onClick={addLoss}>
          Add Loss
        </button>

        <button className="link" onClick={addChampionShip}>
          Add Championship
        </button>
        <button className="link" onClick={reset}>
          Reset
        </button>

        <table>
          <thead>
            <tr>
              {Object.keys(stats).map((key) => {
                return <th key={key}>{key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(stats).map((key) => {
                return <td key={`${stats[key]}`}>{`${stats[key]}`}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ObjectState;
