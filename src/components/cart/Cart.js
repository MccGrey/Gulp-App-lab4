import React from "react";
import Footer from "../../components/footer/Footer";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-bar"></div>
          <div className="navigator">
            <h3 className="cart-head">Cart</h3>
            <h3 className="checkout-head">Checkout</h3>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Cart;
