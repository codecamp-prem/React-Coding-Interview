import SingleTab from "./SingleTab";
import "./tab.css";

const Tab = () => {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <SingleTab>
            <a>Home</a>
          </SingleTab>
          <SingleTab>
            <a>About</a>
          </SingleTab>
          <SingleTab>
            <a>Features</a>
          </SingleTab>
        </div>
        <div className="viewport">Pages Go here</div>
      </div>
    </div>
  );
};

export default Tab;

// React Skills for this App
// - React Router
// - Mouse Event
// - updating CSS with useState
