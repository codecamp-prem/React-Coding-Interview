import { useState } from "react";
import "./common.css";
import useLockBodyScroll from "./hooks/useLockBodyScroll";

function Modal({ handleClose }) {
  useLockBodyScroll();

  return (
    <div>
      <dialog>
        <header>
          <button onClick={handleClose}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
          <h2>Modal</h2>
        </header>
        <section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          similique incidunt animi voluptatem molestiae rerum nihil mollitia,
          numquam sunt ea ipsam cupiditate consectetur eos harum quasi itaque
          explicabo. Quas, nostrum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis, modi. Et eligendi minus exercitationem
          facilis nulla sunt quisquam, a facere nisi odit reprehenderit tenetur
          doloribus asperiores sed, similique veritatis? Hic.
        </section>
      </dialog>
    </div>
  );
}

const LockBodyScroll = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
      <main className="mainLockBodyScroll">
        <header>
          <h2>useLockBodyScroll</h2>
        </header>
        {["green", "blue", "purple", "red", "pink", "beige", "yellow"].map(
          (color, index) => {
            return (
              <section
                style={{
                  backgroundColor: `${color}`,
                  height: "50vh",
                  width: "100%",
                }}
                key={index}
              />
            );
          }
        )}
        <button className="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
      </main>
    </>
  );
};

export default LockBodyScroll;
