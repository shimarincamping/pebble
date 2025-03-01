import React, { useState } from "react";
import { useAuth } from "../containers/AuthProvider";
import LoginInputField from "../components/LoginInputField";
import styles from "../styles/LoginRegistration.module.css";

const LoginFormContainer = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMicrosoftLogin = () => {
    console.log("Microsoft Login clicked");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(formData.email, formData.password);
      alert("Login successful!");
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formFields = {
    email: { label: "Email Address", type: "text" },
    password: { label: "Password", type: "password" },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div>
        <button onClick={handleMicrosoftLogin} className={styles.formBody__loginPageButton}>
          <img src="img/microsoft.png" alt="Microsoft Logo" />
          Login with Microsoft
        </button>
      </div>

      <h1 className={styles.sidebarContentsContainer__loginSectionHeader}>
        Login with your Pebble account:
      </h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        {Object.entries(formFields).map(([key, value]) => (
          <LoginInputField
            key={key}
            name={key}
            type={value.type}
            value={formData[key]}
            label={value.label}
            onChange={handleInputChange}
          />
        ))}

        <div className={styles.formBody__loginFormFooter}>
          <p className={styles.loginFormFooter__forgotPassword}>
            <a href="mailto:campuscentral@taylors.edu.my?subject=Password Reset Request">
              Forgot Password?
            </a>
          </p>
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <button type="submit" className={styles.formBody__loginPageButton} disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default LoginFormContainer;
