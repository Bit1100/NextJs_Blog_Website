import styled from "styled-components";
import { Section } from "../../styles/GlobalComponents";
import { StyledButton } from "../../styles/GlobalComponents/Button";

export const ArticleWrapper = styled(Section)`
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.lightDark};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  max-width: ${({ article }) => (article ? "900px" : "300px")};
  margin: ${({ article }) => (article ? "1rem" : "2rem")};
  min-width: 300px;
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
  font-size: 1.7rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ noClamp }) => (noClamp ? "none" : 1)};
  overflow: hidden;
`;

export const Item3 = styled(Item)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ noClamp }) => (noClamp ? "none" : 4)};
  overflow: hidden;
`;

export const BtnLink = styled(StyledButton)`
  background-color: transparent;
  font-size: 1.6rem;
  padding-left: 0.2rem;
  margin: 1rem;
  margin-bottom: 0;
  border: none;
  &:hover {
    background-color: transparent;
    border: transparent;
  }
`;

export const BackButton = styled(StyledButton)`
  margin-left: 1rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    font-weight: 900;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`;
