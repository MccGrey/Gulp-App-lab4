import React from "react";
import Footer from "../footer/Footer";
import "./success.css";

const Success = () => {
  return (
    <>
      <section className="success-section">
        <h3>Your Order has been successfuly placed</h3>
        <div className="success-container">
          <h4>Delivery Details</h4>
          <div className="success-details">
            <h5>Delivery Code</h5>
            <h5>ABC-123</h5>
          </div>

          <div className="success-details">
            <h5>Delivery Man</h5>
            <h5>John Doe</h5>
          </div>

          <div className="success-details">
            <h5>Phone Nubmer</h5>
            <h5>080xxx-xxxxx</h5>
          </div>
        </div>
        <button>Back to home</button>
      </section>
      <Footer />
    </>
  );
};

export default Success;
