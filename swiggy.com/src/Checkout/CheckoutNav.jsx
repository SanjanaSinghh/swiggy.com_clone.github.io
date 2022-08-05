import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useNavigate } from "react-router";
import styled from "styled-components";


const CheckoutNavigator=()=>{
const navigate=useNavigate();

    const handleChange=()=>{
        navigate('./')
    }

    return(
        <>

        <div style={{display:"flex", justifyContent:"space-between",padding:"20px",height:"30px"}}>
            <div style={{display:"flex",padding:"20px"}}>
                <div >
                    <button style={{border:"none", backgroundColor:"transparent"}} onClick={handleChange}>
                        <img style={{width:"30px",height:"40px"}} src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" alt="" /></button>
                    
                </div>
                <div>SECURE CHECKOUT</div>
            </div>

            <div style={{display:"flex", justifyContent:"space-between",width:"25%"}}>
            <div style={{display:"flex"}}>
            <HelpOutlineOutlinedIcon />
            <p>Help</p>
            </div>
            <div style={{display:"flex"}}>
            <PersonOutlineIcon />
               <p>Pranav</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default CheckoutNavigator;