import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: ${({ grid }) => (grid ? "grid" : "flex")};
  /* grid-template-columns: repeat("auto-fit", minmax(350px, 1fr)); */
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.lightDark};
  max-width: 1150px;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 24px 48px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: ${({ nopadding }) => (nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
  }
`;

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-size: ${({ main }) => (main ? "48px" : "40px")};
  line-height: ${({ main }) => (main ? "64px" : "56px")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  max-width: 100%;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 20px;
  line-height: 36px;
  font-weight: 300;
  margin-bottom: 2rem;
  color: #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;
