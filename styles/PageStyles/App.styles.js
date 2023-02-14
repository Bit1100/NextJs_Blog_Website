import { Section } from "../GlobalComponents";
import styled, { keyframes } from "styled-components";

const move = keyframes`
from{
   transform:scale(.80) rotateZ(0);
}
to{
   transform:scale(1.1) rotateZ(-60deg);
}
`;

export const LeftSection = styled(Section)`
  padding-left: 2rem;
  max-width: 600px;
  flex: 1 1 250px;
`;

export const RightSection = styled(Section)`
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

export const Image = styled.img`
  width: 100%;
  height: 225px;
  transition: all 0.3s ease-in;
  animation: ${move} 4s ease-in-out infinite forwards alternate-reverse;
`;
