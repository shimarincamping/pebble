import React, { useState, useEffect } from 'react';
import LoginInputField from "../components/LoginInputField";

import styles from "../styles/LoginRegistration.module.css";

const LoginFormContainer = () => {

  const handleMicrosoftLogin = () => {
    console.log("Microsoft Login clicked");
  };

  const handleSubmit = (e) => {
    alert("Form submitted!");
  };

  
  // Defining fields
  const formFields = {
      email : {
          label : "Email Address",
          type : "text",
      },
      password : {
          label : "Password",
          type : "password",
      }
  };

  // Factory to make default object value for state hooks
  function generateDefaultObject(defaultValue) {
      const newObject = { ...formFields };
      for (const key in newObject) newObject[key] = defaultValue;

      return newObject;
  }

  const [formData, setFormData] = useState(generateDefaultObject(""));

  
  // Updates state object on each keypress
  const handleInputChange = (e) => {
      const {name, value} = e.target;

      setFormData((prev) => ({
          ...prev,
          [name] : value
      }));
  }
  

  return (
    <div>
      <div>
        <button onClick={handleMicrosoftLogin} className={styles.formBody__loginPageButton}>
          <img
            src="img/microsoft.png"
            alt="Microsoft Logo"
          />
          Login with Microsoft
        </button>
      </div>

      <h1 className={styles.sidebarContentsContainer__loginSectionHeader}>
        Login with your Pebble account:
      </h1>

      <form onSubmit={handleSubmit}>

        {
          Object.entries(formFields).map(([key, value]) => (
            <LoginInputField 
              name={key}
              type={value.type}
              value={formData[key]}
              label={value.label}
              onChange={handleInputChange}
            />
          ))
        }

        <div className={styles.formBody__loginFormFooter}>
          <p>Forgot Password?</p>
          <label><input type="checkbox"/>Remember me</label>
        </div>
        <button type="submit" className={styles.loginButton}>Log In</button>

        <button type="submit" className={styles.formBody__loginPageButton}>Log In</button>

      </form>
    </div>
  );
};

export default LoginFormContainer;
