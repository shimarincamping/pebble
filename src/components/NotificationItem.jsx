import React from 'react';
import styles from '../styles/NotificationItem.module.css';
function NotificationItem(props){

    return(
        <div className={styles.ItemContainer}> 
            <div className={styles.ImgContainer}>
                <img className={styles.ProfileImg} src='/img/HarHar.png'></img>
            </div>

            <div className={styles.TxtContainer}>
                <div className={styles.TxtContainerTop}>
                    <h1>{props.RelevantUser}</h1>
                    <p>{props.NotificationContent}</p>
                </div>

                <div className={styles.TxtContainerBot}>
                    <p>{props.DateTimeInfo}</p>
                </div>
            </div> 
        </div>
    );


}

export default NotificationItem; 