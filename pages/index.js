import { useRouter } from "next/router";
import { server } from "../config";
import {
  HomeSection,
  LeftSection,
  RightSection,
  Image,
} from "../styles/PageStyles/App.styles";
import { Section, SectionTitle, SectionText } from "../styles/GlobalComponents";
import { FancyButton } from "../styles/GlobalComponents/Button";
import CategoryArticles from "../components/CategoryArticles";

export default function Home({ articles }) {
  const router = useRouter();

  const categories = [
    "all",
    ...new Set(articles.map((article) => article.category)),
  ];

  return (
    <>
      <HomeSection row>
        <LeftSection>
          <SectionTitle main>Welcome to Bideo Website</SectionTitle>
          <SectionText>
            This is an interactive format of blog known as Bideo, which is the
            combo of Blog and Video Format. This is a kind of PowerPoint
            Presentation Blog. This bideo website allows users to learn blogs in
            an interactive format.
          </SectionText>
          <FancyButton
            onClick={() => router.push(`/articles`)}
            variant="outlined"
          >
            Learn More..
          </FancyButton>
        </LeftSection>
        <RightSection>
          <Image src="/images/blog2.png" alt="Blog Picture" />
        </RightSection>
      </HomeSection>
      <Section>
        <SectionTitle center>Categorized Articles</SectionTitle>
        {categories?.map((category) => (
          <CategoryArticles
            key={category}
            articles={articles}
            category={category}
          />
        ))}
      </Section>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);

  const articles = await response.json();

  if (!articles.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  };
};
