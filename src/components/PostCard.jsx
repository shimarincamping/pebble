import React, { useState } from "react";
import { BsHandThumbsUpFill, BsChatFill, BsShareFill, BsFlagFill } from "react-icons/bs"; 
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import PostCommentContainer from "../containers/PostCommentContainer";
import styles from "../styles/PostCard.module.css";

const PostCard = ({ post, onClick, onLike, onReport, onCopyLink }) => {
    const [expanded, setExpanded] = useState(false);
    const [showComments, setShowComments] = useState(false);
<<<<<<< Updated upstream

=======
    
    
>>>>>>> Stashed changes
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
                    {post.date} 
                </p>
                <p className={styles.postDesc}>
                    {expanded ? post.postDesc : `${post.postDesc.substring(0, 150)}...`}
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
<<<<<<< Updated upstream
                <div
                    className={`${styles.action} ${post.liked ? styles.liked : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onLike(post.id);
                    }}
                >
                    <BsHandThumbsUpFill />
                </div>
                <div className={styles.action} onClick={(e) => { e.stopPropagation(); setShowComments(true); }}>
                    <BsChatFill />
                </div>
                <div className={styles.action} onClick={(e) => { e.stopPropagation(); onCopyLink(window.location.href); }}>
                    <BsShareFill />
                </div>
                <div
                    className={`${styles.action} ${post.reported ? styles.reported : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onReport(post.id);
                    }}
                >
                    <BsFlagFill />
                </div>
=======
                <div className={styles.action}><BsHandThumbsUp /></div>
                <div className={styles.action} onClick={(e) => { e.stopPropagation(); setShowComments(true); }}>
                    <BsChat />
                </div>
                <div className={styles.action}><BsShare /></div>
                <div className={styles.action}><BsFlag /></div>
>>>>>>> Stashed changes
            </div>
            {showComments && <PostCommentContainer onClose={() => setShowComments(false)} />}
        </div>
    );
};

export default PostCard;
