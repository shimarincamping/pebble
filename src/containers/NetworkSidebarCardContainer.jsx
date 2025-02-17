import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NetworkSidebarCard from "../components/NetworkSidebarCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import NetworkPopup from "../components/NetworkPopup";
import ApplicationMainOverlay from "../containers/ApplicationMainOverlay";

function NetworkSidebarCardContainer() {
  const navigate = useNavigate();

  const dummyNetworkData = {
    followerCount: 105,
    myFollowers: [
      { userID: 1, shortName: "Brendan", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 2, shortName: "Haarish", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 3, shortName: "Najihah", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 4, shortName: "Wei Lee", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 5, shortName: "Ivy Chung", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 6, shortName: "Wei Zhe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 7, shortName: "Jay Leow", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" },
      { userID: 8, shortName: "Nicholas", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg" }
    ],
    mySuggestedUsers: [
      { userID: 9, shortName: "Frederick Lau", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Software Engineering", year: 3 },
      { userID: 10, shortName: "John Doe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Software Engineering", year: 3 },
      { userID: 11, shortName: "Jane Doe", profilePicture: "https://i.imgur.com/qPzFvF4.jpeg", course: "Computer Science", year: 3 }
    ]
  };

  const [networkData, setNetworkData] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = setInterval(() => {
      setNetworkData(dummyNetworkData);
    }, 5000);

    return () => clearInterval(fetchData);
  }, []);

  function handleFollowUser({ target }) {
    console.log(`Sent a server request to follow user ID: ${target.value}`);
  }

  function handleUserClick(userID) {
    navigate(`/profile/${userID}`);
  }

  function handleOpenPopup(type) {
    if (type === "followers") {
      setPopupTitle("All Followers");
      setPopupData(networkData?.myFollowers || []);
    } else if (type === "suggested") {
      setPopupTitle("People You May Know");
      setPopupData(networkData?.mySuggestedUsers || []);
    }
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      {networkData ? (
        <NetworkSidebarCard 
          {...networkData}
          handleFollowUser={handleFollowUser}
          handleUserClick={handleUserClick}
          handleOpenPopup={handleOpenPopup}
        />
      ) : (
        <ComponentLoadingSpinner />
      )}

      {isPopupOpen && (
        <ApplicationMainOverlay>
          <NetworkPopup 
            title={popupTitle}
            users={popupData}
            handleClose={handleClosePopup}
            handleUserClick={handleUserClick}
            handleFollowUser={popupTitle === "People You May Know" ? handleFollowUser : null}
          />
        </ApplicationMainOverlay>
      )}
    </>
  );
}

export default NetworkSidebarCardContainer;
