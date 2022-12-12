import React from "react";
import "./payment.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="payment_container">
        <h4 className="card-details">Card details</h4>
        <form action="">
          <div className="inputBox">
            <span>Card number</span>
            <input type="text" maxlength="16" className="card-number-input" />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input type="text" className="card-holder-input" />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select name="" id="" className="mont-input">
                <option value="month" selected disabled>
                  {" "}
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select name="" id="" className="year-input">
                <option value="year" selected disabled>
                  {" "}
                  year
                </option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input type="text" maxlength="4" className="cvv-input" />
            </div>
          </div>
          <Link to="/success">
            {" "}
            <input type="submit" value="submit" className="submit-btn" />
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
