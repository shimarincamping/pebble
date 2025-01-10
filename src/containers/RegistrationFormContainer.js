import React, { useState, useEffect } from 'react';
import AuthenticationInputField from '../components/AuthenticationInputField';

import styles from "../styles/LoginRegistration.module.css"

function RegistrationFormContainer() {

    // Defining all the fields
    const formFields = {
        fullName : {
            label : "Full Name",
            type : "text"
        },
        email : {
            label : "Email Address",
            type : "text"
        },
        password : {
            label : "Password",
            type : "password"
        },
        confirmPassword : {
            label : "Confirm Password",
            type : "password"
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
    const [formDataValidState, setFormDataValidState] = useState(generateDefaultObject(true));

    // Effect hooks
    useEffect(() => {
        console.log(formData);
      }, [formData]);

    
    // Constants
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Determines if a single input is valid:
    function isValidInput(inputType, inputValue) {
        switch (inputType) {
            case "fullName" :
                return inputValue.length > 0;
            case "email":
                return inputValue.match(emailRegex);
            case "password":
                return inputValue.length > 10;
            case "confirmPassword":
                return inputValue === formData.password;
        }
    }

    // Determines if all inputs are valid:
    function isAllValidInput() {
        return Object.values(formDataValidState).every(Boolean) && Object.values(formData).every(Boolean);
    }

    // Updates state object on each keypress
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name] : value
        }));
    }

    // If input invalid, clear the field. (Error warning can be added later)
    const validateInput = (e) => {
        const {name, value} = e.target;
        const trimmedValue = value.trim();

        setFormData((prev) => ({
            ...prev, 
            [name] : trimmedValue
        }));

        setFormDataValidState((prev) => ({
            ...prev,
            [name] : isValidInput(name, trimmedValue)
        }));
    }

    // Submits the form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isAllValidInput()) alert("Form submitted!");
        else alert("Form invalid!");
    }

    return (
        <div className={`${styles.formBody}`}>
            <form onSubmit={handleSubmit}>

                {
                    Object.entries(formFields).map(([key, value]) => (
                        <AuthenticationInputField 
                            name={key}
                            type={value.type}
                            value={formData[key]}
                            label={value.label}
                            onChange={handleInputChange}
                            onBlur={validateInput}
                            errorMessageVisible={!formDataValidState[key]}
                        />
                    ))
                }

                {isAllValidInput() && <input type="submit"/>}

            </form>
        </div>
    );
}

export default RegistrationFormContainer;