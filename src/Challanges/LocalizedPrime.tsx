import { ChangeEvent, useMemo, useState } from "react";
import "./common.css";
import { calculatePrime, formatNumberToString, translations } from "./utils";

const LocalizedPrime = () => {
  const [locale, setLocale] = useState("en-US");
  const [count, setCount] = useState(3);

  const nthPrime = useMemo(() => {
    return calculatePrime(count);
  }, [count]);

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setLocale(e.target.value);

  const handleNextPrimeClick = () => setCount(count + 1);

  return (
    <div className="container">
      <div>
        <header className="headerFlex">
          <select value={locale} onChange={handleLocaleChange}>
            <option value="en-US">English (US)</option>
            <option value="en-ES">Espanol (ES)</option>
          </select>
          <button className="primary" onClick={handleNextPrimeClick}>
            {translations[locale].nextPrime}
          </button>
        </header>
        <p>
          {translations[locale].nthPrime(formatNumberToString(count), nthPrime)}
        </p>
      </div>
    </div>
  );
};

export default LocalizedPrime;
