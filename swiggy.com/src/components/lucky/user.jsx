import React from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const User = () => {

  const email = useSelector((state) => state.auth.email);
  const name = useSelector((state) => state.auth.name);
  const number = useSelector((state) => state.auth.number);
  console.log(email,name,number)
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
            <button className="buttonuser1" >EDIT PROFILE</button>
          </div>
        </div>
      </div>
      <div className="jsbottom">
        <div className="js2"></div>
        <div className="js3">
          <div className="js31">
            <div className="js31left">
              <ul className="jss31ul">
                <li className="js31li">
                  <span className="js31span">Orders</span>
                </li>
                <li className="js31li">
                  <span className="js31span">Swiggy One</span>
                </li>
                <li className="js31li">
                  <span className="js31span">Favourites</span>
                </li>
                <li className="js31li">
                  <span className="js31span">Payments </span>
                </li>
                <li className="js31li">
                  <span className="js31span">Addresses</span>
                </li>
                <li className="js31li">
                  <span className="js31span">Settings</span>
                </li>
              </ul>
            </div>
            <div className="js31right">
              <div className="dummy">agrsaezf</div>
            </div>
          </div>
        </div>
        <div className="js4"></div>
      </div>
    </div>
  );
};

export default User;
