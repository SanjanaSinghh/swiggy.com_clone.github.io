import React from 'react';
import styled from 'styled-components';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import { useSelector } from 'react-redux';
// import Confirmation from "./Confirmation";
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    font-family: system-ui !important;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    padding-top: 35px;
    padding-bottom: 39px;
    div {
        // border: 1px solid red;
    }
`;

const Logo = styled.div`
    left: -35px;
    width: 0px;
    height: 0px;
    background-color: #282c3f;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
    top: -10px;
    padding: 0px !important;
`;

const Title = styled.p`
    font-size: 32px;
    font-weight: 600;
    color: #282c3f;
`;

const Wallet = styled.img`
    height: 50px;
    width: 50px;
    vertical-align: inherit;
    margin-radius: 0px;
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const WarningText = styled.p`
    font-size: 13px;
    color: #93959f;
    margin-bottom: 8px;
    font-weight: 300;
    line-height: 16px;
    overflow: hidden;
    border: 1px dashed #60b246;
    padding-right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

function Payment() {
    const navigate = useNavigate();
   // const state = useSelector((state) => state);
    let Total = 100;
    

     function handlePayment(e) {
        // console.log(Total);
        e.preventDefault();
    }

    

    return (
        <>
            <>
                <Wrapper >
                    <div >
                        <Logo >
                            <AccountBalanceWalletIcon  style={{ height: "80px", width: "80px" }} />
                        </Logo>
                        <div >
                            <div >
                                <div >
                                    <Title>Payment</Title>
                                </div>
                                <WarningText>
                                    Please use RazorPay as Payment method as
                                    other services are under Maintenance.
                                </WarningText>
                                <button
                                  
                                    onClick={handlePayment}
                                    
                                >
                                    <img
                                        src='https://razorpay.com/assets/razorpay-logo-white.svg'
                                        alt='RazorPay'
                                        style={{
                                            width: 'inherit',
                                            height: 'inherit',
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        </>
    );
}

export default Payment;