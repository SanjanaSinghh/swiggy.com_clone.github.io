import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../../store/store/auth/action";
import Drawer from "@mui/material/Drawer";
import Loginimage from "./Image-login_btpq7r.webp";
import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { authentication } from "./Firebase";
import { Navigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
import { loginloading, sucessLogin } from "../../store/store/auth/action";
import { useSelector } from "react-redux";

const Signup = () => {
  const countrycode = "+91";
  const [state, setState] = React.useState(false);
  const [token, settoken] = React.useState("");
  const [number, setnumber] = React.useState(countrycode);
  const [expandform, setexpandform] = React.useState(false);
  const [captchasize, setcaptchasize] = React.useState("visible");
  const [otp, setotp] = React.useState("");
  const [loggedin, setloggedin] = React.useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const Data = useSelector((state) => state.auth);
  const toggleDrawer = (open) => {
    setState(open);
  };
  useEffect(() => {
    toggleDrawer(true);
    
    return () => {};
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
        token: token,
      },
    }).then((res) => {
        console.log(Data.email);
        console.log(res.data);
      dispatch(sucessLogin(res.data.email));
      console.log(res);
    });
  };

  const generaterecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      authentication
    );
  };

  const requestotp = (e) => {
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

  const verifyotp = () => {
    if (otp.length === 6) {
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const User = result.user;
          console.log(User.uid);
            settoken(User.uid);
            console.log(token);
          setloggedin(true);
          handlelogin();
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  };

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
            or <span className="create_account">login to your account</span>{" "}
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
          onChange={(e) => setnumber(e.target.value)}
          variant="outlined"
        />

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
              onClick={verifyotp}
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
              onClick={requestotp}
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
  // const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutsuccess());
  };

  if (loggedin) {
    return <Navigate to={"/user"} />;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Drawer
          anchor={"right"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </Container>
    </AppBar>
  );
};
export default Signup;
