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
  /* filter: blur(); */
`;

export const ContentContainer = styled.div`
  /* border: 2px solid red; */

  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: var(--text-color-white);
  }
`;

export const Logo = styled.img`
  /* border: 2px solid blue; */

  width: 40rem;
  margin-top: 10vh;
`;
