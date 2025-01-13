import React from 'react';

import styles from '../styles/GoalsRewards.module.css';

function GoalSectionContainer(props) {

    return (
        <div className={`${styles.goalSectionContainer}`}>

            <h4>{`${props.goalType} Goals`}</h4>

            <div className={`${styles.goalSectionContainer__goalsList}`}>
                {props.children}
            </div>

        </div>
    )

}

export default GoalSectionContainer;