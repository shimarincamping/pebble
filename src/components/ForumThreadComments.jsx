import React from "react";
import { BiUpvote, BiReply, BiFlag, BiDownvote } from "react-icons/bi";
import styles from "../styles/Forum.module.css";

export default function ForumThreadComments({
    comment,
    userData,
    onClickReply,
}) {
    return (
        <div className={`${styles.threadCard__thread}`}>
            <div className={`${styles.threadCard__body}`}>
                <p>{comment.commentDetails}</p>
            </div>
            <div className={`${styles.threadCard__footer}`}>
                <div className={`${styles.threadCard__statistics}`}>
                    <span>
                        <BiUpvote size={20} /> {comment.upvoteScore}
                    </span>
                    <span>
                        <BiDownvote size={20} />
                    </span>
                    <span>
                        <BiFlag size={20} />
                    </span>
                    <span onClick={onClickReply}>
                        <BiReply size={20} /> Reply
                    </span>
                </div>
                <div className={`${styles.threadCard__profile}`}>
                    <div className={`${styles.threadCard__profile__image}`}>
                        <img
                            src={comment.userData.profilePicture}
                            alt="user profile icon"
                        />
                    </div>
                    <div className={`${styles.threadCard__profile__details}`}>
                        <span>{userData.fullName}</span>
                        <span>{userData.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
