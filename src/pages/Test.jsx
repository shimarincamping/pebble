import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import CodingChallengePageContainer from '../containers/CodingChallengePageContainer';
import RewardWheelCardContainer from '../containers/RewardWheelCardContainer';
import styles from "../styles/global.module.css";

function Test() {
    return (
        <div
            className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
        >
            <ApplicationSidebar>
                <ProfileSidebarCardContainer />
            </ApplicationSidebar>
    
            <ApplicationMainContent>
                <RewardWheelCardContainer/>
            </ApplicationMainContent>
      </div>
    );
}

export default Test;