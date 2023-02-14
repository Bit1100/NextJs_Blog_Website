import { blogs } from "../../../data";

export default function articlesHandler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(blogs);

    res.end();
  }
}
