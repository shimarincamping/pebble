import React from "react";
import styles from '../styles/dialogCard.module.css';

const NetworkPopup = ({ title, users, handleClose, handleUserClick, handleFollowUser }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <h2>{title}</h2>
        <div className={styles.closeButton} onClick={handleClose}>
            <img
                src="/icons/close.png"
                alt="close"
                className={styles.closeIcon}
            />
        </div>

        <div className={styles.userList}>
          {users.map((user) => (
            <div key={user.userID} className={styles.userTile}>
              <img src={user.profilePicture} alt={user.shortName} />
              <div className={styles.userDetails} onClick={() => handleUserClick(user.userID)}>
                <p>{user.shortName}</p>
                {user.course && <p>{user.course}</p>}
                {user.year &&<p>(Year {user.year})</p>}
              </div>
              {handleFollowUser && (
                <button 
                  className={styles.followButton} 
                  value={user.userID} 
                  onClick={handleFollowUser}
                >
                  Follow
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkPopup;
