import { FormEvent, useEffect, useRef, useState } from "react";
import "./common.css";

const FieldNotes = () => {
  const lastNoteRef = useRef<null | HTMLLIElement>(null);

  const [notes, setNotes] = useState([
    "Components encapsulate both the visual representation of a particular piece of UI as well as the state and logic that goes along with it.",
    "The same intuition you have about creating and composing together functions can directly apply to creating and composing components. However, instead of composing functions together to get some value, you can compose components together to get some UI.",
    "JSX combines the power and expressiveness of JavaScript with the readability and accessibility of HTML",
    "Just like a component enabled the composition and reusability of UI, hooks enabled the composition and reusability of non-visual logic.",
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const newNote = formData.get("note")?.toString();
    if (newNote?.trim()) {
      setNotes([...notes, newNote]);
      form.reset();
    }
  };

  useEffect(() => {
    if (lastNoteRef.current) {
      lastNoteRef.current.scrollIntoView();
    }
  });
  return (
    <div className="container">
      <article className="articleContainer">
        <h1>Field Notes</h1>
        <div>
          <ul className="chatUl">
            {notes.map((msg, index) => (
              <li
                key={index}
                ref={index === notes.length - 1 ? lastNoteRef : null}
              >
                {msg}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="formFieldNotes">
            <input
              required
              type="text"
              name="note"
              placeholder="Type your note..."
            />
            <button className="link" type="submit">
              Submit
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default FieldNotes;
