import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import CareerRoadmapPostContainer from '../containers/CareerRoadmapPostContainer';
import styles from "../styles/global.module.css";

function CareerRoadmapPage() {
    return (
        <div
            className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
        >
            <ApplicationSidebar>
                <ProfileSidebarCardContainer />
            </ApplicationSidebar>
    
            <ApplicationMainContent>
                <CareerRoadmapPostContainer />
            </ApplicationMainContent>
      </div>
    );
}

export default CareerRoadmapPage;