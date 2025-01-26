import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import ModeratorContainer from '../containers/ModeratorContainer';
import styles from "../styles/global.module.css";

function ModeratorPage() {
    return (
        <div
            className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
        >
            <ApplicationSidebar>
                <ProfileSidebarCardContainer />
            </ApplicationSidebar>
    
            <ApplicationMainContent>
                <ModeratorContainer />
            </ApplicationMainContent>
      </div>
    );
}

export default ModeratorPage;