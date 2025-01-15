import React from "react";
import styles from "../styles/PageHeader.module.css"; 
import HamburgerIcon from '../assets/Menu.svg';
import PebbleLongLogo from '../assets/pebbleLongLogo.png';
import SearchIcon from '../assets/SearchIconForTopBar.svg';

function PageHeader({handleLogoClick,handleMenuClick,handleSearch}){
    return(
        <>
            <div className={styles.HeaderContainerDiv}>
                <div className={styles.HamburgerIconContainer}>
                    <img className={styles.HamburgerIcon} src={HamburgerIcon} onclick={handleMenuClick} alt=""/>
                </div>

                <div className={styles.PebbleLongLogoContainer} >  
                    <img  className={styles.PebbleLongLogo} src={PebbleLongLogo} onclick={handleLogoClick} alt=""/> 
                </div>
               
                <div className={styles.SearchBarContainer}>
                    <form className={styles.SearchForm}>
                        <input className={styles.SearchBarInput} placeholder="Search on PEBBLE..." />
                    </form>
                    <img className={styles.SearchIcon} src={SearchIcon}  onclick={handleSearch} alt=""/>
                </div>
            </div>
        
        </>
    );

}

export default PageHeader;
