import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import CheckoutNavigator from '../../components/molecules/NavHeader';
import styled from 'styled-components';
import Login from './Customer/Login';
import Address from './Customer/Address';
import Payment from './Customer/Paymet';
import Orders from './Customer/Orders';
import './checkout.css'

const Wrapper = styled.div`
    overflow: hidden;
    font-family: sans-serif;
    min-height: 100%;
    background: #e9ecee;
    margin-top: 5.2%;
    padding-bottom: 10%;
    font-size: 14px;
    line-height: 1.2;
    min-height: 100%;
    div {
        // border: 1px solid red;
    }
`;

const CheckoutPage = (props) => {
    
    const dispatch=useDispatch();
    const isAddrSelected=useSelector(state=>state.cart.isAddress)

    // useEffect(() => {
    //     setIsAddrSelected(true);
    // }, [isAddrSelected]);

    return (
        <>
            {/* <CheckoutNavigator /> */}
            <Wrapper >
                
                    <div style={{display:"flex", width:"90%",margin:"auto",gap:"30px",padding:"20px"}}>
                        <div style={{width:"60%"}}>
                            <div >
                                <div >
                                    <Login />
                                </div>
                                <div >
                                    <Address flag={isAddrSelected} />
                                </div>
                                {isAddrSelected ? (
                                    <div >
                                        <Payment />
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                        <div style={{width:"40%"}}>
                            <Orders />
                        </div>
                    </div>
               
            </Wrapper>
        </>
    );
};
export default CheckoutPage;