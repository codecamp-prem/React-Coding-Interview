import { CiCircleCheck } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import "./common.css";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

const randomHash = crypto.randomUUID();

const CopyToClipboard = () => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <div className="container">
      <section className="sectionCenter">
        <h2>useCopyToClipboard</h2>
        <article>
          <label>Fake API Key</label>
          <div className="articleCopyTextDiv">
            <pre>
              <code>{randomHash}</code>
            </pre>
            <button
              disabled={hasCopiedText}
              className="link"
              onClick={() => copyToClipboard(randomHash)}
            >
              {hasCopiedText ? <CiCircleCheck /> : <FaRegCopy />}
            </button>
          </div>
        </article>
        {hasCopiedText && (
          <dialog open={hasCopiedText}>
            <h4>
              Copied{" "}
              <span role="img" aria-label="Celebrate Emoji">
                🎉
              </span>
            </h4>
            <textarea placeholder="Paste your copied text" />
          </dialog>
        )}
      </section>
    </div>
  );
};

export default CopyToClipboard;
