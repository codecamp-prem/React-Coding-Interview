import { useEffect, useState } from "react";
import useVisibilityChange from "./hooks/useVisibilityChange";

const TabVisibility = () => {
  const documentVisible = useVisibilityChange();
  const [tabAwayCount, setTabAwayCount] = useState(0);

  useEffect(() => {
    if (documentVisible === false) {
      setTabAwayCount((c) => c + 1);
    }
  }, [documentVisible]);

  return (
    <section>
      <h2>useVisibilityChange</h2>
      <div>Tab Away Count: {tabAwayCount}</div>
    </section>
  );
};

export default TabVisibility;
