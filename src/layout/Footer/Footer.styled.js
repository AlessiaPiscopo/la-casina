import styled from "styled-components";

export const StyledFooter = styled.footer`
  /* background-color: var(--color-sage-dark); */
  text-align: center;
  opacity: 0.5;
  padding: 2rem;

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
