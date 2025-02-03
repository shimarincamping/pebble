import React from 'react'
import styles from '../styles/dialogCard.module.css'

function SuccessDialogCard({handleSuccessDialogClose,isVisible}){

    return(

        <div className={styles.PrizeObtainedContainer}>
            <img 
                className={styles.SuccessDialogTickIcon}
                src="/img/tickIcon.png"
            />

            <h1>
                Sync Completed successfully to Linked!
            </h1>

            <button
                className={styles.SuccessDialogBtn}
                onClick={handleSuccessDialogClose}
            >
                Done
            </button>

        </div>
    )
};

export default SuccessDialogCard;