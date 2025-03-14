import {React,useEffect, useState} from "react";
import styles from "../styles/RewardWheelCard.module.css"
import CongratsMessageCard from "./PrizeObtainedDialog"


//delete the following import, it's not meant to be here



    function RewardWheelCard({WheelRotation,handleSpin,showTicketCount,showCongrats,nTickets}){


    return(
        
        <div className={styles.Container}>
            <h1>You have <span className={styles.TicketCount}> {showTicketCount(nTickets)}</span> ready for use! </h1>

            <div className={styles.WheelContainer}>
                <img 
                    className={styles.Wheel}
                    style={
                            {transform: `rotate(${WheelRotation}deg)`,
                            transition: WheelRotation ? "transform 2s ease-out" : ""
                            }
                        } 
                    src="/img/RewardWheelImg.png"
                    onTransitionEnd={showCongrats}
                />

                <img 
                    className={styles.SpinNow} 
                    src="/img/SpinNowIcon.png"
                    onClick={handleSpin} 
                    
                />

                <img
                    className={styles.Pointer}
                    src='/img/WheelPointer.png' 
                />

            </div>

            
        </div> 
    );

}

export default RewardWheelCard; 