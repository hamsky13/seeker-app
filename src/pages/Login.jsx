import React from "react";
import Logo from "../assets/Seeker2 1.svg";
import "../assets/login.css";

function Login() {
  return (
    <div className="illustration">
      <div className="cover"></div>
      <img className="logo" src={Logo} alt="seeker" />
      <div className="text-quote">
        <h3>Object storage for companies of all sizes.</h3>
        <h3>Store any amount of data. Retrieve it as often as you’d like.</h3>
      </div>
      <div className="login-field">
        <div className="greet">
          <h2 className="nice">Nice to see you again</h2>
          <h2 className="please">Please Sign in with your Email</h2>
        </div>
        <form>
          <label htmlFor="">Login</label>
          <input type="text" placeholder="Email or phone number" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter password" />
          <div className="extension">
            <div className="remember">
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <label>Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <button className="btn-active">Sign in</button>
        </form>
        <hr />
        <h5 className="author">Ebdesk Technology 2021</h5>
      </div>
    </div>
  );
}

export default Login;
