import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"; // this change to html text
import Markdown from "https://esm.sh/react-markdown@9?bundle"; // use this React component to render markdown. this parse to html from html text.
import { useState } from "react";
import "./markdownEditor.css";
// TypeScript Type
// React.ChangeEvent<HTMLInputElement> - for input
// React.ChangeEvent<HTMLTextAreaElement> - for textarea
const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("# sup");

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMarkdown(e.target.value);

  return (
    <div className="app flex-container">
      <div className="preview flex-item">
        <textarea value={markdown} onChange={handleTextArea} />
      </div>

      <div className="preview flex-item dangerous">
        {marked.parse(markdown)}
      </div>
      <div className="preview flex-item use-this">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
