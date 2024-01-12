import useQueue from "./hooks/useQueue";
import "./queue.css";

const Queue = () => {
  const { add, remove, clear, first, last, size, queue } = useQueue([1, 2, 3]);

  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "40px" }}>useQueue</h1>
        <button className="link" onClick={() => add((last || 0) + 1)}>
          Add
        </button>
        <button disabled={size === 0} className="link" onClick={() => remove()}>
          Remove
        </button>
        <button disabled={size === 0} className="link" onClick={() => clear()}>
          Clear
        </button>
      </header>
      <QueueDemo queue={queue} size={size} first={first} last={last} />
    </div>
  );
};

function QueueDemo({ first, last, size, queue }) {
  return (
    <figure>
      <article>
        <p>Front</p>
        <ul>
          {queue.map((item, i) => {
            const isFirst = first === item;
            const isLast = last === item;

            if (isFirst) {
              return <li key={i}>First: {item}</li>;
            }
            if (isLast) {
              return <li key={i}>Last: {item}</li>;
            }
            return <li key={i}>Item: {item}</li>;
          })}
        </ul>
        <p>Back</p>
      </article>
      <figcaption> {size} items in the queue</figcaption>
    </figure>
  );
}

export default Queue;
