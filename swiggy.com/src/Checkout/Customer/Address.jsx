import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Location from "./Location";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RoomIcon from '@mui/icons-material/Room';

const Wrapper = styled.div`
  font-family: system-ui !important;
  line-height: 1.2;
  background: #fff;
  margin-bottom: 20px;
  padding-top: 35px;
  // padding-right: 40px;
  padding-bottom: 39px;
  // padding-left: 40px;
  div {
    // border: 1px solid red;
  }
`;

const Logo = styled.div`
  left: -35px;
  // top: 10px;
  // position: absolute;
  width: 0px;
  height: 0px;
  background-color: #282c3f;
  box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
  top: -10px;
  // left: -30px;
  padding: 0px !important;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #282c3f;
`;

const LocationIcon = styled.img`
  height: 50px;
  width: 50px;
  vertical-align: inherit;
  margin-radius: 0px;
  box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const AddAddressTitle = styled.p`
  margin-bottom: 4px;
  font-size: 17px;
  font-weight: 600 !important;
  color: #282c3f;
  line-height: 1.18;
`;

const AddressText = styled.p`
  font-size: 13px;
  color: #93959f;
  margin-bottom: 8px;
  font-weight: 300;
  line-height: 16px;
  overflow: hidden;
`;

const AddressContainer = styled.button`
  border: 1px dashed #e9e9eb;
  padding: 0px;
  background: white;
 
`;

const AddLocation = styled.img`
  height: 25px;
  width: 25px;
  vertical-align: inherit;
  margin-radius: 0px;
  // box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const Tick = styled.img`
  margin-left: 15px;
  height: 20px;
  width: 20px;
  vertical-align: inherit;
`;

const Change = styled.button`
  border: 1px solid #fc8019;
  font-family: system-ui !important;
  font-weight: 500;
  border-radius: 0px;
  color: #fc8019;
  &:hover {
    cursor:pointer;
  }
`;

const CurrAddr = () => {
  const navigate = useNavigate();
  const [addr, setAddr] = useState({});
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    //   setAddr(JSON.parse(localStorage.getItem('CustomerCurrentLoc')));
    setAddr({
        flat_no:1,
        landmark:"near hospital",
        place_name:"mukti",
        type:"home"
    })
  }, []);

  const AddrSelected = () => {
    navigate({
      pathname: "/CheckoutPage",
      isAddrSelected: flag,
    });
    setFlag(!flag);
  };

  return (
    <>
      <div >
        <div >
          <AddressContainer type="button" >
            <div >
              <AddLocation src="Icons/location.svg" alt="placeholder" />
            </div>
            <div >
              <div >
                <AddAddressTitle >
                  Home
                </AddAddressTitle>
                <input
                  type="text"
                  placeholder="Password"
                 
                  onChange={(e) => setAddr(e.target.value)}
                />
                <AddressText>
                  <div >
                    {addr.flat_no}, {addr.landmark}, {addr.place_name}
                  </div>
                  <div >
                    {addr.type} Address
                  </div>
                </AddressText>
                <b>30 mins</b>
                <button
                  type="button"
                  
                  style={{
                    borderRadius: "0px",
                    marginLeft: "15px",
                  }}
                  onClick={AddrSelected}
                >
                  Deliver Here
                </button>
              </div>
            </div>
          </AddressContainer>
        </div>
      </div>
      <div >
        <Location />
      </div>
    </>
  );
};

const Address = (props) => {
    const navigate = useNavigate();
  const [addr, setAddr] = useState({});
  const { flag } = props;
  const [isAddrSelected, setIsAddrSelected] = useState(false);

  useEffect(() => {
    setIsAddrSelected(flag || false);
    // setAddr(JSON.parse(localStorage.getItem("CustomerCurrentLoc")));
    setAddr({flat_no:"Flat No -A3",
        landmark:"near hospital",
        place_name:"mukti",
        type:"home"
    })
  }, [flag]);

  const AddrSelected = () => {
    navigate({
      pathname: "/CheckoutPage",
      isAddrSelected: !flag,
    });
    // setFlag(!flag);
  };

  if (isAddrSelected) {
    return (
      <>
        <Wrapper>
          <div>
            <Logo >
            <RoomIcon style={{height:"80px",width:"80px"}}/>
            </Logo>
            <div >
              <div>
                <div >
                  <Title>
                    Delivery Address
                    <CheckCircleIcon style={{color:"green"}}/>
                  </Title>
                </div>{" "}
                <div ></div>
                <div >
                  <div >
                    <AddressContainer type="button" >
                      <div >

                      </div>
                      <div >
                        <div >
                          <AddAddressTitle >
                            Home
                          </AddAddressTitle>
                          <AddressText>
                            <div >
                              {addr.flat_no}, {addr.landmark}, {addr.place_name}
                            </div>
                            <div >
                              {addr.type} Address
                            </div>
                          </AddressText>
                          <b >30 mins</b>
                        </div>
                      </div>
                    </AddressContainer>
                  </div>
                </div>
                <div >
                  <Change style={{background:'none',color:'orangered',border:'none'}}type="button" onClick={AddrSelected}>
                    CHANGE
                  </Change>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    );
  } else {
    return (
      <>
        <>
          <Wrapper>
            <div >
            <Logo >
            <RoomIcon style={{height:"80px",width:"80px"}}/>
            </Logo>
              <div >
                <div >
                  <div >
                    <Title>Delivery Address</Title>
                  </div>{" "}
                  <div></div>
                  {localStorage.getItem("CustomerCurrentLoc") == null ? (
                    <div >
                      <Location />
                    </div>
                  ) : (
                    <>
                      <CurrAddr />
                    </>
                  )}
                 
                </div>
              </div>
            </div>
          </Wrapper>
        </>
      </>
    );
  }
};

export default Address;
