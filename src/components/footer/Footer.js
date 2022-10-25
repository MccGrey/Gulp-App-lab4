import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import LOGO from "../../assets/logodark.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact</h3>
          <h5>7 Elm Street, Bermuda Triangle Atlantis</h5>
          <h5>0803-000-1234</h5>
          <h5>support@gulp.com</h5>
        </div>
        <div className="footer-about">
          <h3>About</h3>
          <h5>
            Gulp is a regional drinks store accessible online. <br /> <br />{" "}
            <br />
            We aim to provide you with drinks from top brands at the best
            prices.
          </h5>
        </div>

        <div className="footer-socials">
          <h3>Socials</h3>

          <div className="footer-icons">
            <a href="https://twitter.com">
              <BsTwitter />
            </a>

            <a href="https://instagram.com">
              <FaInstagramSquare />
            </a>

            <a href="https://meta.com">
              <TbBrandMeta />
            </a>
          </div>
        </div>
        <div className="footer-navigate">
          <h3>Navigate</h3>

          <div className="footer-links">
            <Link
              style={{
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "lighter",
              }}
              to="/"
            >
              {" "}
              Home
            </Link>{" "}
            <br /> <br />
            <br />
            <Link
              style={{ color: "white", fontSize: "1.2rem" }}
              to="/alcoholicDrinks"
            >
              Alcoholic Drinks
            </Link>{" "}
            <br /> <br />
            <br />
            <Link
              style={{ color: "white", fontSize: "1.2em" }}
              to="/nonAlcoholicDrinks"
            >
              Non-Alcoholic Drinks
            </Link>
          </div>
        </div>
        <div className="footer-logo">
          <Link>
            <img src={LOGO} alt="logo" />
          </Link>
        </div>
      </div>
      <small>&copy; GULP. All rights reserved</small>
    </section>
  );
};

export default Footer;
