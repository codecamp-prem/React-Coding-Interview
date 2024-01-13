import { ChangeEvent, useEffect, useState } from "react";
import "./common.css";
import useDebounce from "./hooks/useDebounce";

const searchHackerNews = async (query = "") => {
  return fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 20,
    }));
};

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("react js");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 3000);

  const handleChage = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchTerm(formData.get("search"));
    e.target.reset();
    e.target.focus();
  };

  useEffect(() => {
    const searchHN = async () => {
      let results = [];
      setIsSearching(true);
      if (debouncedSearchTerm) {
        const data = await searchHackerNews(debouncedSearchTerm);
        results = data.results || [];
      }
      setIsSearching(false);
      setResults(results);
    };

    searchHN();
  }, [debouncedSearchTerm]);

  return (
    <div className="container">
      <section>
        <header>
          <h2>useDebounce</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="search"
              placeholder="Search HN"
              style={{ background: "#221E20" }}
              onChange={handleChage}
            />
            <button className="primary" disabled={isSearching} type="submit">
              {isSearching ? "..." : "Search"}
            </button>
          </form>
        </header>
        <SearchResults results={results} />
      </section>
    </div>
  );
};

function SearchResults({ results }) {
  return (
    <article className="articleDebounce">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Article</th>
            <th>Author</th>
            <th>Points</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 &&
            results.map((result, index) => (
              <tr key={result.story_id}>
                <th>{index + 1}</th>
                <td>
                  <a href={result.url}>{result.title}</a>
                </td>
                <td>{result.author}</td>
                <td>{result.points}</td>
                <td>{result.created_at.slice(0, 10)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </article>
  );
}
export default Debounce;
