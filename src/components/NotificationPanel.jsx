import { React, useEffect } from 'react';
import styles from '../styles/NotificationPanel.module.css';
import NotificationItem from './NotificationItem';
import LoadingSpinner from '../components/ComponentLoadingSpinner';

function NotificationPanel({notificationsList = [] ,isNotiPanelVisible, handleBackClick, isLoading}){

    useEffect(() => {
        // console.log(`notificationsList@notificationPanel: ${notificationsList}`);
        if (notificationsList.length > 0) {
            // console.log("First notification:", notificationsList[0]);
        }
    },[notificationsList])

    return(
        <div className={`${styles.NotificationPanelContainer}
                         ${isNotiPanelVisible ? styles.visible:""}
                        `}
        > 
            <div className={styles.Header}> 
                <img src="/img/BackArrowIcon.png" 
                     className={styles.BackArrow} 
                     onClick={handleBackClick}
                     alt=""/>
                <h2 className={styles.HeaderText}>Notifications</h2>
            </div>

            <div className={styles.Body}>

                
                {
                    isLoading ? 
                        (<LoadingSpinner/>) :

                        notificationsList.length > 0 ? (
                                (notificationsList).map((notification) => (
                                
                                    <NotificationItem 
                                        RelevantUser={notification.notificationTriggeredBy} 
                                        NotificationContent={notification.notificationText}
                                        DateTimeInfo={notification.notificationDateTime}
                                        imgUrl={notification.notificationImage}
                                    />
                            ))
                        ) : <img className={styles.noNotificationImg} src="/img/noNotifications.png"/>
                }
            
            </div>
        </div>   
    );


}

export default NotificationPanel; 