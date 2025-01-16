import React from "react";
import ComponentLoadingSpinner from './ComponentLoadingSpinner';

import styles from "../styles/Sidebar.module.css";

function NetworkSidebarCard(props) {
  return (
    <div className={`${styles.sidebarCard}`}>

      { 
        (Object.keys(props).length) ? (
          <div className={`${styles.networkSidebarCard}`}>
            <section className={`${styles.networkSidebarCard__myNetwork}`}>
              <h1>My Network 
                <span className={`${styles.networkSidebarCard__myNetwork__followerCount}`}> ({props.followerCount})</span>
              </h1>
              <div className={`${styles.networkSidebarCard__myNetwork__userTileContainer}`}>
                {
                  (props.myFollowers).map((follower) => (
                    <div className={styles.networkSidebarCard__myNetwork__userTile}>
                      <img
                        src={follower.profilePicture}
                        alt={`${follower.shortName}'s profile`}
                      />
                      <p>{follower.shortName}</p>
                    </div>
                  ))
                }
              </div>
              <button className={styles.networkSidebarCard__myNetwork__seeMoreButton}>See More</button>
            </section>

            <section className={`${styles.networkSidebarCard__peopleYouMayKnow}`}>
              <h1>People You May Know</h1>
              {
                (props.mySuggestedUsers).map((user) => (
                  <div className={styles.networkSidebarCard__peopleYouMayKnow__userTile}>
                    <img
                      src={user.profilePicture}
                      alt={`${user.shortName}'s profile`}
                    />

                    <div className={styles.networkSidebarCard__peopleYouMayKnow__userDetails}>
                      <p><strong>{user.shortName}</strong></p>
                      <p>Year {user.year} <br></br> {user.course}</p>
                    </div>
                    <button className={styles.networkSidebarCard__peopleYouMayKnow__followButton} value={user.userID}>
                      Follow
                    </button>
                  </div>
                ))
              }

              <hr />
              <button className={styles.networkSidebarCard__peopleYouMayKnow__seeAllButton}>See All</button>
            </section>
          </div>
        ) : (<ComponentLoadingSpinner />)
      }

    </div>

  )
}

export default NetworkSidebarCard;