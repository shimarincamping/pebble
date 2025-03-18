import React from "react";
import { BiUpvote, BiSolidUpvote, BiFlag } from "react-icons/bi";
import styles from "../styles/Forum.module.css";

export default function ForumThreadPreviewCard({
    forumThread,
    userData,
    onClick,
    toggleLike,
    toggleThreadFlag,
}) {
    return (
        <article className={`${styles.threadCard__thread}`}>
            <div
                onClick={onClick}
                className={`${styles.threadCard__main} ${styles.threadCard__onClick}`}
            >
                <div className={`${styles.threadCard__header}`}>
                    <div className={`${styles.threadCard__title}`}>
                        <h1>{forumThread.threadTitle}</h1>
                        <time datetime={forumThread.threadDateTime}>
                            Posted {forumThread.threadDateTime}
                        </time>
                    </div>
                </div>
                <div className={`${styles.threadCard__body}`}>
                    <p>{forumThread.threadDescription}</p>
                </div>
            </div>
            <div className={`${styles.threadCard__footer}`}>
                <div className={`${styles.threadCard__statistics}`}>
                    {forumThread.liked ? (
                        <span>
                            <BiSolidUpvote size={20} onClick={toggleLike} />
                            {forumThread.threadScore}
                        </span>
                    ) : (
                        <span>
                            <BiUpvote size={20} onClick={toggleLike} />
                            {forumThread.threadScore}
                        </span>
                    )}
                    <span>
                        <BiFlag size={20} onClick={toggleThreadFlag} />
                    </span>
                </div>
                <div className={`${styles.threadCard__profile}`}>
                    <div className={`${styles.threadCard__profile__image}`}>
                        <img
                            src={userData.profilePicture}
                            alt="user profile icon"
                        />
                    </div>
                    <div className={`${styles.threadCard__profile__details}`}>
                        <span>{userData.fullName}</span>
                        <span>{userData.description}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}
