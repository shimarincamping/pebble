import React, { useContext, useState } from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";
import PageHeaderContainer from "../containers/PageHeaderContainer.jsx";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import DashboardStatsSidebarCardContainer from "../containers/DashboardStatsSidebarCardContainer";
import NetworkSidebarCardContainer from "../containers/NetworkSidebarCardContainer";
import PostCardContainer from "../containers/PostCardContainer";

import styles from "../styles/global.module.css";
import PostCreationCardContainer from "../containers/PostCreationCardContainer.jsx";

import { useAuth } from "../containers/AuthProvider";
function FeedPage() {
    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const loggedInUserId = user;

    const [newPost, setNewPost] = useState(null);

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
                    <PostCreationCardContainer onNewPost={setNewPost} />
                    <PostCardContainer newPost={newPost} />
                </ApplicationMainContent>

                <ApplicationSidebar>
                    <DashboardStatsSidebarCardContainer />
                    <NetworkSidebarCardContainer
                        loggedInUserId={loggedInUserId}
                    />
                </ApplicationSidebar>
            </div>
        </>
    );
}

export default FeedPage;
