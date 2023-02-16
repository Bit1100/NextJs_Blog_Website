import { blogs } from "../data";

export const getArticle = (id) => {
  const article = blogs.find((article) => article.id === id);

  if (Object.keys(article).length) {
    return article;
  } else {
    return {};
  }
};
