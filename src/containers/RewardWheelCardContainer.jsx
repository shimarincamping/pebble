import React,{useState} from "react";
import styles from "../styles/RewardWheelCard.module.css"
import RewardWheelCard from "../components/RewardWheelCard";
import CongratsMessageCard from "../components/CongratsMessageCard";

    function RewardWheelCardContainer(){
    
    const [WheelRotation,setRotation]=useState(0);
    const [isCongratsVisible,setCongratsVisibility]=useState(false);
    const [rewardName,setReward]=useState("")

    let rewardsList=['Discord Nitro', 'Syopz Voucher', 'New Profile Picture', '+10 point', '+10 point', 'Discord Nitro', '+10 point', '+10 point', '+10 point', 'Syopz Voucher', 'Discord Nitro']

    const ticketCount=2;
    const getTicketCount=()=>{
        if (ticketCount==1){
            return ticketCount+" ticket"
        }else{
            return ticketCount+" tickets"
        }
    }


    const handleSpin=()=>{
        //Math.floor(Math.random()*10) returns a number between 0(inclusive) and 9(inclusive)
        let pos=Math.floor(Math.random()*10)
        let deg=3600+pos*36;
        setRotation(deg);
        setReward(rewardsList[pos]);
        

        // console.log("prize: "+rewardsList[pos])
        // console.log("pos: "+pos)
        // console.log("deg: "+deg)
        // console.log("relevant deg: "+deg-7200)
    }

    const handleCongratsClose=()=>{

    }
    
    


    return(
        <>
        <RewardWheelCard
            WheelRotation={WheelRotation}
            handleSpin={handleSpin}
            getTicketCount={getTicketCount}
        />

        <CongratsMessageCard
            isVisible={isCongratsVisible}
            rewardName={rewardName}
            handleClose={handleCongratsClose}
        />
        </>


    );

}

export default RewardWheelCardContainer; 