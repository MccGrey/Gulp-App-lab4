import React from "react";
import "./sectionHero.css";
import HERO1 from "../../assets/cognac 1.png";
import HERO2 from "../../assets/gin 1.png";
import HERO3 from "../../assets/iced tea 1.png";
import HERO4 from "../../assets/juice 1.png";
import HERO5 from "../../assets/whiskey 1.png";
import HERO6 from "../../assets/wine 1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const SectionHero = () => {
  const data = [
    {
      id: 1,
      image: HERO1,
    },

    {
      id: 2,
      image: HERO2,
    },

    {
      id: 3,
      image: HERO3,
    },

    {
      id: 4,
      image: HERO4,
    },

    {
      id: 5,
      image: HERO5,
    },

    {
      id: 6,
      image: HERO6,
    },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-desc">
          <h3>You should never run out of drinks</h3>
          <p>
            We are your go to source for all the drinks you need, at all times.
            Delivered almost immediately at your doorstep
          </p>
          <button className="shop-now">Shop Now</button>
        </div>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          className="hero-swiper"
        >
          {data.map(({ image }, index) => {
            return (
              <SwiperSlide key={index} className="hero-image">
                <img src={image} alt="heroImage" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionHero;
