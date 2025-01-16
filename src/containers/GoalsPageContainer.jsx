import React, { useState, useEffect } from 'react';

import RewardsPageHeader from '../components/RewardsPageHeader';
import GoalSectionContainer from '../components/GoalSectionContainer';
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';

function GoalsPageContainer() {

    // Dummy data ----------------------------
    const dummyGoalsData = {
        daily : [{
            "goalTitle" : "Comment on 1 Post",
            "goalDescription" : "Let your peers know what you think of their achievement!\nInteractions like these are key to building your professional network!",
            "goalPoints" : 20,
            "goalRedirect" : "/feed",
            "isGoalCompleted" : false
        }, {
            "goalTitle" : "Complete 3 Coding Challenge Questions",
            "goalDescription" : "Solve any 3 coding challenges available on PEBBLE.\nSolving these questions can sharpen your coding skills, master the fundamentals!",
            "goalPoints" : 30,
            "goalRedirect" : "/codingchallenge",
            "isGoalCompleted" : true
        }], core : [{
            "goalTitle" : "Complete Your Profile",
            "goalDescription" : "Fill out all profile sections, including your courses and certifications!\nThis will help you build a strong profile!",
            "goalPoints" : 200,
            "goalRedirect" : "/profile/me",
            "isGoalCompleted" : true
        }, {
            "goalTitle" : "Make Your First Post!",
            "goalDescription" : "Tell the community about something you learnt or experienced!\nDoing this often will help hone your personal branding skills!",
            "goalPoints" : 150,
            "goalRedirect" : "/feed",
            "isGoalCompleted" : true
        }, {
            "goalTitle" : "Spin the Wheel!",
            "goalDescription" : "What prize will you win? Unlock exclusive rewards by spinning the wheel!\nThe more you use PEBBLE, the more you earn while you learn!",
            "goalPoints" : 75,
            "goalRedirect" : "/spin",
            "isGoalCompleted" : false
        }]
    }

    // ---------------------------------------

    const [goalsList, setGoalsList] = useState(null);

    useEffect(
        () => {
            // Replace this with a fetch request for user data. The server should trim the raw database response to fit the object above.
            const fetchData = setInterval(() => {
                setGoalsList(dummyGoalsData);
            }, 5000);

            return () => clearInterval(fetchData);
        },
    []);


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
                        <GoalSectionContainer goalType="Daily" goals={goalsList.daily}/>
                        <GoalSectionContainer goalType="Core" goals={goalsList.core}/>
                    </>
                ) : <ComponentLoadingSpinner />
            }
        </div>
    )
}

export default GoalsPageContainer;