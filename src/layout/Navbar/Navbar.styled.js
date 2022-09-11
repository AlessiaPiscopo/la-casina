import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoText } from "../../assets/logo-text.svg";
import { BsCartFill, BsFacebook } from "react-icons/bs";

export const StyledNavbar = styled.div`
  /* border: 2px solid blue; */
  background-color: var(--color-sage);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  /* border: 1px solid blue; */

  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 0 0;
    /* font-size: 0.2rem; */
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--text-color-white);
  font-family: "Lato", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: clamp(1rem, 5vw, 1.3rem);
  /* font-size: 1.3rem; */
  letter-spacing: 0.1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ExternalLink = styled.a`
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
  width: 13.5rem;
`;

export const MenuContainer = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  gap: clamp(1rem, 5vw, 4.5rem);
  padding: 1.5rem 0;
`;

export const IconsNav = styled.div`
  /* border: 2px solid red; */

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
