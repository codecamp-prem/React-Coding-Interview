import "./common.css";
import useDefault from "./hooks/useDefault";

const Default = () => {
  const initialState = { name: "Dick" };
  const defaultState = { name: "Harry" };

  const [user, setUser] = useDefault(initialState, defaultState);

  return (
    <div className="container">
      <section>
        <h2>useDefault hook</h2>
        <button
          title="Sets the value to Tom"
          className="link"
          onClick={() => setUser({ name: "Tom" })}
        >
          Tom
        </button>
        <button
          title="Sets the value to Dick"
          className="link"
          onClick={() => setUser({ name: "Dick" })}
        >
          Dick
        </button>
        <button
          title="Sets the value to Harry"
          className="link"
          onClick={() => setUser({ name: "Harry" })}
        >
          Harry
        </button>
        <pre>
          <code>{JSON.stringify(user)}</code>
        </pre>
      </section>
    </div>
  );
};

export default Default;
