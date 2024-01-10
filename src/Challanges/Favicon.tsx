import { useState } from "react";
import "./common.css";
import useFavicon from "./hooks/useFavicon";

const faviconMap = {
  uidotdev: "https://ui.dev/favicon/favicon-32x32.png",
  bytes: "https://bytes.dev/favicon/favicon-32x32.png",
  react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
};

const Favicon = () => {
  const [id, setId] = useState("uidotdev");

  useFavicon(faviconMap[id]);

  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        <h2>useFavicon</h2>
        <button
          title="Set the Favicon to uidotdev's logo"
          className={`link ${id == "uidotdev" && "active"}`}
          onClick={() => setId("uidotdev")}
        >
          Ui.dev
        </button>
        <button
          title="Set the Favicon to bytes's logo"
          className={`link ${id == "bytes" && "active"}`}
          onClick={() => setId("bytes")}
        >
          Bytes
        </button>
        <button
          title="Set the Favicon to React newletter's logo"
          className={`link ${id == "react_newsletter" && "active"}`}
          onClick={() => setId("react_newsletter")}
        >
          React newsletter
        </button>
      </section>
    </div>
  );
};

export default Favicon;
