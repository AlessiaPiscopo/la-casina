import {
  StyledHome,
  StyledBackgroundVideo,
  ContentContainer,
  Logo,
} from "./Home.styled";
import PromoStill1 from "../../assets/promo-still-1.png";
import LogoSvg from "../../assets/logo.svg";

import CasinaVideo from "./promo-video-cut.mp4";

const Home = () => {
  return (
    <StyledHome>
      <StyledBackgroundVideo
        id="background-video"
        autostart
        // autoPlay
        loop
        muted
        disablePictureInPicture
        controlsList="nodownload"
        poster={PromoStill1}
      >
        <source src={CasinaVideo} type="video/mp4" />
      </StyledBackgroundVideo>

      <Logo src={LogoSvg} alt="La Casina logo" />
      <h1>hello</h1>
      <h2>some test text</h2>
    </StyledHome>
  );
};

export default Home;
