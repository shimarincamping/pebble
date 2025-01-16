import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import CodingChallengePageContainer from '../containers/CodingChallengePageContainer';
import styles from "../styles/global.module.css";

function CodingChallengePage() {
    return (
        <div
            className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
        >
            <ApplicationSidebar>
                <ProfileSidebarCardContainer />
            </ApplicationSidebar>
    
            <ApplicationMainContent>
                <CodingChallengePageContainer />
            </ApplicationMainContent>
      </div>
    );
}

export default CodingChallengePage;