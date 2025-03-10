import React, { useState, useEffect } from "react";
import ProfileSidebarCard from "../components/ProfileSidebarCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import { useAuth } from "../containers/AuthProvider";

function ProfileSidebarCardContainer() {
    const { user } = useAuth(); // useAuth calls useContext, fetches userId

    const [profileData, setProfileData] = useState(null);
    const [profileSubline, setProfileSubline] = useState([null, null]);

    useEffect(() => {

        const handleFetchData = async () => {
            const currentUserID = await user; 
    
            const fetchedData = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${currentUserID}/profile-information/basic`
            );
            const fetchedJsonData = await fetchedData.json();
    
            setProfileData(fetchedJsonData);
            setProfileSubline(getProfileSubheading(fetchedJsonData));
        };

        handleFetchData();
    }, [user]);

    function getProfileSubheading(user) {
        switch (user.userType) {
            case "student":
                return [`Year ${user.currentYear}`, user.courseName];
            case "alumni":
                return ["Alumni", user.courseName];
            case "lecturer":
                return ["Lecturer", "Taylor's University"];
            case "moderator":
                return ["Community moderator", "Taylor's University"];
            default:
                return ["PEBBLE user", "(External)"];
        }
    }

    return (
        <>
            {profileData ? (
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
            ) : (
                <ComponentLoadingSpinner />
            )}
        </>
    );
}

export default ProfileSidebarCardContainer;
