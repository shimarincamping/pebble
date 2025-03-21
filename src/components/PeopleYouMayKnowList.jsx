import React from "react";
import styles from "../styles/Sidebar.module.css";

const PeopleYouMayKnowList = ({ peopleYouMayKnowUsers = [], handleFollowUser, handleUserClick }) => {
  return (
    <>
      {peopleYouMayKnowUsers.map((user) => (
        <div key={user.userID} className={styles.networkSidebarCard__peopleYouMayKnow__userTile}>
          <img src={user.profilePicture} alt={user.shortName} />
          <div 
            className={styles.networkSidebarCard__peopleYouMayKnow__userDetails}
            onClick={() => handleUserClick(user.userID)}
          >
            <p>{user.shortName}</p>
            {(user.course && user.year) ? (<p>{user.course}, Year {user.year}</p>) : (<p>PEBBLE user</p>)}
          </div>
          <button 
            className={styles.networkSidebarCard__peopleYouMayKnow__followButton} 
            value={user.userID} 
            onClick={() => handleFollowUser(user.userID)}
          >
            Follow
          </button>
        </div>
      ))}
    </>
  );
};

export default PeopleYouMayKnowList;
