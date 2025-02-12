import React from 'react';
import styles from '../styles/CodingChallengePreview.module.css';

function CodingChallengePreview(props) {
    return (
        <div className={styles.codingPreviewContainer} onClick={props.onClick}>
            <div className={styles.codingDescription}>
                <h3>{props.codingTitle}</h3>
                <p>{props.codingDescription}</p>
            </div>
            <div className={`${styles.codingLevel} ${props.levelClass}`}>
                <span>{props.codingLevel}</span>
            </div>
        </div>
    )
}

export default CodingChallengePreview;