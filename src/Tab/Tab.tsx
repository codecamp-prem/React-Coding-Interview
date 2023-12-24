import { useState } from "react";
import SingleTab from "./SingleTab";
import About from "./routes/About";
import Features from "./routes/Features";
import Home from "./routes/Home";
import "./tab.css";

const Tab = () => {
  //const [activeTab, setActiveTab] = useState('');

  const [routes, setRoutes] = useState("Home");
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.innerText);
    setRoutes(e.target.innerText.trim());
    // apply css
  };
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <SingleTab>
            <a onClick={handleLinkClick}>Home</a>
          </SingleTab>
          <SingleTab>
            <a onClick={handleLinkClick}>About</a>
          </SingleTab>
          <SingleTab>
            <a onClick={handleLinkClick}>Features</a>
          </SingleTab>
        </div>
        <div className="viewport">
          {routes === "Home" && <Home />}
          {routes === "About" && <About />}
          {routes === "Features" && <Features />}
        </div>
      </div>
    </div>
  );
};

export default Tab;

// React Skills for this App
// - React Router
// - Mouse Event
// - updating CSS with useState
