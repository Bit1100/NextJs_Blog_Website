import React from "react";
import { server } from "../../config";
import Article from "../../components/Article";
import { ArticleWrapper } from "../../components/Article.styles";

const SingleArticle = ({ article }) => {
  return (
    <ArticleWrapper row>
      <Article article={article} />;
    </ArticleWrapper>
  );
};

export default SingleArticle;

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles`);

  const articles = await response.json();

  const paths = articles.map((article) => ({
    params: {
      id: article.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(`${server}/api/articles/${id}`);

  const article = await response.json();

  if (!article[0].id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: article[0],
    },
    revalidate: 3600,
  };
};
