import { React, useEffect, useState}  from 'react';
import NotificationPanel from '../components/NotificationPanel';
import {useAuth} from './AuthProvider';

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

    const { user } = useAuth();
    const currentUserID = user; 
    const Notifications1=[dummy_data,dummy_data2,dummy_data3,dummy_data,dummy_data2,dummy_data3];

    const [notifications,setNotifications] = useState("");

    useEffect(()=>{
        const getNotifications = async () => { 
            try{
                const notificationsResponse = await fetch(`${process.env.REACT_APP_API_URL}/users/${currentUserID}/notifications`);
                console.log(`notificationsResponse@notificationPanelContainer: ${notificationsResponse}`);
                console.log(`notificationsResponseStringified@notificationPanelContainer: ${JSON.stringify(notificationsResponse)}`);
                console.log(`currentUserID: ${currentUserID}`);

                setNotifications(notificationsResponse);
            }catch(e){
                console.error(`An error occured while fethcing notifications: ${e}`);
            }
        }
        getNotifications();
    });

    return ( 
        <NotificationPanel  
            NotificationsList={Notifications1}
            isNotiPanelVisible={isNotiPanelVisible}
            handleBackClick={handleBackClick}
        />
    );


};

export default NotificationPanelContainer;