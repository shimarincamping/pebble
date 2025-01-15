import React from "react";
import styles from "../styles/PageHeader.module.css"; 

function PageHeader({handleLogoClick,handleMenuClick,handleSearch}){
    return(
        <>
            <div className={styles.HeaderContainerDiv}>
                <div className={styles.HamburgerIconContainer}>
                    <img className={styles.HamburgerIcon} src="img/Menu.svg" onclick={handleMenuClick} alt=""/>
                </div>

                <div className={styles.PebbleLongLogoContainer} >  
                    <img  className={styles.PebbleLongLogo} src="img/pebbleLongLogo.png" onclick={handleLogoClick} alt=""/> 
                </div>
               
                <div className={styles.SearchBarContainer}>
                    <form className={styles.SearchForm}>
                        <input className={styles.SearchBarInput} placeholder="Search on PEBBLE..." />
                    </form>
                    <img className={styles.SearchIcon} src="img/SearchIconForTopBar.svg"  onclick={handleSearch} alt=""/>
                </div>
            </div>
        
        </>
    );

}

export default PageHeader;
