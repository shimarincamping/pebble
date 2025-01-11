import React, { useState, useEffect } from 'react';

import styles from "../styles/Sidebar.module.css";

function ApplicationSidebar({children}) {
    return (
        <div className={`${styles.sidebarContainer}`}>
            {children}
        </div>
    )
}

export default ApplicationSidebar;