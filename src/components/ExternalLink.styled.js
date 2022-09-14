import styled from "styled-components";

export const ExternalLink = styled.a`
  color: var(--text-color-white);
  font-family: "Lato", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
