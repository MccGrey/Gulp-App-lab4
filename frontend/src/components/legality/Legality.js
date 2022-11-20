import React from "react";
import "./legality.css";
import { Link } from "react-router-dom";

const Legality = () => {
  return (
    <section className="legality-section">
      <div className="legality-container">
        <h3>Alcohol is illegal for minors</h3>
        <h4>Are you 18 years or above</h4>
        <div className="legality-btn">
          <Link to="/legality">
            <button className="btn-yes">Yes, I am 18 or over</button>
          </Link>
          <Link to="/nonAlcoholicDrinks">
            <button className="btn-no">No, I am under 18</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Legality;
