import React from "react";
import { BiUpvote, BiCommentDetail, BiShareAlt, BiFlag } from "react-icons/bi";
import styles from "../styles/Forum.module.css";

export default function ForumThreadPreviewCard({
    forumThread,
    userData,
    onClick,
}) {
    return (
        <article
            onClick={onClick}
            className={`${styles.threadCard__thread} ${styles.threadCard__onClick}`}
        >
            <div className={`${styles.threadCard__header}`}>
                <div className={`${styles.threadCard__title}`}>
                    <h1>{forumThread.threadTitle}</h1>
                    <time datetime={forumThread.threadDateTime}>
                        Posted on {forumThread.threadDateTime}
                    </time>
                </div>
                <div className={`${styles.threadCard__threadType}`}>
                    {forumThread.threadType}
                </div>
            </div>
            <div className={`${styles.threadCard__body}`}>
                <p>{forumThread.threadDescription}</p>
            </div>
            <div className={`${styles.threadCard__footer}`}>
                <div className={`${styles.threadCard__statistics}`}>
                    <span>
                        <BiUpvote size={20} /> {forumThread.threadScore}
                    </span>
                    <span>
                        <BiCommentDetail size={20} /> {forumThread.commentCount}
                    </span>
                    <span>
                        <BiFlag size={20} />
                    </span>
                    <span>
                        <BiShareAlt size={20} /> {forumThread.shareCount}
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
