import React from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const User = ({children}) => {

  const email = useSelector((state) => state.auth.email);
  const name = useSelector((state) => state.auth.name);
  const number = useSelector((state) => state.auth.number);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  console.log(email, name, number)
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
  return (
    <div className="body_help">
      <div className="main">
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
            <button className="buttonuser1">EDIT PROFILE</button>
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
        <div className="js4"></div>
      </div>
    </div>
  );
};

export default User;
