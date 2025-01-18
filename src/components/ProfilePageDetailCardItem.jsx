import React from 'react';
import styles from "../styles/ProfilePage.module.css";

function ProfilePageDetailCardItem(props) {
    return(
        <div className={`${styles.detailCardItem}`}>
            <img src={props.icon} />
            <div className={`${styles.detailCardItem__text}`}>
                <h2>{props.heading}</h2>
                <h4>{props.subheading}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ProfilePageDetailCardItem;