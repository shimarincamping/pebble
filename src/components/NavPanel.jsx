import React from 'react';
import styles from '../styles/NavPanel.module.css';

function NavPanel({isVisible,HandleMenuClick,HandleBellClick,navigateTo}){

    // alert(props.isVisible);
    // let isVisible=-1;

    return(
        <div className={`${styles.NavPanelContainer} 
                         ${isVisible ? styles.visible : ""}
                        `}
        > 
            <div className={styles.Header}> 
                <img 
                    src="/img/TaylorsLogo.png" 
                    className={styles.TaylorsLogo} 
                    alt=""
                />

                <img 
                    src="/img/WhiteMenuIcon.png" 
                    className={styles.MenuIcon} 
                    onClick={HandleMenuClick}
                    alt=""
                />
            </div>

            <div className={styles.Body}>
                <div onClick={navigateTo("/feed")}>
                    <div className={styles.ImgContainer} onClick="">
                        <img src="/img/HomeIcon.png" alt=""/>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Home</h2>
                    </div>   
                </div>

                <div onClick={navigateTo("/rewards")}>
                    <div className={styles.ImgContainer}>
                        <img src="/img/RewardsIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Rewards</h2>
                    </div>
                </div>

                <div onClick={navigateTo("/forum")}>
                    <div className={styles.ImgContainer}> 
                        <img src="/img/LearnIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Learn</h2>
                    </div>
                </div>

                <div onClick={navigateTo("/profile")}>
                    <div className={styles.ImgContainer}>
                      <img src="/img/ProfileIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Me</h2>
                    </div>
                </div>

                <div onClick={navigateTo("/roadmaps")}>
                    <div className={styles.ImgContainer}>
                        <img src="/img/RoadMapIcon.png" alt=""></img>
                    </div>
                    <div className={styles.TextContainer}>
                        <h2>Roadmaps</h2>
                    </div>
                    
                </div>

                <div onClick={navigateTo("/codingchallenge")}>
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
                <img className={styles.BellIcon} 
                     src="/img/BellIcon.png" 
                     onClick={HandleBellClick}
                     alt="" 
                />

            </div>
        </div>
    );


}

export default NavPanel; 