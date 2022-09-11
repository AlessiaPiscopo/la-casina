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
    <StyledHome className="StyledHome">
      <StyledBackgroundVideo
        className="StyledBackgroundVideo"
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
        {/* <h1>Superior quality Sicilian Extra Virgin Olive Oil</h1>
        <h2>To order, you can email us at </h2> */}
        <h1>Website & Online Store Coming Soon</h1>
        <p>
          To order or for more information, feel free to email us at
          contact@lacasina.co!
        </p>
      </ContentContainer>
    </StyledHome>
  );
};

export default Home;
