import React from 'react';
import styles from '../styles/dialogCard.module.css';

function ConfirmationDialogCard({commentData,isVisible,handleDelete,handleCancel}){

return (

    <div className={styles.ConfirmationDialogContainer}>
        <h1>
            Would you like to  <span className={styles.underlined}>delete</span> this comment?
        </h1>

        {/* comment item needs to be called here */}


        <div>  
            <button
                className={styles.ConfirmationDialogDeleteBtn}
                onClick={handleDelete}
            >
                Delete
            </button>

            <button
                className={styles.ConfirmationDialogDeleteBtn}
                onClick={handleCancel}
            >
                Cancel
            </button>
        </div>
        


    </div>  

)


}

export default ConfirmationDialogCard;