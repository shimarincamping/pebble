import React from "react";
import { useParams } from "react-router-dom";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfilePageContainer from "../containers/ProfilePageContainer";
import CVSidebarCardContainer from "../containers/CVSidebarCardContainer";
import NetworkSidebarCardContainer from "../containers/NetworkSidebarCardContainer";
import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";

import styles from "../styles/global.module.css";


function ProfilePage() {

    const { id } = useParams();

    return (
        <>
            {
                (id === "me") ? (
                    <div
                        className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyRight}`}  
                    >
                        <ApplicationMainContent>
                            <ProfilePageContainer id={id}/>
                        </ApplicationMainContent>

                        <ApplicationSidebar>
                            <CVSidebarCardContainer />
                            <NetworkSidebarCardContainer />
                        </ApplicationSidebar>
                    </div>
                ) : (
                    <div
                        className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
                    >
                        <ApplicationSidebar>
                            <ProfileSidebarCardContainer />
                        </ApplicationSidebar>

                        <ApplicationMainContent>
                            <ProfilePageContainer id={id}/>
                        </ApplicationMainContent>
                    </div>                    
                )
            }
            
        </>
    );
}

export default ProfilePage;
