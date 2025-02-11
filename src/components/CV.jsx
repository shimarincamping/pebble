import React from "react";
import styles from "../styles/CV.module.css";

const CV = ({ formData }) => {
    return (
        <div className={styles.cvContainer}>
            <div className={styles.cvHeader}>
                <h1>{formData.fullName}</h1>
                <p>{formData.email} | {formData.phone} | <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                {formData.github && <p><a href={formData.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>}
            </div>

            {formData.summary && (
                <section>
                    <h2>Summary</h2>
                    <p>{formData.summary}</p>
                </section>
            )}

            <section>
                <h2>Education</h2>
                <p>{formData.education}</p>
            </section>

            <section>
                <h2>Work Experience</h2>
                <p>{formData.workExperience}</p>
            </section>

            {formData.projects && (
                <section>
                    <h2>Projects</h2>
                    <p>{formData.projects}</p>
                </section>
            )}

            {formData.skills && (
                <section>
                    <h2>Skills</h2>
                    <p>{formData.skills}</p>
                </section>
            )}

            {formData.certifications && (
                <section>
                    <h2>Certifications</h2>
                    <p>{formData.certifications}</p>
                </section>
            )}

            {formData.languages && (
                <section>
                    <h2>Languages</h2>
                    <p>{formData.languages}</p>
                </section>
            )}

            {formData.awards && (
                <section>
                    <h2>Awards & Achievements</h2>
                    <p>{formData.awards}</p>
                </section>
            )}

            {formData.volunteerExperience && (
                <section>
                    <h2>Volunteer Experience</h2>
                    <p>{formData.volunteerExperience}</p>
                </section>
            )}
        </div>
    );
};

export default CV;
