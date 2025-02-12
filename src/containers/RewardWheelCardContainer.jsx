import React,{useState} from "react";
import RewardWheelCard from "../components/RewardWheelCard";
import PrizeObtainedDialog from "../components/PrizeObtainedDialog";
import ApplicationMainOverlay from "../containers/ApplicationMainOverlay";

function RewardWheelCardContainer(){
    
    const [WheelRotation,setRotation]=useState(0);
    const [isPrizeObtainedDialogVisible,setPrizeObtainedDialogVisibility]=useState(false);
    const [rewardName,setReward]=useState("")

    let rewardsList=['Discord Nitro', 'Syopz Voucher', 'New Profile Picture', '+10 points', '+10 points', 'Discord Nitro', '+10 points', '+10 points', '+10 points', 'Syopz Voucher', 'Discord Nitro']

    const ticketCount=2;
    const getTicketCount=()=>{
        if (ticketCount==1){
            return ticketCount+" ticket"
        }else{
            return ticketCount+" tickets"
        }
    }

    const showDialog=()=>{
        setPrizeObtainedDialogVisibility(true);
        console.log("showCongrats called")
    }

    const hideDialog=()=>{
        setPrizeObtainedDialogVisibility(false);
    }




    const handleSpin=()=>{
        //Math.floor(Math.random()*10) returns a number between 0(inclusive) and 9(inclusive)
        let pos=Math.floor(Math.random()*10)
        let deg=5400+pos*36;
        setRotation(deg);
        setReward(rewardsList[pos]);
        // showCongrats();

        // console.log("prize: "+rewardsList[pos])
        // console.log("pos: "+pos)
        // console.log("deg: "+deg)
        // console.log("relevant deg: "+deg-7200)
    }

    const handleDialogClose=()=>{
        hideDialog();
        //reset the wheel
        setRotation(0);
    }
    
    


    return(
        <>
            <RewardWheelCard
                WheelRotation={WheelRotation}
                handleSpin={handleSpin}
                getTicketCount={getTicketCount}
                showCongrats={showDialog}
            />

            {isPrizeObtainedDialogVisible &&
                (
                <ApplicationMainOverlay>
                <PrizeObtainedDialog
                    isVisible={isPrizeObtainedDialogVisible}
                    rewardName={rewardName}
                    handleClose={handleDialogClose}
                />
                </ApplicationMainOverlay>
                )


            }
            
        </>


    );

}

export default RewardWheelCardContainer; 