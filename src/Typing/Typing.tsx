import { useEffect, useState } from "react";
import useCountDownHook from "../hooks/useCountDownHook";

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
  const [timeLeft, { start, reset }] = useCountDownHook(
    secondsToCount * 1000,
    100
  );
  const [typedText, setTypedText] = useState("");
  const [typoIndexArray, setTypoIndex] = useState<number[]>([]);

  const handleTypedText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTypedText(e.target.value);

  useEffect(() => {
    setTypoIndex(findDiffTypos(paragraph, typedText));
  }, [typedText]);

  return (
    <div className="app">
      {/* sidebar */}
      <div className="sidebar">
        <div className="timer">{timeLeft}</div>
        <button className="start" onClick={() => start()}>
          Start
        </button>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>

      <div className="content">
        {/* show the paragraph */}
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
          />
        </form>
      </div>
    </div>
  );
};

export default Typing;
