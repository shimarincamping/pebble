import React, { useState } from "react";
import styles from "../styles/PostComment.module.css";
import { FaCheckCircle } from "react-icons/fa";

const PostComment = ({ comments, comment, setComment, handleSubmit, onClose, showPopup }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.commentContainer} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                
                <h3>Comments</h3>

                {/* Comments List */}
                <div className={styles.commentsList}>
                    {comments.length === 0 ? (
                        <p className={styles.noComments}>No Comments</p>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className={styles.comment}>
                                <img src={comment.profilePic} alt="profile" className={styles.profilePic} />
                                <div className={styles.commentContent}>
                                    <strong>{comment.author}</strong>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Comment Input */}
                <div className={styles.commentBox}>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className={styles.textarea}
                        rows="4"
                        placeholder="Write a comment..."
                    />
                <button 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents unwanted parent event triggers
                        handleSubmit(e);
                    }} 
                    className={styles.postButton}
                >
                    Post It
                </button>
                
                </div>

                {/* Popup Message */}
                {showPopup &&
                    <div className={styles.popup}>
                        <FaCheckCircle className="tick-icon" />
                        <span>Comment has been added!</span>
                    </div>}
            </div>
        </div>
    );
};

export default PostComment;
