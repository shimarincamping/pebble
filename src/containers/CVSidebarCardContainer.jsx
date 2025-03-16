import React, { useState, useEffect } from 'react';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import CVSidebarCard from '../components/CVSidebarCard';
import ApplicationMainOverlay from './ApplicationMainOverlay';
import GenerateCVFormContainer from './GenerateCVFormContainer';
import GeneratedCVDisplayContainer from './GeneratedCVDisplayContainer';
import styles from "../styles/CV.module.css";


function CVSidebarCardContainer() {

    // Dummy data ----------------------------
    const dummyCVData = {
        latestUserCV: {
            fullName: "Anoop Singh",
            email: "anoopsingh@example.com",
            phone: "+123456789",
            address: "123 Main Street, City, Country",
            linkedin: "https://linkedin.com/in/anoopsingh",
            github: "https://github.com/anoopsingh",
            portfolio: "https://anoopsingh.dev",
            summary: "Highly motivated software engineer with 3+ years of experience in web development and cybersecurity. Passionate about building secure and scalable applications.",
            jobDesc: "Developed and maintained web applications using React and Node.js. Assisted in frontend development and security assessments.",
            workExperience: [
                { title: "Part Time Software Engineer", company: "ABC Corp", duration: "2022 - Present", description: "Developed and maintained web applications using React and Node.js." },
                { title: "Intern", company: "XYZ Ltd", duration: "2021 - 2022", description: "Assisted in frontend development and security assessments." }
            ],
            education: [
                { degree: "BSc Computer Science", institution: "University of Tech", year: "2022" }
            ],
            skills: ["JavaScript", "React", "Python", "Cybersecurity", "SQL", "Cloud Computing"],
            certifications: [
                { name: "Certified Ethical Hacker (CEH)", year: "2023" },
                { name: "AWS Certified Solutions Architect", year: "2024" }
            ],
            projects: [
                { name: "Personal Portfolio Website", description: "Built a fully responsive portfolio using React and Tailwind CSS." },
                { name: "Secure Chat App", description: "Developed an encrypted messaging application with end-to-end security features." }
            ],
            languages: ["English", "Spanish", "Mandarin"],
            awards: [
                { name: "Best Software Engineer Intern", organization: "XYZ Ltd", year: "2021" }
            ]
        }
    };

    const [CVData, setCVData] = useState(null);
    const [CVGenerationOverlayVisible, setCVGenerationOverlayVisible] = useState(false);
    const [CVViewOverlayVisible, setCVViewOverlayVisible] = useState(false);

    useEffect(() => {
        // Simulate fetching data from a backend
        setTimeout(() => {
            setCVData(dummyCVData);
        }, 2000);
    }, []);

    function toggleCVGenerationOverlay() {
        setCVGenerationOverlayVisible(prev => !prev);
    }

    function toggleCVViewOverlay() {
        setCVViewOverlayVisible(prev => !prev);
    }

    function handleGenerateCV(updatedCVData) {
        setCVData({ latestUserCV: updatedCVData });
        setCVGenerationOverlayVisible(false);  // Hide form
        setCVViewOverlayVisible(true);  // Show generated CV
    }
        
    return (
        <>
            {CVData ? (
                <>
                    <CVSidebarCard 
                        latestUserCV={CVData.latestUserCV ? true : false} // Pass a boolean instead of the object                        
                        handleGenerate={toggleCVGenerationOverlay} 
                        handleView={toggleCVViewOverlay}
                    />

                    {CVGenerationOverlayVisible && 
                        <ApplicationMainOverlay>
                            <GenerateCVFormContainer 
                                initialData={{
                                    fullName: CVData.latestUserCV?.fullName || "",
                                    email: CVData.latestUserCV?.email || "",
                                    phone: CVData.latestUserCV?.phone || "",
                                    address: CVData.latestUserCV?.address || "",
                                    linkedin: CVData.latestUserCV?.linkedin || "",
                                    github: CVData.latestUserCV?.github || "",
                                    portfolio: CVData.latestUserCV?.portfolio || "",
                                    summary: CVData.latestUserCV?.summary || "",
                                    jobDesc: CVData.latestUserCV?.jobDesc || "",
                                    workExperience: CVData.latestUserCV?.workExperience || [], // Keep it as an array
                                    education: CVData.latestUserCV?.education || [], // Keep it as an array
                                    skills: CVData.latestUserCV?.skills?.join(", ") || "",
                                    certifications: CVData.latestUserCV?.certifications || [], // Keep it as an array
                                    projects: CVData.latestUserCV?.projects || [], // Keep it as an array
                                    languages: CVData.latestUserCV?.languages || [],
                                    awards: CVData.latestUserCV?.awards || [] // Keep it as an array                                    
                                }}
                                onClose={toggleCVGenerationOverlay}
                                onGenerate={handleGenerateCV}
                            />
                        </ApplicationMainOverlay>
                    }

                    {CVViewOverlayVisible && 
                        <ApplicationMainOverlay>
                            <div className={styles.overlay}>
                                <div className={styles.cvOutContainer}>
                                    <GeneratedCVDisplayContainer data={CVData.latestUserCV} />
                                        <button onClick={toggleCVViewOverlay} className={styles.closeButton}>✖</button>
                                </div>
                            </div>
                        </ApplicationMainOverlay>
                    }
                
                </>
            ) : (
                <ComponentLoadingSpinner />
            )}
        </>
    );
}

export default CVSidebarCardContainer;
