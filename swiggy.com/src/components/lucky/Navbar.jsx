import * as React from "react";
import  {useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutsuccess } from "../../store/store/auth/action";
import Drawer from "@mui/material/Drawer";
import Loginimage from "./Image-login_btpq7r.webp";
import TextField from "@mui/material/TextField";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { authentication } from "./Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Navbar = () => {
  const countrycode = "+91"
  const displayName = "Lucky"
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [state, setState] = React.useState(false);
  const [token, settoken] = React.useState()
  const [number, setnumber] = React.useState(countrycode);
  const [expandform, setexpandform] = React.useState(false);
  const [captchasize, setcaptchasize] = React.useState("visible")
  const [otp, setotp] = React.useState();

    useEffect(() => {
      // localStorage.setItem()
    
      return () => {
        
      }
    }, [])
    
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
   }


  const requestotp = (e) => {
   
    e.preventDefault();
    console.log(number);
    if (number.length >= 12) {
       console.log(2);
      
      generaterecaptcha();
      let appverifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, number, appverifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult
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
          const user = result.user;
          console.log(user);
          settoken(user.accessToken)
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  }
 
  const toggleDrawer = (open) => {
    setState(open);
  };

  const list = () => (
    <Box className="drawer" sx={{ width: 350 }} role="presentation">
      <div className="flex_1">
        <div className="jssp1">
          <ClearIcon
            onClick={() => toggleDrawer(false)}
            className="clearicon"
          />
          <p className="p1">Login</p>
          <p className="p2">
            or <span className="create_account">create an account</span>{" "}
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
            <Button onClick={verifyotp}>Verify</Button>
          </>
        ) : (
          <>
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

  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutsuccess());
  };
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
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            Products Pricing Blog
            {/* <Link to={"/"}>Private Route</Link> */}
          </Box>
          {token ? (
            <>
              {/* {()=> toggleDrawer(false)} */}
              <Box
                onClick={handlelogout}
                style={{ cursor: "pointer" }}
                sx={{ flexGrow: 0 }}
              >
                logout
              </Box>
            </>
          ) : (
            // <Link to="/">
              <>
            <Box
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
              onClick={() => toggleDrawer(true)}
            >
              Login
                </Box>
                <Link to={"/signup"}>
                <Box
                  className="signup"
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
              // onClick={() => toggleDrawer(true)}
            >
              signup
                  </Box>
                </Link>
              </>
            // </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
