import { ChangeEvent, useRef, useState } from "react";
import "./common.css";

const ExpandingTextArea = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaElement = textAreaRef.current;
    if (textAreaElement && textAreaElement.contains(e.target)) {
      setText(e.target.value);
      textAreaElement.style.height = "inherit";
      const scrollHeight = textAreaElement.scrollHeight;
      textAreaElement.style.height = scrollHeight + "px";
    }
  };

  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea
        id="textarea"
        placeholder="Enter some text"
        value={text}
        ref={textAreaRef}
        onChange={handleChange}
        rows={1}
      />
    </section>
  );
};

export default ExpandingTextArea;
