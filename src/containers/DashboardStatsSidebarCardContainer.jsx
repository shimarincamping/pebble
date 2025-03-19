import React, { useState, useEffect } from "react";
import DashboardStatsSidebarCard from "../components/DashboardStatsSidebarCard";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
import { useAuth } from "../containers/AuthProvider";

export default function DashboardStatsSidebarCardContainer() {
    const { user } = useAuth(); // useAuth calls useContext, fetches userId
    const token = localStorage.getItem("jwtToken");

    const [profileStats, setProfileStats] = useState(null);

    useEffect(() => {
        const handleFetchData = async () => {
            const currentUserID = await user;

            const fetchedData = await fetch(
                `${process.env.REACT_APP_API_URL}/users/${currentUserID}/stats`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const fetchedJsonData = await fetchedData.json();

            setProfileStats(fetchedJsonData);
        };

        handleFetchData();
    }, []);

    return (
        <>
            {profileStats ? (
                <DashboardStatsSidebarCard
                    leaderboardRank={profileStats.leaderboardRank}
                    leaderboardPercent={profileStats.leaderboardPercent}
                    totalPoints={profileStats.totalPoints}
                    tickets={profileStats.tickets}
                />
            ) : (
                <ComponentLoadingSpinner />
            )}
        </>
    );
}
