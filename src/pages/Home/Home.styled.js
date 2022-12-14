import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100vw;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Helvetica, Arial, sans-serif;
  color: var(--text-color-white);
  text-align: center;

  .Subheading {
    padding: 2rem 0;
  }

  .ComingSoon {
    padding-bottom: 2rem;
    font-size: clamp(2.5rem, 5vw, 3rem);
    color: var(--color-sage);
  }

  .MoreInfo {
    font-size: clamp(1.6rem, 5vw, 1.8rem);
    padding-bottom: 1.5rem;
  }
`;

export const BackgroundVideo = styled.video`
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

export const Logo = styled.img`
  width: clamp(20rem, 80vw, 28rem);
  margin-top: 10vh;
  padding-bottom: 2rem;
`;
