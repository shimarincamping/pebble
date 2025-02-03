import React from 'react';
import styles from '../styles/dialogCard.module.css';

function PrizeObtainedDialog({rewardName,isVisible,handleClose}){

return (
    <div className={`${styles.PrizeObtainedContainer} ${isVisible ? styles.PrizeObtainedVisible : ""}`  }>
        <div className={styles.PrizeObtainedText}>
            <h1 className={styles.redText}>Congratulations! </h1>
            <h2>You have won:   </h2>
            <h2><span className={styles.redText}>{rewardName} !!</span></h2>
        </div>
        <button className={styles.PrizeObtainedBtn} onClick={handleClose}>Close</button>
    </div>

)


}

export default PrizeObtainedDialog;