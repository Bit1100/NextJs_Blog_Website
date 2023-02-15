import { useRouter } from "next/router";
import { Card, Item1, Item2, Item3, BackButton } from "./Article.styles";
import { setTitleCase } from "../../helpers";

const Article = ({ article: blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading..</h2>;
  }

  return (
    <Card article>
      <Item1>Cat: {setTitleCase(blog?.category)}</Item1>
      <Item2 noClamp> {blog?.title}</Item2>
      <Item3 noClamp>{blog?.body}</Item3>
      <BackButton variant="outlined" onClick={() => window.history.back()}>
        More Articles..
      </BackButton>
    </Card>
  );
};

export default Article;
