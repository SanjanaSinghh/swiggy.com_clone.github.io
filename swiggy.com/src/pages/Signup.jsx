import React from 'react'
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
// import "" from "./Image-login_btpq7r.webp";
import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { authentication } from "../components/lucky/Firebase";
import axios, { Axios } from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { loginloading, sucessLogin } from "../store/store/auth/action";


export const Signup = () => {


    const countrycode = "+91";
    const displayName = "Lucky";
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


    const toggleDrawer1 = (open) => {
        console.log(1);
        setState1(open);
      };

      const toggleDrawer = (open) => {
        console.log(2);
        setState(open);
      };
      const providenum = (e) => {
        setnumber(e.target.value);
        requestotp(e);
      };

      useEffect(() => {
        let nmbar = JSON.parse(localStorage.getItem("number"));
        let namber = null;
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
              }
            }
          });
        }
        // toggleDrawer(true);
        // return () => {};
      }, []);
    
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
            token: token
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
        if (number.length >= 12) {
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
              console.log(result);
              console.log(User.uid);
              console.log(User);
              settoken(User.uid);
              console.log(token);
              setloggedin(true);
              // ...
            })
            .catch((error) => {
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
    


  return (




    <Box className="drawer" sx={{ width: 350 }} role="presentation">
    <div className="flex_1">
      <div className="jssp1">
        <ClearIcon
          onClick={() => toggleDrawer(false)}
          className="clearicon"
        />
        <p className="p1">Sign up</p>
        <p className="p2">
          or <span className="create_account">login to your account</span>{" "}
        </p>
      </div>
      <div>
        <img className="login_img" src={""} alt="" />
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
            onClick={()=> verifyotp}
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
            onClick={()=>allow}
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
  )
}