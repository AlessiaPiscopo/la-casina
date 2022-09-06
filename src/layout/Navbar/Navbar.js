import {
  StyledNavbar,
  Nav,
  StyledNavLink,
  Logo,
  LogoImage,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar className="StyledNavbar">
      <Nav>
        <StyledNavLink to="/">
          <Logo>
            <LogoImage src="" alt="La Casina"></LogoImage>
          </Logo>
        </StyledNavLink>

        <StyledNavLink to="/about">About</StyledNavLink>

        <StyledNavLink to="/products">Products</StyledNavLink>

        <StyledNavLink to="/contact-us">Contact Us</StyledNavLink>
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
