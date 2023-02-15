import styled from "styled-components";
import { move } from "../../styles/PageStyles/Home.styles";

// Navbar Styles
export const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  font-weight: 800;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.darkLight};
`;

export const NavbarBrand = styled.span`
  margin-top: 1rem;
  margin-left: -12%;
  cursor: pointer;
  transition: all 0.3s ease-in;
  animation: ${move} 4s ease-in-out infinite forwards alternate-reverse;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: -15%;
`;

export const NavLink = styled.li`
  margin: 1rem;
`;

// Footer Styles
export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.darkLight};
`;
