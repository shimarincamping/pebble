import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../containers/AuthProvider"; // Import AuthProvider hook
import RegistrationInputField from "../components/RegistrationInputField";
import styles from "../styles/LoginRegistration.module.css";

function RegistrationFormContainer() {
    const { register } = useAuth(); // Use the register function
    const navigate = useNavigate();

    // Defining all the fields
    const formFields = {
        fullName: {
            label: "Full Name",
            type: "text",
            errorMessage: "Name cannot be empty."
        },
        email: {
            label: "Email Address",
            type: "text",
            errorMessage: "Email address is invalid."
        },
        password: {
            label: "Password",
            type: "password",
            errorMessage: "Password must be at least 10 characters."
        },
        confirmPassword: {
            label: "Confirm Password",
            type: "password",
            errorMessage: "Passwords do not match."
        }
    };

    // Function to create default state objects
    function generateDefaultObject(defaultValue) {
        return Object.keys(formFields).reduce((acc, key) => {
            acc[key] = defaultValue;
            return acc;
        }, {});
    }

    // State hooks
    const [formData, setFormData] = useState(generateDefaultObject(""));
    const [formDataValidState, setFormDataValidState] = useState(generateDefaultObject(true));
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // Constants
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Determines if a single input is valid
    function isValidInput(inputType, inputValue) {
        switch (inputType) {
            case "fullName":
                return inputValue.length > 0;
            case "email":
                return emailRegex.test(inputValue);
            case "password":
                setFormDataValidState((prev) => ({
                    ...prev,
                    confirmPassword: inputValue === formData.confirmPassword
                }));
                return inputValue.length >= 10; // Fix: Allow exactly 10 characters
            case "confirmPassword":
                return inputValue === formData.password;
            default:
                return false;
        }
    }

    // Determines if all inputs are valid
    function isAllValidInput() {
        return Object.values(formData).every(Boolean) && Object.values(formDataValidState).every(Boolean);
    }

    // Updates state object on each keypress
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // If password changes, revalidate confirmPassword
        if (name === "password") {
            setFormDataValidState((prev) => ({
                ...prev,
                confirmPassword: value === formData.confirmPassword
            }));
        }
    };

    // Removes excess whitespace + checks if the input is valid
    const validateInput = (e) => {
        const { name, value } = e.target;
        const trimmedValue = value.trim();

        setFormData((prev) => ({
            ...prev,
            [name]: trimmedValue
        }));

        setFormDataValidState((prev) => ({
            ...prev,
            [name]: isValidInput(name, trimmedValue)
        }));
    };

    // Submits the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setLoading(true);

        if (!isAllValidInput()) {
            setErrorMessage("Please correct the highlighted fields.");
            setLoading(false);
            return;
        }

        try {
            await register(
                formData.fullName.trim(),
                formData.email.trim(),
                formData.password.trim(),
                formData.confirmPassword.trim()
            );
            alert("Registration successful! Please log in.");
            navigate("/login");
        } catch (error) {
            setErrorMessage(error.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Passes props to children; returns JSX
    return (
        <div className={`${styles.formBody}`}>
            <form onSubmit={handleSubmit}>
                {Object.entries(formFields).map(([key, value]) => (
                    <RegistrationInputField
                        key={key}
                        name={key}
                        type={value.type}
                        value={formData[key]}
                        label={value.label}
                        onChange={handleInputChange}
                        onBlur={validateInput}
                        errorMessage={value.errorMessage}
                        errorMessageVisible={!formDataValidState[key]}
                    />
                ))}

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

                <input
                    type="submit"
                    className={`${styles.formBody__primaryButton}`}
                    disabled={!isAllValidInput() || loading}
                    value={loading ? "Registering..." : "Register"}
                />
            </form>
        </div>
    );
}

export default RegistrationFormContainer;
