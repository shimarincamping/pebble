import React from 'react';
import { Link } from "react-router-dom";
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import styles from "../styles/LoginRegistration.module.css"

function ForgotPasswordPage() {
  return (
    <>
      <div className={`${styles.pageContainer}`}>
      </div>
      <main className={`${styles.sidebarContentsContainer}`}>
        
        <div className={`${styles.sidebarContentsContainer__loginFormMainWrapper}`}>
          <img 
              src="icons/warning.png" 
              className={`${styles.sidebarContentsContainer__warningIcon}`} 
              alt="Warning Icon"
          />
            <h1 className={`${styles.sidebarContentsContainer__forgotPasswordHeader}`}>
                Forgot Password
            </h1>

            <p className={`${styles.sidebarContentsContainer__forgotPasswordText}`}>
              Enter your email and we'll send you a link to reset your password.
            </p>
          
          <ForgotPasswordContainer />

          <div className={styles.formBody__loginFormFooter__loginPageRedirect}>
            <Link to="/login" className={styles.formBody__loginFormFooter__loginPageLink}>
                <img 
                    src="img/back2.png" 
                    className={`${styles.loginFormFooter__backIcon}`} 
                    alt="Back Icon"
                />
                <p className={`${styles.loginFormFooter__backText}`}>Back to Login</p>
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}

export default ForgotPasswordPage;