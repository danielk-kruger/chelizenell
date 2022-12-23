import React from "react";
import Card from "../Card/Card";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../utils/ImageList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "./portfolio.scss";

// if you want to use array

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <h1>Portfolio</h1>
          <p className="lead">
            From logo design to branding, I have had the opportunity to work on
            a variety of projects for clients in various industries.
          </p>
          <p>
            Browse through my portfolio to get a sense of my style and approach
            to graphic design
          </p>
        </div>
        <div className="portfolio">
          <h2>Swipe to view my portfolio below</h2>
          <Swiper
            modules={[EffectCards]}
            effect={"cards"}
            grabCursor={true}
            speed={800}
            loop
            onSlideChange={() => console.log("Slide Change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {images.map(({ title, desc, image, thumb }, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <Card
                  title={title}
                  desc={desc}
                  image={image.toString()}
                  thumb={thumb.toString()}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
