import React from 'react';

import styles from '../styles/GoalsRewards.module.css';
import GoalSectionItem from './GoalSectionItem';

function GoalSectionComponent(props) {
    return (
        <div className={`${styles.goalSectionContainer}`}>

            <h3>{`${props.goalType} Goals`}</h3>

            <div className={`${styles.goalSectionContainer__goalsList}`}>
                {
                    (props.goals).map((goal, index) => (
                        <GoalSectionItem 
                            goalIndex={index}
                            {...goal}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default GoalSectionComponent;