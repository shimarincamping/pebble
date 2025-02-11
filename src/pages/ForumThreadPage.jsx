import React from "react";
import ApplicationSidebar from "../containers/ApplicationSidebar";
import ApplicationMainContent from "../containers/ApplicationMainContent";

import ProfileSidebarCardContainer from "../containers/ProfileSidebarCardContainer";
import ForumThreadContainer from "../containers/ForumThreadContainer";

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
                <ForumThreadContainer />
            </ApplicationMainContent>
        </div>
    );
}

export default ForumPage;
