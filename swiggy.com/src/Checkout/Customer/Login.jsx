import React from 'react';
import styled from 'styled-components';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Wrapper = styled.div`
    font-family: system-ui !important;
    letter-spacing: -0.3px;
    line-height: 1.2;
    background: #fff;
    margin-bottom: 20px;
    margin-top: 30px;
    padding-top: 35px;
    // padding-right: 40px;
    padding-bottom: 39px;
    // padding-left: 40px;
`;

const Title = styled.p`
    font-size: 26px;
    font-weight: 620;
    color: #282c3f;
    margin-bottom: 0px;
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




const Info = styled.p`
    margin-top: 35px;
    margin-bottom: 0px;
    font-weight: 500;
    line-height: 1.12;
    font-size: 18px;
    color: #282c3f;
    text-transform: capitalize;
`;

const Login = () => {
    // const data = JSON.parse(localStorage.getItem('customerData')) || {};
    const data={
        name:"Pranav",
         number:"9850472567"}
    
    return (
        <>
            <Wrapper >
                <div >
                    <Logo >
                   < AccountBoxIcon style={{height:"80px",width:"80px"}}/>
                    </Logo>
                    <div >
                        <div >
                            <div>
                                <Title>
                                    Logged in
                                    <CheckCircleIcon style={{color:"green"}}/>
                                </Title>
                            </div>
                            <div >
                                <Info>
                                    {' '}
                                    {data.name}{' '}
                                   <span style={{border:"1px solid black",backgroundColor:"black",height:"4px",marginLeft:"10px",marginRight:"14px"}}></span>
                                    {' '}
                                    {data.number}
                                </Info>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Login;