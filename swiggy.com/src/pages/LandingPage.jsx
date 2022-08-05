import React, { useEffect } from 'react'
import { useState } from 'react';
import swiggyLogo from "../Images/swiggyLogo.png"
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom"
import swiggyFooter from  "../Images/swiggyFooter.jpg"
import {Signup} from './Signup';
import { Login } from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import './App.css';

export const LandingPage = () => {

    const [state,setState]=useState({
        right:false
    })

    const [type,setType]=useState("")
    const [pinCode,setPinCode]=useState()
    const [inputValue,setInputValue]=useState("")
    const [randomText,setRandomText]=useState("Hungry?")
    const [index,setIndex]=useState(0)
    const textArray = [ 'Game night?', 'Unexpected guests?', 'Late night at office?', 'Cooking gone wrong?', 'Movie marathon?']
    const navigate=useNavigate()
    // const index=1

   
    //     setInterval(() => {
    //    if(index===textArray.length-1){
    //     setIndex(0)
    //    }
    //    else{
    //     setRandomText(textArray[index]);
    //     setIndex(index+1);

    //    }
    // }, 2000);
  
    
  //  if(index===textArray.length-1){
  //   clearInterval(interval)
  //   setIndex(0)
  //  }

  
    
     


    const toggleDrawer = (anchor, open,type) => (event) => {
        setType(type)
        setState({[anchor]: open });
      };
      

      const list = (anchor) => (
      
        <Box
          sx={{ width:450 }}
          role="presentation"
        >
        {type!="login"?<Signup/>: <Login/>}
        </Box>
      )


      const handleFindFood=()=>{

        axios({
            method:"get",
            url:`https://api.postalpincode.in/pincode/${pinCode}`
        })
        .then((res)=>{localStorage.setItem("address",[res.data[0].PostOffice[0].Name])})
        .catch((err)=>console.log(err))

      }
     

  return (
    <div>
    <div className="section">
    <div id="upperSection" >
        <div id="upperSectionLeftPart">
            <div id="upperSectionLeftPartInnerBox">
                <nav>
                    <img id="swiggyLogo" src={swiggyLogo} alt="swiggyLogo"/>
                    <div id="navButtonUpperDiv">
                         <div id="navButtonDiv">
                            <button id="loginBtn" className="navBtn" onClick={toggleDrawer("right", true,"login")} >Login</button>
                            {/* <MenuIcon /> */}
                           
                            <button id="signupBtn" className="navBtn" onClick={toggleDrawer("right", true,"signup")}>Sign up</button>
                        </div>

                    </div>
                    <div id="loggedUpperDiv">
                        <div id="loggedUser">
                            <div><img src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" alt="" /></div>
                            <div><button id="colorChange"></button></div>
                        </div>
                        <div id="logoutDropDown">
                            <button id="logoutBtn">Logout</button>
                        </div>
                    </div>
                </nav>
                <h1 id="randomTextHeading" >{randomText}</h1>
                <h2 id="supporterTextHeading">Order food from favourite restaurants near you.</h2>
                <div id="searchBox">
                    <input id="searchBar" type={"text"} onChange={(e)=>{setPinCode(e.target.value)}} placeholder="Enter your delivery location " />
                    <button id="searchBtn" onClick={handleFindFood}><Link to={"/navbar"}>FIND FOOD</Link></button>
                </div>
                <h3 id="popularCitiesHeading">POPULAR CITIES IN INDIA</h3>
                <ul id="popularCitiesList">
                    <li><a href="#">Ahmedabad</a></li>
                    <li><a href="#">Bangalore</a></li>
                    <li><a href="#">Chennai</a></li>
                    <li><a href="#">Delhi</a></li>
                    <li><a href="#">Gurgaon</a></li>
                    <li><a href="#">Hyderabad</a></li>
                    <li><a href="#">Kolkata</a></li>
                    <li><a href="#">Mumbai</a></li>
                    <li><a href="#">Pune</a></li>
                    <li><a href="#">& more.</a></li>
                </ul>
            </div>
        </div>
        <div id="upperSectionRightPart">
            <img id="upperSectionRightPartImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="upperSectionRightPartImage" />
        </div>
    </div>
</div>
<div className="section" id="secondBox">
    <div id="secondBoxInnerDiv">
        <div className="secondBoxInnerDivGridBox">
            <img id="secondBoxImage1" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
            <div className="secondBoxHeading">No Minimum Order</div>
            <div className="secondBoxPara">Order in for yourself or for the group, with no restrictions on order value</div>
        </div>
        <div className="secondBoxInnerDivGridBox">
            <img id="secondBoxImage2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
            <div className="secondBoxHeading">Live Order Tracking</div>
            <div className="secondBoxPara">Know where your order is at all times, from the restaurant to your doorstep</div>
        </div>
        <div className="secondBoxInnerDivGridBox">
            <img id="secondBoxImage3" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt=""/>
            <div className="secondBoxHeading">Lightning-Fast Delivery</div>
            <div className="secondBoxPara">Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
        </div>
    </div>
</div>
<div className="section" id="thirdBox">
    <div id="thirdBoxInnerDiv">
        <div id="thirdBoxInnerDivHeading">Restaurants in your pocket</div>
        <div id="thirdBoxInnerDivPara">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>
        <div>
            <a href="#">
                <img id="playStoreImage" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
            </a>
            <a href="#">
                <img id="appleStoreImage" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
            </a>
        </div>
    </div>
    <img id="mobileImage1" width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" />
    <img id="mobileImage2" width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" />
</div>
                           <Drawer
                            anchor={"right"}
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                            >
                             {list("right")}
                            </Drawer>
{/* <div id="footer" >
<img src={swiggyFooter}></img>
</div> */}
</div>
  )
}
