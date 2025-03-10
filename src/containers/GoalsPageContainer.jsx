import React, { useState, useEffect } from "react";
import { useAuth } from "../containers/AuthProvider";

import RewardsPageHeader from "../components/RewardsPageHeader";
import GoalSectionComponent from "../components/GoalSectionComponent";
import ComponentLoadingSpinner from "../components/ComponentLoadingSpinner";

function GoalsPageContainer() {
    const { user } = useAuth();
    const [goalsList, setGoalsList] = useState(null);
    const token = localStorage.getItem("jwtToken");

    const handleFetchData = async () => {
        const currentUserID = await user;

        const fetchedData = await fetch(
            `${process.env.REACT_APP_API_URL}/goals`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const fetchedJsonData = await fetchedData.json();

        setGoalsList(fetchedJsonData);
    };

    useEffect(() => {
        handleFetchData();
    }, []);

    return (
        <div>
            {goalsList ? (
                <>
                    <RewardsPageHeader
                        title="Goals"
                        subtitle="Complete missions and earn points to spin the wheel!"
                        buttonText="Leaderboard"
                        buttonRedirect="/leaderboard"
                    />
                    <GoalSectionComponent
                        goalType="Daily"
                        goals={goalsList.daily}
                    />
                    <GoalSectionComponent
                        goalType="Core"
                        goals={goalsList.core}
                    />
                </>
            ) : (
                <ComponentLoadingSpinner />
            )}
        </div>
    );
}

export default GoalsPageContainer;
