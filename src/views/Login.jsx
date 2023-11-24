import React from "react";
import "../styles/globals.css";
import "../styles/login.css";
import Logo1 from "../assets/img/logo-1.svg";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="sweetspot">
      <div className="login-page">
        <div className="login-box">
          <Link to="/">
            <img src={Logo1} alt="Logo1" />
          </Link>
          <h6>Welcome Here</h6>
          <h1>Please Login with your email</h1>
          <div className="login-inputs">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn-yellow">Login</button>
          <div className="or-box">
            <h5>
              OR <br /> <span>Login with</span>
            </h5>
          </div>
          <div className="social-logins-box">
            <button>
              <BsGoogle />
              Continue with <b>Google</b>
            </button>
            <button>
              <BsFacebook />
              Continue with <b>Facebook</b>
            </button>
            <button>
              <BsApple />
              Continue with <b>Apple</b>
            </button>
          </div>
          <h5>
            Dont have an account? <Link to="/register">Register</Link>
          </h5>
        </div>
      </div>
    </main>
  );
};

export default Login;
