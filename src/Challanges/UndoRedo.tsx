import { useReducer } from "react";
import "./common.css";

interface StateProps {
  past: number[];
  present: number;
  future: number[];
}
const initialState: StateProps = {
  past: [],
  present: 0,
  future: [],
};

type StateActions = { type: "increment" | "decrement" | "undo" | "redo" };

function undoRedoReducer(state: StateProps, action: StateActions) {
  const { past, present, future } = state;
  let newState;
  switch (action.type) {
    case "increment":
      newState = {
        past: [...past, present],
        present: present + 1,
        future: [],
      };
      break;
    case "decrement":
      newState = {
        past: [...past, present],
        present: present - 1,
        future: [],
      };
      break;
    case "undo":
      newState = {
        past: past.slice(0, -1),
        present: past.at(-1),
        future: [present, ...future],
      };
      break;
    case "redo":
      newState = {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
      break;
    default:
      throw new Error("This action type isn't supported.");
  }
  return newState;
}

const UndoRedo = () => {
  const [state, dispatch] = useReducer(undoRedoReducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });

  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleUndo = () => dispatch({ type: "undo" });

  const handleRedo = () => dispatch({ type: "redo" });

  return (
    <div className="container">
      <div>
        <h1>Counter: {state.present}</h1>
        <button className="link" onClick={handleIncrement}>
          Increment
        </button>
        <button className="link" onClick={handleDecrement}>
          Decrement
        </button>
        <button
          className="link"
          onClick={handleUndo}
          disabled={!state.past.length}
        >
          Undo
        </button>
        <button
          className="link"
          onClick={handleRedo}
          disabled={!state.future.length}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default UndoRedo;
