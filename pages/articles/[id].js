import { getArticle, getArticles } from "../../controllers";
import Article from "../../components/Articles/Article";
import { ArticleWrapper } from "../../components/Articles/Article.styles";

const SingleArticle = ({ article }) => {
  return (
    <ArticleWrapper row>
      <Article article={article} />;
    </ArticleWrapper>
  );
};

export default SingleArticle;

export const getStaticPaths = () => {
  const articles = getArticles();

  if (!articles.length) {
    return {
      notFound: true,
    };
  }

  const paths = articles.map((article) => ({
    params: {
      id: article.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { id } }) => {
  const article = getArticle(id);

  if (!article?.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: article,
    },
    revalidate: 3600,
  };
};
