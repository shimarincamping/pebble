import React, { useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";

import ProfilePageHeaderInfoCard from "../components/ProfilePageHeaderInfoCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";

import ApplicationMainOverlay from "./ApplicationMainOverlay";
import ProfilePageDetailCardContainer from "./ProfilePageDetailCardContainer";
import ProfilePagePostsCardContainer from "./ProfilePagePostsCardContainer";
import EditProfileFormContainer from "./EditProfileFormContainer";

function ProfilePageContainer({ id }) {

    const { user } = useAuth();
    const isMyProfile = (id === "me");
    const currentRequestID = (async () => {
        return (isMyProfile) ? (await user) : id;
    })();

    const [userProfileData, setUserProfileData] = useState(null);
    const [userProfileDetails, setUserProfileDetails] = useState(null);
    const [userPostHistory, setUserPostHistory] = useState(null);
    const [isEditProfileFormVisible, setIsEditProfileFormVisible] = useState(false);

    useEffect(() => {
        const handleFetchProfileData = async () => {

            const fetchedProfileData = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${currentRequestID}/profile-information/full`
            );
    
            if (fetchedProfileData.ok) {
                const fetchedJsonProfileData = await fetchedProfileData.json();
                setUserProfileData(fetchedJsonProfileData);
                setUserProfileDetails(fetchedJsonProfileData.profileDetails);
            }
    
            if (fetchedProfileData.status === 404) {
                alert("The user profile does not exist or could not be found.");
            }
        };

        handleFetchProfileData();
    }, [currentRequestID]);


    useEffect(() => {
        const pushAllProfileData = async () => {

            await fetch(`${process.env.REACT_APP_API_URL}/users/${currentRequestID}`, {
                method: "PUT",
                body: JSON.stringify({
                    ...userProfileData,
                    profileDetails: userProfileDetails,
                }),
                headers: new Headers({
                    "Content-Type": "application/json; charset=UTF-8",
                }),
            });
        };

        pushAllProfileData();
    }, [currentRequestID, userProfileData, userProfileDetails]);

    const handleFetchPostHistory = async () => {

        const fetchedPostHistoryData = await fetch(
            `${process.env.REACT_APP_API_URL}/posts?authorID=${currentRequestID}`
        );
        const fetchedJsonPostHistoryData = await fetchedPostHistoryData.json();

        setUserPostHistory(fetchedJsonPostHistoryData);
    };

    const toggleFollow = async () => {

        await fetch(`${process.env.REACT_APP_API_URL}/users/${currentRequestID}/followers`, {
            method: "PUT",
        });
        setUserProfileData((prev) => ({
            ...prev,
            isFollowingUser: !prev.isFollowingUser,
            followerCount: prev.followerCount + (prev.isFollowingUser ? -1 : 1),
        }));
    }


    function updateProfileData(dataKey, newValue) {
        setUserProfileData((prev) => ({ ...prev, [dataKey]: newValue }));
    }

    function updateProfileDetails(dataKey, newValue) {
        setUserProfileDetails((prev) => ({ ...prev, [dataKey]: newValue }));
    }

    function initPostHistory() {
        handleFetchPostHistory();
    }

    return (
        <>
            {userProfileData && userProfileDetails ? (
                <>
                    <ProfilePageHeaderInfoCard
                        {...userProfileData}
                        isMyProfile={isMyProfile}
                        toggleEditProfileFormVisible={() => setIsEditProfileFormVisible(true)}
                        toggleFollow={toggleFollow}
                    />
                    <ProfilePagePostsCardContainer
                        latestPost={userProfileData.latestPost}
                        allPosts={userPostHistory}
                        getAllPosts={initPostHistory}
                        showPostButton={isMyProfile}
                    />
                    <ProfilePageDetailCardContainer
                        dataKey="workExperience"
                        title="Work Experience"
                        data={userProfileDetails.workExperience}
                        handleNewDetails={updateProfileDetails}
                        isEditable={isMyProfile}
                    />
                    <ProfilePageDetailCardContainer
                        dataKey="coursesAndCertifications"
                        title="Courses and Certifications"
                        data={userProfileDetails.coursesAndCertifications}
                        handleNewDetails={updateProfileDetails}
                        isEditable={isMyProfile}
                    />
                    <ProfilePageDetailCardContainer
                        dataKey="skills"
                        title="Skills"
                        data={userProfileDetails.skills}
                        handleNewDetails={updateProfileDetails}
                        isEditable={isMyProfile}
                    />
                </>
            ) : (
                <ComponentLoadingSpinner />
            )}

            {isEditProfileFormVisible && (
                <ApplicationMainOverlay>
                    <EditProfileFormContainer
                        initialData={userProfileData}
                        onClose={() => setIsEditProfileFormVisible(false)}
                        onSave={updateProfileData}
                    />
                </ApplicationMainOverlay>
            )}
        </>
    );
}

export default ProfilePageContainer;
