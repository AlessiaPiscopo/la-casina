import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Designed & Developed by{" "}
        <a
          href="https://www.linkedin.com/in/alessiapiscopo/"
          target="_blank"
          rel="noreferrer"
        >
          Alessia Piscopo
        </a>{" "}
        © 2022
      </span>
    </StyledFooter>
  );
};

export default Footer;
