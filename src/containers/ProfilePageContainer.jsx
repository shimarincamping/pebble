import React, {useState, useEffect} from "react";

import ProfilePageHeaderInfoCard from "../components/ProfilePageHeaderInfoCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";

import ApplicationMainOverlay from './ApplicationMainOverlay';
import ProfilePageDetailCardContainer from "./ProfilePageDetailCardContainer";
import ProfilePagePostsCardContainer from "./ProfilePagePostsCardContainer";
import EditProfileFormContainer from "./EditProfileFormContainer";

function ProfilePageContainer({id}) {

    const isMyProfile = (id === "me");

    const dummyProfileData = {
        "fullName" : "Anoop Singh",
        "profilePicture" : "https://i.imgur.com/qPzFvF4.jpeg",
        "courseName" : "Bachelor of Software Engineering",
        "userType" : "student",
        "currentYear" : 3,
        "about" : "Currently pursuing a Bachelor of Software Engineering with an extension in Data Science and a minor in Finance at Taylor's University. Graduating in early 2026. Ready to make an impact on the world. Interested in developing well-architected solutions that meet ever-evolving business demands in the wake of Industry 4.0",
        "email" : "anoopharmahindersingh.singh@sd.taylors.edu.my",
        "phoneNumber" : "+60122603995",
        "discordUsername" : "anoopsinghhs",

        "followerCount" : 105,
        "isFollowingUser" : false,
        "latestPost" : {
            // Replace with information needed to render a Post component
            "title" : "Insert user's one (1) latest post here using a <Post> component (same as Feed)"
        }
    }

    const dummyProfileDetailsData = {
        "workExperience" : [
            {
                icon : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg",
                heading : "Chess Tutor",
                subheading : "Jan 2023 - Present",
                description : "Planning and conducting chess lessons to facilitate high level understanding of complex concepts among children aged 5-12. Enjoyment and development of the passion from the game is always prioritised."
            }
        ],
        "coursesAndCertifications" : [
            {
                icon : "https://i.imgur.com/D9IuBml.jpeg",
                heading : "Learn SQL Course",
                subheading : "Codecademy • Jan 2025",
                description : "Completed an introductory SQL course, mastering database design, queries, joins, data manipulation, and optimization techniques."
            }, {
                icon : "https://i.imgur.com/D9IuBml.jpeg",
                heading : "Learn React Course",
                subheading : "Codecademy • Jan 2025",
                description : "Acquired skills in building dynamic and interactive user interfaces, managing state, handling events, and creating reusable, modular UI components for modern web applications."
            }
        ],
        "skills" : [
            {
                icon : "https://cdn-icons-png.freepik.com/256/15707/15707874.png",
                heading : "Content Creation and Digital Marketing",
                subheading : "YouTube",
                description : "Utilising data scraping and processing techniques combined with GUI programming using a Python framework to deliver regular content to over 2000 subscribers. Generated over RM1500 in revenue across all income streams."
            }
        ]
    }

    const dummyUserPostHistory = [
        // Replace with information needed to render a Post component
        {"title" : "THIS IS A PLACEHOLDER! -- POST #1"},
        {"title" : "THIS IS A PLACEHOLDER! -- POST #2"},
        {"title" : "THIS IS A PLACEHOLDER! -- POST #3"}
    ]

    const [userProfileData, setUserProfileData] = useState(null);
    const [userProfileDetails, setUserProfileDetails] = useState(null);
    const [userPostHistory, setUserPostHistory] = useState(null);
    const [isEditProfileFormVisible, setIsEditProfileFormVisible] = useState(false);

    useEffect(
        () => {
            setUserProfileData(dummyProfileData);  // When calling the backend API, use the ID provided to determine whose data to fetch
            setUserProfileDetails(dummyProfileDetailsData);
        },
    []);

    // ====================================NOTES=================================================

    // On ADD, EDIT, or REMOVE request (for both user data and profile details), 
        // POST information to backend.
        // Once successful, trigger a refresh in the component
            // Maybe this can be triggered by updating a state variable
            // that is changed upon each successful form submission
            // and placing this variable in the useEffect() dependency array that initiates the backend API call

    // For frontend, assume the backend will respond after every action with an updated set of data
    // The following functions "can" be used to simulate these actions, I am keeping them here as reference for future backend development


    function updateProfileData(dataKey, newValue) {
        setUserProfileData((prev) => ({...prev, [dataKey] : newValue}));
    }

    function updateProfileDetails(dataKey, newValue) {
        setUserProfileDetails((prev) => ({...prev, [dataKey] : newValue}));
    }

    // ====================================NOTES=================================================

    function initPostHistory() {
        setUserPostHistory(dummyUserPostHistory);
    }

    function toggleFollow() {
        alert(`Successfully sent an API call to ${(userProfileData.isFollowingUser) ? 'unfollow' : 'follow'} user ID ${id}`);
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