import {
  StyledNavbar,
  Nav,
  StyledNavLink,
  ExternalLink,
  StyledLogoText,
  MenuContainer,
  IconsNav,
  StyledCartIcon,
  StyledFacebookIcon,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar className="StyledNavbar">
      <Nav className="Nav">
        <StyledNavLink to="/">
          <StyledLogoText />
        </StyledNavLink>

        <MenuContainer className="MenuContainer">
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/products/olive-oil">Olive Oil</StyledNavLink>
          <StyledNavLink to="/contact-us">Contact</StyledNavLink>

          <IconsNav>
            <StyledNavLink to="/olive-oil">
              <StyledCartIcon />
            </StyledNavLink>

            <ExternalLink
              href="https://www.facebook.com/az.ag.lacasina"
              target="_blank"
            >
              <StyledFacebookIcon />
            </ExternalLink>
          </IconsNav>

          {/* // ? en | it translation eventually? */}
        </MenuContainer>
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
