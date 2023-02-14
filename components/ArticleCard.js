import Link from "next/link";
import { Card, Item1, Item2, Item3 } from "./Article.styles";

const ArticleCard = ({ article }) => {
  const { id, title, body } = article;
  return (
    <Link href="/articles/[id]" passHref as={`/articles/${id}`}>
      <Card>
        <Item1>Bideo: &nbsp; {id}</Item1>
        <Item2>{title}</Item2>
        <Item3> {body}</Item3>
      </Card>
    </Link>
  );
};

export default ArticleCard;
