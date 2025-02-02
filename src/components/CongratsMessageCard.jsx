import React from 'react';
import styles from '../styles/CongratsMessageCard.module.css';

function CongratsMessageCard({rewardName,isVisible,handleClose}){

return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`  }>
        <div className={styles.txt}>
            <h1 className={styles.redText}>Congratulations! </h1>
            <h2>You have won:   </h2>
            <h2><span className={styles.redText}>{rewardName} !!</span></h2>
        </div>
        <button className={styles.btn} onClick={handleClose}>Close</button>
    </div>

)


}

export default CongratsMessageCard;