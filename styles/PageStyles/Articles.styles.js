import { Section, SectionTitle } from "../GlobalComponents";
import { StyledButton } from "../GlobalComponents/Button";
import styled from "styled-components";

export const ArticlesWrapper = styled(Section)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FilterWrapper = styled(Section)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled(SectionTitle)`
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
`;

export const StyledFilterButton = styled(StyledButton)`
  margin: 0.8rem;
  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.primarySemiBold};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.6rem;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding: 0.8rem;
  }
`;
