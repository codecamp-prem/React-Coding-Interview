import { useState } from "react";
import "./common.css";
import useDocumentTitle from "./hooks/useDocumentTitle";

const DocumentTitle = () => {
  const [counter, setCounter] = useState(0);

  const handleClickCounter = () => {
    setCounter(counter + 1);
  };

  useDocumentTitle(`Clicked ${counter} times`);
  return (
    <div className="container">
      <section>
        <h2>useDocumentTitle Hooks</h2>
        <button onClick={handleClickCounter}>Increment Count: {counter}</button>
      </section>
    </div>
  );
};

export default DocumentTitle;
