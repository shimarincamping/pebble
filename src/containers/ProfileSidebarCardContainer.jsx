import React, { useState, useEffect } from 'react';
import ProfileSidebarCard from '../components/ProfileSidebarCard';

function ProfileSidebarCardContainer() {

    // Dummy data ----------------------------
    const dummyProfileData = {
        "userID" : 1,
        "fullName" : "Anoop Singh",
        "profilePicture" : "https://i.imgur.com/qPzFvF4.jpeg",
        "courseName" : "Bachelor of Software Engineering",
        "isCurrentStudent" : true,
        "currentYear" : 3,
        "about" : "Currently pursuing a Bachelor of Software Engineering with an extension in Data Science and a minor in Finance at Taylor's University. Graduating in early 2026.",
        "email" : "anoopharmahindersingh.singh@sd.taylors.edu.my",
        "phoneNumber" : "+60122603995",
        "discordUsername" : "anoopsinghhs"
    }

    // ---------------------------------------

    const [profileData, setProfileData] = useState(null);

    useEffect(
        () => {
            // Replace this with a fetch request for user data. The server should trim the raw database response to fit the object above.
            const fetchData = setInterval(() =>
                setProfileData(dummyProfileData),
            5000);

            return () => clearInterval(fetchData);
        },
    []);


    return (
        <>
            {
                profileData ? (
                    <ProfileSidebarCard 
                        name={profileData.fullName}
                        pictureURL={profileData.profilePicture}
                        year={profileData.currentYear}
                        course={profileData.courseName}
                        about={profileData.about}
                        email={profileData.email}
                        phone={profileData.phoneNumber}
                        discord={profileData.discordUsername}
                    />
                ) : <ProfileSidebarCard />
            }
        </>
    );
}

export default ProfileSidebarCardContainer;