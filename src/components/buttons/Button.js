import React from "react";
import "./button.css";

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
    </section>
  );
};

export default Button;
