import React, { useState } from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import LeaderboardPageContainer from "../containers/LeaderboardPageMainContainer";
import styles from "../styles/global.module.css";
import LeaderboardSectionSidebarItem from "../components/LeaderboardSectionSidebarItem";
export default function Leaderboard() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  return (
    <div
      className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationNarrowBody}`}
    >
      <ApplicationSidebar>
        <ProfileSidebarCardContainer />
      </ApplicationSidebar>

      <ApplicationMainContent>
        <LeaderboardPageContainer setSelectedProfile={setSelectedProfile} />
      </ApplicationMainContent>

      <ApplicationSidebar>
        <LeaderboardSectionSidebarItem {...selectedProfile} />
      </ApplicationSidebar>
    </div>
  );
}
