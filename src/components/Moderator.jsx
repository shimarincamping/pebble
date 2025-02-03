import React from "react";
import styles from "../styles/Moderator.module.css";

const ModeratorComponent = ({ comments, onDelete, onApprove }) => {
  return (
    <div className={styles.moderatorContainer}>
      <h2 className={styles.moderatorHeader}>
        Good morning, <br />
        <div className={styles.moderatorLength}>
            <strong>{comments.length} new comments</strong> are awaiting moderation
        </div>
      </h2>

      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentCard}>
          <div className={styles.commentHeader}>
            <span className={styles.postAuthor}>{comment.postAuthor}</span> &gt;{" "}
            <span className={styles.postTitle}>{comment.postTitle}</span>
          </div>
          <div className={styles.commentContainer}>
            <div className={styles.profileWrapper}>
                <img
                src={comment.profilePic}
                alt={comment.user}
                className={styles.profilePic}
                />
            </div>
            <div className={styles.commentContent}>
                <div className={styles.commentTop}>
                    <strong className={styles.commentUser}>{comment.user}</strong>
                    <span className={styles.commentTime}>{comment.time}</span>
                </div>
              <p className={styles.commentText}>{comment.content}</p>
            </div>
          </div>
          <div className={styles.commentFooter}>
            <div className={styles.commentActions}>
              <button
                className={styles.approveButton}
                onClick={() => onApprove(comment.id)}
              >
                ✅
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => onDelete(comment.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModeratorComponent;
