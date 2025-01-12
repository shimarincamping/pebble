import React from 'react';
import LoginFormContainer from '../containers/LoginFormContainer';
import styles from "../styles/LoginComponent.module.css";

const LoginPage = () => {
  return (
    <div className={`${styles.login_form}`}>
      <LoginFormContainer />
    </div>
  );
};

export default LoginPage;