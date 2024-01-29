// Data Fetch in TypeScript

import { ReactNode, useEffect, useState } from "react";
//import "../index.css";
import { customDelay } from "../utils/customDelay";
import ListBlogPost, { BlogPost } from "./ListBlogPost";
import "./data-fetch.css";
import imgDataFetching from "./data-fetching.png";
import { get } from "./utils/http";

type RawDataBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const DataFetch = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setIsFetching(true);
      const posts = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDataBlogPost[];

      const allBlogPosts: BlogPost[] = posts.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      await customDelay(3000);

      setIsFetching(false);
      setFetchedPosts(allBlogPosts);
    };

    getPosts();
  }, []);

  // helper variable
  let content: ReactNode; // ReactNode: anything that is renderable

  if (fetchedPosts) {
    content = <ListBlogPost posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">🌀 Fetching posts...</p>;
  }
  return (
    <main>
      <img src={imgDataFetching} alt="Decoration" />
      {content}
    </main>
  );
};

export default DataFetch;
