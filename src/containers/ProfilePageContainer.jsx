import React, {useState, useEffect} from "react";

import ProfilePageHeaderInfoCard from "../components/ProfilePageHeaderInfoCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";

import ApplicationMainOverlay from './ApplicationMainOverlay';

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
            "title" : "THIS IS A PLACEHOLDER!"
        }
    }

    const dummyProfileDetailsData = {
        "workExperience" : [

        ],
        "coursesAndCertifications" : [

        ],
        "skills" : [

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
            // Replace this with a fetch request for user data. The server should trim the raw database response to fit the object above.
            const fetchData = setInterval(() => {
                setUserProfileData(dummyProfileData);  // When calling the backend API, use the ID provided to determine whose data to fetch
                setUserProfileDetails(dummyProfileDetailsData);
            }, 5000);

            return () => clearInterval(fetchData);
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

    /*
    function updateProfileData(key, newValue) {
        setUserProfileData((prev) => ({...prev, key : newValue}));
    }

    function updateProfileDetails(key, newValue) {
        setUserProfileDetails((prev) => ({...prev, key: newValue}));
    }

        function addProfileDetail(type, newEntry) {
            updateProfileDetails(type, [...userProfileDetails[type], newEntry])
        }

        function editProfileDetail(type, index, newEntry) {
            updateProfileDetails(type, userProfileDetails[type].map((item, i) => i === index ? newEntry : item));
        }

        function removeProfileDetail(type, index) {
            updateProfileDetails(type, userProfileDetails[type].filter((_, i) => i !== index));
        }
    */

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
                        <h1>Placeholder! -- Post history card</h1>
                        <h1>Placeholder! -- Experiences card</h1>
                        <h1>Placeholder! -- Courses & certifications card</h1>
                        <h1>Placeholder! -- Skills card</h1>
                    </>
                ) : (<ComponentLoadingSpinner />)
            }

            {isEditProfileFormVisible && (
                <ApplicationMainOverlay>
                    <span onClick={() => setIsEditProfileFormVisible(false)}>Placeholder: Edit Profile Form</span>
                </ApplicationMainOverlay>
            )}

        </>
    )
}

export default ProfilePageContainer;