import React from "react";
import styles from "../styles/Sidebar.module.css";

const MyNetworkList = ({ myNetworkUsers = [], handleUserClick }) => {
  return (
    <>
      {myNetworkUsers.map((user) => (
        <div 
          key={user.userID} 
          className={styles.networkSidebarCard__myNetwork__userTile}
          onClick={() => handleUserClick(user.userID)}
        >
          <img src={user.profilePicture} alt={user.shortName} />
          <p>{user.shortName}</p>
        </div>
      ))}
    </>
  );
};

export default MyNetworkList;
