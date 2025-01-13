import React, { useState, useEffect } from 'react';
import LoginComponent from "../components/LoginComponent";
import styles from "../styles/LoginRegistration.module.css";

const LoginFormContainer = () => {

  const handleMicrosoftLogin = () => {
    console.log("Microsoft Login clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email, "Password:", password);
  };

  
  // Defining all the fields
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


  // State hooks
  const [formData, setFormData] = useState(generateDefaultObject(""));

  // Effect hooks
  useEffect(() => {
      console.log(formData);
    }, [formData]);

  
  // Updates state object on each keypress
  const handleInputChange = (e) => {
      const {name, value} = e.target;

      setFormData((prev) => ({
          ...prev,
          [name] : value
      }));
  }
  

  return (
    <div className={styles.loginContainer}>
      <div className={styles.microsoftLogin}>
        <button onClick={handleMicrosoftLogin} className={styles.microsoftButton}>
          <img
            src="img/microsoft.png"
            alt="Microsoft Logo"
            className={styles.microsoftLogo}
          />
          Login with Microsoft
        </button>
      </div>
      <div className={styles.pebbleLoginText}>
        <h1>Login with your Pebble account</h1>
      </div>
      <form onSubmit={handleSubmit}>

        {
          Object.entries(formFields).map(([key, value]) => (
            <LoginComponent 
              name={key}
              type={value.type}
              value={formData[key]}
              label={value.label}
              onChange={handleInputChange}
            />
          ))
        }
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
    </div>
  );
};

export default LoginFormContainer;
