import { BiSearch } from "react-icons/bi";
import { server } from "../../config";
import Articles from "../../components/Articles";
import Meta from "../../components/Meta";
import { useState, useRef } from "react";
import { useCustomContext } from "../../context";
import { useRouter } from "next/router";
import { Section } from "../../styles/GlobalComponents";
import { setTitleCase } from "../../helpers";
import {
  FilterWrapper,
  Title,
  ArticlesWrapper,
  StyledFilterButton,
  SearchButton,
  Form,
  FormControl,
} from "../../styles/PageStyles/Articles.styles";

export default function ArticlesPage({
  articles: allArticles,
  category: articlesCategory,
}) {
  const [articles, setArticles] = useState(allArticles);
  const [query, setQuery] = useState("");
  const searchRef = useState(null);
  const { dispatch } = useCustomContext();
  const router = useRouter();

  const handleAllFilter = async (e) => {
    const response = await fetch(`${server}/api/articles`);

    const articles = await response.json();

    setArticles(articles);

    router.push(`/articles`, undefined, { swallow: true });
  };

  const handleFilter = async (e) => {
    const category = e.currentTarget.textContent.toLowerCase();

    if (category === "all") {
      handleAllFilter();
      return;
    }

    const response = await fetch(`${server}/api/articles/category/${category}`);

    const articles = await response.json();

    setArticles(articles);

    router.push(`?category=${category}`, undefined, { swallow: true });
  };

  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category)),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "SET_QUERY", payload: query });

    setQuery("");

    searchRef.current.blur();
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
          {categories?.map((category) => (
            <StyledFilterButton key={category} onClick={handleFilter}>
              {setTitleCase(category)}
            </StyledFilterButton>
          ))}
        </FilterWrapper>
        <Form onSubmit={handleSubmit}>
          <FormControl
            autoComplete="off"
            ref={searchRef}
            id="search"
            name="search"
            placeholder="Search articles here.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchButton type="submit">
            <BiSearch color="#33ff33" />
          </SearchButton>
        </Form>
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
