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
                  <div className="count">1</div>
                </div>
                <div className="item-total">₦39416</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">B & G CUVEE</h3>
                </div>

                <div className="item-quantity">
                  <div className="count">1</div>
                </div>
                <div className="item-total">₦4860</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">Domaine Rose</h3>
                </div>

                <div className="item-quantity">
                  <div className="count">1</div>
                </div>
                <div className="item-total">₦4400</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    Baileys Cream 75CL
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">1</div>
                </div>
                <div className="item-total">₦2384</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    Chivita Apple 100CL
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">2</div>
                </div>
                <div className="item-total">₦1400</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    CocaCola PET 50CL
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">2</div>
                </div>
                <div className="item-total">₦400</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    Nestle water 600ML
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">5</div>
                </div>
                <div className="item-total">₦1000</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    Malta Guiness
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">2</div>
                </div>
                <div className="item-total">₦1798</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    Amstel Malt 330ML
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">2</div>
                </div>
                <div className="item-total">₦518</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">
                    Lipton ice tea
                  </h3>
                </div>

                <div className="item-quantity">
                  <div className="count">2</div>
                </div>
                <div className="item-total">₦298</div>
              </div>

              <div className="cart-item">
                <div className="cart-product">
                  <h3 className="item-name item-name-checkout">Eva Wine</h3>
                </div>

                <div className="item-quantity">
                  <div className="count">2</div>
                </div>
                <div className="item-total">₦3898</div>
              </div>
            </div>
          </div>
        </div>
        <div className="summary-checkout">
          <h3>SubTotal</h3>
          <h4>₦60372</h4>
        </div>
        <div className="summary-checkout">
          <h3>Shipping</h3>
          <h4>₦1000</h4>
        </div>
        <div className="summary-checkout">
          <h3>Total</h3>
          <h4>₦70372</h4>
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
