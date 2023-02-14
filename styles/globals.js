import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
 ${normalize};

 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    width:100%;
    height:100%;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    cursor: default;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.title};
  }

  a {
    text-decoration: none;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyles;
