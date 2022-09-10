import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import PromoStill1 from "../../assets/promo-still-1.png";
import PromoStill2 from "../../assets/promo-still-2.png";
import PromoStill3 from "../../assets/promo-still-3.png";
import { Carousel, Photo } from "./ImageCarousel.styled";

const ImageCarousel = () => {
  return (
    <section aria-label="Image Carousel Slideshow">
      <Carousel>
        <button className="carousel-button previous">
          <AiOutlineArrowLeft />
        </button>
        <button className="carousel-button next">
          <AiOutlineArrowRight />
        </button>
        <ul className="photos-list">
          <li className="photo-item">
            <Photo className="photo" src={PromoStill1} alt="" />
          </li>
          <li className="photo-item">
            <Photo src={PromoStill2} alt="" />
          </li>
          <li className="photo-item">
            <Photo src={PromoStill3} alt="" />
          </li>
        </ul>
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
