import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/Container.styled";
import { ReactComponent as LogoText } from "../../assets/logo-text.svg";

export const StyledNavbar = styled(Container)`
  // TODO: semi-transparent?
  background-color: var(--color-sage);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  /* border: 1px solid blue; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 0 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--text-color-white);
  font-family: "Lato", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const StyledLogoText = styled(LogoText)`
  /* border: 1px solid hotpink; */
  padding: 1.5rem 0;
`;

export const MenuContainer = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  gap: 4.5rem;
  padding: 1.5rem 0;
`;
