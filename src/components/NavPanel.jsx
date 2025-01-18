import React from 'react';
import styles from '../styles/NavPanel.module.css';
function NavPanel(){

    return(
        <div className={styles.NavPanelContainer}> 
            <div className={styles.Header}> 
                <img src="/img/TaylorsLogo.png" className={styles.TaylorsLogo} alt=""/>
                <img src="/img/WhiteMenuIcon.png" className={styles.MenuIcon} alt=""/>
            </div>

            <div className={styles.Body}>
                <div>
                    <div className={styles.ImgContainer}>
                        <img src="/img/HomeIcon.png" alt=""/>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Home</h2>
                    </div>
                    
                </div>
                <div>
                    <div className={styles.ImgContainer}>
                        <img src="/img/RewardsIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Rewards</h2>
                    </div>
                    
                </div>
                <div>
                    <div className={styles.ImgContainer}> 
                        <img src="/img/LearnIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Learn</h2>
                    </div>
                </div>
                <div>
                    <div className={styles.ImgContainer}>
                      <img src="/img/ProfileIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Learn</h2>
                    </div>
                </div>
                <div>
                    <div className={styles.ImgContainer}>
                        <img src="/img/RoadMapIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Roadmaps</h2>
                    </div>
                    
                </div>
                <div>
                    <div className={styles.ImgContainer}>
                        <img src="/img/CodingChallengesIcon.png" alt=""></img>
                    </div>

                    <div className={styles.TextContainer}>
                        <h2>Coding Challenges</h2>
                    </div>
                </div>
            </div>

            <div className={styles.Footer}>
                <div className={styles.LogOut}>
                    <h3>LOG OUT</h3>
                </div>
                <img className={styles.BellIcon} src="/img/BellIcon.png" alt="" />

            </div>
        </div>
    );


}

export default NavPanel; 