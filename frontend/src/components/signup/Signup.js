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
            Returning customer? <a href="/signin">click here</a> to login{" "}
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
            <select>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Australia ">Australia </option>
              <option value="Cameroon">Cameroon</option>
              <option value=" Ghana"> Ghana</option>
              <option value="Mexico">Mexico</option>
              <option value=" Netherlands"> Netherlands</option>
              <option value="Russia ">Russia </option>
              <option value=" South Africa"> South Africa</option>
              <option value="United Kingdom ">United Kingdom </option>
              <option value=" United States"> United States</option>
            </select>
            <label>State</label>
            <select>
              <option value=""></option>
              <option value="Bauchi">Bauchi</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Gombe">Gombe</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Plateau">Plateau</option>
              <option value="Sokoto">Sokoto</option>

              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Lagos">Lagos</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Edo">Edo</option>
              <option value="Delta">Delta</option>
              <option value="Abia">Abia</option>

              <option value="Anambra">Anambra</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Cross River">Cross River</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Enugu">Enugu</option>
              <option value="Imo">Imo</option>
              <option value="Rivers">Rivers</option>
              <option value="Abuja">Abuja</option>
            </select>
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
