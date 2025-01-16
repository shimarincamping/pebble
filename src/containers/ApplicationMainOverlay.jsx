import React from 'react';

import styles from "../styles/global.module.css";

function ApplicationMainOverlay({children}) {
    return (
        <div className={`${styles.applicationMainOverlay}`}>
            {children}
        </div>
    )
}

export default ApplicationMainOverlay;