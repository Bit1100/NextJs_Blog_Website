import { Container, Main } from "../styles/GlobalComponents";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { ThemeProvider } from "styled-components";
import { theme } from "../themes";
import GlobalStyles from "../styles/globals";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Meta />
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
