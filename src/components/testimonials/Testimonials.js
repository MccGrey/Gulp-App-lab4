import React from "react";
import "./testimonials.css";
import TEST1 from "../../assets/gulp pt man 1.png";
import TEST2 from "../../assets/gulp pt wom 1.png";
import TEST3 from "../../assets/Gulp Ptrait one 1.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h3>What our clients are saying</h3>
        <div className="bar"></div>
      </div>
      <div className="testimonials-container">
        <article className="testimonial-card">
          <RiDoubleQuotesL className="icon-quote" />
          <h3>
            Gulp always leaves me in awe with their swift delivery service
          </h3>
          <img src={TEST3} alt="testimonial1" />
          <h5>Angela Koya</h5>
          <div className="client-review">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
        </article>

        <article className="testimonial-card">
          <RiDoubleQuotesL className="icon-quote" />
          <h3>I love that I can get varieties of drink everytime</h3>
          <img src={TEST1} alt="testimonial2" />
          <h5>Remy Johnny</h5>
          <div className="client-review">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </div>
        </article>

        <article className="testimonial-card">
          <RiDoubleQuotesL className="icon-quote" />
          <h3>I cant count how many of my friends I showed this site to.</h3>
          <img src={TEST2} alt="testimonial3" />
          <h5>Sandra Kent</h5>
          <div className="client-review">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />

            <IoMdStarHalf />
            <IoMdStarOutline />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
