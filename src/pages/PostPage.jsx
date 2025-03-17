import React from "react";
import { useParams } from "react-router-dom";
import PageHeaderContainer from "../containers/PageHeaderContainer";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import DashboardStatsSidebarCardContainer from "../containers/DashboardStatsSidebarCardContainer";
import NetworkSidebarCardContainer from "../containers/NetworkSidebarCardContainer";
import PostCardContainer from "../containers/PostCardContainer";
import styles from "../styles/global.module.css";

function PostPage() {
    const { postID } = useParams(); // Get post ID from URL

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
                    <PostCardContainer singlePostID={postID} />
                </ApplicationMainContent>

                <ApplicationSidebar>
                    <DashboardStatsSidebarCardContainer />
                    <NetworkSidebarCardContainer />
                </ApplicationSidebar>
            </div>
        </>
    );
}

export default PostPage;
