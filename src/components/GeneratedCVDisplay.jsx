import React from "react";
import styles from "../styles/CV.module.css";

const GeneratedCVDisplay = ({ formData }) => {
    return (
        <div className={styles.cvContainer}>
            <div className={styles.cvHeader}>
                <h1>{formData.fullName}</h1>
                <p>
                    {formData.email} | {formData.phone} |{" "}
                    <a
                        href={formData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
                {formData.github && (
                    <p>
                        <a
                            href={formData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                )}
            </div>

            {formData.summary && (
                <section className={`${styles.CV__section}`}>
                    <h2>Summary</h2>
                    <p>{formData.summary}</p>
                </section>
            )}

            <section className={`${styles.CV__section}`}>
                <h2>Education</h2>
                {Array.isArray(formData.education) ? (
                    formData.education.map((edu, index) => (
                        <p key={index}>{edu.degree} - {edu.institution} ({edu.year})</p>
                    ))
                ) : (
                    <p>{formData.education}</p>
                )}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Work Experience</h2>
                {Array.isArray(formData.workExperience) ? (
                    formData.workExperience.map((exp, index) => (
                        <p key={index}><strong>{exp.title}</strong> at {exp.company} ({exp.duration})<br/>{exp.description}</p>
                    ))
                ) : (
                    <p>{formData.workExperience}</p>
                )}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Certifications</h2>
                {Array.isArray(formData.certifications) ? (
                    formData.certifications.map((cert, index) => (
                        <p key={index}>{cert.name} - {cert.year}</p>
                    ))
                ) : (
                    <p>{formData.certifications}</p>
                )}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Projects</h2>
                {Array.isArray(formData.projects) ? (
                    formData.projects.map((project, index) => (
                        <p key={index}><strong>{project.name}</strong> - {project.description}</p>
                    ))
                ) : (
                    <p>{formData.projects}</p>
                )}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Languages</h2>
                {Array.isArray(formData.languages) ? (
                    <p>{formData.languages.join(", ")}</p>
                ) : (
                    <p>{formData.languages}</p>
                )}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Awards & Achievements</h2>
                {Array.isArray(formData.awards) ? (
                    formData.awards.map((award, index) => (
                        <p key={index}>{award.name} - {award.organization} ({award.year})</p>
                    ))
                ) : (
                    <p>{formData.awards}</p>
                )}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Job Description</h2>
                <p>{formData.jobDesc}</p>
            </section>

        </div>
    );
};

export default GeneratedCVDisplay;
