import React,{useState} from "react";
import styles from "../styles/RewardWheelCard.module.css"
import CongratsMessageCard from "./CongratsMessageCard"


    function RewardWheelCard({WheelRotation,handleSpin,getTicketCount,isCongratsVisible,rewardName,handleCongratsClose}){
        

    return(

        <div className={styles.Container}>
            <h1>You have <span className={styles.TicketCount}> {getTicketCount()}</span> ready for use! </h1>

            <div className={styles.WheelContainer}>
                <img 
                    className={styles.Wheel}
                    style={
                            {transform: `rotate(${WheelRotation}deg)`,
                             transition:"transform 2s ease-out"
                            }
                         } 
                    src="/img/RewardWheelImg.png"
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