import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NetworkSidebarCard from "../components/NetworkSidebarCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import NetworkPopup from "../components/NetworkPopup";
import ApplicationMainOverlay from "../containers/ApplicationMainOverlay";
import { useAuth } from "./AuthProvider";

function NetworkSidebarCardContainer() {
    const navigate = useNavigate();
    const [networkData, setNetworkData] = useState(null);
    const [popupData, setPopupData] = useState(null);
    const [popupTitle, setPopupTitle] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const token = localStorage.getItem("jwtToken");
    const { user } = useAuth();
    const loggedInUserId = user;
    const userId = loggedInUserId;

    const fetchNetworkData = useCallback(async () => {
        if (!userId) {
            console.log("No userId found, skipping fetch");
            return;
        }

        try {
            const url = `${process.env.REACT_APP_API_URL}/users/${userId}/network`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);

            const data = await response.json();
            setNetworkData(data);
        } catch (error) {
            console.error("Error fetching network data:", error);
            setNetworkData([]); 
        }
    }, [token, userId]);

    useEffect(() => {
        fetchNetworkData();
    }, [fetchNetworkData]);

    const handleFollowUser = async (followeeId) => {
        if (!userId) {
            console.error("No userId found, cannot follow/unfollow");
            return;
        }
    
        if (!followeeId) {
            console.error("Invalid user ID provided.");
            return;
        }
    
        console.log(`Current User ID: ${userId}, Attempting to follow/unfollow User ID: ${followeeId}`);
    
        if (followeeId === userId) {
            console.warn("User cannot follow themselves.");
            return;
        }
    
        try {
            const url = `${process.env.REACT_APP_API_URL}/users/${followeeId}/followers`;
            const response = await fetch(url, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ followeeId }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error: ${response.status} - ${errorText}`);
            }
    
            console.log("Follow/unfollow successful!");
    
            setNetworkData((prevData) => {
                if (!prevData) return prevData;
    
                const isFollowing = prevData?.myFollowing?.includes(followeeId) || false;
    
                return {
                    ...prevData,
                    myFollowing: isFollowing
                        ? (prevData.myFollowing || []).filter((id) => id !== followeeId)
                        : [...(prevData.myFollowing || []), followeeId],
    
                    myFollowers: isFollowing
                        ? (prevData.myFollowers || []).filter((id) => id !== userId)
                        : [...(prevData.myFollowers || []), userId],
                };
            });
    
            alert(`You have ${networkData?.myFollowing?.includes(followeeId) ? "unfollowed" : "followed"} the user!`);
    
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
