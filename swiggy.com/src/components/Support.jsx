// import { Link } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const Support = ({ children }) => {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);
  const [isActive9, setIsActive9] = useState(false);
    const handleClick1 = () => {
      setIsActive1(true);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick2 = () => {
      setIsActive1(false);
      setIsActive2(true);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick3 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(true);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick4 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(true);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick5 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(true);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick6 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(true);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick7 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(true);
      setIsActive8(false);
      setIsActive9(false);
    };
    const handleClick8 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(true);
      setIsActive9(false);
    };
    const handleClick9 = () => {
      setIsActive1(false);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
      setIsActive7(false);
      setIsActive8(false);
      setIsActive9(true);
    };

  return (
    <>
      <div className="body_help">
        <div className="main">
          <div className="js1">
            <h1 className="jsh1">Help & Support</h1>
            <div className="jsp1">
              Let's take a step ahead and help you better.
            </div>
          </div>
        </div>
        <div className="jsbottom">
          <div className="js2"></div>
          <div className="js3">
            <div className="js31">
              <div className="js31left">
                <ul className="jss31ul">
                  <Link to={"/support/issues/orders"}>
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
                        Help with orders
                      </span>
                    </li>
                  </Link>
                  <Link to={"/support/issues/general"}>
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
                        General issues
                      </span>
                    </li>
                  </Link>
                  <Link to={"/support/issues/partner-onboarding"}>
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
                        Partner Onboarding
                      </span>
                    </li>
                  </Link>
                  <Link to={"/support/issues/legal"}>
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
                        Legal Terms & Conditions{" "}
                      </span>
                    </li>
                  </Link>
                  <Link to={"/support/issues/faq"}>
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
                        FAQs
                      </span>
                    </li>
                  </Link>
                  {/* <li
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
                    Swiggy one FAQs
                  </span>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive7 ? "#ffffff" : "",
                    color: isActive7 ? "grey" : "",
                  }}
                  onClick={handleClick7}
                >
                  <span
                    className="js31span"
                    style={{
                      fontWeight: isActive7 ? "bold" : "normal",
                    }}
                  >
                    Swiggy money FAQs
                  </span>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive8 ? "#ffffff" : "",
                    color: isActive8 ? "grey" : "",
                  }}
                  onClick={handleClick8}
                >
                  <span
                    className="js31span"
                    style={{
                      fontWeight: isActive8 ? "bold" : "normal",
                    }}
                  >
                    Swiggy Dinners FAQs
                  </span>
                </li>
                <li
                  className="js31li"
                  style={{
                    backgroundColor: isActive9 ? "#ffffff" : "",
                    color: isActive9 ? "grey" : "",
                  }}
                  onClick={handleClick9}
                >
                  <span
                    className="js31span"
                    style={{
                      fontWeight: isActive9 ? "bold" : "normal",
                    }}
                  >
                    Conversation archive
                  </span>
                </li> */}
                </ul>
              </div>
              <div className="js31right">{children}</div>
            </div>
          </div>
          <div className="js4"></div>
        </div>
      </div>
      <div className="js4">
        <Footer />
      </div>
    </>
  );
};

export default Support;
