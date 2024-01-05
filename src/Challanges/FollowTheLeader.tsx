import { useRef, useState } from "react";
import "./common.css";

const FollowTheLeader = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<number[]>([0, 0]);

  //   const handleClick = ({
  //     clientX,
  //     clientY,
  //   }: {
  //     clientX: number;
  //     clientY: number;
  //   }) => {
  //     if (boxRef.current) {
  //       const { width, height } = boxRef.current.getBoundingClientRect();
  //       setPosition([clientX - width / 2, clientY - height / 2]);
  //     }
  //   };

  const handleClick = (e: any) => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect();
      setPosition([e.clientX - width / 2, e.clientY - height / 2]);
    }
  };

  return (
    <div className="wrapper" onClick={handleClick}>
      <div
        ref={boxRef}
        className="box"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
};

export default FollowTheLeader;
