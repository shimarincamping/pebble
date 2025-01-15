import React from 'react';
import { Link } from "react-router-dom";
import LoginFormContainer from '../containers/LoginFormContainer';
import styles from "../styles/LoginRegistration.module.css"

function LoginPage() {
  return (
    <>

      <div className={`${styles.pageContainer}`}>
      </div>


      <main className={`${styles.sidebarContentsContainer}`}>
        
        <div className={`${styles.sidebarContentsContainer__loginFormMainWrapper}`}>
          <img 
              src="img/pebbleLogo.png" 
              className={`${styles.sidebarContentsContainer__appLogo}`} 
              alt="PEBBLE logo"
          />
            <h1 className={`${styles.sidebarContentsContainer__loginSectionHeader}`}>
              Login using your account on:
            </h1>
          
          <LoginFormContainer />

          <div className={styles.formBody__loginFormFooter__registrationPageRedirect}>
            <p>Don't have an account? 
              <span>
                <Link to="/register">Register here</Link>
              </span>
            </p>
          </div>

        </div>
      </main>
    </>
  );
}

export default LoginPage;