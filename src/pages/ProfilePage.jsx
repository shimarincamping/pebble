import React from "react";
import { useParams } from "react-router-dom";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfilePageContainer from "../containers/ProfilePageContainer";
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
                            <ProfilePageContainer />
                        </ApplicationMainContent>

                        <ApplicationSidebar>
                            <h1>Placeholder! --- CV Card</h1>
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
                            <ProfilePageContainer />
                        </ApplicationMainContent>
                    </div>                    
                )
            }
            
        </>
    );
}

export default ProfilePage;
