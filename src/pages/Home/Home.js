// import { ReactComponent as CasinaPromoVideoPosterImage } from "../../assets/casina-promo-video-full-poster-image.png";
// import { ReactComponent as CasinaPromoVideo } from "../../assets/casina-promo-video-cut.mp4";

import { StyledBackgroundVideo } from "./Home.styled";

import CasinaVideoTest from "./promo-video-cut.mp4";

const Home = () => {
  return (
    <>
      <div>hello from home</div>
      <div>some text filler</div>

      <video
        controls
        autostart
        autoPlay
        src={CasinaVideoTest}
        type="video/mp4"
      />

      <div>some text filler</div>
    </>
  );
};

export default Home;
