import React from 'react';
import styles from "../styles/LoginRegistration.module.css";

function RegistrationInputField(props) {
    return (
        <div className={`${styles.formBody__registrationInputFieldContainer}`}>
            <label htmlFor={props.name} className={`${styles.formBody__registrationInputLabel}`}>
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

                className={`${styles.formBody__registrationInputField}`}
            />

            {props.errorMessageVisible && (
                <p className={`${styles.formBody__errorMessage}`}>
                    ⚠️ {props.errorMessage}
                </p>
            )}
        </div>
    );
}

export default RegistrationInputField;