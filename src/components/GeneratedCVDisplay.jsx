import React from "react";
import styles from "../styles/CV.module.css";

const GeneratedCVDisplay = ({ formData }) => {
    return (
        <div className={styles.cvContainer}>
            <div className={styles.cvHeader}>
                <h1>{formData.contactInformation.fullName}</h1>
                <p>
                    {formData.contactInformation.email} | {formData.contactInformation.phoneNumber} | &nbsp;
                    <a
                        href={`//${formData.contactInformation.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </p>
            </div>

            {formData.summary && (
                <section className={`${styles.CV__section}`}>
                    <h2>Summary</h2>
                    <p>{formData.summary}</p>
                </section>
            )} <br />

            <section className={`${styles.CV__section}`}>
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>{formData.education.title}</strong> <br /> 
                        {formData.education.institution} &nbsp; ({formData.education.completionYear}) <br /> <br />
                        <strong>GPA:</strong> {formData.education.gpa} <br /> <br />
                        {formData.education.desc} 
                        
                    </li> <br />
                </ul>
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Work Experience</h2>
                {formData.experience.map((exp, index) => (
                    <>
                        <p><strong>{exp.title}</strong><br />{exp.description}</p> <br />
                    </>
                ))}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Certifications</h2>
                <ul>
                    {formData.certifications.map(cert => (
                        <>
                            <li>{cert}</li>
                        </>
                    ))}
                </ul> <br />
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Projects</h2>
                {formData.projects.map((project, index) => (
                    <>
                        <p><strong>{project.title}</strong> - {project.description}</p> <br />
                    </>
                ))}
            </section>

            <section className={`${styles.CV__section}`}>
                <h2>Skills</h2>
                <ul>
                    {formData.skills.map(skill => <li>{skill}</li>)}
                </ul>
            </section>
        </div>
    );
};

export default GeneratedCVDisplay;
