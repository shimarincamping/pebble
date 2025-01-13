import React from 'react';

import styles from "../styles/global.module.css";

function ApplicationMainContent({children}) {
    return (
        <main className={`${styles.applicationMainContent}`}>
            {children}
        </main>
    )
}

export default ApplicationMainContent;