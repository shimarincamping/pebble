import React, { useState } from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar.jsx";
import ApplicationMainContent from "../containers/ApplicationMainContent.jsx";
import PageHeaderContainer from "../containers/PageHeaderContainer.jsx";
import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer.jsx";
import LeaderboardPageMainContainer from "../containers/LeaderboardPageMainContainer.jsx";
import styles from "../styles/global.module.css";
import LeaderboardSectionSidebarItem from "../components/LeaderboardSectionSidebarItem.jsx";

export default function LeaderboardPage() {
    const [selectedProfile, setSelectedProfile] = useState(null);
    return (
        <>
            <PageHeaderContainer />
            <div
                className={`${styles.mainApplicationGridContainer} ${styles.mainApplicationNarrowBody}`}
            >
                <ApplicationSidebar>
                    <ProfileSidebarCardContainer />
                </ApplicationSidebar>

                <ApplicationMainContent>
                    <LeaderboardPageMainContainer
                        setSelectedProfile={setSelectedProfile}
                    />
                </ApplicationMainContent>

                <ApplicationSidebar>
                    <LeaderboardSectionSidebarItem {...selectedProfile} />
                </ApplicationSidebar>
            </div>
        </>
    );
}
