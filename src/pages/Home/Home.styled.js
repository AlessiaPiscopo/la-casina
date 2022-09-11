import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
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
  filter: brightness(40%);
`;

export const ContentContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3rem;

  h1,
  h2,
  p {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    /* text-transform: uppercase; */
    font-size: 3rem;
    color: var(--text-color-white);
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }

  p {
    font-size: 1.6rem;
  }
`;

export const Logo = styled.img`
  /* border: 2px solid blue; */

  width: clamp(20rem, 80vw, 28rem);
  margin-top: 25vh;
  padding-bottom: 5rem;
`;
