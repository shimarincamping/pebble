import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import GoalsPageContainer from "../containers/GoalsPageContainer";
import CurrencySidebarCard from "../components/CurrencySidebarCard";

import styles from "../styles/global.module.css";


function GoalsPage() {
  return (
    
    <div
      className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
    >
      <ApplicationSidebar>
        <ProfileSidebarCardContainer />
        <CurrencySidebarCard />
      </ApplicationSidebar>

      <ApplicationMainContent>
        <GoalsPageContainer />
      </ApplicationMainContent>
    </div>
  );
}

export default GoalsPage;
