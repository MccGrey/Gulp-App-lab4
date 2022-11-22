import React from "react";
import Footer from "../footer/Footer";
import "./checkout.css";
import { Link } from "react-router-dom";
import PAY1 from "../../assets/download.png";
import PAY2 from "../../assets/verve.png";
import PAY3 from "../../assets/images.png";

const Chekout = () => {
  return (
    <>
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-bar"></div>
          <div className="navigator">
            <h3 className="checkout-head checkout-heading">Checkout</h3>
          </div>
          <h4>Your Order</h4>
          <div className="cart-heading-table">
            <div className="cart-title">
              <h3 className="product-title">Item</h3>

              <h3 className="quantity">Quantity</h3>
              <h3 className="total total-checkout">Total</h3>
            </div>
            <div className="cart-items">
              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    HENNESSY VSOP 75CL
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">0</div>
                </div>
                <div className="item-total">N50000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-checkout">
          <h3>SubTotal</h3>
          <h4>N50000</h4>
        </div>
        <div className="summary-checkout">
          <h3>Shipping</h3>
          <h4>N10000</h4>
        </div>
        <div className="summary-checkout">
          <h3>Total</h3>
          <h4>N60000</h4>
        </div>
        <div>
          <input type="radio" />
          <label>Cash on Delivery</label>
        </div>
        <div className="payment-platform">
          <div>
            <input type="radio" />
            <label>Transfer / Cards</label>
          </div>
          <div className="payment-logo">
            <img src={PAY1} alt="paypal" />
            <img src={PAY2} alt="verve" />
            <img src={PAY3} alt="mastercard" />
          </div>
        </div>
        <div className="proceed-checkout-container">
          <Link to="/payment">
            <button className="proceed-checkout">Checkout</button>
          </Link>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Chekout;
