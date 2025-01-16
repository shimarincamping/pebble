import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import DashboardStatsSidebarCardContainer from "../containers/DashboardStatsSidebarCardContainer";
import NetworkSidebarCardContainer from "../containers/NetworkSidebarCardContainer";
import PostCreationCard from "../components/PostCreationCard";


import styles from "../styles/global.module.css";


function FeedPage() {
  return (
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
  );
}

export default FeedPage;

