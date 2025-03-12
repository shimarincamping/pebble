import React,{useEffect, useState} from "react";
import styles from "../styles/RewardWheelCard.module.css"
import CongratsMessageCard from "./PrizeObtainedDialog"


    function RewardWheelCard({WheelRotation,handleSpin,getTicketCount,showCongrats}){

    // delete all of this, its not meant to be here

    // const sendAuthReq = async () => {
    //     try{
    //         const response= await axios.get('http://localhost:4001/auth/linkedin');
    //         console.log(response);
    //     }catch (e){
    //         console.error("Error during LinkedIn Auth : " + e);
    //     }
    // }

    const sendAuthReq = async () => {
        
       window.location='http://localhost:4001/auth/linkedin';
        
    }

    return(

        <div className={styles.Container}>
            <h1>You have <span className={styles.TicketCount}> {getTicketCount()}</span> ready for use! </h1>

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
                    // onClick={handleSpin} 
                    onClick={sendAuthReq} 
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