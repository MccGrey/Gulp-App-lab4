import React from "react";
import Footer from "../footer/Footer";
import "./signup.css";

const Signup = () => {
  return (
    <>
      <section className="login-container">
        <div className="login">
          <h3>Sign-up</h3>
          <h4>
            Returning customer? <a href="/login">click here</a> to login{" "}
          </h4>
          <form className="signup">
            <div>
              <label>First Name</label>

              <input type="text" placeholder="mccgrey" />
            </div>{" "}
            <div>
              <label>Last Name</label>

              <input type="text" placeholder="Neliux" />
            </div>
            <div>
              <label>E-mail</label>

              <input type="email" placeholder="mccgrey@Slice.com" />
            </div>
            <div>
              <label>Password</label>

              <input type="password" placeholder="enter your password" />
            </div>
            <div>
              <label>Phone</label>

              <input type="email" placeholder="080x-xxx-xxxx" />
            </div>
            <div>
              <label>Confirm Password</label>

              <input type="email" placeholder="Confirm-Password" />
            </div>
            <div>
              <label>Street Address</label>

              <input type="address" placeholder="7 Elm Street" />
            </div>
          </form>
          <div className="user-select">
            <label>Country</label>
            <select></select>
            <label>State</label>
            <select></select>
          </div>
          <button
            className="signup-button"
            onClick={console.log("successfully created an account")}
          >
            Sign Up
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
