import React from "react";
import styles from "../styles/Sidebar.module.css";
import MyNetworkList from "./MyNetworkList";
import PeopleYouMayKnowList from "./PeopleYouMayKnowList";

const NetworkSidebarCard = ({ 
  followerCount = 0, 
  myFollowers = [], 
  mySuggestedUsers = [], 
  handleFollowUser, 
  handleUserClick, 
  handleOpenPopup 
}) => {
  return (
    <div className={styles.networkSidebarCard}>
      {/* My Network Section */}
      <div className={styles.networkSidebarCard__myNetwork}>
        <h3>
          My Network <span>({followerCount})</span>
        </h3>
        <div className={styles.networkSidebarCard__myNetwork__userTileContainer}>
          <MyNetworkList myNetworkUsers={myFollowers} handleUserClick={handleUserClick} />
        </div>
        {myFollowers.length > 0 && (
          <button 
            className={styles.networkSidebarCard__myNetwork__seeMoreButton}
            onClick={() => handleOpenPopup("followers")}
          >
            See More
          </button>
        )}
      </div>

      {/* People You May Know Section */}
      <div className={styles.networkSidebarCard__peopleYouMayKnow}>
        <h3>People You May Know</h3>
        <PeopleYouMayKnowList 
          peopleYouMayKnowUsers={mySuggestedUsers} 
          handleFollowUser={handleFollowUser} 
          handleUserClick={handleUserClick} 
        />
        {mySuggestedUsers.length > 0 && (
          <>
            <hr />
            <button 
              className={styles.networkSidebarCard__peopleYouMayKnow__seeAllButton}
              onClick={() => handleOpenPopup("suggested")}
            >
              See All
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NetworkSidebarCard;
