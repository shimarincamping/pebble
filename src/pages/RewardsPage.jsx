import React from 'react';
import styles from '../styles/global.module.css'
import ApplicationSidebar from '../containers/ApplicationSidebar.jsx';
import ApplicationMainContent from '../containers/ApplicationMainContent.jsx';
import PageHeaderContainer from '../containers/PageHeaderContainer.jsx';

import RewardWheelCardContainer from '../containers/RewardWheelCardContainer.jsx'
import ProfileSidebarCardContainer from '../containers/ProfileSidebarCardContainer.jsx';
import CurrencySidebarCard from '../components/CurrencySidebarCard.jsx';


function RewardsPage(){
    return (
        <>
            <PageHeaderContainer/>
            
            <div
            className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
            >
            <ApplicationSidebar>
                <ProfileSidebarCardContainer />
                <CurrencySidebarCard />
            </ApplicationSidebar>
        
            <ApplicationMainContent >
                    <RewardWheelCardContainer/>
            </ApplicationMainContent>
        
            </div>
        </>
      );

}

export default RewardsPage;