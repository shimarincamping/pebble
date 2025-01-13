import React from 'react';
import styles from "../styles/ComponentLoadingSpinner.module.css";

function ComponentLoadingSpinner() {
    return (
        <div className={`${styles.componentLoadingContainer}`}>
            <img src="./icons/loading.gif" />
            <h1>Loading...</h1>
        </div>
    )
}

export default ComponentLoadingSpinner;