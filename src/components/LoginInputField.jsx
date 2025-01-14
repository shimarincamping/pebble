import React from "react";
import styles from "../styles/LoginRegistration.module.css";

function LoginInputField(props) {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.label}

        className={`${styles.formBody__loginInputField}`}
      />
    </>
  );
}

export default LoginInputField;
