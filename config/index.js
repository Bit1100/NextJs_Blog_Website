const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000/"
  : "https://next-js-blog-website-1.vercel.app/";
