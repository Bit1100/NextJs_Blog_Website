import { useRouter } from "next/router";
import { Card, Item1, Item2, Item3, BackButton } from "./Article.styles";

const Article = ({ article }) => {
  const router = useRouter();
  const { id, title, body } = article;

  if (router.isFallback) {
    return <h2>Loading..</h2>;
  }

  return (
    <Card article>
      <Item1>Bideo: &nbsp; {id}</Item1>
      <Item2> {title}</Item2>
      <Item3 noClamp>{body}</Item3>
      <BackButton variant="outlined" onClick={() => router.push("/articles")}>
        Back to Articles
      </BackButton>
    </Card>
  );
};

export default Article;
