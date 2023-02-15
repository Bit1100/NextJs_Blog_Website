import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { server } from "../../config";
import Articles from "../../components/Articles/Articles";
import Meta from "../../components/Layout/Meta";
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
  const [activeCategory, setActiveCategory] = useState(
    articlesCategory || "popular"
  );
  const searchRef = useState(null);
  const { dispatch } = useCustomContext();
  const router = useRouter();

  // Handle Filter for popular category
  const handlePopularFilter = async (e) => {
    const data = await axios.get(`${server}/api/articles`);

    const articles = data.data;

    setArticles(articles);

    setActiveCategory("popular");

    router.push(`/articles`, undefined, { swallow: true });

    dispatch({ type: "SET_QUERY", payload: "" });
  };

  // Handle Filter for all catogories
  const handleFilter = async (e) => {
    const category = e.currentTarget.textContent.toLowerCase();

    if (category === "popular") {
      handlePopularFilter();
      return;
    }

    const data = await axios(`${server}/api/articles/category/${category}`);

    const articles = data.data;

    setArticles(articles);

    setActiveCategory(category);

    router.push(`?category=${category}`, undefined, { swallow: true });

    dispatch({ type: "SET_QUERY", payload: "" });
  };

  const categories = ["popular", "frontend", "backend"];

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "SET_QUERY", payload: query });

    setQuery("");

    searchRef.current.blur();
  };

  return (
    <>
      {/* For SEO */}
      <Meta
        title={`${
          !!articlesCategory ? articlesCategory : "popular"
        } articles page`}
        description={`This is a bideo website ${
          !!articlesCategory ? articlesCategory : "all "
        } articles page`}
      />
      <Section>
        {/* Heading */}
        <Title main center>
          {articlesCategory
            ? `${setTitleCase(articlesCategory)} based `
            : "Popular "}
          Articles
        </Title>

        {/* Filter  */}
        <FilterWrapper row>
          {categories?.map((category) => (
            <StyledFilterButton
              active={activeCategory === category}
              key={category}
              onClick={handleFilter}
            >
              {setTitleCase(category)}
            </StyledFilterButton>
          ))}
        </FilterWrapper>

        {/* Search */}
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

        {/* Articles based on Filter and Search Options*/}
        <ArticlesWrapper row>
          <Articles articles={articles} />
        </ArticlesWrapper>
      </Section>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const category = query?.category || null;

  const data = await axios.get(
    `${server}/api/articles/${category ? `category/${category}` : ""}`
  );

  const articles = data.data;

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
