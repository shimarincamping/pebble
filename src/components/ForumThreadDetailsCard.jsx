import React from "react";
import { Link } from "react-router-dom";
import ComponentLoadingSpinner from "./ComponentLoadingSpinner";
import { BiUpvote, BiCommentDetail, BiShareAlt, BiFlag } from "react-icons/bi";
import styles from "../styles/Forum.module.css";

export default function ForumThreadDetailsCard({ forumThread }) {
    return (
        <div className={`${styles.threadCard__thread}`}>
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
                        <BiShareAlt size={20} /> {forumThread.shareCount}
                    </span>
                    <span>
                        <BiFlag size={20} />
                    </span>
                </div>
            </div>
        </div>
    );
}
