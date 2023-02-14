import { blogs } from "../../../../data";

export default function categoryArticlesHandler(req, res) {
  if (req.method === "GET") {
    const { category } = req.query;

    const articles = blogs.filter(
      (blog) => blog.category === category.toLowerCase()
    );

    if (articles.length) {
      res.status(200).json(articles);

      res.end();
    } else {
      res
        .status(404)
        .json({ message: `Page with ${category} category Not Found` });

      res.end();
    }
  }
}
