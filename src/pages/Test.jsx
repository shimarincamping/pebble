import React from 'react';
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import SuccessDialogCard from "../components/SuccessDialogCard";
import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import CodingChallengePageContainer from '../containers/CodingChallengePageContainer';
import RewardWheelCardContainer from '../containers/RewardWheelCardContainer';
import ConfirmationDialogCard from '../components/ConfirmationDialogCard';
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
                {/* <RewardWheelCardContainer/> */}
                {/* <SuccessDialogCard/> */}
                <ConfirmationDialogCard/>
            </ApplicationMainContent>
      </div>
    );
}

export default Test;