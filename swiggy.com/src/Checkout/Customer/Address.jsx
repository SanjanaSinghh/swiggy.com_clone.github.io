import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Location from "./Location";
import { isAddressSelected } from "../../Redux/Cart/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoomIcon from "@mui/icons-material/Room";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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
  margin-right: 25px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #282c3f;
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
display:flex;
  border: 1px dashed #e9e9eb;
  padding: 0px;
  background: white;
`;

const AddLocation = styled.img`
  height: 25px;
  width: 25px;
  vertical-align: inherit;
  margin-radius: 0px;
 
`;

const Change = styled.button`
  border: 1px solid #fc8019;
  font-family: system-ui !important;
  font-weight: 500;
  border-radius: 0px;
  color: #fc8019;
  &:hover {
    cursor: pointer;
  }
`;

const CurrAddr = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addr, setAddr] = useState({});
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    //   setAddr(JSON.parse(localStorage.getItem('CustomerCurrentLoc')));
    setAddr({
      flat_no: 1,
      landmark: "near hospital",
      place_name: "mukti",
      type: "home",
    });
  }, []);

  const AddrSelected = () => {
    dispatch(isAddressSelected(true));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <AddressContainer>
            <div>
              <HomeOutlinedIcon />
            </div>
            <div>
              <div>
                <AddAddressTitle>Home</AddAddressTitle>

                <AddressText>
                  <div>
                    {addr.flat_no}, {addr.landmark}, {addr.place_name}
                  </div>
                  <div>{addr.type} Address</div>
                </AddressText>
                <p>30 mins</p>
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
        <div>
          <Location />
        </div>
      </div>
    </>
  );
};

const Address = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addr, setAddr] = useState({});
  const { flag } = props;
  const [isAddrSelected, setIsAddrSelected] = useState(false);

  useEffect(() => {
    setIsAddrSelected(flag || false);
    // setAddr(JSON.parse(localStorage.getItem("CustomerCurrentLoc")));
    setAddr({
      flat_no: "Flat No -A3",
      landmark: "near hospital",
      place_name: "mukti",
      type: "home",
    });
  }, [flag]);

  const AddrSelected = () => {
    dispatch(isAddressSelected(false));
  };

  if (isAddrSelected) {
    return (
      <>
        <Wrapper>
          <div>
            <Logo>
              <RoomIcon
                style={{ height: "80px", width: "80px", marginLeft: "-50px" }}
              />
            </Logo>
            <div>
              <div>
                <div>
                  <Title>
                    Delivery Address
                    <CheckCircleIcon style={{ color: "green" }} />
                  </Title>
                </div>{" "}
                <div></div>
                <div>
                  <div>
                    <AddressContainer type="button">
                      <div></div>
                      <div>
                        <div>
                          <AddAddressTitle>Home</AddAddressTitle>
                          <AddressText>
                            <div>
                              {addr.flat_no}, {addr.landmark}, {addr.place_name}
                            </div>
                            <div>{addr.type} Address</div>
                          </AddressText>
                          <b>30 mins</b>
                        </div>
                      </div>
                    </AddressContainer>
                  </div>
                </div>
                <div>
                  <Change
                    style={{
                      background: "none",
                      color: "orangered",
                      border: "none",
                    }}
                    type="button"
                    onClick={AddrSelected}
                  >
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
        <Wrapper>
          <div>
            <Logo>
              <RoomIcon
                style={{ height: "80px", width: "80px", marginLeft: "-50px" }}
              />
            </Logo>
            <div>
              <div style={{ textAlign: "left", marginLeft: "50px" }}>
                <Title>Select Delivery Address</Title>
                <p
                  style={{
                    display: "block",
                    fontSize: "16px",
                    color: "#7e808c",
                    fontWeight: "400",
                    marginBottom: "36px",
                    marginTop: "-15px",
                  }}
                >
                  You have a saved address in this location
                </p>
              </div>
              <CurrAddr />
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
};

export default Address;
