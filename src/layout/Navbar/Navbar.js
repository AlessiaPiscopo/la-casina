import {
  StyledNavbar,
  Nav,
  StyledNavLink,
  StyledLogoText,
  MenuContainer,
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
          <StyledNavLink to="/products">Olive Oil</StyledNavLink>
          <StyledNavLink to="/contact-us">Contact</StyledNavLink>
          {/* <div className="Icons">
    Cart icon links to olive oil page
              <span className="CartIcon">Cart</span>
              <span className="FacebookIcon">FB</span>
            </div> */}
          // ? en | it translation eventually?
        </MenuContainer>
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
