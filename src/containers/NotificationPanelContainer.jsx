import { React, useEffect, useState}  from 'react';
import {useAuth} from './AuthProvider';

import NotificationPanel from '../components/NotificationPanel';
const token = localStorage.getItem("jwtToken");


const NotificationPanelContainer = ({isNotiPanelVisible,handleBackClick}) => {

    // const dummy_data={
    //     "RelevantUser": "Haarish Nair",
    //     "NotificaitonContent":"Liked a post",
    //     "DateTimeInfo":"7 hours ago, Today"
    // }

    // const dummy_data2={
    //     "RelevantUser": "Eddy Yong",
    //     "NotificaitonContent":"Liked a post",
    //     "DateTimeInfo":"Yesterday"
    // }

    // const dummy_data3={
    //     "RelevantUser": "DonDon",
    //     "NotificaitonContent":"Commented on a post",
    //     "DateTimeInfo":"2 Days ago, Saturday"
    // }

    const { user } = useAuth();
    const currentUserID = user; 
    // const Notifications1=[dummy_data,dummy_data2,dummy_data3,dummy_data,dummy_data2,dummy_data3];

    const [notifications,setNotifications] = useState([]);
    const [isLoading,setLoading] = useState(true);

    useEffect(()=>{
        const getNotifications = async () => { 
            try{
                const notificationsResponse = await fetch(`${process.env.REACT_APP_API_URL}/users/${currentUserID}/notifications`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (notificationsResponse.ok){
                    const fetchedNotificationsJSON = await notificationsResponse.json();
                    // console.log(`notificationsResponse@notificationPanelContainer: ${fetchedNotificationsJSON}`);
                    // console.log(`notificationsResponseStringified@notificationPanelContainer: ${JSON.stringify(fetchedNotificationsJSON)}`);
                    setNotifications(fetchedNotificationsJSON);
                }else{
                    console.error("Notification Response unsuccessful")
                }

                
            }catch(e){
                console.error(`An error occured while fethcing notifications: ${e}`);
            }
        }
        
        getNotifications();
    },[currentUserID]);

    useEffect(() => {
        // console.log("Updated notifications state:", notifications);
    }, [notifications]);


    useEffect( () => {
        setLoading(false);
    },[isLoading]);

    return ( 

        <NotificationPanel  
            notificationsList={[...notifications]}
            isNotiPanelVisible={isNotiPanelVisible}
            handleBackClick={handleBackClick}
            isLoading={isLoading}
        />
    );


};

export default NotificationPanelContainer;