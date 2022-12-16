import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.hits.map((story) => {
        const { objectID, title, num_comments, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by{" "}
              <span>
                {author} | {num_comments} comments
              </span>
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
