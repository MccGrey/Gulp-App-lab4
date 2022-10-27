import React from "react";
import Footer from "../footer/Footer";
import "./login.css";

const Login = () => {
  return (
    <div>
      <section className="login-container">
        <div className="login">
          <h3>Sign-In</h3>
          <h4>
            Do you have an account? <a href="/">click here</a> to sign up{" "}
          </h4>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="mccgrey@Slice.com" />
            <label>Password</label>
            <input
              type="password"
              placeholder="enter your password"
              className="password"
            />

            <button>Sign In</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
