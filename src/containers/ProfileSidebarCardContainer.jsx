import React, { useState, useEffect } from 'react';
import ProfileSidebarCard from '../components/ProfileSidebarCard';

function ProfileSidebarCardContainer() {

    // Dummy data ----------------------------
    const dummyProfileData = {
        "userID" : 1,
        "fullName" : "Anoop Singh",
        "profilePicture" : "https://i.imgur.com/qPzFvF4.jpeg",
        "courseName" : "Bachelor of Software Engineering",
        "userType" : "student",
        "currentYear" : 3,
        "about" : "Currently pursuing a Bachelor of Software Engineering with an extension in Data Science and a minor in Finance at Taylor's University. Graduating in early 2026.",
        "email" : "anoopharmahindersingh.singh@sd.taylors.edu.my",
        "phoneNumber" : "+60122603995",
        "discordUsername" : "anoopsinghhs"
    }

    // ---------------------------------------

    const [profileData, setProfileData] = useState(null);
    const [profileSubline, setProfileSubline] = useState([null, null])

    useEffect(
        () => {
            // Replace this with a fetch request for user data. The server should trim the raw database response to fit the object above.
            const fetchData = setInterval(() => {
                setProfileData(dummyProfileData);
                setProfileSubline(getProfileSubheading(dummyProfileData));
            }, 5000);

            return () => clearInterval(fetchData);
        },
    []);


    function getProfileSubheading(user) {
        switch (user.userType) {
            case "student":
                return [`Year ${user.currentYear}`, user.courseName];
            case "alumni" :
                return ["Alumni", user.courseName];
            case "lecturer":
                return ["Lecturer", "Taylor's University"];
            case "moderator":
                return ["Community moderator", "Taylor's University"];
            case "other":
                return ["PEBBLE user", "(External)"]
        }
    }


    return (
        <>
            {
                profileData ? (
                    <ProfileSidebarCard 
                        name={profileData.fullName}
                        pictureURL={profileData.profilePicture}
                        subline1={profileSubline[0]}
                        subline2={profileSubline[1]}
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