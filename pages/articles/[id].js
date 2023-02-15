import axios from "axios";
import { server } from "../../config";
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

export const getStaticPaths = async () => {
  const data = await axios.get(`${server}/api/articles`);

  const articles = data.data;

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

export const getStaticProps = async ({ params }) => {
  const id = params.id;

  const data = await axios.get(`${server}/api/articles/${id}`);

  const article = data.data;

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
