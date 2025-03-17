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
            console.log(fetchedJsonData);
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
