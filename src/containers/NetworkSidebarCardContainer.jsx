import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NetworkSidebarCard from "../components/NetworkSidebarCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import NetworkPopup from "../components/NetworkPopup";
import ApplicationMainOverlay from "../containers/ApplicationMainOverlay";

function NetworkSidebarCardContainer({ loggedInUserId }) {
  const navigate = useNavigate();
  const [networkData, setNetworkData] = useState(null);
  const [popupData, setPopupData] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Use a test user ID if loggedInUserId is missing
  const userId = loggedInUserId;

  console.log("Using userID:", userId);

  const fetchNetworkData = useCallback(async () => {
    console.log("fetchNetworkData function is being called");

    if (!userId) {
      console.log("No userId found, skipping fetch");
      return;
    }

    try {
      const url = `${process.env.REACT_APP_API_URL}/users/${userId}/network`;
      console.log("Fetching:", url);

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      console.log("Response status:", response.status);

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      console.log("Data received:", data);
      setNetworkData(data);
    } catch (error) {
      console.error("Error fetching network data:", error);
      setNetworkData([]); // Prevents errors due to missing data
    }
  }, [userId]);

  useEffect(() => {
    fetchNetworkData();
  }, [fetchNetworkData]);

  const handleFollowUser = async ({ target }) => {
    const userID = target.value;
    if (!userId) {
      console.error("No userId found, cannot follow/unfollow");
      return;
    }
  
    console.log(`Attempting to follow/unfollow user: ${userID}`);
  
    try {
      const url = `${process.env.REACT_APP_API_URL}/users/${userId}/followers`;
      console.log("Making request to:", url);
  
      const payload = { followeeId: userID };
      console.log("Payload:", JSON.stringify(payload));
  
      const response = await fetch(url, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      console.log("Response status:", response.status);
      const responseData = await response.text(); // Get the response body
      console.log("Response body:", responseData);
  
      if (!response.ok) throw new Error(`Error: ${response.status} - ${responseData}`);
  
      console.log("Follow/unfollow successful!");
      fetchNetworkData(); // Refresh network data
    } catch (error) {
      console.error("Error following/unfollowing user:", error);
    }
  };
  
  const handleUserClick = (userID) => {
    navigate(`/profile/${userID}`);
  };

  const handleOpenPopup = (type) => {
    if (!networkData) return;

    if (type === "followers") {
      setPopupTitle("All Followers");
      setPopupData(networkData.myFollowers);
    } else if (type === "suggested") {
      setPopupTitle("People You May Know");
      setPopupData(networkData.mySuggestedUsers);
    }
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

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
