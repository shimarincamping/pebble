import React from 'react';
import styles from '../styles/CongratsMessageCard.module.css';

function CongratsMessageCard({rewardName,isVisible,handleClose}){

return (
    <div className={`${styles.container} ${isVisible ? styles.visible : ""}`  }>
        <div className={styles.msg}>
            <h1 className={styles.redText}>Congratulations! </h1>
            <h1>You have won <span className={styles.redText}>{rewardName} !!</span> </h1>
        </div>
        <button className={styles.btn} onClick={handleClose}>Close</button>
    </div>

)


}

export default CongratsMessageCard;