import {
  StyledHome,
  BackgroundVideo,
  ContentContainer,
  Logo,
} from "./Home.styled";

// photos & videos
import PromoStill1 from "../../assets/promo-still-1.png";
import LogoSvg from "../../assets/logo.svg";
import CasinaVideo from "../../assets/promo-video.mp4";

// TODO: check all browsers for autoplay, mute (see https://medium.com/@BoltAssaults/autoplay-muted-html5-video-safari-ios-10-in-react-673ae50ba1f5)

const Home = () => {
  return (
    <StyledHome className="StyledHome">
      <BackgroundVideo
        className="BackgroundVideo"
        autostart
        autoPlay
        loop
        muted
        disablePictureInPicture
        controlsList="nodownload"
        poster={PromoStill1}
      >
        <source src={CasinaVideo} type="video/mp4" />
      </BackgroundVideo>
      <h1>
        <Logo src={LogoSvg} alt="La Casina" />
      </h1>
      <h2 className="Subheading">Sicilian Extra Virgin Olive Oil</h2>
      <h3 className="ComingSoon">Website & Online Store Coming Soon</h3>
      <p className="MoreInfo">
        To place an order for olive oil or wedding favours & for more
        information, you can email us at <strong>contact@lacasina.co</strong>.
      </p>
      <p className="MoreInfo">
        You can also call or text us at <strong>(514)-754-2382</strong>.
      </p>
    </StyledHome>
  );
};

export default Home;
