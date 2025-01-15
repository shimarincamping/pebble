import React from "react";
import styles from "../styles/PageHeader.module.css"; 
import HamburgerIcon from '../assets/Menu.svg';
import PebbleLongLogo from '../assets/pebbleLongLogo.png';
import SearchIcon from '../assets/SearchIconForTopBar.svg';

function PageHeader(){
    
    return(
        <>
            <div className={styles.HeaderContainerDiv}>
                <img className={styles.HamburgerIcon} src={HamburgerIcon}/>

                <div className={styles.PebbleLongLogoContainer} >  
                    <img  className={styles.PebbleLongLogo} src={PebbleLongLogo}/> 
                </div>
               
                <div className={styles.SearchBarContainer}>
                    <form>Search on PEBBLE..</form>
                    <img className={styles.SearchIcon} src={SearchIcon}/>
                </div>
            </div>
        
        </>
    );

}

export default PageHeader;
