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
  const [isActive1, setIsActive1] = useState(false);
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
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive1 ? "#ffffff" : "",
                    color: isActive1 ? "grey" : "",
                  }}
                  onClick={handleClick1}
                >
                  <Link to={"/user/orders"}>
                    <span className="js31span">Orders</span>
                  </Link>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive2 ? "#ffffff" : "",
                    color: isActive2 ? "grey" : "",
                  }}
                  onClick={handleClick2}
                >
                  <Link to={"/user/super"}>
                    <span className="js31span">Swiggy One</span>
                  </Link>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive3 ? "#ffffff" : "",
                    color: isActive3 ? "grey" : "",
                  }}
                  onClick={handleClick3}
                >
                  <Link to={"/user/favourites"}>
                    <span className="js31span">Favourites</span>
                  </Link>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive4 ? "#ffffff" : "",
                    color: isActive4 ? "grey" : "",
                  }}
                  onClick={handleClick4}
                >
                  <Link to={"/user/payments"}>
                    <span className="js31span">Payments</span>
                  </Link>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive5 ? "#ffffff" : "",
                    color: isActive5 ? "grey" : "",
                  }}
                  onClick={handleClick5}
                >
                  <Link to={"/user/orders"}>
                    <span className="js31span">Addresses</span>
                  </Link>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive6 ? "#ffffff" : "",
                    color: isActive6 ? "grey" : "",
                  }}
                  onClick={handleClick6}
                >
                  <Link to={"/user/settings"}>
                    <span className="js31span">Settings</span>
                  </Link>
                </li>
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
