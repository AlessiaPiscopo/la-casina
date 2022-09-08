import {
  StyledNavbar,
  Nav,
  StyledNavLink,
  CasinaLogoText,
  MenuContainer,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar className="StyledNavbar">
      <Nav className="Nav">
        <StyledNavLink to="/">
          <CasinaLogoText>La Casina</CasinaLogoText>
        </StyledNavLink>

        <MenuContainer className="MenuContainer">
          <StyledNavLink to="/about">About</StyledNavLink>

          <StyledNavLink to="/products">Olive Oil</StyledNavLink>

          <StyledNavLink to="/contact-us">Contact Us</StyledNavLink>
        </MenuContainer>
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
