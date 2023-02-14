import React from "react";
import ArticleItem from "./ArticleCard";
import { ArticlesWrapper } from "./Article.styles";

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
