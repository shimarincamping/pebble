import React, {useState, useEffect} from "react";

import ProfilePageHeaderInfoCard from "../components/ProfilePageHeaderInfoCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";

import ApplicationMainOverlay from './ApplicationMainOverlay';
import ProfilePageDetailCardContainer from "./ProfilePageDetailCardContainer";
import ProfilePagePostsCardContainer from "./ProfilePagePostsCardContainer";
import EditProfileFormContainer from "./EditProfileFormContainer";

function ProfilePageContainer({id}) {

    const isMyProfile = (id === "me");

    const [userProfileData, setUserProfileData] = useState(null);
    const [userProfileDetails, setUserProfileDetails] = useState(null);
    const [userPostHistory, setUserPostHistory] = useState(null);
    const [isEditProfileFormVisible, setIsEditProfileFormVisible] = useState(false);


    const handleFetchProfileData = async () => {
        const currentRequestID = (isMyProfile) ? "3oMAV7h8tmHVMR8Vpv9B" : id; // Replace with value set by authentication feature, currently always Anoop

        const fetchedProfileData = await fetch(`${process.env.REACT_APP_API_URL}/users/${currentRequestID}/profile-information/full`);
        const fetchedJsonProfileData = await fetchedProfileData.json();
        setUserProfileData(fetchedJsonProfileData);
        setUserProfileDetails(fetchedJsonProfileData.profileDetails);
    }

    const handleFetchPostHistory = async () => {
        const currentRequestID = (isMyProfile) ? "3oMAV7h8tmHVMR8Vpv9B" : id; // Replace with value set by authentication feature, currently always Anoop

        const fetchedPostHistoryData = await fetch(`${process.env.REACT_APP_API_URL}/posts?authorID=${currentRequestID}`);
        const fetchedJsonPostHistoryData = await fetchedPostHistoryData.json();

        setUserPostHistory(fetchedJsonPostHistoryData);
    }

    useEffect(() => { handleFetchProfileData(); }, []);

    // TODO: Find a way to handle updates without calling backend after initial render
    useEffect(() => { pushAllProfileData(); }, [userProfileData, userProfileDetails]);



    function updateProfileData(dataKey, newValue) {
        setUserProfileData((prev) => ({...prev, [dataKey] : newValue}));
    }

    function updateProfileDetails(dataKey, newValue) {
        setUserProfileDetails((prev) => ({...prev, [dataKey] : newValue}));
    }

    async function pushAllProfileData() {

        const currentRequestID = (isMyProfile) ? "3oMAV7h8tmHVMR8Vpv9B" : id; // Replace with value set by authentication feature, currently always Anoop
        await fetch(`${process.env.REACT_APP_API_URL}/users/${currentRequestID}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...userProfileData,
                profileDetails : userProfileDetails
            }),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        });
    }

    function initPostHistory() {
        handleFetchPostHistory();
    }

    async function toggleFollow() {

        const currentRequestID = (isMyProfile) ? "3oMAV7h8tmHVMR8Vpv9B" : id; // Replace with value set by authentication feature, currently always Anoop

        await fetch(`${process.env.REACT_APP_API_URL}/users/${currentRequestID}/followers`, {
            method: 'PUT'
        });
        setUserProfileData((prev) => ({...prev, 
            isFollowingUser : !(prev.isFollowingUser),
            followerCount : prev.followerCount + ((prev.isFollowingUser) ? -1 : 1)
        }));
    }


    return (
        <>
            {
                (userProfileData && userProfileDetails) ? (
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
                ) : (<ComponentLoadingSpinner />)
            }

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
    )
}

export default ProfilePageContainer;