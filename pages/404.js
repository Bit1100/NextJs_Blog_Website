import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ErrorPage = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const id = router.asPath.slice(9);

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
    setMessage("Redirecting to Home Page");
  }, [router]);

  return (
    <>
      <Meta
        title="Page Not Found"
        description="THe page/article you're looking for is not found"
      />
      <div className="message">{message}</div>
      <h1>{!!Number(id) ? `Article No. ${id}` : "Page"} Not Found</h1>
      <div className="err-btn-wrapper">
        <button onClick={() => router.push("/")}>Go to Home Page</button>
      </div>
    </>
  );
};

export default ErrorPage;
