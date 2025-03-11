import { React, useEffect } from 'react';
import styles from '../styles/NotificationPanel.module.css';
import NotificationItem from './NotificationItem';
import loadingSpinner from '../components/ComponentLoadingSpinner';

function NotificationPanel({notificationsList = [] ,isNotiPanelVisible, handleBackClick}){

    useEffect(() => {
        console.log(`notificationsList@notificationPanel: ${notificationsList}`);
        if (notificationsList.length > 0) {
            console.log("First notification:", notificationsList[0]);
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
                notificationsList.length > 0 ? (
                    
                        (notificationsList).map((notification) => (
                            
                            // <NotificationItem 
                            //     RelevantUser={notification.RelevantUser} 
                            //     NotificaitonContent={notification.NotificaitonContent}
                            //     DateTimeInfo={notification.DateTimeInfo}
                            // />

                            <NotificationItem 
                                RelevantUser={notification.notificationTriggeredBy} 
                                NotificationContent={notification.notificationText}
                                DateTimeInfo={notification.notificationDateTime}
                            />


                        ))
                    ) : (<loadingSpinner/>)
                }
            
            </div>
        </div>   
    );


}

export default NotificationPanel; 