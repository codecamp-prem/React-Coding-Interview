import { useLayoutEffect, useRef, useState } from "react";
import "./common.css";

const Ruler = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.borderBoxSize[0].inlineSize);
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="sectionRuler">
      <h1>React Ruler</h1>
      <p>(Resize the ruler)</p>
      <article className="articleRuler" ref={ref}>
        <label>width: {Math.floor(width)}</label>
      </article>
    </section>
  );
};

export default Ruler;
