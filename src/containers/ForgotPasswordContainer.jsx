import styles from "../styles/LoginRegistration.module.css";

const ForgotPasswordContainer = () => {
  const handleSubmit = (e) => {
    alert("Form submitted!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter your email address here"

            className={`${styles.formBody__forgotPasswordInputField}`}
        />

        <button type="submit" className={styles.formBody__loginPageButton}>Submit</button>
      </form>
    </div>
  );
};

export default ForgotPasswordContainer;