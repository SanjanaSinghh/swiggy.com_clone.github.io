import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";

import Map from "./Map";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Wrapper = styled.div`
  font-family: system-ui !important;
  overflow: hidden;
  padding: 10px 0;
  margin: 0;
  box-sizzing: border-box;
  font-family: sans-serif;
  box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: inherit;
  background: #fff;
  z-index: 1000;
  div {
    // border: 1px solid red;
  }
`;

const Middle = styled.div`
  margin-top: 80px;
  width: 100%;
  div {
    // border: 1px solid red;
    // padding: 10px;
  }
`;

const MapContainer = styled.div`
  font: 400 11px Roboto, Arial, sans-serif !important;
  // cursor: url('https://maps.gstatic.com/mapfiles/openhand_8_8.cur'), default;
  // z-index: 3;
  box-sizing: inherit;
  // position: absolute;
  height: 300px;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  // left: 0px;
  // top: 0px;
  // touch-action: pan-x pan-y;
`;

const Button2 = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  --padding-x: 1.2em;
  width: 38%;
  height: 60px;
  text-align: center;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: none;
  border-radius: 0px;
  background-color: transparent;
  font-size: 15px;
  color: rgb(100, 100, 100);
  &:hover {
    color: #fff;
    background-color: black;
  }
`;

const Wrapper2 = styled.div`
  font-family: system-ui !important;
  overflow: hidden;
  padding: 10px 0;
  margin: 0;
  box-sizzing: border-box;
  font-family: sans-serif;
  box-shadow: 0 -2px 4px 0 #e9e9eb;
  position: fixed;
  // top: 40%vh;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  width: inherit;
  background: #fff;
  z-index: 1000;
`;

const Button = styled.button`
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-left: 45px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px #d4d5d9;
  background-color: #fc8019;
  border-radius: 0px;
  border: none;
  line-height: 50px;
  font-size: 14px;
  font-weight: 600;
  height: 50px;
  padding: 0 2rem;
  letter-spacing: 0;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

const AddressBox = styled.input`
  border: 1px solid gray;
  background-color: transparent;
  resize: none;
  outline: none;
  width: 98.5%;
  height: 60px;
  margin: auto;
  ::placeholder {
    font-size: 16px;
    color: rgb(170, 170, 170);
    letter-spacing: 0.5px;

    padding: 20px;
  }
`;

const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
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
  border: 1px dashed #e9e9eb;
  padding: 0px;
  background: white;
  &:hover {
    box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
  }
`;
const CheckoutBox = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const AddLocation = styled.img`
  height: 25px;
  width: 25px;
  vertical-align: inherit;
  margin-radius: 0px;
  // box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;


const Location = () => {
  const navigate = useNavigate();
  const [flatNo, setFlatNo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [type, setType] = useState("");

  const [state, setState] = React.useState({
    left: false,
  });

  const getUserLocation = () => {
    console.log(getUserLocation);

    // const data = JSON.parse(localStorage.getItem("CustomerCurrentLoc"));
    const data = {
      place_name: "home",
      long: "1290",
      lat: "2189",
    };

    const userLoc = {
      flat_no: flatNo,
      landmark: landmark,
      place_name: data.place_name,
      long: data.long,
      lat: data.lat,
      type: type,
    };

    localStorage.setItem("CustomerCurrentLoc", JSON.stringify(userLoc));

    setState({ ...state, left: false });
    navigate("/CheckoutPage");
  };

  const toggleDrawer = (open) => {
    setState(open);
  };

  const list = () => (
    <Box sx={{ width: 450 }} role="presentation">
      <Wrapper>
        <div
          style={{
            display: "flex",
            padding: "20px",
            height: "30px",
            marginLeft: "20px",
            gap: "10px",
            alignItems: "center",
            verticalAlign: "center",
          }}
        >
          <CheckoutBox
            onClick={() => {
              toggleDrawer(false);
            }}
          >
            <CloseOutlinedIcon style={{ fontSize: "24px", marginTop: "5px" }} />
          </CheckoutBox>
          <Heading>Save delivery address</Heading>
        </div>
      </Wrapper>
      <Middle>
        <div>
          <div>
            <MapContainer>{/* <Map /> */}</MapContainer>
            <div></div>
          </div>
          <div style={{ width: "80%", margin: "auto" }}>
            <div>
              <AddressBox
                placeholder="Door/Flat No."
                onChange={(e) => {
                  setFlatNo(e.target.value);
                }}
              />
            </div>
            <div>
              <AddressBox
                placeholder="Landmark"
                style={{
                  borderTop: "none",
                }}
                onChange={(e) => {
                  setLandmark(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                margin: "auto",
              }}
            >
              <Button2 type="button" onClick={() => setType("Home")}>
                <HomeOutlinedIcon /> Home
              </Button2>
              <Button2 type="button" onClick={() => setType("Work")}>
                <WorkOutlineIcon /> Work
              </Button2>
              <Button2 type="button" onClick={() => setType("Other")}>
                <RoomOutlinedIcon /> Other
              </Button2>
            </div>
          </div>
        </div>
      </Middle>
      <Button type="button" onClick={getUserLocation}>SAVE ADDRESS & PROCEED </Button>
    </Box>
  );

  

  return (
    <div>
      <AddressContainer>
        <Drawer
          anchor={"left"}
          open={state}
          onClose={() => {
            toggleDrawer(false);
          }}
        >
          {list("left")}
        </Drawer>
        <div>
          <PlaceOutlinedIcon style={{ width: "30px", height: "30px" }} />
          <AddCircleIcon
            style={{ color: "green", width: "15px", height: "15px" }}
          />
        </div>
        <div>
          <div>
            <AddAddressTitle>Add New Address</AddAddressTitle>
            <AddressText>
              <div>PCMC Pune.</div>
            </AddressText>
            <IconButton
              onClick={() => {
                toggleDrawer(true);
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Add new
            </IconButton>
          </div>
        </div>
      </AddressContainer>
    </div>
  );
};
export default Location;
