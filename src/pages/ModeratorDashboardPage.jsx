import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from '../containers/PageHeaderContainer.jsx';

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import ModeratorDashboardContainer from '../containers/ModeratorDashboardContainer';
import styles from "../styles/global.module.css";

function ModeratorPage() {
    return (
        <>
            <PageHeaderContainer/>
            <div
                className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
            >
                <ApplicationSidebar>
                    <ProfileSidebarCardContainer />
                </ApplicationSidebar>
        
                <ApplicationMainContent>
                    <ModeratorDashboardContainer />
                </ApplicationMainContent>
        </div>
      </>
    );
}

export default ModeratorPage;