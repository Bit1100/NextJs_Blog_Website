import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  width: max-content;
  border: 2px solid #4caf50;
  background-color: ${({ variant }) =>
    variant === "outlined" ? "#FFF" : "#4caf50"};
  color: ${(props) => (props.variant === "outlined" ? "#ffffff" : "#FFF")};
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#4caf50"};
    color: ${(props) => (props.variant !== "outlined" ? "#4caf50" : "#FFF")};
    font-weight: bolder;
  }
`;

export const FancyButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.tertiaryLight};
  margin: 1.5rem 0;
  border: 1px solid;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryLight};
    border: 2px solid ${({ theme }) => theme.colors.tertiaryLight};
    background-color: ${({ theme }) =>
      `linear-gradient(to right, ${theme.colors.tertiaryDark} 0%, ${theme.colors.light} 100%)`};
  }
`;
