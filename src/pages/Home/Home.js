import {
  StyledHome,
  StyledBackgroundVideo,
  ContentContainer,
  Logo,
} from "./Home.styled";

// photos & videos
import PromoStill1 from "../../assets/promo-still-1.png";
import LogoSvg from "../../assets/logo.svg";
import OliveTreesAndSunset from "../../assets/olive-trees-and-sunset.jpg";

import CasinaVideo from "./promo-video-cut.mp4";

const Home = () => {
  return (
    <StyledHome>
      <StyledBackgroundVideo
        id="background-video"
        autostart
        autoPlay
        loop
        muted
        disablePictureInPicture
        controlsList="nodownload"
        poster={PromoStill1}
      >
        <source src={CasinaVideo} type="video/mp4" />
      </StyledBackgroundVideo>
      <ContentContainer>
        <Logo src={LogoSvg} alt="La Casina logo" />
        <p>Online store coming soon!</p>
      </ContentContainer>
    </StyledHome>
  );
};

export default Home;
