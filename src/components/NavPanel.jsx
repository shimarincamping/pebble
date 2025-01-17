import React from 'react';
import styles from '../styles/NavPanel.module.css';
function NavPanel(){

    return(
        <div className={styles.NavPanelContainer}> 
            <div className={styles.Header}> 
                Header
            </div>
            <div className={styles.Body}>body</div>
            <div className={styles.Footer}>Footer</div>
        </div>
    );


}

export default NavPanel; 