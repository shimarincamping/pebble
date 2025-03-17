import React from "react";
import styles from "../styles/GenerateCV.module.css";

const GenerateCVForm = ({ formData, handleChange, handleSubmit, closeForm }) => {
    return (
        <div className={styles.formContainer}>
            <button className={styles.closeButton} onClick={closeForm}>
                ✖
            </button>

            <h2>Generate CV</h2>
            <hr />

            <p className={styles.requiredNote}>
                <span className={styles.requiredAsterisk}>*</span> Indicates
                Required
            </p>

            <form onSubmit={handleSubmit} className={styles.generateCVForm}>

                <label>
                    Job Description&nbsp;
                    <span className={styles.requiredAsterisk}>*</span>
                    <textarea
                        name="jobDesc"
                        value={formData.jobDesc}
                        placeholder="Enter the job description to tailor your resume!"
                        onChange={handleChange}
                        required
                    />
                </label>

                <hr />

                <div className={styles.buttonContainer}>
                    <button type="submit">Generate CV</button>
                </div>
            </form>
        </div>
    );
};

export default GenerateCVForm;
