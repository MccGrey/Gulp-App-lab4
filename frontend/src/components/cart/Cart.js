import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./cart.css";
import CART from "../../assets/HENNESSY VSOP 75CL.png";

const Cart = (props) => {
  //fetching cartItems
  const { cartItems } = props;

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-bar"></div>
          <div className="navigator">
            <h3 className="cart-head">Cart</h3>
          </div>
        </div>

        <div className="cart-condition">
          {cartItems.length === 0 && <div>Cart is empty</div>}

          <div className="cart-content">
            <div className="cart-content-container">
              <h3 className="order">Your Order</h3>
              <div className="cart-title">
                <h3 className="product-title item-carts">Item</h3>
                <h3 className="price price-cart">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
            </div>

            <div className="cart-items">
              <div className="cart-item">
                <div className="cart-product">
                  <img src={CART} alt="" />
                  <h3 className="item-name item-name-carts">
                    HENNESSY VSOP 75CL
                  </h3>
                </div>
                <div className="item-price item-price-cart">N50000</div>
                <div className="item-quantity item-quantity-carts">
                  <button onClick={handleDecrement}>-</button>
                  <div className="count">{quantity}</div>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <div className="item-total">N50000</div>
              </div>
            </div>
            <div className="summary summary-carts">
              <h3>SubTotal</h3>
              <h4>0</h4>
            </div>
            <div className="proceed-checkout-container">
              <Link to="/checkout">
                <button className="proceed-checkout">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Cart;
