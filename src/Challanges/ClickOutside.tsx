import { useEffect, useRef, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "./common.css";

const ClickOutside = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen === true) {
      const handleEvent = (e: any) => {
        const element = ref.current;
        if (element && !element.contains(e.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleEvent);

      //clean up
      return () => {
        document.removeEventListener("pointerdown", handleEvent);
      };
    }
  }, [isOpen]);

  return (
    <>
      <section style={{ textAlign: "center" }}>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={ref}>
          <button onClick={handleCloseModal}>
            <FaRegWindowClose />
          </button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
};

export default ClickOutside;
