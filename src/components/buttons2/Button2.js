import React from "react";
import "./buttons2.css";

const Button2 = () => {
  return (
    <>
      <section className="alcoholic-section">
        <div className="button-clicks">
          <a href="#juice">
            <button>Juice</button>
          </a>{" "}
          <a href="#soft-drinks">
            <button>Soft Drinks</button>
          </a>
          <a href="#water">
            <button>Water</button>
          </a>
          <a href="#energy">
            <button>Energy</button>
          </a>
          <a href="#malt">
            {" "}
            <button>Malt</button>
          </a>
          <a href="#iced-tea">
            <button>Iced Tea</button>
          </a>
          <a href="#non-alc-wine">
            <button>Non Alc Wine </button>
          </a>
        </div>
        <div className="horizontal"></div>
      </section>
    </>
  );
};

export default Button2;
