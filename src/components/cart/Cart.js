import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./cart.css";
import CART from "../../assets/HENNESSY VSOP 75CL.png";

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
        <div className="cart-content">
          <div className="cart-content-container">
            <h3 className="order">Your Order</h3>
            <div className="cart-title">
              <h3 className="product-title">Item</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
          </div>
          <div className="cart-items">
            <div className="cart-item">
              <div className="cart-product">
                <img src={CART} alt="" />
                <h3 className="item-name">HENNESSY VSOP 75CL</h3>
              </div>
              <div className="item-price">N50000</div>
              <div className="item-quantity">
                <button>-</button>
                <div className="count">0</div>
                <button>+</button>
              </div>
              <div className="item-total">N50000</div>
            </div>
          </div>
          <div className="summary">
            <h3>SubTotal</h3>
            <h4>N50000</h4>
          </div>
          <div className="proceed-checkout-container">
            <Link to="/checkout">
              <button className="proceed-checkout">Proceed to checkout</button>
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Cart;
