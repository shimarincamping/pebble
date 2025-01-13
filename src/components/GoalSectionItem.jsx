import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/GoalsRewards.module.css';

function GoalSectionItem(props) {
    return (
        <div className={`${styles.goalSectionItemContainer}`}>
            <Link to={props.goalRedirect}>
                <div className={`${styles.goalSectionItem}`}>

                    <div className={`${styles.goalSectionItem__goalNumber}`}>
                        <p>{props.goalIndex + 1}</p>
                    </div>

                    <div className={`${styles.goalSectionItem__goalDescriptionBody}`}>
                        <h3>{props.goalTitle}</h3>
                        <p>{props.goalDescription}</p>
                    </div>

                    
                    {
                        (props.isGoalCompleted) ? (
                            <div className={`${styles.goalSectionItem__goalValueContainer} ${styles.completedGoal}`}>
                                <p>
                                    <span>Goal</span><br />complete
                                </p>
                            </div>
                        ) : (
                            <div className={`${styles.goalSectionItem__goalValueContainer} ${styles.uncompletedGoal}`}>
                                <p>
                                    <span>{props.goalPoints}</span><br />points
                                </p>
                            </div>
                        )
                    }
                </div>
            </Link>
        </div>
    )
}

export default GoalSectionItem;