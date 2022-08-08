import React from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import axios, { Axios } from "axios";
import {Footer} from "../../Footer/Footer"

const User = ({children}) => {

  const email = useSelector((state) => state.auth.email);
  const name = useSelector((state) => state.auth.name);
  const number = useSelector((state) => state.auth.number);
  const password = useSelector((state) => state.auth.password);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [state, setState] = useState(false);
  const [Number, setNumber] = useState(number)
  const [Email, setEmail] = useState(email)
  const [Password, setPassword] = useState(password)
  const [expandform1, setexpandform1] = useState(false);
  const [expandform2, setexpandform2] = useState(false);
  const [expandform3, setexpandform3] = useState(false);
 
  console.log(email, name, number, password)

   const toggleDrawer = (open) => {
     console.log(1);
     setState(open);
     setNumber(number);
     setEmail(email)
  };
  const toggleDrawer1 = () => {
    toggleDrawer(false)
    setexpandform1(false);
    setexpandform2(false);
    setexpandform3(false);
  }
  const expand1 = () => {
    setexpandform1(true)
    setexpandform2(false)
    setexpandform3(false)
  }
  const expand2 = () => {
    setexpandform1(false)
    setexpandform2(true)
    setexpandform3(false)
  }
  const expand3 = () => {
    setexpandform1(false)
    setexpandform2(false)
    setexpandform3(true)
  }
  const collectdata = (num) => {
    console.log(num);
         axios.get("http://localhost:4000/users").then((resp) => {
           let data = resp.data;
           console.log(data);
           for (let i = 0; i < data.length; i++) {
             let namber = data[i]["number"];
             if (namber === num) {
             console.log("from database", namber);
            //    console.log(data[i]);
            //    dispatch(sucessLogin(data[i]));
            //    settoken("fcgvbhnj")
            //    console.log(token);
          // console.log(res);
             }
            
           }
         });
        }

    const handleClick1 = () => {
      setIsActive1(true);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
    };
    const handleClick2 = () => {
      setIsActive1(false);
      setIsActive2(true);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
    };
    const handleClick3 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(true);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
    };
    const handleClick4 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(true);
      setIsActive5(false);
      setIsActive6(false);
    };
    const handleClick5 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(true);
      setIsActive6(false);
    };
    const handleClick6 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(true);
  };
  const list2 = () => (
    <Box className="drawer" sx={{ width: 350 }} role="presentation">
      <div className="flex2">
        <div className="jsca">
          <ClearIcon
            onClick={() => toggleDrawer(false)}
            className="clearicon"
          />
          <p>Edit profile</p>
        </div>
        <div className="jscb">
          <p className={"jscbp"}>Phone number</p>
          {expandform1 === true ? (
            <Box className="dat">
              <TextField
                className="textfield1 textfieldc"
                value={Number}
                label={"New Phone Number"}
                // onChange={(e) => setnumber(e.target.value)}
                variant="outlined"
              />
              <Button
                id="button_1"
                className="verify"
                // onClick={() => verifyotp1()}
                variant="outlined"
              >
                Verify
              </Button>
            </Box>
          ) : (
            <div className="jscba">
              <p className="jscbap">{Number}</p>
              <p className="jscred" onClick={() => expand1()}>
                CHANGE
              </p>
            </div>
          )}
        </div>

        <div className="jscb">
          <p className={"jscbp"}>Email id</p>
          {expandform2 === true ? (
            <Box className="dat">
              <TextField
                className="textfield1 textfieldc"
                value={Email}
                label={"Email id"}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />
              {/* {console.log(Email)} */}
              <Button
                id="button_1"
                className="verify"
                onClick={() => setexpandform2(false)}
                variant="outlined"
              >
                Update
              </Button>
            </Box>
          ) : (
            <div className="jscba">
              <p className={"jscbap"}>{Email}</p>
              <p className="jscred" onClick={() => expand2()}>
                CHANGE
              </p>
            </div>
          )}
        </div>
        <div className="jscb">
          <p className={"jscbp"}>password</p>
          {expandform3 === true ? (
            <Box className="dat">
              <TextField
                className="textfield1 textfieldc"
                // value={number}
                label={"New password"}
                // onChange={(e) => setnumber(e.target.value)}
                variant="outlined"
              />
              <TextField
                className="textfield1 textfieldc"
                // value={number}
                label={"Re-enter new password"}
                // onChange={(e) => setnumber(e.target.value)}
                variant="outlined"
              />
              <Button
                id="button_1"
                className="verify"
                // onClick={() => verifyotp1()}
                variant="outlined"
              >
                Verify
              </Button>
            </Box>
          ) : (
            <div className="jscba">
              <p className={"jscbap"} id={"dots1"}>
                ......
              </p>
                <p className="jscred" onClick={() => expand3()}>
                CHANGE
              </p>
            </div>
          )}
        </div>
      </div>
    </Box>
  );
  
  return (
    <>
      <div className="body_help">
        <div className="main">
          <Drawer anchor={"right"} open={state} onClose={() => toggleDrawer1()}>
            {list2()}
          </Drawer>
          <div className="js1">
            {name ? <h1>{name}</h1> : ""}
            {email ? (
              <h3>
                {number} . {email}
              </h3>
            ) : (
              ""
            )}
          </div>
          <div className="js2">
            <div className="update">
              <button
                className="buttonuser1"
                onClick={() => toggleDrawer(true)}
              >
                <Box
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 0 }}
                  id="signInA"
                >
                  EDIT PROFILE
                </Box>
              </button>
            </div>
          </div>
        </div>
        <div className="jsbottom">
          <div className="js2"></div>
          <div className="js3">
            <div className="js31">
              <div className="js31left">
                <ul className="jss31ul">
                  <Link to={"/user/orders"}>
                    <li
                      className="js31li"
                      style={{
                        backgroundColor: isActive1 ? "#ffffff" : "",
                        color: isActive1 ? "grey" : "",
                      }}
                      onClick={handleClick1}
                    >
                      <span
                        className="js31span"
                        style={{
                          fontWeight: isActive1 ? "bold" : "normal",
                        }}
                      >
                        Orders
                      </span>
                    </li>
                  </Link>
                  <Link to={"/user/super"}>
                    <li
                      className="js31li"
                      style={{
                        backgroundColor: isActive2 ? "#ffffff" : "",
                        color: isActive2 ? "grey" : "",
                      }}
                      onClick={handleClick2}
                    >
                      <span
                        className="js31span"
                        style={{
                          fontWeight: isActive2 ? "bold" : "normal",
                        }}
                      >
                        Swiggy One
                      </span>
                    </li>
                  </Link>
                  <Link to={"/user/favourites"}>
                    <li
                      className="js31li"
                      style={{
                        backgroundColor: isActive3 ? "#ffffff" : "",
                        color: isActive3 ? "grey" : "",
                      }}
                      onClick={handleClick3}
                    >
                      <span
                        className="js31span"
                        style={{
                          fontWeight: isActive3 ? "bold" : "normal",
                        }}
                      >
                        Favourites
                      </span>
                    </li>
                  </Link>
                  <Link to={"/user/payments"}>
                    <li
                      className="js31li"
                      style={{
                        backgroundColor: isActive4 ? "#ffffff" : "",
                        color: isActive4 ? "grey" : "",
                      }}
                      onClick={handleClick4}
                    >
                      <span
                        className="js31span"
                        style={{
                          fontWeight: isActive4 ? "bold" : "normal",
                        }}
                      >
                        Payments
                      </span>
                    </li>{" "}
                  </Link>
                  <Link to={"/user/addresses"}>
                    <li
                      className="js31li"
                      style={{
                        backgroundColor: isActive5 ? "#ffffff" : "",
                        color: isActive5 ? "grey" : "",
                      }}
                      onClick={handleClick5}
                    >
                      <span
                        className="js31span"
                        style={{
                          fontWeight: isActive5 ? "bold" : "normal",
                        }}
                      >
                        Addresses
                      </span>
                    </li>
                  </Link>
                  <Link to={"/user/settings"}>
                    <li
                      className="js31li"
                      style={{
                        backgroundColor: isActive6 ? "#ffffff" : "",
                        color: isActive6 ? "grey" : "",
                      }}
                      onClick={handleClick6}
                    >
                      <span
                        className="js31span"
                        style={{
                          fontWeight: isActive6 ? "bold" : "normal",
                        }}
                      >
                        Settings
                      </span>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="js31right">
                <div className="dummy">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="js4">
        <Footer />
      </div>
    </>
  );
};

export default User;
