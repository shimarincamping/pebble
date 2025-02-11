import React, { useState } from "react";
import { BsHandThumbsUp, BsChat, BsShare, BsFlag } from "react-icons/bs"; 
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import PostCommentContainer from "../containers/PostCommentContainer";
import styles from "../styles/PostCard.module.css";

const PostCard = ({ post, onClick }) => {
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

                <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.linkedinIcon} />
                </a>
            </div>

            {post.postPicture && (
                <div className={styles.postImageContainer}>
                    <img src={post.postPicture} alt="Post" className={styles.postImage} />
                </div>
            )}

            <div className={styles.postContent}>
                <h3>{post.title}</h3>
                <p className={styles.postMeta}>
                    {post.date} • <span className={styles.taggedName}>{post.taggedName}</span>
                </p>
                <p className={styles.postDesc}>
                    {expanded ? post.postDesc : `${post.postDesc.substring(0, 150)}...`}
                </p>
                {!expanded && (
                    <button className={styles.readMore} onClick={() => setExpanded(true)}>Read More</button>
                )}
            </div>

            <hr className={styles.separator} />

            <div className={styles.postActions}>
                <div className={styles.action}><BsHandThumbsUp /></div>
                <div className={styles.action} onClick={(e) => { e.stopPropagation(); setShowComments(true); }}>
                    <BsChat />
                </div>
                <div className={styles.action}><BsShare /></div>
                <div className={styles.action}><BsFlag /></div>
            </div>
            {showComments && <PostCommentContainer onClose={() => setShowComments(false)} />}
        </div>
    );
};

export default PostCard;
