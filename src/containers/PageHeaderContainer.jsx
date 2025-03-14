import React,{useState} from "react";
import PageHeader from "../components/PageHeader.jsx"; 
import NavPanelContainer from "../containers/NavPanelContainer.jsx"

function PageHeaderContainer(){
    const [isNavPanelVisible,setNavPanelVisibility]=useState(false);

    function toggleNavPanel(){
        setNavPanelVisibility(!isNavPanelVisible);
    }

    // function showNavPanel(){
    //     setNavPanelVisibility(true);
    // }

    // function hideNavPanel(){
    //     setNavPanelVisibility(false);
    // }
    
    return(
        <>
            <PageHeader
                handleMenuClick={toggleNavPanel}
            />

            <NavPanelContainer
                isNavPanelVisible={isNavPanelVisible}
                toggleNavPanel={toggleNavPanel}
            /> 
        </>
    );

}

export default PageHeaderContainer;