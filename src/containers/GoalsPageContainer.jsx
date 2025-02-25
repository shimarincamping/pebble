import React, { useState, useEffect } from 'react';

import RewardsPageHeader from '../components/RewardsPageHeader';
import GoalSectionComponent from '../components/GoalSectionComponent';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

function GoalsPageContainer() {

    const [goalsList, setGoalsList] = useState(null);

    const handleFetchData = async () => {
        const currentUserID = "3oMAV7h8tmHVMR8Vpv9B" // Replace with value set by authentication feature, currently always Anoop

        const fetchedData = await fetch(`${process.env.REACT_APP_API_URL}/goals`);
        const fetchedJsonData = await fetchedData.json();

        setGoalsList(fetchedJsonData);
    }

    useEffect(() => { handleFetchData(); }, []);


    return (
        <div>
            {
                goalsList ? (
                    <>
                        <RewardsPageHeader 
                            title="Goals"
                            subtitle="Complete missions and earn points to spin the wheel!" 
                            buttonText="Leaderboard"
                            buttonRedirect="/leaderboard"   
                        />
                        <GoalSectionComponent goalType="Daily" goals={goalsList.daily}/>
                        <GoalSectionComponent goalType="Core" goals={goalsList.core}/>
                    </>
                ) : <ComponentLoadingSpinner />
            }
        </div>
    )
}

export default GoalsPageContainer;