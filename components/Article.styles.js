import styled from "styled-components";
import { Section } from "../styles/GlobalComponents";
import { FancyButton } from "../styles/GlobalComponents/Button";

export const ArticleWrapper = styled(Section)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  max-width: ${({ article }) => (article ? "900px" : "300px")};
  margin: ${({ article }) => (article ? "1rem" : "2rem")};
  min-width: 250px;
  height: auto;
  overflow: hidden;
  justify-content: center;
  align-items: start;
  /* margin: 2rem; */
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.secondarySemiBold};
  &:hover {
    text-decoration: none;
  }
`;

const Item = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.light};
`;

export const Item1 = styled(Item)`
  font-size: 2rem;
  font-weight: bolder;
`;

export const Item2 = styled(Item)`
  font-weight: bold;
`;

export const Item3 = styled(Item)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ noClamp }) => (noClamp ? "none" : 4)};
  overflow: hidden;
`;

export const BackButton = styled(FancyButton)`
  margin-left: 1rem;
  font-size: 1.5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;
