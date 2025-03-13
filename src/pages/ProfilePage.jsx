import React from "react";
import { useParams } from "react-router-dom";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from "../containers/PageHeaderContainer.jsx";

import ProfilePageContainer from "../containers/ProfilePageContainer";
import CVSidebarCardContainer from "../containers/CVSidebarCardContainer";
import DashboardStatsSidebarCardContainer from "../containers/DashboardStatsSidebarCardContainer.jsx";
import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";

import styles from "../styles/global.module.css";

function ProfilePage() {
    const { id } = useParams();

    return (
        <>
            <PageHeaderContainer />
            <div
                className={`${styles.mainApplicationGridContainer} ${
                    id === "me" ? styles.mainApplicationWideBodyRight : styles.mainApplicationWideBodyLeft
                }`}
            >
                {id !== "me" && (
                    <ApplicationSidebar>
                        <ProfileSidebarCardContainer />
                    </ApplicationSidebar>
                )}
                <ApplicationMainContent>
                    <ProfilePageContainer id={id} />
                </ApplicationMainContent>
                {id === "me" && (
                    <ApplicationSidebar>
                        <CVSidebarCardContainer />
                        <DashboardStatsSidebarCardContainer />
                    </ApplicationSidebar>
                )}
            </div>
        </>
    );
}

export default ProfilePage;
