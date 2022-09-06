import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/Container.styled";

export const StyledNavbar = styled(Container)`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;

  background-color: green;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav``;
export const StyledNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const Logo = styled.div``;
export const LogoImage = styled.img``;

// export const LogoImage = styled.img``;
// export const LogoImage = styled.img``;
// export const LogoImage = styled.img``;
