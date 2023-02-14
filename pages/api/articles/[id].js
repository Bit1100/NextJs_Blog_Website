import { blogs } from "../../../data";

export default function articlesHandler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;

    const article = blogs.filter((article) => article.id === id);

    if (article.length) {
      res.status(200).json(article);

      res.end();
    } else {
      res.status(404).json({ message: `Page with ${id} Not Found` });

      res.end();
    }
  }
}
