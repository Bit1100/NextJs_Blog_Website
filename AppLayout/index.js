import { Container, Main } from "../styles/GlobalComponents";
import Navbar from "../components/Layout/Navbar";
import Meta from "../components/Layout/Meta";
import Footer from "../components/Layout/Footer";
import { ThemeProvider } from "styled-components";
import { Provider } from "../context";
import { theme } from "../themes";
import GlobalStyles from "../styles/globals";

const Layout = ({ children }) => {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Meta />
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
