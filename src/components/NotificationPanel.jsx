import React from 'react';
import styles from '../styles/NotificationPanel.module.css';
import NotificationItem from './NotificationItem';

function NotificationPanel({NotificationsList,isNotiPanelVisible,handleBackClick}){

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

                
                 {(NotificationsList || []).map((notification) => (

                            <NotificationItem 
                                RelevantUser={notification.RelevantUser} 
                                NotificaitonContent={notification.NotificaitonContent}
                                DateTimeInfo={notification.DateTimeInfo}
                            />
                        ))
                }
            
            </div>
        </div>   
    );


}

export default NotificationPanel; 