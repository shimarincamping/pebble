import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from '../containers/PageHeaderContainer.jsx';

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import DashboardStatsSidebarCardContainer from "../containers/DashboardStatsSidebarCardContainer";
import NetworkSidebarCardContainer from "../containers/NetworkSidebarCardContainer";
import PostCreationCard from "../components/PostCreationCard";
import RewardWheelCardContainer from "../containers/RewardWheelCardContainer";

import styles from "../styles/global.module.css";


function FeedPage() {
  return (
    <>
      <PageHeaderContainer/>

      <div
        className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationNarrowBody}`}  
      >
        <ApplicationSidebar>
          <ProfileSidebarCardContainer />
        </ApplicationSidebar>

        <ApplicationMainContent>
          <PostCreationCard />
        </ApplicationMainContent>

        <ApplicationSidebar>
          <DashboardStatsSidebarCardContainer />
          <NetworkSidebarCardContainer />
        </ApplicationSidebar>

      </div>
    </>
  );
  
}

export default FeedPage;

