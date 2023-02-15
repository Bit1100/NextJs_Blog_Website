import styled from "styled-components";
import { Section, SectionTitle } from "../GlobalComponents";
import { StyledButton } from "../GlobalComponents/Button";

export const ErrorSection = styled(Section)`
  min-height: 80vh;
  justify-content: center;
  align-items: center;
`;
export const Title = styled(SectionTitle)`
  margin: 1rem auto;
  padding: 0rem;
`;
export const Message = styled(SectionTitle)`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1.5rem;
`;
export const ErrorButton = styled(StyledButton)`
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;
