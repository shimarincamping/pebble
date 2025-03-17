import React, { useState, useEffect } from 'react';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import CVSidebarCard from '../components/CVSidebarCard';
import ApplicationMainOverlay from './ApplicationMainOverlay';
import GenerateCVFormContainer from './GenerateCVFormContainer';
import GeneratedCVDisplay from '../components/GeneratedCVDisplay';
import { useAuth } from "../containers/AuthProvider";
import styles from "../styles/CV.module.css";


function CVSidebarCardContainer() {

    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const token = localStorage.getItem("jwtToken");

    // Dummy data ----------------------------
    const dummyCVData = {
            fullName: "Anoop Singh",
            email: "anoopsingh@example.com",
            phone: "+123456789",
            address: "123 Main Street, City, Country",
            linkedin: "https://linkedin.com/in/anoopsingh",
            github: "https://github.com/anoopsingh",
            portfolio: "https://anoopsingh.dev",
            summary: "Highly motivated software engineer with 3+ years of experience in web development and cybersecurity. Passionate about building secure and scalable applications.",
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
    };

    const [CVData, setCVData] = useState(null);
    const [CVGenerationOverlayVisible, setCVGenerationOverlayVisible] = useState(false);
    const [CVViewOverlayVisible, setCVViewOverlayVisible] = useState(false);

    useEffect(() => {
        const handleFetchData = async () => {
            const currentUserID = await user;

            const fetchedData = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${currentUserID}/cv`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            try {
                if (fetchedData.ok) {
                    const fetchedJsonData = await fetchedData.json();
                    return setCVData(fetchedJsonData);
                }

                throw new Error();
            } catch (err) {
                setCVData({ error : fetchedData });
            }
        };

        handleFetchData();
    }, [user]);

    function toggleCVGenerationOverlay() {
        setCVGenerationOverlayVisible(prev => !prev);
    }

    function toggleCVViewOverlay() {
        setCVViewOverlayVisible(prev => !prev);
    }

    async function handleGenerateCV(formData) {

        const currentUserID = await user;
        const fetchedData = await fetch(
            `${process.env.REACT_APP_API_URL}/users/${currentUserID}/cv`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData)
            }
        );

        if (fetchedData.ok) {
            const fetchedJsonData = await fetchedData.json();
            setCVData(fetchedJsonData);
            setCVGenerationOverlayVisible(false); 
            setCVViewOverlayVisible(true); 
        } else {
            alert(`Error occurred while generating CV.`)
        }
    }
        
    return (
        <>
            {CVData ? (
                <>
                    <CVSidebarCard 
                        latestUserCV={!CVData.error}                     
                        handleGenerate={toggleCVGenerationOverlay} 
                        handleView={toggleCVViewOverlay}
                    />

                    {CVGenerationOverlayVisible && 
                        <ApplicationMainOverlay>
                            <GenerateCVFormContainer
                                onClose={toggleCVGenerationOverlay}
                                onGenerate={handleGenerateCV}
                            />
                        </ApplicationMainOverlay>
                    }

                    {CVViewOverlayVisible && 
                        <ApplicationMainOverlay>
                            <div className={styles.cvOutContainer}>
                                <button onClick={toggleCVViewOverlay} className={styles.closeButton}>✖</button>
                                <GeneratedCVDisplay formData={CVData} />
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
