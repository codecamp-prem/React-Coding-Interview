import { ReactNode, useState } from "react";
import "./tab.css";

const SingleTab = ({ children }: { children: ReactNode }) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const handleMouseMoveTab = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setHighlightStyle({
      left: e.nativeEvent.offsetX - 150,
      opacity: 0.7,
    });
  };

  const handleMouseOutTab = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setHighlightStyle({
      left: e.nativeEvent.offsetX - 150,
      opacity: 0,
    });
  };

  return (
    <div
      className="tab"
      onMouseMove={handleMouseMoveTab}
      onMouseOut={handleMouseOutTab}
    >
      <div className="highlight" style={highlightStyle}></div>
      {children}
    </div>
  );
};

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
