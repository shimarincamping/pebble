import React from 'react';
import styles from "../styles/LoginRegistration.module.css"

function AuthenticationInputField(props) {
    return (
        <>
            <p>{props.label}</p>
            <input 
                type={props.type}
                name={props.name}
                value={props.value} 
                onChange={props.onChange} 
                onBlur={props.onBlur}

                className={`${styles.inputField}`}
            />

            {props.errorMessageVisible && (
                <span className={`${styles.errorMessage}`}>
                    {`${props.label} is invalid!`}
                </span>
            )}

        </>
    );
}

export default AuthenticationInputField;