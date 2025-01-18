import React from 'react';
import styles from '../styles/NotificationPanel.module.css';
import NotificationItem from './NotificationItem';
function NotificationPanel(){

    return(
        <div className={styles.NotificationPanelContainer}> 
            <div className={styles.Header}> 
                <img src="/img/BackArrowIcon.png" className={styles.BackArrow} alt=""/>
                <h2 className={styles.HeaderText}>Notifications</h2>
            </div>

            <div className={styles.Body}>
                <NotificationItem
                    RelevantUser="Haarish Nair"
                    NotificaitonContent="liked your post"                 
                    DateTimeInfo="TIME TIME TIME"
                />
            </div>
        </div>  
    );


}

export default NotificationPanel; 