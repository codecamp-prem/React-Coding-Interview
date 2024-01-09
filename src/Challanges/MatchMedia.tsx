import { useSyncExternalStore } from "react";
import { CiDesktop, CiMobile1 } from "react-icons/ci";
import "./common.css";

const query = "only screen and (max-width:786px)";

const subscribe = (callback) => {
  const matchMedia = window.matchMedia(query);
  matchMedia.addEventListener("change", callback);

  return () => {
    matchMedia.removeEventListener("change", callback);
  };
};

const getSnapshot = () => {
  return window.matchMedia(query).matches;
};

const MatchMedia = () => {
  const isMobile = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        Resize your browser's window to see changes.
        <div className="articleMatchMedia">
          <figure className={isMobile ? "active" : ""}>
            <CiMobile1 />
            <figcaption>Is mobile: {`${isMobile}`}</figcaption>
          </figure>
          <figure className={!isMobile ? "active" : ""}>
            <CiDesktop />
            <figcaption>Is larger device: {`${!isMobile}`}</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default MatchMedia;
