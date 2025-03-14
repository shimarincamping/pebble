import {React, useState, useEffect} from "react";
import RewardWheelCard from "../components/RewardWheelCard";
import PrizeObtainedDialog from "../components/PrizeObtainedDialog";
import ComponentLoadingSpinner from '../components/ComponentLoadingSpinner';
import ApplicationMainOverlay from "../containers/ApplicationMainOverlay";
import {useAuth} from './AuthProvider';




function RewardWheelCardContainer(){
    const { user } = useAuth();
    const currentUserID = user;
    const token = localStorage.getItem("jwtToken");

    
    const [WheelRotation,setWheelRotation]=useState(0);
    const [isPrizeObtainedDialogVisible,setPrizeObtainedDialogVisibility]=useState(false);
    const [ticketCount,setTicketCount]=useState(null);
    const [rewardName,setReward]=useState("")

    const rewardsList=['Discord Nitro', 'Syopz Voucher', '+30 points', '+10 points', '+10 points', 'Discord Nitro', '+30 points', '+10 points', '+10 points', 'Syopz Voucher', 'Discord Nitro']


    useEffect(() => {
        const getData = async ()=> {
            const currencyRes = await fetch(`${process.env.REACT_APP_API_URL}/users/${currentUserID}/currency`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // const currencyResJSON = await currencyRes.json();
            
            const { availableTickets } = await currencyRes.json();

            setTicketCount(availableTickets);
    
        }
        
        getData();
        
        
    },[]);

    useEffect(()=>{
        console.log(`ticketCount: ${ticketCount}`);
    },[ticketCount])
    // const ticketCount=2;

    const showTicketCount= (nTickets)=>{

        if (nTickets===1){
            return nTickets + " ticket"
        }else{
            return nTickets + " tickets"
        }
    }

    const showDialog=()=>{
        setPrizeObtainedDialogVisibility(true);
        console.log("showCongrats called")
    }

    const hideDialog=()=>{
        setPrizeObtainedDialogVisibility(false);
    }




    const handleSpin= async () => {
        try{
            // (ticketCount > 0){ instead of just (ticketCount){ to account for ticketCount being null before the fetch from backend is complete.
            if (ticketCount > 0){
                console.log(`@handleSpin activated `);
                Math.floor(Math.random()*10) //returns a number between 0(inclusive) and 9(inclusive)

                let pos=Math.floor(Math.random()*10)
                let deg=5400+pos*36;
                setWheelRotation(deg);
                setReward(rewardsList[pos]);
                setTicketCount(ticketCount-1);

                // Telling the backend what the user won. 
                const obtainedReward = await fetch (`${process.env.REACT_APP_API_URL}/rewards/sendReward`, 
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: {
                            rewardName : "+69 points"
                            // rewardName : rewardsList[pos]
                        }
                    }
                );
            }else{
                alert('You currently have 0 tickets!');
            }
            

        }catch(e){
            console.error("Error occured while spinning wheel: ",e);
        }
        
    }

    const handleDialogClose=()=>{
        hideDialog();
        //reset the wheel
        setWheelRotation(0);
    }
    
    


    return(
        ticketCount != null ? (

            <>
                <RewardWheelCard
                    WheelRotation={WheelRotation}
                    handleSpin={handleSpin}
                    showTicketCount={showTicketCount}
                    showCongrats={showDialog}
                    nTickets = {ticketCount}
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

        ) : <ComponentLoadingSpinner/> 
    );

}

export default RewardWheelCardContainer; 