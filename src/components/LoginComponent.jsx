import React from "react";
import { Link } from 'react-router-dom';

import styles from "../styles/LoginComponent.module.css"; 
import microsoftLogo from "../../public/img/Microsoft.png";
import pebbleLogo from "../../public/img/pebbleLongLogo.png";


const LoginComponent = () => {

  const pebbleLogo = "img/pebbleLogo.png";
  const microsoftLogo = "icons/microsoft.png"


  const handleMicrosoftLogin = () => {
    console.log("Microsoft Login clicked");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className={styles.loginComponent}>
      <div className={styles.pebbleLogo}>
        <img
          src={pebbleLogo}
          alt="Pebble Logo"
          className={styles.pebbleLogo}
        />
      </div>
      <div className={styles.loginText}>
        <h1>Log in using your account on:</h1>
      </div>
      <div className={styles.microsoftLogin}>
        <button onClick={handleMicrosoftLogin} className={styles.microsoftButton}>
          <img
            src={microsoftLogo}
            alt="Microsoft Logo"
            className={styles.microsoftLogo}
          />
          Login with Microsoft
        </button>
      </div>
      <div className={styles.pebbleLoginText}>
        <h1>Login with your Pebble account</h1>
      </div>
      <div className={styles.otherLogin}>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className={styles.inputField}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={styles.inputField}
          />
          <div className={styles.passwordCheck}>
            <div className={styles.forgotPassword}>
                <p>Forgot Password?</p>
            </div>
            <div className={styles.rememberPassword}>
                  <input
                    type="checkbox"
                    name="rememberPassword"
                    className={styles.checkbox}
                />
                <p>Remember me</p>
            </div>
          </div>
          <button type="submit" className={styles.loginButton}>Log In</button>
        </form>
        <div className={styles.createAccount}>
          <p>Don't have an account? <Link to="/register"><span className={styles.register}>Register here</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
