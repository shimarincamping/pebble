import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";

import ForumContainer from "../containers/ForumContainer";

import styles from "../styles/global.module.css";

function LearnForum() {
  return (
    <div
      className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBody}`}
    >
      <ApplicationSidebar>
        <ProfileSidebarCardContainer />
      </ApplicationSidebar>
      <ApplicationMainContent>
        <ForumContainer />
      </ApplicationMainContent>
    </div>
  );
}

export default LearnForum;
