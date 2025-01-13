import React from "react";
import styles from "../styles/LoginRegistration.module.css";

function LoginComponent(props) {
  return (
    <div className={styles.loginComponent}>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`${styles.inputField}`}
        placeholder={props.label} // Placeholder for fields
      />
    </div>
  );
}

export default LoginComponent;
