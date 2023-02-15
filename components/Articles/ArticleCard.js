import Link from "next/link";
import { BtnLink, Card, Item1, Item2, Item3 } from "./Article.styles";
import { setTitleCase } from "../../helpers";

const ArticleCard = ({ article }) => {
  const { id, title, body, category } = article;
  return (
    <Card>
      <Item1>Cat: {setTitleCase(category)}</Item1>
      <Item2>{title}</Item2>
      <Item3> {body}</Item3>
      <Link href="/articles/[id]" passHref as={`/articles/${id}`}>
        <BtnLink>Read More..</BtnLink>
      </Link>
    </Card>
  );
};

export default ArticleCard;
