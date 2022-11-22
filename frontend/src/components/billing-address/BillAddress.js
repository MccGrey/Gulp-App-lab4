import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const BillAddress = () => {
  return (
    <>
      <section className="login-container">
        <div className="login">
          <h3>Billing Details</h3>
          <div>
            <label>address</label>
            <input type="email" name="email" placeholder="enter address" />
            <Link to="/checkout">
              <button>Proceed to checkout</button>
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default BillAddress;
