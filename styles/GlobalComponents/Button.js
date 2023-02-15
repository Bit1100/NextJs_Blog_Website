import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  width: max-content;
  border: 2px solid ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s all ease-out;
  &:hover {
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.light};
    font-weight: bolder;
  }
`;

export const FancyButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.tertiaryLight};
  margin: 1.5rem 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryLight};
    border: 2px solid ${({ theme }) => theme.colors.tertiaryLight};
    background-color: ${({ theme }) => theme.colors.light};
  }
`;
