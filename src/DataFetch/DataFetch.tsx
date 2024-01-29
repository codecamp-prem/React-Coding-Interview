// Data Fetch in TypeScript

import { get } from "./utils/http";

const DataFetch = () => {
  const posts = get("https://jsonplaceholder.typicode.com/posts");
  return <h1>DataFetch</h1>;
};

export default DataFetch;
