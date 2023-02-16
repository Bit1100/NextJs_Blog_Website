import Meta from "../components/Layout/Meta";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Title,
  Message,
  BtnWrapper,
  ErrorButton,
  ErrorSection,
} from "../styles/PageStyles/Error.styles";

const ErrorPage = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

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
      <ErrorSection>
        <Title>Page Not Found</Title>
        <Message>{message}</Message>
        <ErrorButton onClick={() => router.push("/")}>
          Go to Home Page
        </ErrorButton>
      </ErrorSection>
    </>
  );
};

export default ErrorPage;
