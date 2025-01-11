import React from 'react';
import styles from "../styles/LoginRegistration.module.css"

function AuthenticationInputField(props) {
    return (
        <div className={`${styles.formBody__inputFieldContainer}`}>
            <label for={props.name} className={`${styles.formBody__inputLabel}`}>
                {props.label}
            </label> 

            <br />

            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                value={props.value} 
                onChange={props.onChange} 
                onBlur={props.onBlur}

                className={`${styles.formBody__inputField}`}
            />

            {props.errorMessageVisible && (
                <p className={`${styles.formBody__errorMessage}`}>
                    ⚠️ {props.errorMessage}
                </p>
            )}
        </div>
    );
}

export default AuthenticationInputField;