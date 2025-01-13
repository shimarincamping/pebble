import React from "react";
import LoginComponent from "../components/LoginComponent";
import styles from "../styles/LoginFormContainer.module.css"; 

function LoginFormContainer() {

  
  const campusImage = "/img/taylorsBackground.png";

  return (
    <div className={styles.loginContainer}>
      <div className={styles.background}>
        <img
          src={campusImage}
          alt="Background"
          className={styles.backgroundImg} 
        />
      </div>
      <div className={styles.loginForm}>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginFormContainer;
