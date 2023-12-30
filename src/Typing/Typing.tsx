import { useEffect, useState } from "react";
import useCountDownHook from "../hooks/useCountDownHook";

import AlertComponent from "../Components/AlertComponent";
import "./typing.css";

const secondsToCount = 10;
const paragraph = `React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.`;

const findDiffTypos = (str1: string, str2: string) => {
  let typos: number[] = [];
  str2.split("").forEach((character, index) => {
    if (character !== str1.charAt(index)) {
      typos.push(index);
    }
  });
  return typos;
};

const Typing = () => {
  const [showAlert, setShowAlert] = useState({ show: false, msg: "" });
  const [timeLeft, { start, reset }] = useCountDownHook(
    secondsToCount * 1000,
    100
  );
  const [startTimer, setStartTimer] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isEditable, setIsEditable] = useState(true);
  const [typoIndexArray, setTypoIndex] = useState<number[]>([]);

  const handleTypedText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTypedText(e.target.value);

  //finding the typos
  useEffect(() => {
    setStartTimer(true);
    handleStartTimer();
    setTypoIndex(findDiffTypos(paragraph, typedText));
  }, [typedText]);

  // calculate the wpm when timer hits 0
  useEffect(() => {
    if (typedText.length === 0) return;
    if (timeLeft !== 0) return;

    setStartTimer(false);
    setIsEditable(false);

    const wordsTyped = (typedText.length - typoIndexArray.length) / 5;
    const minMultiplier = 60 / secondsToCount;
    const wpm = wordsTyped * minMultiplier;

    //alert(`You type at a ${wpm.toFixed(2)}`);
    setShowAlert({
      show: true,
      msg: `You have type at speed of ${wpm.toFixed(2)} WPM`,
    });
  }, [timeLeft]);

  const handleStartTimer = () => {
    //setTypedText("");

    if (typedText.length === 0) return;
    if (timeLeft !== 0) return;
    if (startTimer) start();
  };

  const handleResetTimer = () => {
    setTypedText("");
    setShowAlert({ show: false, msg: "" });
    reset();
    setIsEditable(true);
  };
  return (
    <div className="app">
      {/* Alert */}
      {showAlert.show && (
        <AlertComponent
          alertMessage={{
            msg: showAlert.msg,
            handler: handleResetTimer,
          }}
        />
      )}
      {/* sidebar */}
      <div className="sidebar">
        <div className="timer">{(timeLeft / 1000).toFixed(2)}</div>
        <button className="start" onClick={handleStartTimer}>
          Start
        </button>
        <button className="reset" onClick={handleResetTimer}>
          Reset
        </button>
      </div>

      <div className="content">
        {/* show the paragraph */}
        <p className="content-heading">
          Start the timer & start typing below <span>paragraph</span> OR just
          Start Typing
        </p>
        <p>
          {paragraph.split("").map((character, index) => {
            let characterClass = "";
            const hasBeenType = typedText.length > index;
            if (hasBeenType) {
              let typo = typoIndexArray.includes(index);
              if (typo) characterClass = "incorrect";
              if (!typo) characterClass = "correct";
            }

            return (
              <span key={index} className={characterClass}>
                {character}
              </span>
            );
          })}
        </p>

        {/* show the textarea */}
        <form>
          <textarea
            rows={10}
            placeholder="Test your typing skills..."
            value={typedText}
            onChange={handleTypedText}
            readOnly={!isEditable}
          />
        </form>
      </div>
    </div>
  );
};

export default Typing;
