import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PromoStill1 from "../../assets/promo-still-1.png";
import PromoStill2 from "../../assets/promo-still-2.png";
import PromoStill3 from "../../assets/promo-still-3.png";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={PromoStill1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={PromoStill2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={PromoStill3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
