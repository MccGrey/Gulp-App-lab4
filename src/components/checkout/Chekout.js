import React from "react";
import Footer from "../footer/Footer";
import "./checkout.css";

const Chekout = () => {
  return (
    <>
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-bar"></div>
          <div className="navigator">
            <h3 className="cart-head cart-header">Cart</h3>
            <h3 className="checkout-head checkout-header">Checkout</h3>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Chekout;
