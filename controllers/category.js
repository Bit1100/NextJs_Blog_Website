import { blogs } from "../data";

export const getCategoryArticles = (category) => {
  const articles = blogs.filter(
    (blog) => blog.category === category?.toLowerCase()
  );

  if (articles.length) {
    return articles;
  } else {
    return [];
  }
};

export const getCategories = () => {
  const categories = [
    "popular",
    ...new Set(blogs.map((article) => article.category)),
  ];

  if (categories.length) {
    return categories;
  } else {
    return [];
  }
};
