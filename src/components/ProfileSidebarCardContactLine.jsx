import React from 'react';

import styles from "../styles/Sidebar.module.css";

function ProfileSidebarCardContactLine(props) {
    return (
        <div className={`${styles.profileSidebarCard__mainBody__additionalInformation__contactLine}`}>
            <img
                src={props.src}
                alt={props.alt}
            />
            <span title={props.text}>{props.text}</span>
        </div>
    )
}

export default ProfileSidebarCardContactLine;