import React from 'react';
import styles from "../styles/LoginRegistration.module.css"

function AuthenticationInputField(props) {
    return (
        <>
            <label for={props.name}>{props.label}</label> 
            <br />

            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value} 
                onChange={props.onChange} 
                onBlur={props.onBlur}

                className={`${styles.inputField}`}
            />

            {props.errorMessageVisible && (
                <span className={`${styles.errorMessage}`}>
                    {props.errorMessage}
                </span>
            )}

            <br />
        </>
    );
}

export default AuthenticationInputField;