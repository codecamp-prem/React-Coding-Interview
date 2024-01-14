import { FormEvent } from "react";
import "./history-state.css";
import useHistoryState from "./hooks/useHistoryState";

const HistoryState = () => {
  const { state, set, undo, redo, clear, canUndo, canRedo } = useHistoryState({
    items: [],
  });

  console.log(state);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const val = formData.get("todo")?.toString();

    set({
      ...state,
      items: state.items.concat({ id: crypto.randomUUID(), name: val }),
    });
    target.reset();
  };
  const removeTodo = (id) => {
    set({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    });
  };
  return (
    <div className="container">
      <section>
        <header>
          <h1>useHistoryState</h1>
          <div>
            <button disabled={!canUndo} className="link" onClick={undo}>
              Undo
            </button>
            <button disabled={!canRedo} className="link" onClick={redo}>
              Redo
            </button>
            <button
              disabled={!state.items.length}
              className="link"
              onClick={clear}
            >
              Clear
            </button>
          </div>
          <form onSubmit={addTodo}>
            <input type="text" placeholder="required" name="todo" required />
            <button className="primary" type="submit">
              Add
            </button>
          </form>
        </header>
        <ul>
          {state.items.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.name}</span>
                <button className="link" onClick={() => removeTodo(item.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default HistoryState;
