import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Hotel from "./Hotels";
// import BillItems from "./BillItems";
// import { useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Wrapper1 = styled.div`
    overflow: hidden;
    font-family: sans-serif;
    // min-height: 100%;
    margin-top: 31px !important;
    padding: 15px;
    background: #fff !important;
    margin-top: 5.2%;
    // padding-bottom: 10%;
    font-size: 14px;
    line-height: 1.2;
    // min-height: 100%;
    div {
        // border: 1px solid red;
    }
    box-shadow:  7px -7px 14px #b8b8ba, 
             -7px 7px 14px #ffffff;
             -7px -7px 14px #b8b8ba, 
             7px 7px 14px #ffffff;
`;

const Wrapper2 = styled.div`
  overflow-x: hidden !important;
  overflow-y: scroll !important;
  font-family: sans-serif;
  // min-height: 100%;
  margin-top: 0px !important;
  padding-top: 15px;
  background: #fff !important;
  margin-top: 5.2%;
  // padding-bottom: 10%;
  font-size: 14px;
  line-height: 1.2;
  max-height: 623px;
  div {
    // border: 1px solid red;
  }
`;

const Wrapper3 = styled.div`
   
    overflow: hidden;
    font-family: sans-serif;
    margin-top: 20px;
    padding-top: 12px;
    background: #fff !important;
    font-size: 14px;
    line-height: 1.2;
    z-index: 1;
    width: 100%;
    font-weight: 600;
    box-shadow:  7px 7px 14px #b8b8ba, 
             -7px -7px 14px #ffffff;
             -7px 7px 14px #b8b8ba, 
             7px -7px 14px #ffffff;
`;
const Wrapper4 = styled.div`
    overflow: hidden;
    font-family: sans-serif;
    margin-top: 0px !important;
    padding-top: 12px;
    background: #fff !important;
    z-index: 1;
    width: 100%;
    font-weight: 600;
    box-shadow:  7px 7px 14px #b8b8ba, 
             -7px -7px 14px #ffffff;
             -7px 7px 14px #b8b8ba, 
             7px -7px 14px #ffffff;
`;

const SuggessionsWrapper = styled.div`
  diaplay: flex;
  width: 90%;
  margin: auto;
  cursor: pointer;
  background: #e9ecee;
  padding: 10px;
  height: 45px;
  background: #f9f9f9;
`;
const Suggestion = styled.input`
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  width: 90%;
  height: 90%;
  margin: auto;
`;

const NoContactWrapper = styled.div`
  width: 90%;
  display: flex;
  cursor: pointer;
  border: 1px solid #a9abb2;
  padding: 10px;
  margin: 20px;
  margin-right: 0px !important;
  margin-left: 0px !important;
  margin-bottom: 20px;
  div {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  &:hover {
    box-shadow: 0 3px 8px #e9e9eb;
  }
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 550;
  color: #3e4152;
  margin-bottom: 3px !important;
  text-align: left;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #3e4152;
  margin-bottom: 0px !important;
`;

const CouponWrapper = styled.div`
  display: flex;
  width: 90%;
  cursor: pointer;
  border: 1px dashed #a9abb2;
  padding: 10px;
  margin: 20px;
  margin-right: 0px !important;
  margin-left: 0px !important;
  height: 55px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 3px 8px #e9e9eb;
  }
`;

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [check, setCheck] = useState([]);
  //const state = useSelector((state) => state);
  console.log(check);
  const state = {
    cart: 4,
  };

  return (
    <>
      <div>
        <Wrapper1>
          <div>
            <Hotel />
          </div>
        </Wrapper1>
        <Wrapper2>
          <div style={{ display: "block" }}>
            <div>
              {/* {state.cart && state.cart.map(
              (item) => item.qty > 0 && <BillItems data={item} />
            )} */}
              {state.cart}
            </div>

            <div>
              <SuggessionsWrapper>
                <FormatQuoteIcon />
                <Suggestion placeholder="Any Suggestions? We will pass it on..." />
              </SuggessionsWrapper>
            </div>

            <div style={{ padding: "20px" }}>
              <NoContactWrapper>
                <div>
                  <Checkbox
                    value={true}
                    onChange={(e) => setCheck(e.target.value)}
                    style={{
                      color: "green",
                      marginLeft: "20px",
                      marginRight: "-20px",
                    }}
                  />
                </div>
                <div>
                  <Title>Opt in for No-contact Delivery</Title>
                  {check ? (
                    <p>
                      Our delivery partner will call (or ring your doorbell)
                      after reaching and leave the order at your door/gate
                      <br /> (Not applicable for COD).
                    </p>
                  ) : (
                    <p>
                      Our delivery partner will call to confirm. Please ensure
                      that your address has all the required details.
                    </p>
                  )}
                </div>
              </NoContactWrapper>
            </div>
            <div></div>
            <div>
              <CouponWrapper>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src="https://www.svgrepo.com/show/24573/offer-label.svg"
                  alt="apply coupon"
                />
                <Title>Apply Coupon</Title>
              </CouponWrapper>
            </div>

            <div>
              <Title>Bill Details</Title>
            </div>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <p>Item Total</p>
                <InfoOutlinedIcon />
              </div>
              <div>
                {/* ₹{state.cart && state.cart.reduce((a, b) => a + b.qty * b.price, 0)} */}
                ₹{state.cart}
              </div>
            </div>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <p>Delivery fee</p>
                <InfoOutlinedIcon />
              </div>
              <div>₹ 50</div>
            </div>
            <div
              style={{
                width: "80%",
                margin: "auto",
                border: "0.5px  rgb(194, 191, 191)",
                backgroundColor: "rgb(194, 191, 191)",
                paddingBottom: "1px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            ></div>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <p>Taxes and Charges</p>
                <InfoOutlinedIcon />
              </div>
              <div>₹ 50</div>
            </div>

            <div>
              <div
                style={{
                  border: "1.5px solid black",
                  backgroundColor: "black",
                }}
              ></div>
            </div>
          </div>
        </Wrapper2>
        <Wrapper3>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              marginTop: "0px",
            }}
          >
            <div>To pay</div>
            <div>
              {/* ₹{state.cart && state.cart.reduce((a, b) => a + b.qty * b.price, 50)} */}
              ₹{state.cart}
            </div>
          </div>
        </Wrapper3>
        <Wrapper4>
          <div>
            <div>
              <h3>
                Review your order and address details to avoid cancellations
              </h3>
            </div>
            <p>
              Note: If you cancel within 60 seconds of placing your order, a
              100% refund will be issued. No refund for cancellations made after
              60 seconds.
            </p>
            <p>Avoid cancellation as it leads to food wastage.</p>
            <p>Read cancellation policy</p>
          </div>
        </Wrapper4>
      </div>
    </>
  );
};

export default Orders;
