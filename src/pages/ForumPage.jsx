import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from '../containers/PageHeaderContainer.jsx';

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import ForumPageContainer from "../containers/ForumPageContainer";

import styles from "../styles/global.module.css";

function ForumPage() {
  return (
    <>
      <PageHeaderContainer/>
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
    </>
  );
}

export default ForumPage;
