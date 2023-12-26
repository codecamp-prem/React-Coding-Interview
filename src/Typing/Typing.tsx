import "./typing.css";

const secondsToCount = 10;
const paragraph = `Coding is the best. We are able to build something from scratch. It is literally imagination incarnate. Solving our own problems through coding is one of the coolest things we could do!`;

const Typing = () => {
  return (
    <div className="app">
      {/* sidebar */}
      <div className="sidebar">
        <div className="timer">00</div>
        <button className="start">Start</button>
        <button className="reset">Reset</button>
      </div>

      <div className="content">
        {/* show the paragraph */}
        <p>{paragraph}</p>

        {/* show the textarea */}
        <form>
          <textarea rows={10} placeholder="Test your typing skills..." />
        </form>
      </div>
    </div>
  );
};

export default Typing;
