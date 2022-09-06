import { NavLink } from "react-router-dom";
import {
  StyledNavbar,
  Nav,
  StyledNavLink,
  Logo,
  LogoImage,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Nav>
        {/* <StyledNavLink to="/"> */}
        <Logo>
          <LogoImage src="" alt="La Casina"></LogoImage>
        </Logo>
        {/* </StyledNavLink> */}
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
