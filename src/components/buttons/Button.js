import React from "react";
import "./button.css";
import Footer from "../../components/footer/Footer";
import Alcohol from "../acohols/Alcohol";

const Button = () => {
  return (
    <section className="alcoholic-section">
      <div className="button-clicks">
        <button>Gin</button>
        <button>Cream</button>
        <button>Whiskey</button>
        <button>Cognac</button>
        <button>Red wine</button>
        <button>White wine</button>
        <button>Rose wine</button>
      </div>
      <div className="horizontal"></div>
      <Alcohol />
      <Footer />
    </section>
  );
};

export default Button;
