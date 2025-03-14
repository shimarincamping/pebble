import React from "react";
import {
    BiUpvote,
    BiFlag,
    BiReply,
    BiArrowBack,
    BiEditAlt,
    BiTrash,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "../styles/Forum.module.css";

export default function ForumThreadDetailsCard({
    forumThread,
    userData,
    onClickReply,
    toggleLike,
    onClickEdit,
    handleDelete,
}) {
    return (
        <>
            <Link to="/forum" className={`${styles.threadCard__backBtn}`}>
                <BiArrowBack size={20} />
                Back to Forum
            </Link>
            <div className={`${styles.threadCard__thread}`}>
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
                <div className={`${styles.threadCard__footer}`}>
                    <div className={`${styles.threadCard__statistics}`}>
                        <span>
                            <BiUpvote size={20} onClick={toggleLike} />
                            {forumThread.threadScore}
                        </span>
                        <span>
                            <BiEditAlt size={20} onClick={onClickEdit} />
                        </span>
                        <span>
                            <BiFlag size={20} />
                        </span>
                        <span>
                            <BiTrash size={20} onClick={handleDelete} />
                        </span>
                        <span onClick={onClickReply}>
                            <BiReply size={20} /> Reply
                        </span>
                    </div>
                    <div className={`${styles.threadCard__profile}`}>
                        <div className={`${styles.threadCard__profile__image}`}>
                            <img
                                src={forumThread.userData.profilePicture}
                                alt="user profile icon"
                            />
                        </div>
                        <div
                            className={`${styles.threadCard__profile__details}`}
                        >
                            <span>{userData.fullName}</span>
                            <span>{userData.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
