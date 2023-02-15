import { useRouter } from "next/router";
import { Card, Item1, Item2, Item3, BackButton } from "./Article.styles";
import { setTitleCase } from "../../helpers";

const Article = ({ article }) => {
  const router = useRouter();
  const { id, title, body, category } = article;

  if (router.isFallback) {
    return <h2>Loading..</h2>;
  }

  return (
    <Card article>
      <Item1>Cat: {setTitleCase(category)}</Item1>
      <Item2 noClamp> {title}</Item2>
      <Item3 noClamp>{body}</Item3>
      <BackButton variant="outlined" onClick={() => router.push("/articles")}>
        More Articles..
      </BackButton>
    </Card>
  );
};

export default Article;
