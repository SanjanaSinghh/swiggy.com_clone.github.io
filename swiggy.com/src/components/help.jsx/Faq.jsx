import React from 'react'
import { useState } from "react";

const Faq = () => {

  
  const [expandform1, setexpandform1] = useState(false);
  const [expandform2, setexpandform2] = useState(false);
  const [expandform3, setexpandform3] = useState(false);
  const [expandform4, setexpandform4] = useState(false);
  const [expandform5, setexpandform5] = useState(false);
  const [expandform6, setexpandform6] = useState(false);
  const [expandform7, setexpandform7] = useState(false);
  const [expandform8, setexpandform8] = useState(false);
  const [expandform9, setexpandform9] = useState(false);
  const [expandform10, setexpandform10] = useState(false);
  const [expandform11, setexpandform11] = useState(false);
  const [expandform12, setexpandform12] = useState(false);


  return (
    <div>
      <h3>FAQs</h3>
      <div className="faqmain">
        <div className="query">
          <div
            className="querya"
            onClick={() => setexpandform1(true)}
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
                  support@swiggy.in. <br /> <br /> Note: We value your privacy
                  and your information is safe with us. Please do not reveal any
                  personal information, bank account number, OTP etc. to another
                  person. A Swiggy representative will never ask you for these
                  details. Please do not reveal these details to fraudsters and
                  imposters claiming to be calling on our behalf. Be vigilant
                  and do not entertain phishing calls or emails
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
            <p>I want to explore career opportunities with Swiggy</p>
            {expandform2 === true ? (
              <>
                <div className="read_more">Join our team</div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 4-6 hrs</div>
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
            <p>I want to provide feedback</p>
            {expandform3 === true ? (
              <>
                <div className="paragraph"></div>
                <div className="jscred jsdred">SEND AN EMAIL</div>
                <div className="alerta">We will revert in 24-48 hrs</div>
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
            <p>Can I edit my order?</p>
            {expandform4 === true ? (
              <>
                <div className="paragraph">
                  Your order can be edited before it reaches the restaurant. You
                  could contact customer support team via chat or call to do so.
                  Once order is placed and restaurant starts preparing your
                  food, you may not edit its contents
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
            <p>I want to cancel my order</p>
            {expandform5 === true ? (
              <>
                <div className="paragraph">
                  We will do our best to accommodate your request if the order
                  is not placed to the restaurant (Customer service number:
                  080-67466729). Please note that we will have a right to charge
                  a cancellation fee up to full order value to compensate our
                  restaurant and delivery partners if your order has been
                  confirmed.
                </div>
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
            <p>Will Swiggy be accountable for quality/quantity?</p>
            {expandform6 === true ? (
              <>
                <div className="paragraph">
                  Quantity and quality of the food is the restaurants'
                  responsibility. However in case of issues with the quality or
                  quantity, kindly submit your feedback and we will pass it on
                  to the restaurant.
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
            <p>Is there a minimum order value?</p>
            {expandform7 === true ? (
              <>
                <div className="paragraph">
                  We have no minimum order value and you can order for any
                  amount.
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onClick={() => setexpandform8(true)}
            onMouseLeave={() => setexpandform8(false)}
          >
            <p>Do you charge for delivery?</p>
            {expandform8 === true ? (
              <>
                <div className="paragraph">
                  Delivery fee varies from city to city and is applicable if
                  order value is below a certain amount. Additionally, certain
                  restaurants might have fixed delivery fees. Delivery fee (if
                  any) is specified on the 'Review Order' page.
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div
            className="querya"
            onMouseEnter={() => setexpandform9(true)}
            onMouseLeave={() => setexpandform9(false)}
          >
            <p>How long do you take to deliver?</p>
            {expandform9 === true ? (
              <>
                <div className="paragraph">
                  Standard delivery times vary by the location selected and
                  prevailing conditions. Once you select your location, an
                  estimated delivery time is mentioned for each restaurant.
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

export default Faq