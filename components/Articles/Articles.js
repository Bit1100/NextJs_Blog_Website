import React from "react";
import ArticleItem from "./ArticleCard";
import { useCustomContext } from "../../context";
import { matchSorter } from "match-sorter";

const Articles = ({ articles }) => {
  const {
    state: { query },
  } = useCustomContext();

  const searchArticles = matchSorter(articles, query, {
    keys: [
      {
        threshold: matchSorter.rankings.CONTAINS,
        key: "title",
      },
      { threshold: matchSorter.rankings.CONTAINS, key: "category" },
    ],
    keepDiacritics: true,
  });

  const setArticles = () => {
    if (searchArticles.length) {
      return searchArticles;
    }
    return articles;
  };

  return (
    <>
      {setArticles().map((article) => {
        return <ArticleItem key={article.id} article={article} />;
      })}
    </>
  );
};

export default Articles;
