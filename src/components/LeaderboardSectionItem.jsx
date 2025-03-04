import React from "react";
import styles from "../styles/Leaderboard.module.css";
export default function LeaderboardSectionItem(props) {
    return (
        <article className={`${styles.leaderboardSectionItem__container}`}>
            <h2>{props.leaderboardIndex + 1}</h2>
            <img
                className={`${styles.leaderboardSectionItem__container__image}`}
                src={props.profilePicture}
                alt="user profile"
            />
            <div className={`${styles.leaderboardSectionItem__userData}`}>
                <h3>{props.fullName}</h3>
                <p
                    className={`${styles.leaderboardSectionItem__userData__intakeCourse}`}
                >
                    {props.intake} - {props.courseName}
                </p>
                <p>
                    <span>Total Points:</span> {props.totalPoints}
                </p>
                <p>
                    <span>Total Tickets:</span> {props.totalTickets}
                </p>
                <p>
                    <span>Total Followers:</span> {props.followerCount}
                </p>
            </div>
        </article>
    );
}
