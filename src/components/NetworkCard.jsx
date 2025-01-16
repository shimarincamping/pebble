import React from "react";
import styles from "../styles/Sidebar.module.css";
import ComponentLoadingSpinner from './ComponentLoadingSpinner';

function NetworkCard(props) {
  // Determine if it's "My Network" or "People You May Know"
  const isMyNetwork = props.name && props.pictureURL;
  const isSuggestedNetwork = props.name2 && props.pictureURL2;

  return (
    <section className={styles.networkCard}>
      <div className={styles.networkCards}>
        {/* "My Network" Section */}
        {isMyNetwork && (
          <div className={styles.myNetworkCard}>
            <img
              src={props.pictureURL}
              alt={`${props.name}'s profile`}
              className={styles.myNetworkProfilePicture}
            />
            <p className={styles.myNetworkProfileName}>{props.name}</p>
          </div>
        )}
      </div>

      {/* "People You May Know" Section */}
      {isSuggestedNetwork && (
        <div className={styles.suggestedNetworkCard}>
          <img
            src={props.pictureURL2}
            alt={`${props.name2}'s profile`}
            className={styles.suggestedNetworkProfilePicture}
          />
          <div className={styles.suggestedNetworkDetails}>
            <p className={styles.suggestedNetworkName}>
              <strong>{props.name2}</strong>
            </p>
            <p className={styles.suggestedNetworkSubline}>
              {props.year} <br></br> {props.course}
            </p>
          </div>
          <button className={styles.followButton}>Follow</button>
        </div>
      )} 
    </section>
  );
}

export default NetworkCard;
