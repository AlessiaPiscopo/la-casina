import styled from "styled-components";

export const StyledFooter = styled.footer`
  span {
    color: var(--text-color-white);
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  a {
    text-decoration: underline;
    &:hover {
      opacity: 0.75;
    }
  }
`;
