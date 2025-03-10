import React from "react";
import styles from "../styles/Leaderboard.module.css";

export default function LeaderboardSectionSidebarItem(props) {
    return (
        <section className={`${styles.leaderboardSidebar__sidebarItem}`}>
            <header>Selected User</header>
            <img
                className={`${styles.leaderboardSidebar__sidebarItem__image}`}
                src={props.profilePicture}
                alt="user profile"
            />
            <div
                className={`${styles.leaderboardSidebar__sidebarItem__content}`}
            >
                <h3>{props.fullName}</h3>
                <hr />
                <p>
                    <span>Course:</span> {props.courseName}
                </p>
                <p>
                    <span>Email:</span> {props.email}
                </p>
                <p>
                    <span>Student ID:</span> {props.userID}
                </p>
            </div>
            <hr />
            <div
                className={`${styles.leaderboardSidebar__sidebarItem__content}`}
            >
                <p
                    className={`${styles.leaderboardSidebar__sidebarItem__bioHeader}`}
                >
                    Bio
                </p>
                <p
                    className={`${styles.leaderboardSidebar__sidebarItem__bioBody}`}
                >
                    {props.bio}
                </p>
            </div>
        </section>
    );
}
