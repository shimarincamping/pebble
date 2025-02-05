import React from 'react';
import NotificationPanel from '../components/NotificationPanel';

const NotificationPanelContainer = ({isNotiPanelVisible,handleBackClick}) => {

    const dummy_data={
        "RelevantUser": "Haarish Nair",
        "NotificaitonContent":"Liked a post",
        "DateTimeInfo":"7 hours ago, Today"
    }

    const dummy_data2={
        "RelevantUser": "Eddy Yong",
        "NotificaitonContent":"Liked a post",
        "DateTimeInfo":"Yesterday"
    }

    const dummy_data3={
        "RelevantUser": "DonDon",
        "NotificaitonContent":"Commented on a post",
        "DateTimeInfo":"2 Days ago, Saturday"
    }


    const Notifications=[dummy_data,dummy_data2,dummy_data3,dummy_data,dummy_data2,dummy_data3];
   
   
   
   
   
    return ( 
        <NotificationPanel  
            NotificationsList={Notifications}
            isNotiPanelVisible={isNotiPanelVisible}
            handleBackClick={handleBackClick}
        />
    );


};

export default NotificationPanelContainer;