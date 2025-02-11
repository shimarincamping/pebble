import React from "react";
import styles from "../styles/GenerateCV.module.css";

const GenerateCV = ({ formData, handleChange, handleSubmit, closeForm }) => {
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
                    Full Name <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Phone <span className={styles.requiredAsterisk}>*</span>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    LinkedIn Profile
                    <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    GitHub Profile
                    <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Summary/About Me
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Education <span className={styles.requiredAsterisk}>*</span>
                    <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Work Experience{" "}
                    <span className={styles.requiredAsterisk}>*</span>
                    <textarea
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Projects
                    <textarea
                        name="projects"
                        value={formData.projects}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Certifications
                    <textarea
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Skills <span className={styles.requiredAsterisk}>*</span>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Languages
                    <textarea
                        name="languages"
                        value={formData.languages}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Awards & Achievements
                    <textarea
                        name="awards"
                        value={formData.awards}
                        onChange={handleChange}
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

export default GenerateCV;
