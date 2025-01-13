import React, { useState, useEffect } from 'react';

import RewardsPageHeader from '../components/RewardsPageHeader';
import GoalSectionContainer from '../components/GoalSectionContainer';
import GoalSectionItem from '../components/GoalSectionItem';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

function GoalsPageContainer() {
    return (
        <div>
            <RewardsPageHeader 
                title="Goals"
                subtitle="Complete missions and earn points to spin the wheel!" 
                buttonText="Leaderboard"
                buttonRedirect="/leaderboard"   
            />
            <GoalSectionContainer goalType="Daily">
                {/* For x in returned goals, generate a child GoalSectionItem */}
            </GoalSectionContainer>

            <GoalSectionContainer goalType="Core">
                {/* For x in returned goals, generate a child GoalSectionItem */}
            </GoalSectionContainer>

            {/* If data still null, return ComponentLoadingSpinner */}
        </div>
    )
}

export default GoalsPageContainer;