import { useState } from "react";
import styles from "../styles/PostComment.module.css";
import { FaCheckCircle } from "react-icons/fa";
import {
    BsFlagFill,
    BsPencilFill,
    BsTrashFill,
} from "react-icons/bs";


const PostComment = ({ comments, comment, setComment, handleSubmit, handleEditComment, handleDeleteComment, handleFlagComment, onClose, showPopup, userDetails, }) => {

    const [editingComment, setEditingComment] = useState(null); // ✅ Track comment being edited
    const [newContent, setNewContent] = useState(""); // ✅ Store new text

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
                        comments
                            .filter((comment) => comment.isContentVisible !== false) // ✅ Hide deleted comments
                            .map((comment) => (
                                <div key={comment.commentID} className={styles.comment}>
                                    <img src={comment.profilePic} alt="profile" className={styles.profilePic} />
                                    <div className={styles.commentContent}>
                                        <strong>{comment.author}</strong> {/* ✅ Displays author's name */}
                                        <p>{comment.text}</p>
                                    </div>

                                    {/* Action Icons */}
                                    <div className={styles.commentActions}>
                                        {userDetails?.fullName === comment.author ? ( // ✅ Only show for the current user
                                            <>
                                                <BsPencilFill
                                                    className={styles.editIcon}
                                                    onClick={() => {
                                                        setEditingComment(comment.commentID);
                                                        setNewContent(comment.text);
                                                    }}
                                                />
                                                <BsTrashFill
                                                    className={styles.deleteIcon}
                                                    onClick={() => {
                                                        if (window.confirm("Are you sure you want to delete this comment?")) {
                                                            handleDeleteComment(comment.commentID);
                                                        }
                                                    }}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <BsFlagFill
                                                    className={styles.flagIcon}
                                                    onClick={() => {
                                                        if (window.confirm("Are you sure you want to report this comment?")) {
                                                            handleFlagComment(comment.commentID, comment.text);
                                                        }
                                                    }}
                                                />
                                            </>
                                        )}
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
                    </div>
                }

                {/* 🔥 Edit Modal */}
                {editingComment && (
                    <div
                        className={styles.modalOverlay}
                        onClick={() => setEditingComment(null)}
                    >
                        <div
                            className={styles.editModal}
                            onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
                        >
                            <h3>Edit Comment</h3>
                            <textarea
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                                className={styles.textarea}
                            />
                            <div className={styles.modalButtons}>
                                <button
                                    className={styles.saveButton}
                                    onClick={() => {
                                        handleEditComment(editingComment, newContent);
                                        setEditingComment(null); // ✅ Close modal
                                    }}
                                >
                                    Save
                                </button>
                                <button
                                    className={styles.cancelButton}
                                    onClick={() => setEditingComment(null)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostComment;
