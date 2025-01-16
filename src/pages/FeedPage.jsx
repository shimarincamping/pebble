import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import NetworkSidebarCardContainer from "../containers/NetworkSidebarCardContainer";


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
      </ApplicationMainContent>

      {
      <ApplicationSidebar>
        <NetworkSidebarCardContainer />
      </ApplicationSidebar>
      }

    </div>
  );
}

export default FeedPage;
