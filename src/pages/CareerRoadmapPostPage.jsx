import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from '../containers/PageHeaderContainer.jsx';

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import CareerRoadmapPostContainer from '../containers/CareerRoadmapPostContainer';
import styles from "../styles/global.module.css";

function CareerRoadmapPage() {
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
                    <CareerRoadmapPostContainer />
                </ApplicationMainContent>
        </div>
      </>
    );
}

export default CareerRoadmapPage;