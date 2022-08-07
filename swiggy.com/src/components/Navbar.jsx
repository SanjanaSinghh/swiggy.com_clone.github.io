import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getAuth, signOut } from "firebase/auth";
import Search from '@mui/icons-material/Search';
// import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../store/store/auth/action";
import Drawer from "@mui/material/Drawer";
import Loginimage from "../components/lucky/Image-login_btpq7r.webp";
import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { authentication } from "../components/lucky/Firebase";
import axios, { Axios } from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { loginloading, sucessLogin } from "../store/store/auth/action";



export const Navbar = () => {
  
              // localStorage.setItem("number", JSON.stringify(+919499370283));
  const countrycode = "+91";
  const auth = getAuth();
  // const displayName = "Lucky";
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [state1, setState1] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [token, settoken] = React.useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [relod, setrelod] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = React.useState(countrycode);
  const [expandform, setexpandform] = React.useState(false);
  const [captchasize, setcaptchasize] = React.useState("visible");
  const [alerts, setalerts] = useState("");
  const [otp, setotp] = React.useState();
  const [falsee, setfalsee] = useState(true);
  const [loggedin, setloggedin] = React.useState(false);
    const Data = useSelector((state) => state.auth);
      const dispatch = useDispatch();
  const namee = useSelector((state) => state.auth.name);

      useEffect(() => {
        let nmbar = JSON.parse(localStorage.getItem("number"));
        let namber = null;
        console.log(nmbar)
        if (nmbar != null) {
          axios.get("http://localhost:4000/users").then((resp) => {
            let data = resp.data;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              console.log(data[i]["number"]);
              namber = data[i]["number"];
              if (namber === undefined) {
                namber = 1;
                console.log(2);
              }
              if (namber == nmbar) {
                console.log("number", nmbar);
                collectdata(namber)
              }
            }
          });
        }
        // toggleDrawer(true);
        // return () => {};
      }, []);
       
  const collectdata = (num) => {
    console.log(num);
         axios.get("http://localhost:4000/users").then((resp) => {
           let data = resp.data;
           console.log(data);
           for (let i = 0; i < data.length; i++) {
             let namber = data[i]["number"];
             if (namber === num) {
             console.log("from database", namber);
               console.log(data[i]);
               dispatch(sucessLogin(data[i]));
               settoken("fcgvbhnj")
               console.log(token);
          // console.log(res);
             }
            
           }
         });
        }

      const handlelogin = () => {
        //  console.log(2);
        dispatch(loginloading());
        axios({
          method: "post",
          url: "http://localhost:4000/users",
          data: {
            name: name,
            email: email,
            password: password,
            number: number,
            token: token,
          },
        }).then((res) => {
          console.log(Data.email);
          console.log(res.data);
          dispatch(sucessLogin(res.data));
          <Navigate to={"/user"} />;
          console.log(res);
        });
      };

      const generaterecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // onSignInSubmit();
            },
          },
          authentication
        );
      };

      const requestotp1 = (e) => {
        e.preventDefault();
        console.log(number);
        if (number.length > 12) {
          console.log(2);

          generaterecaptcha();
          let appverifier = window.recaptchaVerifier;
          signInWithPhoneNumber(authentication, number, appverifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
              setexpandform(true);
              setcaptchasize("invisible");
            })
            .catch((error) => {
              console.log(error);
              // ...
            });
        } else {
          alert("please enter valid mobile number");
        }
      };
      const requestotp = (e) => {
        e.preventDefault();
        let nmbr = e.target.value;
        setalerts("");
        console.log(nmbr);
        if (nmbr.length >= 12) {
          axios.get("http://localhost:4000/users").then((resp) => {
            let data = resp.data;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              console.log(data[i]["number"]);
              let namber = data[i]["number"];
              console.log("hhh", number, namber);
              if (nmbr == namber) {
                console.log("hhh", number, namber);
                setalerts("user already exists");
                setfalsee(true);
              } else {
                setfalsee(false);
              }
            }
          });
          if (falsee == true) {
            return;
          }
        }
    };
     const allow = (e) => {
       if (falsee == true) {
         alert("please enter correct details");
         return;
       } else {
         allowotp(e);
       }
     };
      const allowotp = (e) => {
        e.preventDefault();
        console.log(number);
        if (number.length >= 12) {
          setrelod(number);
          console.log(2);

          generaterecaptcha();
          let appverifier = window.recaptchaVerifier;
          // new PhoneAuthCredential(authentication, name, email, number, appverifier);
          //  console.log(PhoneAuthCredential);
          signInWithPhoneNumber(authentication, number, appverifier)
            .then((confirmationResult) => {
              window.confirmationResult = confirmationResult;
              setexpandform(true);

              // setcaptchasize("invisible");
            })
            .catch((error) => {
              console.log(error);
              // ...
            });
        }
      };

      const verifyotp1 = () => {
        if (otp.length === 6) {
          console.log(otp);
          let confirmationResult = window.confirmationResult;
          confirmationResult
            .confirm(otp)
            .then((result) => {
              // User signed in successfully.
              const User = result.user;
              console.log(User);
              // console.log(result);
              console.log(User.uid);
              // console.log(User);
              collectdata(number);
              settoken(User.uid);
                toggleDrawer1(false);
                toggleDrawer(false);
              console.log(token);
              setloggedin(true);
              localStorage.setItem("number", JSON.stringify(number));
              setotp("")
              // ...
            })
            .catch((error) => {
              console.log(error);
              // User couldn't sign in (bad verification code?)
              // ...
            });
        }
      };
      const verifyotp = () => {
        if (otp.length === 6) {
          console.log(otp);
          let confirmationResult = window.confirmationResult;
          confirmationResult
            .confirm(otp)
            .then((result) => {
              // User signed in successfully.
              const User = result.user;
              console.log(result);
              console.log(User.uid);
              console.log(User);
                settoken(User.uid);
                toggleDrawer1(false);
                toggleDrawer(false);
              console.log(token);
              setloggedin(true);
              localStorage.setItem("number", JSON.stringify(number));
                handlelogin();
              // ...
            })
            .catch((error) => {
              console.log(error);
              // User couldn't sign in (bad verification code?)
              // ...
            });
        }
      };
     const toggleDrawer1 = (open) => {
       console.log(1);
       setState1(open);
     };
     const toggleDrawer = (open) => {
       console.log(2);
       setState(open);
  };
  const handledrawers = () => {
    toggleDrawer1(true)
    toggleDrawer(false)
  }
  const handledrawers1 = () => {
    toggleDrawer1(false)
    toggleDrawer(true)
  }
  
     const providenum = (e) => {
       setnumber(e.target.value);
       requestotp(e);
     };
     const list1 = () => (
       <Box className="drawer" sx={{ width: 350 }} role="presentation">
         <div className="flex_1">
           <div className="jssp1">
             <ClearIcon
               onClick={() => toggleDrawer1(false)}
               className="clearicon"
             />
             <p className="p1">Login</p>
             <p className="p2">
               or
               <span
                 className="create_account"
                 onClick={() => handledrawers1()}
               >
                 create an account
               </span>
             </p>
           </div>
           <div>
             <img className="login_img" src={Loginimage} alt="" />
           </div>
         </div>
         <div className="jss1">
           <div className="textfield">
             <TextField
               className="textfield1"
               value={number}
               label={"Phone Number"}
               onChange={(e) => setnumber(e.target.value)}
               variant="standard"
             />
           </div>

           {expandform === true ? (
             <>
               <TextField
                 value={otp}
                 label="Enter otp"
                 onChange={(e) => setotp(e.target.value)}
                 variant="outlined"
               />
               <Button
                 id="button_1"
                 className="verify"
                 onClick={()=>verifyotp1()}
                 variant="outlined"
               >
                 Verify
               </Button>
             </>
           ) : (
             <>
               <Button
                 id="button_1"
                 className="login"
                 onClick={(e)=> requestotp1(e)}
                 variant="outlined"
               >
                 Login
               </Button>
               <p className="p3">
                 By clicking on Login, I accept the{" "}
                 <span className="terms">Terms & Conditions</span> &{" "}
                 <span className="terms">Privacy Policy</span>
               </p>
             </>
           )}

           <div id="recaptcha-container"></div>
         </div>
       </Box>
     );
     const list = () => (
       <Box className="drawer" sx={{ width: 350 }} role="presentation">
         <div className="flex_1">
           <div className="jssp1">
             <ClearIcon
               onClick={() => toggleDrawer(false)}
               className="clearicon"
             />
             <p className="p1">Sign up</p>
             <p className="p2">
               or
               <span
                 className="create_account"
                 onClick={() => handledrawers()}
               >
                 login to your account
               </span>
             </p>
           </div>
           <div>
             <img className="login_img" src={Loginimage} alt="" />
           </div>
         </div>
         <div className="jss1">
           <TextField
             className="textfield1"
             value={number}
             label={"Phone Number"}
             onChange={providenum}
             variant="outlined"
           />
           <div className="alert">{alerts}</div>

           {expandform === true ? (
             <>
               <TextField
                 value={otp}
                 label="Enter otp"
                 onChange={(e) => setotp(e.target.value)}
                 variant="outlined"
               />
               <Button
                 id="button_1"
                 className="verify"
                 onClick={()=>verifyotp()}
                 variant="outlined"
               >
                 Verify
               </Button>
             </>
           ) : (
             <>
               <TextField
                 className="textfield1"
                 // value={number}
                 label={"Name"}
                 onChange={(e) => setname(e.target.value)}
                 variant="outlined"
               />
               <TextField
                 className="textfield1"
                 // value={number}
                 label={"Email"}
                 onChange={(e) => setemail(e.target.value)}
                 variant="outlined"
               />
               <TextField
                 className="textfield1"
                 // value={number}
                 label={"Password"}
                 onChange={(e) => setpassword(e.target.value)}
                 variant="outlined"
               />
               <Button
                 id="button_1"
                 className="login"
                 onClick={(e)=> allow(e)}
                 variant="outlined"
               >
                 Sign Up
               </Button>
               <p className="p3">
                 By clicking on Login, I accept the{" "}
                 <span className="terms">Terms & Conditions</span> &{" "}
                 <span className="terms">Privacy Policy</span>
               </p>
             </>
           )}

           <div id="recaptcha-container"></div>
         </div>
       </Box>
     );
    

  const handlelogout = () => {
    localStorage.removeItem("number");
     signOut(auth)
       .then(() => {
         console.log("sign out success");
         // Sign-out successful.
       })
       .catch((error) => {
         console.log("error");
         // An error happened.
       });
    settoken("");
    setexpandform(false);
    console.log("logout success");
   
    <Navigate to={"/"} />;
    dispatch(logoutsuccess());
  };

  return (
    //    <div id="headerContainer">
    // <div id="headerContentContainer">
    //     <Link to=""  id="logo"><img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
    //             alt="swiggylogo"/></Link>
    //     <div id="currentLocation" style={{hover:{color:"orange"}}}>{localStorage.getItem("address")}<KeyboardArrowDownIcon color="#ff3d00"/></div>
    //     <ul id="headerContainerRight">
    //         <li id="search">
    //             <Link  to="/search"><img
    //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"/>Search</Link>
    //         </li>
    //         <li id="offer">
    //             <Link to="" ><img src="https://static.thenounproject.com/png/971055-200.png" alt=""/>
    //                 Offers</Link>
    //         </li>
    //         <li id="help">
    //             <Link to="" > <img src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png"
    //                     alt=""/> Help</Link>
    //         </li>
    //         <li id="signIn">
    //         <Link to=""  id="signInA"><img src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" alt=""/>Guest</Link>
    //     </li>
    //         <li id="cart"><Link to="" > Cart<span id="noOfCartItems"></span></Link></li>
    //      </ul>
    <div id="headerContainer">
      <div id="headerContentContainer">
        <Drawer
          anchor={"right"}
          open={state1}
          onClose={() => toggleDrawer1(false)}
        >
          {list1()}
        </Drawer>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>

        <Link to="" id="logo">
          <img
            src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
            alt="swiggylogo"
          />
        </Link>
        <div id="currentLocation">
          {localStorage.getItem("address")}
          <KeyboardArrowDownIcon color="#ff3d00" />
        </div>
        <ul id="headerContainerRight">
          <li id="search">
            <Link to="/search">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png" />
              Search
            </Link>
          </li>
          <li id="offer">
            <Link to="">
              <img
                src="https://static.thenounproject.com/png/971055-200.png"
                alt=""
              />
              Offers
            </Link>
          </li>
          <li id="help">
            <Link to={"/support"}>
              <img
                src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png"
                alt=""
              />
              Help
            </Link>
          </li>
          <li id="signIn">
            <Link to="" id="signInA">
              <img
                src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png"
                alt=""
              />
              Guest
            </Link>
          </li>

          <li id="signIn">
            {token ? (
              <>
                <div className="user"></div>
                {/* {()=> toggleDrawer(false)}
                    {()=> toggleDrawer1(false)} */}
                {/* <Navigate to={"/user"}/>
                <Navigate to={"/user/orders"} /> */}
                <Link to={"/user/orders"}></Link>

                {/* {settoken("")} */}
                <Box
                  onClick={() => handlelogout()}
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 0 }}
                >
                  {namee}
                  Logout
                </Box>
              </>
            ) : (
              // <Link to="/">
              <>
                <Box
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 0 }}
                  onClick={() => toggleDrawer1(true)}
                  id="signInA"
                >
                  {/* <img
                    src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png"
                    alt=""
                  /> */}
                  Sign in
                </Box>
                {/* <Link to={"/signup"}> */}
                {/* <Box
                  className="signup"
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 0 }}
                  onClick={() => toggleDrawer(true)}
                >
                  signup
                </Box> */}
              </>
            )}
            {/* <MenuIcon /> */}
          </li>
          <li id="cart">
            <Link to="">
              Cart<span id="noOfCartItems"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

}
export default Navbar
