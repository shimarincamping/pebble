import React, { useState, useEffect } from 'react';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import CVSidebarCard from '../components/CVSidebarCard';
import ApplicationMainOverlay from './ApplicationMainOverlay';
import GenerateCVContainer from './GenerateCVContainer';
import CVContainer from './CVContainer';
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
                        {...CVData} 
                        handleGenerate={toggleCVGenerationOverlay} 
                        handleView={toggleCVViewOverlay}
                    />

                    {CVGenerationOverlayVisible && 
                        <ApplicationMainOverlay>
                            <GenerateCVContainer 
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
                                    workExperience: CVData.latestUserCV?.workExperience?.map(item => `${item.title} - ${item.description}`).join("\n") || "",
                                    education: CVData.latestUserCV?.education?.map(item => `${item.degree} - ${item.institution} (${item.year})`).join("\n") || "",
                                    skills: CVData.latestUserCV?.skills?.join(", ") || "",
                                    certifications: CVData.latestUserCV?.certifications?.map(item => `${item.name} - ${item.year}`).join("\n") || "",
                                    projects: CVData.latestUserCV?.projects?.map(item => `${item.name} - ${item.description}`).join("\n") || "",
                                    languages: CVData.latestUserCV?.languages?.join(", ") || "",
                                    awards: CVData.latestUserCV?.awards?.map(item => `${item.name} - ${item.organization} (${item.year})`).join("\n") || ""
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
                                    <CVContainer data={CVData.latestUserCV} />
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
