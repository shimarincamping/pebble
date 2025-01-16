import React from 'react';
import styles from "../styles/ComponentLoadingSpinner.module.css";

function ComponentLoadingSpinner() {
    return (
        <div>
            <div className={`${styles.componentLoadingContainer}`}>
                <img src="/icons/loading.gif" />
                <h1>Loading...</h1>
            </div>
        </div>
    )
}

export default ComponentLoadingSpinner;