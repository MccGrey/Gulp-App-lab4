import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./billAddress.css";

const BillAddress = () => {
  return (
    <>
      <section className="login-container">
        <div className="login">
          <h3>Billing Details</h3>
          <div className="bill-address">
            <label>address</label>
            <input type="email" name="email" placeholder="enter address" />
            <Link to="/checkout">
              <button className="billing-btn">Proceed to checkout</button>
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default BillAddress;
