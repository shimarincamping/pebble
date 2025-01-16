import React from 'react';

import styles from "../styles/global.module.css";

function ApplicationMainOverlay({children}) {
    return (
        <section className={`${styles.applicationMainOverlay}`}>
            {children}
        </section>
    )
}

export default ApplicationMainOverlay;