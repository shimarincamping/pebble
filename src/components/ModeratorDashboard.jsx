import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ModeratorDashboard.module.css";

const ModeratorDashboard = ({ flaggedContent, error, onApprove, onDeny }) => {

  if (error) {
    return <p className={styles.errorText}>{error}</p>;
  }

  return (
    <div className={styles.moderatorContainer}>
      <h2 className={styles.moderatorHeader}>
        Good morning, <br />
        <div className={styles.moderatorLength}>
          <strong>{flaggedContent.length} new content</strong> are awaiting moderation
        </div>
      </h2>

      {flaggedContent.map((content) => (
        <div key={content.id} className={styles.contentCard}>
          <div className={styles.contentHeader}>
            <Link 
              to={`/profile/${content.id}`} 
              className={styles.author}
            >
              {content.user}
            </Link> &gt;{" "}
            <span className={styles.contentType}>{content.contentType}</span>
          </div>

          <div className={styles.contentContainer}>
            <div className={styles.profileWrapper}>
              <img
                src={content.profilePic}
                alt={content.user}
                className={styles.profilePic}
              />
            </div>

            <div className={styles.contentDetails}>
              <div className={styles.contentTop}>
                <div className={styles.contentUserDetails}>
                  <strong className={styles.contentUser}>{content.user}</strong>
                  <strong className={styles.contentAuthor}>{content.authorCourse}</strong>
                </div>
                <span className={styles.contentTime}>{content.time}</span>
              </div>
              <div className={styles.contentTextContainer}>
                {content.postImage && (
                  <div className={styles.postImageContainer}>
                    <img
                      src={content.postImage}
                      alt="Post visual"
                      className={styles.postImage}
                    />
                  </div>
                )}
                {content.postTitle && <h3 className={styles.postTitle}>{content.postTitle}</h3>}
                <p className={styles.contentText}>{content.content}</p>
              </div>
            </div>
          </div>

          <div className={styles.contentFooter}>
            <div className={styles.contentActions}>
              <button
                className={styles.approveButton}
                onClick={() => onApprove(content.id)}
              >
                <img
                  className={styles.approveIcon}
                  src="/icons/checkbox.png"
                  alt="Approve Icon"
                />
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => onDeny(content.id)}
              >
                <img
                  className={styles.rejectIcon}
                  src="/icons/reject.png"
                  alt="Reject Icon"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModeratorDashboard;
