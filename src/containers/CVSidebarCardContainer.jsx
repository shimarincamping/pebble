import React, { useState, useEffect } from 'react';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import CVSidebarCard from '../components/CVSidebarCard';
import ApplicationMainOverlay from './ApplicationMainOverlay';

function CVSidebarCardContainer() {

    // Dummy data ----------------------------
    const dummyCVData = {
        latestUserCV : null
    };

    const dummyCVData2 = {
        latestUserCV : {
            somedetails : "somevalue"      /* To be populated after Form + Generated Template is made */
        }
    };
    // ---------------------------------------

    const [CVData, setCVData] = useState(null);
    const [CVGenerationOverlayVisible, setCVGenerationOverlayVisible] = useState(false);
    const [CVViewOverlayVisible, setCVViewOverlayVisible] = useState(false);

    useEffect(
        () => {
            // Replace this with a fetch request for user data. The server should trim the raw database response to fit the object above.
            const fetchData = setInterval(() => {
                setCVData(dummyCVData2);
            }, 5000);

            return () => clearInterval(fetchData);
        },
    []);


    function toggleCVGenerationOverlay() {
        setCVGenerationOverlayVisible((prev) => !prev);
    }

    function toggleCVViewOverlay() {
        setCVViewOverlayVisible((prev) => !prev);
    }

    return (
        <>
            {
                (CVData) ? (
                    <>
                        <CVSidebarCard {...CVData} handleGenerate={toggleCVGenerationOverlay} handleView={toggleCVViewOverlay}/>

                        {
                            CVGenerationOverlayVisible && 
                                <ApplicationMainOverlay>
                                    <div onClick={toggleCVGenerationOverlay}>placeholder 1 -- form</div> 
                                    {/* Add FORM overlay cointainer here with visibility prop = false*/}
                                </ApplicationMainOverlay>
                        }  
                        
                        {
                            CVViewOverlayVisible && 
                                <ApplicationMainOverlay>
                                    <div onClick={toggleCVViewOverlay}>placeholder 2 -- view</div> 
                                    {/* Add GENERATED CV overlay cointainer here with visibility prop = false*/}
                                </ApplicationMainOverlay>
                        }  
                    </>
                ) : (<ComponentLoadingSpinner />)
            }
        </>
    );
}

export default CVSidebarCardContainer;