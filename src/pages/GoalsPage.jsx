import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from '../containers/PageHeaderContainer.jsx';

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import GoalsPageContainer from "../containers/GoalsPageContainer";
import CurrencySidebarCardContainer from "../containers/CurrencySidebarCardContainer";

import styles from "../styles/global.module.css";


function GoalsPage() {
  return (
    <>
      <PageHeaderContainer/>
      <div
        className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}  
      >
        <ApplicationSidebar>
          <ProfileSidebarCardContainer />
          <CurrencySidebarCardContainer />
        </ApplicationSidebar>

        <ApplicationMainContent>
          <GoalsPageContainer />
        </ApplicationMainContent>
      </div>
    </>
  );
}

export default GoalsPage;
