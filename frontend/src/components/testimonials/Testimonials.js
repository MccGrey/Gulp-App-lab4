import React from "react";
import "./testimonials.css";
import TEST1 from "../../assets/gulp pt man 1.png";
import TEST2 from "../../assets/gulp pt wom 1.png";
import TEST3 from "../../assets/Gulp Ptrait one 1.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const data = [
    {
      avatr: TEST3,
      pname: "Angela Koya",
      review: "Gulp always leaves me in awe with their swift delivery service",
    },

    {
      avatr: TEST1,
      pname: "Remy Johnny",
      review: "I love that I can get varieties of drink everytime",
    },

    {
      avatr: TEST2,
      pname: "Sandra Kent",
      review: "I cant count how many of my friends I showed this site to.",
    },

    {
      avatr: TEST2,
      pname: "MccGrey Saint",
      review: "I cant count how many of my friends I showed this site to.",
    },

    {
      avatr: TEST2,
      pname: "Skull Key",
      review: "I cant count how many of my friends I showed this site to.",
    },

    {
      avatr: TEST2,
      pname: "Travis Scott",
      review: "I cant count how many of my friends I showed this site to.",
    },
  ];
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h3>What our clients are saying</h3>
        <div className="bar"></div>
      </div>
      <Swiper
        className="testimonials-container"
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={40}
      >
        {data.map(({ avatr, pname, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial-card">
              <RiDoubleQuotesL className="icon-quote" />
              <h3>{review}</h3>
              <img src={avatr} alt="testimonial1" />
              <h5>{pname}</h5>
              <div className="client-review">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
