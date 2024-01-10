import "./common.css";
import usePreferredLanguage from "./hooks/usePreferredLanguage";

const PreferredLang = () => {
  const language = usePreferredLanguage();

  return (
    <div className="container">
      <section style={{ textAlign: "center" }}>
        <h2>usePreferredLanguage</h2>
        <p>
          You can change your preferred language here -
          chrome://settings/languages
        </p>
        <h2>
          The correct date format for <pre style={styles.pre}>{language}</pre>{" "}
          is <time>{new Date(Date.now()).toLocaleDateString(language)}</time>
        </h2>
      </section>
    </div>
  );
};

const styles = {
  pre: {
    display: "inline-block",
    background: "#231f20",
    padding: "1px 8px",
    fontFamily: "monospace",
    borderRadius: "2px",
  },
};

export default PreferredLang;
