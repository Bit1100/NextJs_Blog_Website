import { Section, SectionTitle } from "../GlobalComponents";
import { StyledButton } from "../GlobalComponents/Button";
import styled, { css } from "styled-components";

const activeButtonStyles = css`
  border: 2px solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.light};
  }
`;

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
  outline: none;
  margin: 0.8rem;
  ${({ active }) => (active ? activeButtonStyles : "")}

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.6rem;
    padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
    padding: 0.8rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 2rem auto 5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormControl = styled.input`
  width: 50%;
  min-width: 250px;
  margin: 1rem;
  padding: 1.4rem;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primarySemiBold};
  font-size: 1.5rem;
  outline: none;
  text-align: center;
`;

export const SearchButton = styled(StyledButton)`
  margin-left: -6rem;
  background: transparent;
  border: none;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  border-radius: 50%;
  outline: none;
  &:hover {
    border: transparent;
    transform: scale(1.1);
    background: transparent;
  }
`;
