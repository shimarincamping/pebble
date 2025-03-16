import React,{useState} from "react";
import NavPanel from "../components/NavPanel.jsx";
import NotificationPanelContainer from "./NotificationPanelContainer.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../containers/AuthProvider";


function NavPanelContainer({isNavPanelVisible,toggleNavPanel}){
    const { logout } = useAuth();  // ✅ Get logout function from AuthProvider
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

    // ✅ Handle Logout
    const handleLogout = () => {
        console.log("🔴 Logging out..."); // Debugging log

        logout(); // ✅ Call logout from AuthProvider

        navigate("/login"); // ✅ Redirect to login page
    };

    return(
        <>
            
            <NavPanel
                isVisible={isNavPanelVisible}
                HandleMenuClick={handleMenuIconClick}
                HandleBellClick={showNotiPanel}
                navigateTo={navigateTo}
                handleLogout={handleLogout}  // ✅ Pass logout function
            />

            <NotificationPanelContainer
                isNotiPanelVisible={isNotiPanelVisible}
                handleBackClick={hideNotiPanel}
            />
        </>
    );

}

export default NavPanelContainer;