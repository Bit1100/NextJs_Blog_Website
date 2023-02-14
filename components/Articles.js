import React from "react";
import ArticleItem from "./ArticleCard";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};

export default Articles;
