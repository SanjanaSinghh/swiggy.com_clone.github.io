import React from 'react'
import { useState } from "react";

const Partner_Onbording = () => {

  
  const [expandform1, setexpandform1] = useState(false);
  const [expandform2, setexpandform2] = useState(false);
  const [expandform3, setexpandform3] = useState(false);
  const [expandform4, setexpandform4] = useState(false);
  const [expandform5, setexpandform5] = useState(false);
  const [expandform6, setexpandform6] = useState(false);
  const [expandform7, setexpandform7] = useState(false);


  return (
    <div className="partnermain">
      <h3>Partner_Onbording</h3>
      <div className="partnerdata">
        <div className="query">
          <div
            className="querya"
            onClick={() => setexpandform1(true)}
            onMouseLeave={() => setexpandform1(false)}
            // oncla={() => setexpandform1(false)}
          >
            <div className="flexd">
              <p>I want to partner my restaurant with Swiggy</p>
              <p>{} </p>
            </div>

            {expandform1 === true ? (
              <>
                <div className="paragraph">
                  <p>Partner with us</p>
                </div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 24-48 hrs</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform2(true)}
            onMouseLeave={() => setexpandform2(false)}
          >
            <p>
              What are the mandatory documents needed to list my restaurant on
              Swiggy?
            </p>
            {expandform2 === true ? (
              <>
                <div className="paragraph">
                  - Copies of the below documents are mandatory <br /> - FSSAI
                  Licence OR FSSAI Acknowledgement <br /> - Pan Card <br /> -
                  GSTIN Certificate <br /> - Cancelled Cheque OR bank Passbook{" "}
                  <br /> - Menu
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform3(true)}
            onMouseLeave={() => setexpandform3(false)}
          >
            <p>
              After I submit all documents, how long will it take for my
              restaurant to go live on Swiggy?
            </p>
            {expandform3 === true ? (
              <>
                <div className="paragraph">
                  After all mandatory documents have been received and verified
                  it takes upto 7-10 working days for the onboarding to be
                  completed and make your restaurant live on the platform.
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform4(true)}
            onMouseLeave={() => setexpandform4(false)}
          >
            <p>
              What is this one time Onboarding fees? Do I have to pay for it
              while registering?
            </p>
            {expandform4 === true ? (
              <>
                <div className="paragraph">
                  This is a one-time fee charged towards the system & admin
                  costs incurred during the onboarding process. It is deducted
                  from the weekly payouts after you start receiving orders from
                  Swiggy.
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform5(true)}
            onMouseLeave={() => setexpandform5(false)}
          >
            <p>
              Who should I contact if I need help & support in getting
              onboarded?
            </p>
            {expandform5 === true ? (
              <>
                <div className="paragraph">
                  You can connect with Partner Support on 080-67466777/68179777
                  or write to partnersuport@swiggy.in
                </div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 24-48 hrs</div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform6(true)}
            onMouseLeave={() => setexpandform6(false)}
          >
            <p>How much commission will I be charged by Swiggy?</p>
            {expandform6 === true ? (
              <>
                <div className="paragraph">
                  The commission charges vary for different cities. You will be
                  able to see the commission applicable for you once the
                  preliminary onboarding details have been filled.
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform7(true)}
            onMouseLeave={() => setexpandform7(false)}
          >
            <p>
              I don’t have an FSSAI licence for my restaurant. Can it still be
              onboarded?
            </p>
            {expandform7 === true ? (
              <>
                <div className="paragraph">
                  FSSAI licence is a mandatory requirement according to the
                  government’s policies. However, if you are yet to receive the
                  licence at the time of onboarding, you can proceed with the
                  acknowledgement number which you will have received from FSSAI
                  for your registration.
                </div>
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

export default Partner_Onbording