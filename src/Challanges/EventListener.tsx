import { useRef, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./common.css";
import useEventListener from "./hooks/useEventListener";

const EventListener = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    const element = ref.current;
    if (element && !element.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEventListener(document, "mousedown", handleClick);

  return (
    <div className="container">
      <section>
        <h1>useEventListener</h1>
        <div style={{ minHeight: "200vh" }}>
          <button className="link" onClick={() => setIsOpen(true)}>
            Click me
          </button>
        </div>
        {isOpen && (
          <dialog ref={ref}>
            <button onClick={() => setIsOpen(false)}>
              <FaWindowClose />
            </button>
            <h2>Modal</h2>
            <p>Click the close (X) button on the modal to close the modal.</p>
          </dialog>
        )}
      </section>
    </div>
  );
};

export default EventListener;
