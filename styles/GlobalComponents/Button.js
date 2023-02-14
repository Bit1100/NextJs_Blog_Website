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
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.tertiaryLight} 0%, ${theme.colors.tertiaryLight} 100%)`};
  border: none;
  margin: 1.5rem 0;
`;
