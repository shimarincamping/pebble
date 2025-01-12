import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";

import styles from "../styles/global.module.css";
import DashboardStatsCard from "../components/DashboardStatsCard";

function GoalsPage() {
  return (
    <div
      className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationWideBody}`}
    >
      <ApplicationSidebar>
        <ProfileSidebarCardContainer />
      </ApplicationSidebar>
      <main>
        <h1>Main content goes here! (to be replaced with Goals components)</h1>
        <DashboardStatsCard />
      </main>
    </div>
  );
}

export default GoalsPage;
