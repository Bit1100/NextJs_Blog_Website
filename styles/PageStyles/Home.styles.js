import { Section, SectionTitle } from "../GlobalComponents";
import styled, { keyframes } from "styled-components";

export const move = keyframes`
from{
   transform:scale(.80) rotateZ(0);
}
to{
   transform:scale(1.1) rotateZ(-60deg);
}
`;

// Home Section Styles
export const HomeSection = styled(Section)`
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.lightDark};
  justify-content: center;
  align-items: center;
  /* &::before {
    content: "";
    position: absolute;
    top: 0;
k    bottom: 0;
    left: -9999px;
    right: -9999px;
    z-index: -1;
  } */
`;

export const LeftSection = styled(Section)`
  margin: 0;
  padding-right: 3rem;
  max-width: 600px;
  flex: 1 1 250px;
`;

export const RightSection = styled(Section)`
  margin: 0;
  justify-content: center;
  align-items: center;
  max-width: 650px;
`;

export const Image = styled.img`
  width: 100%;
  height: 225px;
  transition: all 0.3s ease-in;
  animation: ${move} 4s ease-in-out infinite forwards alternate-reverse;
`;

// CategorizedArticles Styles
export const CategorizedArticles = styled(Section)`
  margin: 1rem;
  padding: 1rem;
  /* align-items: center; */
  justify-content: start;
  overflow-x: auto;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.dark};
  flex-wrap: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled(SectionTitle)`
  font-size: 3rem;
  width: max-content;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiaryLight};
  margin-bottom: 0;
  padding: 0.5rem 1rem 0 1rem;
  border-radius: 20px;
`;
