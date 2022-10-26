import React from "react";
import "./button.css";

const Button = () => {
  return (
    <section className="alcoholic-section">
      <div className="button-clicks">
        <a href="#gin">
          <button>Gin</button>
        </a>

        <a href="#cream">
          <button>Cream </button>
        </a>

        <a href="#whiskey">
          <button>Whiskey </button>
        </a>

        <a href="#cognac">
          <button>Cognac </button>
        </a>

        <a href="#red-wine">
          <button>Red Wine</button>
        </a>

        <a href="#white-wine">
          <button>White Wine</button>
        </a>

        <a href="#rose">
          <button>Rose</button>
        </a>
      </div>
      <div className="horizontal"></div>
    </section>
  );
};

export default Button;
