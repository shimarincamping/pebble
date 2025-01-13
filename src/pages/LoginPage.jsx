import React from 'react';
import { Link } from "react-router-dom";
import LoginFormContainer from '../containers/LoginFormContainer';
import styles from "../styles/LoginRegistration.module.css"

function LoginPage() {
  return (
    <>
      <div className={styles.background}>
        <img
          src="img/campus.png"
          alt="Background"
          className={styles.backgroundImg} 
        />
      </div>
      <main className={`${styles.loginForm}`}>
        <div className={styles.pebbleLogo}>
          <img
            src="img/pebbleLongLogo.png"
            alt="Pebble Logo"
            className={styles.pebbleLogo}
          />
        </div>
        <div className={styles.loginText}>
          <h1>Log in using your account on:</h1>
        </div>
        <LoginFormContainer />
        <div className={styles.createAccount}>
          <p>Don't have an account? <span className={styles.register}><Link to="/register">Register here</Link></span></p>
        </div>
      </main>
    </>
  );
};

export default LoginPage;