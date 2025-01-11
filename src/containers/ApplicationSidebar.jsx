import React, { useState, useEffect } from 'react';

import styles from "../styles/Sidebar.module.css";

function ApplicationSidebar({children}) {
    return (
        <aside className={`${styles.sidebarContainer}`}>
            {children}
        </aside>
    )
}

export default ApplicationSidebar;