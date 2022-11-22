import React, { useState } from "react";
import Footer from "../footer/Footer";
import "./signup.css";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const createUser = async () => {
    console.log(user);
    const payload = {
      name: user?.firstname + " " + user?.lastname,
      email: user?.email,
      password: user?.password,
      confirmPassword: user?.password,
      phoneNumber: user?.phone,
    };

    const signup = await login(payload);
    localStorage.setItem("user", JSON.stringify(signup?.data?.user));
    localStorage.setItem("token", signup?.token);
    navigate("/");
  };

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

              <input
                type="text"
                name="firstname"
                placeholder="mccgrey"
                value={user?.firstname}
                onChange={handleChange}
              />
            </div>{" "}
            <div>
              <label>Last Name</label>

              <input
                type="text"
                name="lastname"
                placeholder="Neliux"
                value={user?.lastname}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>E-mail</label>

              <input
                type="email"
                name="email"
                placeholder="mccgrey@Slice.com"
                value={user?.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="enter your password"
                value={user?.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Phone</label>

              <input
                type="phone"
                name="phone"
                placeholder="080x-xxx-xxxx"
                value={user?.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm-Password"
                onChange={handleChange}
              />
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
            disabled={
              user?.firstname && user?.lastname && user?.email ? false : true
            }
            className="signup-button"
            onClick={createUser}
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
