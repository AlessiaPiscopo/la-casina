import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100vw;
  height: 100vh;

  h1,
  h2 {
    color: white;
    font-family: Trebuchet MS;
    font-weight: bold;
    text-align: center;
    z-index: 11;
  }

  h1 {
    font-size: 6rem;
    margin-top: 30vh;
  }

  h2 {
    font-size: 3rem;
  }
`;

export const StyledBackgroundVideo = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -10;
  filter: brightness(50%);
`;

export const ContentContainer = styled.div`
  border: 2px solid red;
`;

export const Logo = styled.img`
  margin: auto 0;
`;
