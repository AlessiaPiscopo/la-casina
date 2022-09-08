import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/Container.styled";

export const StyledNavbar = styled(Container)`
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;

  background-color: var(--color-sage);
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Lato", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: var(--text-color-white);
  letter-spacing: 0.1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const CasinaLogoText = styled.span`
  font-family: "Sacramento", Helvetica, Arial, sans-serif;
  text-transform: lowercase;
  font-size: 4.5rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;
  margin-top: -1rem;
`;
