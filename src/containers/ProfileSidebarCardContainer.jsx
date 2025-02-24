import React, { useState, useEffect } from 'react';
import ProfileSidebarCard from '../components/ProfileSidebarCard';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

function ProfileSidebarCardContainer() {

    const [profileData, setProfileData] = useState(null);
    const [profileSubline, setProfileSubline] = useState([null, null])

    const handleFetchData = async () => {
        const currentUserID = "3oMAV7h8tmHVMR8Vpv9B" // Replace with value set by authentication feature, currently always Anoop

        const fetchedData = await fetch(`${process.env.REACT_APP_API_URL}/users/${currentUserID}/profile-information/basic`);
        const fetchedJsonData = await fetchedData.json();

        setProfileData(fetchedJsonData);
        setProfileSubline(getProfileSubheading(fetchedJsonData));
    }

    useEffect(() => { handleFetchData(); }, []);


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
                ) : (<ComponentLoadingSpinner />)
            }
        </>
    );
}

export default ProfileSidebarCardContainer;