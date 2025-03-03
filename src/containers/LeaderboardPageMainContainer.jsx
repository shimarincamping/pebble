import React, { useState, useEffect } from "react";
import LeaderboardSectionHeader from "../components/LeaderboardSectionHeader";
import LeaderboardSectionItem from "../components/LeaderboardSectionItem";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";
export default function LeaderboardPageMainContainer({ setSelectedProfile }) {
    const [leaderboardData, setLeaderboardData] = useState(null);

    const fetchLeaderboardData = async () => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/leaderboard`
            );
            const data = await response.json();
            setLeaderboardData(data);
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
        }
    };

    useEffect(() => {
        fetchLeaderboardData();
    }, []);

    useEffect(() => {
        if (leaderboardData != null) {
            setSelectedProfile(leaderboardData[0]);
        } else {
            <ComponentLoadingSpinner />;
        }
    }, [leaderboardData]);

    return (
        <div>
            <LeaderboardSectionHeader
                title="Leaderboard"
                subtitle="Top Performing Students"
                buttonText="Goals"
                buttonRedirect="/goals"
            />
            {leaderboardData ? (
                <>
                    {leaderboardData.map((ranking, index) => (
                        <div onClick={() => setSelectedProfile(ranking)}>
                            <LeaderboardSectionItem
                                leaderboardIndex={index}
                                {...ranking}
                            />
                        </div>
                    ))}
                </>
            ) : (
                <ComponentLoadingSpinner />
            )}
        </div>
    );
}
