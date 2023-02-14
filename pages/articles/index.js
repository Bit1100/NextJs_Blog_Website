import { server } from "../../config";
import Articles from "../../components/Articles";
import Meta from "../../components/Meta";
import { useState } from "react";
import { useRouter } from "next/router";
import { Section } from "../../styles/GlobalComponents";
import { setTitleCase } from "../../helpers";
import {
  FilterWrapper,
  Title,
  ArticlesWrapper,
  StyledFilterButton,
} from "../../styles/PageStyles/Articles.styles";

export default function ArticlesPage({
  articles: allArticles,
  category: articlesCategory,
}) {
  const [articles, setArticles] = useState(allArticles);
  const router = useRouter();

  const handleAll = async (e) => {
    const response = await fetch(`${server}/api/articles`);

    const articles = await response.json();

    setArticles(articles);

    router.push(`/articles`, undefined, { swallow: true });
  };

  const handleFilter = async (e) => {
    const category = e.currentTarget.textContent.toLowerCase();

    if (category === "all") {
      handleAll();
      return;
    }

    const response = await fetch(`${server}/api/articles/category/${category}`);

    const articles = await response.json();

    setArticles(articles);

    router.push(`?category=${category}`, undefined, { swallow: true });
  };

  return (
    <>
      <Meta
        title={`${!!articlesCategory ? articlesCategory : ""} articles page`}
        description={`This is a bideo website ${
          !!articlesCategory ? articlesCategory : "all "
        } articles page`}
      />
      <Section>
        <Title main center>
          {articlesCategory
            ? `${setTitleCase(articlesCategory)} based `
            : "All "}
          Articles
        </Title>
        <FilterWrapper row>
          <StyledFilterButton onClick={handleFilter}>All</StyledFilterButton>
          <StyledFilterButton onClick={handleFilter}>
            Frontend
          </StyledFilterButton>
          <StyledFilterButton onClick={handleFilter}>
            Backend
          </StyledFilterButton>
        </FilterWrapper>
        <ArticlesWrapper row>
          <Articles articles={articles} />
        </ArticlesWrapper>
      </Section>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const category = query?.category || null;

  const response = await fetch(
    `${server}/api/articles/${category ? `category/${category}` : ""}`
  );

  const articles = await response.json();

  // console.log(articles);
  if (!articles?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
      category,
    },
  };
};
