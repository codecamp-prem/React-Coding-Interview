import { ReactNode, useState } from "react";

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

export default SingleTab;
