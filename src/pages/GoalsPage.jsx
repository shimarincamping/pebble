import React from 'react';
import ApplicationSidebar from '../containers/ApplicationSidebar';
import ProfileSidebarCardContainer from '../containers/ProfileSidebarCardContainer';


function GoalsPage() {
    return(
        <>
            <ApplicationSidebar>
                <ProfileSidebarCardContainer />
                <ProfileSidebarCardContainer />
                <ProfileSidebarCardContainer />
                <ProfileSidebarCardContainer />
            </ApplicationSidebar>
        </>
    );
}

export default GoalsPage;