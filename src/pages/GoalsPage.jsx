import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import GoalsPageContainer from "../containers/GoalsPageContainer";
import CurrencyCard from "../components/CurrencyCard";

import styles from "../styles/global.module.css";


function GoalsPage() {
  return (
    
    <div
      className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBody}`}  
    >
      <ApplicationSidebar>
        <ProfileSidebarCardContainer />
        <CurrencyCard />
      </ApplicationSidebar>

      <ApplicationMainContent>
        <GoalsPageContainer />
      </ApplicationMainContent>
    </div>
  );
}

export default GoalsPage;
