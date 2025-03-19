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
    currentUserDetails,
    onAuthorClick,
    onLike,
    onReport,
    onCopyLink,
    onEditClick,
    onDeleteClick,
    handleLinkedinSync,
    isProfilePage
}) => {
    const [expanded, setExpanded] = useState(false);
    const [showComments, setShowComments] = useState(false);


    return (
        <div className={styles.postCard}>
            <div className={styles.postHeading}>
                <img
                    src={post.profilePicture}
                    alt={`${post.fullName}'s profile`}
                    className={styles.profilePicture}
                    onClick={onAuthorClick}
                />
                <div className={styles.userDetails} onClick={onAuthorClick}>
                    <div className={styles.userInfo}>
                        <h3>{post.fullName}</h3>
                        <p>{post.courseName}</p>
                        <p className={styles.postTime}>{post.time || "Now"}</p>
                    </div>
                </div>
                
                {isProfilePage && post.fullName === currentUserDetails?.fullName && (
                <div className={styles.postActionsIcons} onClick={handleLinkedinSync}>
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

                        <FaLinkedin className={styles.linkedinIcon} />
                    </div>
                )}
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
                    {
                        (post.postDesc) ? (
                            (post.postDesc.length > 200 && !expanded) ? (
                                `${post.postDesc.substring(0, 200).trim()}...`
                            ) : post.postDesc
                        ) : "No content available"
                    }

                    {post.postDesc.length > 200 && (
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
                </p>
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
                {/*<div>
                    {isProfilePage && post.fullName === currentUserDetails?.fullName && (
                    <div onClick={handleLinkedinSync}>
                        <FaLinkedin className={styles.linkedinIcon} />
                    </div>
                    )}
    

                    {/* <a
                        href={post.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className={styles.linkedinIcon} />
                    </a> 
                </div> */}
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
