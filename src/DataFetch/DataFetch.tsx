// Data Fetch in TypeScript

import { ReactNode, useEffect, useState } from "react";
import ListBlogPost, { BlogPost } from "./ListBlogPost";
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

  useEffect(() => {
    const getPosts = async () => {
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

      setFetchedPosts(allBlogPosts);
    };

    getPosts();
  }, []);

  // helper variable
  let content: ReactNode; // ReactNode: anything that is renderable

  if (fetchedPosts) {
    content = <ListBlogPost posts={fetchedPosts} />;
  }
  return (
    <main>
      <img src={imgDataFetching} alt="Decoration" />
      {content}
    </main>
  );
};

export default DataFetch;
