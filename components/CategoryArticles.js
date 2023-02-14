import React from "react";
import { Title, CategorizedArticles } from "../styles/PageStyles/App.styles";
import ArticleCard from "./ArticleCard";
import { setTitleCase } from "../helpers";

const CategoryArticles = ({ category, articles }) => {
  return (
    <>
      <Title>{setTitleCase(category)}</Title>
      <CategorizedArticles row>
        {articles?.map((article) => {
          if (category?.toLowerCase() === "all")
            return <ArticleCard key={article.id} article={article} />;
          else if (article?.category === category)
            return <ArticleCard key={article.id} article={article} />;
        })}
      </CategorizedArticles>
    </>
  );
};

export default CategoryArticles;
