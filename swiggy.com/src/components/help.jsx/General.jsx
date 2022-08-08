import React from 'react'
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const General = () => {

  
  const [expandform1, setexpandform1] = useState(false);
  const [expandform2, setexpandform2] = useState(false);
  const [expandform3, setexpandform3] = useState(false);

  return (
    <div>
      <h3>General issues</h3>
      <div className="generalmain">
        <div className="query">
          <div
            className="querya"
            onMouseEnter={() => setexpandform1(true)}
            onMouseLeave={() => setexpandform1(false)}
          >
            <div className="flexd">
              <p>What is Swiggy Customer Care Number?</p>
              <p>{} </p>
            </div>
            
            {expandform1 === true ? (
              <>
                <div className="paragraph">
                  We value our customer’s time and hence moved away from a
                  single customer care number to a comprehensive chat-based
                  support system for quick and easy resolution. You no longer
                  have to go through the maze of an IVRS call support. Just
                  search for your issue in the help section on this page and
                  initiate a chat with us. A customer care executive will be
                  assigned to you shortly. You can also email us your issue on
                  support@swiggy.in. <br /> Note: We value your privacy and your
                  information is safe with us. Please do not reveal any personal
                  information, bank account number, OTP etc. to another person.
                  A Swiggy representative will never ask you for these details.
                  Please do not reveal these details to fraudsters and imposters
                  claiming to be calling on our behalf. Be vigilant and do not
                  entertain phishing calls or emails
                </div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 4-6 hrs</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onMouseEnter={() => setexpandform2(true)}
            onMouseLeave={() => setexpandform2(false)}
          >
            <p>I want to unsubscribe from Swiggy communications</p>
            {expandform2 === true ? (
              <>
                <div className="paragraph">
                  Please drop us an email mentioning the channels you would like
                  to be unsubscribed from. We will take an action and confirm
                  within 24-48 hours.
                </div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 4-6 hrs</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onMouseEnter={() => setexpandform3(true)}
            onMouseLeave={() => setexpandform3(false)}
          >
            <p>I have a query related to donations</p>
            {expandform3 === true ? (
              <>
                <div className="paragraph">
                  All donations related queries are being handled by our
                  donations partner. Please drop us an email and you'll hear
                  back from the team within 24 hours.
                </div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 24-48 hrs</div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default General