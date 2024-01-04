import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./common.css";

const fetchData = async ({ query = "", page = 0, tag = "" }) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
      tag
    )}&page=${page}`
  )
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 20,
    }));
};

const Hacknews = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("story");
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(0);
  const [totalPages, setTotalPages] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const handleFetchData = async () => {
      setLoading(true);
      setResults([]);

      const { results, pages, resultsPerPage } = await fetchData({
        query,
        page,
        tag,
      });

      if (ignore === true) return;

      setTotalPages(pages);
      setResults(results);
      setLoading(false), setResultsPerPage(resultsPerPage);
    };

    handleFetchData();

    return () => {
      ignore = true;
    };
  }, [page, tag, query]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleTag = (e: ChangeEvent<HTMLSelectElement>) => {
    setTag(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="container">
      <main>
        <h1>Hacker news Search</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="query">Search</label>
            <input
              type="text"
              id="query"
              name="query"
              value={query}
              onChange={handleSearch}
              placeholder="Search hacker news...."
            />
          </div>
          <div>
            <label htmlFor="tag">Tag</label>
            <select id="tag" name="tag" onChange={handleTag} value={tag}>
              <option value="story">Story</option>
              <option value="ask_hn">Ask HN</option>
              <option value="show_in">Show HN</option>
              <option value="poll">Poll</option>
            </select>
          </div>
        </form>
        <section>
          <header>
            <h2>
              <span>
                {totalPages === 0
                  ? "No Results"
                  : `Page ${page + 1} of ${totalPages}`}
              </span>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={loading}
              />
            </h2>
            <div>
              <button
                className="link"
                onClick={handlePrevPage}
                disabled={page <= 0}
              >
                Previous
              </button>
              <button
                className="link"
                onClick={handleNextPage}
                disabled={page + 1 >= totalPages}
              >
                Next
              </button>
            </div>
          </header>
          <ul>
            {results.map(({ url, objectID, title }, index) => {
              const href =
                url || `https://news.ycombinator.com/item?id=${objectID}`;
              const position = resultsPerPage * page + index + 1;
              return (
                <li key={objectID}>
                  <span>{position}.</span>
                  <a href={href} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Hacknews;
