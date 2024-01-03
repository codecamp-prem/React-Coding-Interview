import { ChangeEvent, useEffect, useState } from "react";
import "./countryInfo.css";

type FetchCountryProps = {
  [key: string]: any;
};

const CountryInfo = () => {
  const [countryCode, setCountryCode] = useState("AU");
  const [data, setData] = useState<FetchCountryProps>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<{
    [key: string]: any;
  } | null>(null);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  useEffect(() => {
    let ignore = false;
    const fetchCountry = async () => {
      const url = `https://restcountries.com/v2/alpha/${countryCode}`;
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (ignore === false) {
          setData(data);
          setError(null);
          setIsLoading(false);
        }
      } catch (error) {
        if (ignore === false) {
          setData({});
          if (typeof error === "object" && error !== null) {
            setError(error);
          }
          setIsLoading(false);
        }
      }
    };

    fetchCountry();

    return () => {
      ignore = true;
    };
  }, [countryCode]);

  return (
    <div className="container">
      <section>
        <header>
          <h1>Country Info:</h1>
          <label htmlFor="country">Select a country:</label>
          <div>
            <select id="country" value={countryCode} onChange={handleChange}>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
              <option value="CN">China</option>
              <option value="DE">Germany</option>
              <option value="US">USA</option>
            </select>
            {isLoading && <span>Loading....</span>}
            {error && <span>{error.message}</span>}
          </div>
        </header>
        {data && (
          <article>
            <h2>{data.name}</h2>
            <table>
              <tbody>
                <tr>
                  <td>Capital:</td>
                  <td>{data.capital}</td>
                </tr>
                <tr>
                  <td>Region:</td>
                  <td>{data.region}</td>
                </tr>
                <tr>
                  <td>Population:</td>
                  <td>{data.population}</td>
                </tr>
                <tr>
                  <td>Area:</td>
                  <td>{data.area}</td>
                </tr>
              </tbody>
            </table>
          </article>
        )}
      </section>
    </div>
  );
};

export default CountryInfo;
