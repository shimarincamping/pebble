import React, { useState } from "react";
import {
    BsHandThumbsUpFill,
    BsChatFill,
    BsShareFill,
    BsFlagFill,
    BsPencilFill,
    BsTrashFill,
} from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import PostCommentContainer from "../containers/PostCommentContainer";
import styles from "../styles/PostCard.module.css";

const PostCard = ({
    post,
    currentUserID,
    onClick,
    onLike,
    onReport,
    onCopyLink,
    onEditClick,
    onDeleteClick,
}) => {
    const [expanded, setExpanded] = useState(false);
    const [showComments, setShowComments] = useState(false);
    return (
        <div className={styles.postCard} onClick={onClick}>
            <div className={styles.postHeading}>
                <img
                    src={post.profilePicture}
                    alt={`${post.fullName}'s profile`}
                    className={styles.profilePicture}
                />
                <div className={styles.userDetails}>
                    <h3>{post.fullName}</h3>
                    <p>{post.courseName}</p>
                    <p className={styles.postTime}>{post.time}</p>
                </div>
                <div className={styles.postActionsIcons}>
                    <BsPencilFill
                        className={styles.editIcon}
                        onClick={(e) => {
                            e.stopPropagation();
                            onEditClick(post);
                        }}
                    />
                        <BsTrashFill
                            className={styles.deleteIcon}
                            onClick={(e) => {
                                e.stopPropagation();
                                onDeleteClick(post.postID);
                            }}
                        />
                </div>
            </div>

            {post.postPicture && (
                <div className={styles.postImageContainer}>
                    <img
                        src={post.postPicture}
                        alt="Post"
                        className={styles.postImage}
                    />
                </div>
            )}

            <div className={styles.postContent}>
                <h3>{post.title}</h3>
                <p className={styles.postMeta}>{post.date}</p>
                <p className={styles.postDesc}>
                    {post.postDesc
                        ? expanded
                            ? post.postDesc
                            : `${post.postDesc.substring(0, 150)}...`
                        : "No content available"}
                </p>

                {post.postDesc.length > 150 && (
                    <button
                        className={styles.readMore}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevents triggering the post click event
                            setExpanded(!expanded);
                        }}
                    >
                        {expanded ? "Read Less" : "Read More"}
                    </button>
                )}
            </div>

            <hr className={styles.separator} />

            <div className={styles.postActions}>
                <div
                    className={`${styles.action} ${post.liked ? styles.liked : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onLike(post.postID, post.authorId);
                    }}
                >
                    <BsHandThumbsUpFill />
                </div>
                <div
                    className={styles.action}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowComments(true);
                    }}
                >
                    <BsChatFill />
                </div>
                <div
                    className={styles.action}
                    onClick={(e) => {
                        e.stopPropagation();
                        onCopyLink(post.postID); // Pass the post ID
                    }}
                >
                    <BsShareFill />
                </div>
                <div
                    className={`${styles.action} ${
                        post.reported ? styles.reported : ""
                    }`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onReport(post.postID);
                    }}
                >
                    <BsFlagFill />
                </div>
                <div>
                    <a
                        href={post.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className={styles.linkedinIcon} />
                    </a>
                </div>
            </div>
            {showComments && (
                <PostCommentContainer
                    postID={post.postID}
                    onClose={() => setShowComments(false)}
                />
            )}
        </div>
    );
};

export default PostCard;
