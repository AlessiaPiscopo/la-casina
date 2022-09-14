import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoText } from "../../assets/logo-text.svg";
import { BsCartFill, BsFacebook } from "react-icons/bs";

export const StyledNavbar = styled.div`
  background-color: var(--color-sage);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 0 1rem 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--text-color-white);
  font-family: "Lato", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: clamp(1rem, 5vw, 1.3rem);
  letter-spacing: 0.1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const StyledLogoText = styled(LogoText)`
  padding: 1.5rem 0;
  width: 13.5rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 5vw, 4.5rem);
  padding: 1.5rem 0;
  opacity: 0.75;
`;

export const IconsNav = styled.div`
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
`;

export const StyledCartIcon = styled(BsCartFill)`
  fill: #393c37;
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.7rem;
`;

export const StyledFacebookIcon = styled(BsFacebook)`
  fill: #393c37;
  width: 2.1rem;
  height: 2.1rem;
`;
