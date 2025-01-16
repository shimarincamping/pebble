import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import ForumPageContainer from "../containers/ForumPageContainer";

import styles from "../styles/global.module.css";

function ForumPage() {
  return (
    <div
      className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBodyLeft}`}
    >
      <ApplicationSidebar>
        <ProfileSidebarCardContainer />
      </ApplicationSidebar>
      <ApplicationMainContent>
        <ForumPageContainer />
      </ApplicationMainContent>
    </div>
  );
}

export default ForumPage;
