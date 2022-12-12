
import React,{useState} from "react";
import Footer from "../footer/Footer";
import "./login.css";
import { signin } from "../../services/auth";
import { useNavigate } from "react-router-dom";






const Signin = () => {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    email: '', password:''
  })

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setUser((prev) => ({...prev, [name]:value}))
  }


  const signinUser = async () => {
    console.log(user)
    const payload = {
      email: user?.email,
      password: user?.password, 
    }
    const login = await signin(payload)
    localStorage.setItem("user", JSON.stringify(login?.data?.user))
    localStorage.setItem("token", JSON.stringify(login?.data?.token));
    navigate("/")
  }







//const Login = () => {
  return (
    <>
      <section className="login-container">
        <div className="login">  
          <h3>Sign-In</h3>
          <h4>
            Do you have an account? <a href="/signup">click here</a> to sign up
          </h4>
          <div>
            <label>E-mail</label>
            <input type="email" name="email" placeholder="mccgrey@Slice.com" value={user?.email} onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name='password' placeholder="enter your password"  value={user?.password} onChange={handleChange}/>
            {/* <input
              type="password"
              placeholder="enter your password"
              className="password"
            /> */}

            <button    // onClick={console.log("you have logged in successfully")}>
            disabled={user?.email && user?.password ?false: true}
            className="signup-button"
            onClick={signinUser}
            >
              Sign In
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signin;
