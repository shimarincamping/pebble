import React,{useState} from "react";
import NavPanel from "../components/NavPanel.jsx";
import NotificationPanelContainer from "./NotificationPanelContainer.jsx";
import { useNavigate } from "react-router-dom";

function NavPanelContainer({isNavPanelVisible,toggleNavPanel}){

    const [isNotiPanelVisible,setNotiPanelVisibility]=useState(false);

    const toggleNotiPanel =()=>{
        setNotiPanelVisibility(!isNotiPanelVisible);
    };

    const showNotiPanel =()=>{  
        setNotiPanelVisibility(true);
        // alert(isNotiPanelVisible);
    };

    const hideNotiPanel =()=>{  
        setNotiPanelVisibility(false);
    };

    const handleMenuIconClick=()=>{
        toggleNavPanel();
    };

    const navigate=useNavigate();
    const navigateTo=(pageName)=>()=>{
        navigate(pageName)
    }

    return(
        <>
            
            <NavPanel
                isVisible={isNavPanelVisible}
                HandleMenuClick={handleMenuIconClick}
                HandleBellClick={showNotiPanel}
                navigateTo={navigateTo}
            />

            <NotificationPanelContainer
                isNotiPanelVisible={isNotiPanelVisible}
                handleBackClick={hideNotiPanel}
            />
        </>
    );

}

export default NavPanelContainer;