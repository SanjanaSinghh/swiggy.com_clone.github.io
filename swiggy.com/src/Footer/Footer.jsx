import React from "react";
import styled from "styled-components";

import "./footer.css";

export const Footer = () => {
  // const Header = styled.header`
  //   overflow: hidden;
  //   ul {
  //     list-style: none;
  //   }
  //   ul > li {
  //     margin-bottom: 15px;
  //     text-align: left;
  //     color: white;
  //   }
  // `;

  return (
    <div className="footermain">
      <div
        className="container-fluid"
        style={{
          background: "black",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                  width: "275px",
                }}
              >
                <li>
                  <b
                    className="text-muted"
                    style={{ color: "gray", fontSize: "14px" }}
                  >
                    COMPANY
                  </b>
                </li>
                <li>About Us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Swiggy Blog</li>
                <li>Bug Bounty</li>
                <li>Swiggy One</li>
                <li>Swiggy Corporate</li>
                <li>Swiggy Instamart</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                  width: "275px",
                }}
              >
                <li>
                  <b
                    className="text-muted"
                    style={{ color: "gray", fontSize: "14px" }}
                  >
                    CONTACT
                  </b>
                </li>
                <li>Help & Support</li>
                <li>Partner with Us</li>
                <li>Ride with us</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul
                style={{
                  listStyle: "none",
                  color: "white",
                  width: "330px",
                }}
              >
                <li>
                  <b
                    className="text-muted"
                    style={{ color: "gray", fontSize: "14px" }}
                  >
                    LEGAL
                  </b>
                </li>
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Offer Terms</li>
                <li>Phishing & Fraud</li>
                <li>Corporate – Swiggy Money Codes Terms and Conditions</li>
                <li>
                  Corporate - Swiggy Discount Voucher Terms and Conditions
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                    alt="apple"
                    className="img-fluid"
                    style={{
                      height: "70px",
                      width: "200px",
                    }}
                  />
                </li>
                <li style={{ marginTop: "30px" }}></li>
                <li>
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                    alt="googleplay"
                    className="img-fluid"
                    style={{
                      height: "70px",
                      width: "200px",
                    }}
                  />
                </li>
              </ul>
            </div>
            <div
              style={{
                borderBottom: "1px solid grey",
                width: "100%",
                marginLeft: "3%",
                marginTop: "3%",
              }}
            ></div>
          </div>
        </div>

        <div
          style={{
            border: "0.5px solid gray",
            width: "93%",
            margin: "auto",
            backgroundColor: "gray",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        ></div>
        <div>
          <div
            style={{
              color: "gray",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              marginInlineEnd: "0px",
              paddingInlineStart: "40px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "600" }}>WE DELIVER TO</p>
          </div>
          <div class="_1_sSy">
            <ul
              class="_1w9D3"
              style={{
                display: "block",
                listStyle: "none",
                color: "white",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                paddingInlineStart: "40px",
              }}
            >
              <li class="_2JILy">Abohar</li>
              <li class="_2JILy">Adilabad</li>
              <li class="_2JILy">Adityapur</li>
              <li class="_2JILy">Adoni</li>
              <li class="_2JILy">Agartala</li>
              <li class="_2JILy">Agra</li>
              <li class="_2JILy">Ahmedabad</li>
              <li class="_2JILy">Ahmednagar</li>
              <li class="_2JILy">Aizawl</li>
              <li class="_2JILy">Ajmer</li>
              <li class="_2JILy"></li>
              <li class="_2JILy">Alappuzha</li>
              <li class="_2JILy">Aligarh</li>
              <li class="_2JILy">Alipurduar</li>
              <li class="_2JILy">Allahabad</li>
              <li class="_2JILy">Almora</li>
              <li class="_2JILy">Alwar</li>
              <li class="_2JILy">Amalapuram</li>
              <li class="_2JILy">Ambala</li>
              <li class="_2JILy">Ambikapur</li>
              <li class="_2JILy">Ambur</li>
              <li class="_2JILy">Amravati</li>
              <li class="_2JILy">Amreli</li>
              <li class="_2JILy">Amritsar</li>
              <li class="_2JILy">Anand</li>
              <li class="_2JILy">Anantapur</li>
              <li class="_2JILy">Angul</li>
              <li class="_2JILy">Ankleshwar</li>
              <li>Arakkonam</li>
              <li class="_2JILy">Arambagh</li>
              <li class="_2JILy">Arrah</li>
              <li class="_2JILy">Aruppukottai</li>
              <li class="_2JILy">Asansol</li>
              <li class="_2JILy">Aurangabad</li>
              <li class="_2JILy">Aurangabad_bihar</li>
              <li class="_2JILy">Azamgarh</li>
              <li class="_2JILy">Baddi</li>
              <li class="_2JILy">Bagalkot</li>
              <li class="_2JILy">Bagdogra</li>
              <li class="_2JILy">Bagula</li>
              <li class="_2JILy">Bahadurgarh</li>
              <li class="_2JILy">Bahraich</li>
              <li class="_2JILy">Balaghat</li>
              <li class="_2JILy">Balangir</li>
              <li class="_2JILy">Balasore</li>
              <li class="_2JILy">Ballari</li>
              <li class="_2JILy">Balrampur</li>
              <li class="_2JILy">Balurghat</li>
              <li class="_2JILy">Banda</li>
              <li class="_2JILy">Bangalore</li>
              <li class="_2JILy">Bankabihar</li>
              <li class="_2JILy">Bankura</li>
              <li class="_2JILy">Bantwal</li>
              <li class="_2JILy">Bapatlachirala</li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/baramati">
                  Baramati
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/baran">
                  Baran
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/baraut">
                  Baraut
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bardhaman">
                  Bardhaman
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bardoli">
                  Bardoli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bareilly">
                  Bareilly
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/baripada">
                  Baripada
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/barmer">
                  Barmer
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/barnala">
                  Barnala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/barshi">
                  Barshi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/barwani">
                  Barwani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/basirhat">
                  Basirhat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/basti">
                  Basti
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/batala">
                  Batala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bathinda">
                  Bathinda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/beawar">
                  Beawar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/beed">
                  Beed
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/begusarai">
                  Begusarai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bela-pratapgarh">
                  Bela-pratapgarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/belgaum">
                  Belgaum
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/berhampore">
                  Berhampore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/berhampur">
                  Berhampur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bettiah">
                  Bettiah
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/betul">
                  Betul
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhadohi">
                  Bhadohi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhadrachalam">
                  Bhadrachalam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhadrak">
                  bhadrak
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhadravati">
                  bhadravati
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhagalpur">
                  bhagalpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhandara">
                  bhandara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bharabanki">
                  bharabanki
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bharatpur">
                  bharatpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bharuch">
                  bharuch
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhatkal">
                  bhatkal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhavnagar">
                  bhavnagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhawanipatna">
                  bhawanipatna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhilai">
                  bhilai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhilwara">
                  bhilwara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhimavaram">
                  bhimavaram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhind">
                  bhind
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhiwadi">
                  bhiwadi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhiwani">
                  bhiwani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhopal">
                  bhopal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhubaneswar">
                  bhubaneswar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhuj">
                  bhuj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bhusawal">
                  bhusawal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bidar">
                  bidar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/biharsharif">
                  biharsharif
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bijapur">
                  bijapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bijnor">
                  bijnor
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bikaner">
                  bikaner
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bilaspur">
                  bilaspur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bilaspur-hp">
                  bilaspur-hp
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bilimora">
                  bilimora
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/biswanath-chariali">
                  biswanath-chariali
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bodhan-rural">
                  bodhan-rural
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bodinayakanur">
                  bodinayakanur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/boisar">
                  boisar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bokaro">
                  bokaro
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bolpur">
                  bolpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bongaigaon">
                  bongaigaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bongaon">
                  bongaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/budaun">
                  budaun
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/budhwal">
                  budhwal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bulandshahr">
                  bulandshahr
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/buldana">
                  buldana
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/bundi">
                  bundi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/burhanpur">
                  burhanpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/buxar">
                  buxar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/central-goa">
                  central-goa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chakdaha">
                  chakdaha
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chalakkudy">
                  chalakkudy
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chalisgaon">
                  chalisgaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chandausi">
                  chandausi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chandigarh">
                  chandigarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chandrapur">
                  chandrapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/changanassery">
                  changanassery
                </a>
              </li>
              <li class="_2JILy">
                <a
                  class="_3TjLz b-Hy9"
                  href="/city/charkhi-dadri_perm_closed_8june22"
                >
                  charkhi-dadri_perm_closed_8june22
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chengannur">
                  chengannur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chennai">
                  chennai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/cherthala">
                  cherthala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chhapra">
                  chhapra
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chhatarpur">
                  chhatarpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chhindwara">
                  chhindwara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chidambaram">
                  chidambaram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chikhli">
                  chikhli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chikkaballapur">
                  chikkaballapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chikmagalur">
                  chikmagalur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chiplun">
                  chiplun
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chitradurga">
                  chitradurga
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chittoor">
                  chittoor
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chittorgarh">
                  chittorgarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/chopda">
                  chopda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/churu">
                  churu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/coimbatore">
                  coimbatore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/cooch-behar">
                  cooch-behar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/cuddalore">
                  cuddalore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/cuttack">
                  cuttack
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dahanu">
                  dahanu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dahod">
                  dahod
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/daltonganj">
                  daltonganj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/daman">
                  daman
                </a>
              </li>
            </ul>
            <ul class="_1w9D3">
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/darbhanga">
                  darbhanga
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/darjeeling">
                  darjeeling
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/daund">
                  daund
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dausa">
                  dausa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/davanagere">
                  davanagere
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dehradun">
                  dehradun
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dehri">
                  dehri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/delhi">
                  delhi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/deoghar">
                  deoghar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dewas">
                  dewas
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dhanbad">
                  dhanbad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dhar">
                  dhar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dharamshala">
                  dharamshala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dharapuram">
                  dharapuram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dharmapuri">
                  dharmapuri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dharwad">
                  dharwad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dhoraji">
                  dhoraji
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dhule">
                  dhule
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dibrugarh">
                  dibrugarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/digboi">
                  digboi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dimapur">
                  dimapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dindigul">
                  dindigul
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/diu">
                  diu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/doddaballapura">
                  doddaballapura
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/duliajan">
                  duliajan
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/dumka">
                  dumka
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/durgapur">
                  durgapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/eluru">
                  eluru
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/erode">
                  erode
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/etah">
                  etah
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/etawah">
                  etawah
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/faizabad">
                  faizabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/faridabad">
                  faridabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/faridkot">
                  faridkot
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/farrukhabad">
                  farrukhabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/fatehabad">
                  fatehabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/fatehgarh-sahib">
                  fatehgarh-sahib
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/fatehpur">
                  fatehpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/fazilka">
                  fazilka
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/firozabad">
                  firozabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/firozpur">
                  firozpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/freelancer">
                  freelancer
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gadag-betigeri">
                  gadag-betigeri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gadwal">
                  gadwal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gandhidham">
                  gandhidham
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gangapur-city">
                  gangapur-city
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gangarampur">
                  gangarampur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gangtok">
                  gangtok
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gauriganj">
                  gauriganj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gaya">
                  gaya
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/giridih">
                  giridih
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/godhra">
                  godhra
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gokak">
                  gokak
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/golaghat">
                  golaghat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gonda">
                  gonda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gondal">
                  gondal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gondia">
                  gondia
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gopalganj">
                  gopalganj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gorakhpur">
                  gorakhpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gudivada">
                  gudivada
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/guna">
                  guna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/guntakal">
                  guntakal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/guntur">
                  guntur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gurdaspur">
                  gurdaspur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gurgaon">
                  gurgaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/guwahati">
                  guwahati
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/gwalior">
                  gwalior
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/habra">
                  habra
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hajipur">
                  hajipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/haldia">
                  haldia
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/haldwani">
                  haldwani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/halol">
                  halol
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hampi">
                  hampi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hansi">
                  hansi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hanumangarh">
                  hanumangarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hapur">
                  hapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hardoi">
                  hardoi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/haridwar">
                  haridwar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hassan">
                  hassan
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hathras">
                  hathras
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/himmatnagar">
                  himmatnagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hindaun">
                  hindaun
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hinganghat">
                  hinganghat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hisar">
                  hisar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hoshangabad">
                  hoshangabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hoshiarpur">
                  hoshiarpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hospet">
                  hospet
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hosur">
                  hosur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hubli">
                  hubli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/hyderabad">
                  hyderabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ichalkaranji">
                  ichalkaranji
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/idukki">
                  idukki
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/imphal">
                  imphal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/indore">
                  indore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/irinjalakuda">
                  irinjalakuda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/itanagar">
                  itanagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/itarsi">
                  itarsi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jabalpur">
                  jabalpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jagdalpur">
                  jagdalpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jagraon">
                  jagraon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jagtial">
                  jagtial
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jahanabad">
                  jahanabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jaigaon">
                  jaigaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jaipur">
                  jaipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jalandhar">
                  jalandhar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jalaun">
                  jalaun
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jalgaon">
                  jalgaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jalpaiguri">
                  jalpaiguri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jammu">
                  jammu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jamnagar">
                  jamnagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jamshedpur">
                  jamshedpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jaunpur">
                  jaunpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jhalawar">
                  jhalawar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jhansi">
                  jhansi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jhargram">
                  jhargram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jhunjhunu">
                  jhunjhunu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jind">
                  jind
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jodhpur">
                  jodhpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/jorhat">
                  jorhat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/junagadh">
                  junagadh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kadapa">
                  kadapa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kadayanallur">
                  kadayanallur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kadiri">
                  kadiri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kaithal">
                  kaithal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kakinada">
                  kakinada
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kalaburagi">
                  kalaburagi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kalady">
                  kalady
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kalna">
                  kalna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kamareddy">
                  kamareddy
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kanchrapara">
                  kanchrapara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kannauj">
                  kannauj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kannur">
                  kannur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kanpur">
                  kanpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kanyakumari">
                  kanyakumari
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kapurthala">
                  kapurthala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karad">
                  karad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karaikkudi">
                  karaikkudi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karimnagar">
                  karimnagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karnal">
                  karnal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karunagappaly">
                  karunagappaly
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karur">
                  karur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/karwar">
                  karwar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kasaragod">
                  kasaragod
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kashipur">
                  kashipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/katihar">
                  katihar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/katni">
                  katni
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kavali">
                  kavali
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kayamkulam">
                  kayamkulam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kendrapada">
                  kendrapada
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kendujhar">
                  kendujhar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/khalilabad">
                  khalilabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/khamgaon">
                  khamgaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/khammam">
                  khammam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/khandwa">
                  khandwa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/khanna">
                  khanna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kharagpur">
                  kharagpur
                </a>
              </li>
            </ul>
            <ul class="_1w9D3">
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/khopoli">
                  khopoli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kishanganj">
                  kishanganj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kishangarh">
                  kishangarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kochi">
                  kochi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kodaikanal">
                  kodaikanal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kohima">
                  kohima
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kolar">
                  kolar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kolhapur">
                  kolhapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kolkata">
                  kolkata
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kollam">
                  kollam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kopargaon">
                  kopargaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/koppal">
                  koppal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/korba">
                  korba
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kota">
                  kota
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kotdwar">
                  kotdwar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kothagudem">
                  kothagudem
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kothamanagalam">
                  kothamanagalam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kottakkal">
                  kottakkal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kottarakkara">
                  kottarakkara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kottayam">
                  kottayam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kovilpatti">
                  kovilpatti
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kozhikode">
                  kozhikode
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/krishnagiri">
                  krishnagiri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/krishnanagar">
                  krishnanagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kumarakom">
                  kumarakom
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kumbakonam">
                  kumbakonam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kumta">
                  kumta
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kundapura">
                  kundapura
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kunnamkullam">
                  kunnamkullam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kurnool">
                  kurnool
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/kurukshetra">
                  kurukshetra
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/lakhimpur">
                  lakhimpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/lalitpur">
                  lalitpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/latur">
                  latur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/lonavala">
                  lonavala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/lonavla">
                  lonavla
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/lucknow">
                  lucknow
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ludhiana">
                  ludhiana
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/machilipatnam">
                  machilipatnam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/madanapalle">
                  madanapalle
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/madhubani">
                  madhubani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/madikeri">
                  madikeri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/madurai">
                  madurai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mahabaleshwar">
                  mahabaleshwar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mahbubnagar">
                  mahbubnagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mahoba">
                  mahoba
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/malappuram">
                  malappuram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/malda">
                  malda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/malegaon">
                  malegaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/malout">
                  malout
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/manali">
                  manali
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mancherial">
                  mancherial
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mandi-dabwali">
                  mandi-dabwali
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mandi-gobindgarh">
                  mandi-gobindgarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mandi-hp">
                  mandi-hp
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mandsaur">
                  mandsaur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mandya">
                  mandya
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mangaluru">
                  mangaluru
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/manipal">
                  manipal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/manjeri">
                  manjeri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mannargudi">
                  mannargudi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mansa">
                  mansa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/markapur">
                  markapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mathura">
                  mathura
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/maunath-bhanjan">
                  maunath-bhanjan
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mayiladuthurai">
                  mayiladuthurai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/medinipur">
                  medinipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/meerut">
                  meerut
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mehsana">
                  mehsana
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mettupalayam">
                  mettupalayam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/miryalaguda">
                  miryalaguda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mirzapur">
                  mirzapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/modinagar">
                  modinagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/moga">
                  moga
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/moodbidri">
                  moodbidri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/moradabad">
                  moradabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/morbi">
                  morbi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/morena">
                  morena
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/motihari">
                  motihari
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mount-abu">
                  mount-abu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mughalsarai">
                  mughalsarai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mukerian">
                  mukerian
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/muktsar">
                  muktsar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mumbai">
                  mumbai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/munger">
                  munger
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/murshidabad">
                  murshidabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mussoorie">
                  mussoorie
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/muvattupuzha">
                  muvattupuzha
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/muzaffarnagar">
                  muzaffarnagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/muzaffarpur">
                  muzaffarpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/mysore">
                  mysore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nabadwip">
                  nabadwip
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nadiad">
                  nadiad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nagaon">
                  nagaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nagapattinam">
                  nagapattinam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nagda">
                  nagda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nagercoil">
                  nagercoil
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nagpur">
                  nagpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nagur">
                  nagur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/naharlagun">
                  naharlagun
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nainital">
                  nainital
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nalbari">
                  nalbari
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nalgonda">
                  nalgonda
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/namakkal">
                  namakkal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nanded">
                  nanded
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nandurbar">
                  nandurbar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nandyal">
                  nandyal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nangal">
                  nangal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/naraingarh">
                  naraingarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/narasaraopet">
                  narasaraopet
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/narnaul">
                  narnaul
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/narsinghpur">
                  narsinghpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/narsipatnam">
                  narsipatnam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nashik">
                  nashik
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/navsari">
                  navsari
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/neemuch">
                  neemuch
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nellore">
                  nellore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/neyveli">
                  neyveli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nipani">
                  nipani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nirmal">
                  nirmal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/nizamabad">
                  nizamabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/noida">
                  noida
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/noida-1">
                  noida-1
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/north-goa">
                  north-goa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ongole">
                  ongole
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ooty">
                  ooty
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/orai">
                  orai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/osmanabad">
                  osmanabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pala">
                  pala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/palakkad">
                  palakkad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/palakollu">
                  palakollu
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/palampur">
                  palampur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/palani">
                  palani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/palanpur">
                  palanpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pali">
                  pali
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/palwal">
                  palwal
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/panchgani">
                  panchgani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/panipat">
                  panipat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/paramakudi">
                  paramakudi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/parbhani">
                  parbhani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pathankot">
                  pathankot
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/patiala">
                  patiala
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/patna">
                  patna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pattukkottai">
                  pattukkottai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/payyannur">
                  payyannur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/perambalur">
                  perambalur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/perinthalmanna">
                  perinthalmanna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/phagwara">
                  phagwara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/phusro">
                  phusro
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pilani">
                  pilani
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pilibhit">
                  pilibhit
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pinjore-city">
                  pinjore-city
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pondicherry">
                  pondicherry
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/porbandar">
                  porbandar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/port-blair">
                  port-blair
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pratapgarh">
                  pratapgarh
                </a>
              </li>
            </ul>
            <ul class="_1w9D3">
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/proddatur">
                  proddatur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pudukkottai">
                  pudukkottai
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pune">
                  pune
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/puri">
                  puri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/purnea">
                  purnea
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/purulia">
                  purulia
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/pusad">
                  pusad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/puttur">
                  puttur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/puttur-karnataka">
                  puttur-karnataka
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rae-bareli">
                  rae-bareli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/raghunathpur">
                  raghunathpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/raichur">
                  raichur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/raiganj">
                  raiganj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/raigarh">
                  raigarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/raipur">
                  raipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rajahmundry">
                  rajahmundry
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rajapalayam">
                  rajapalayam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rajgarh">
                  rajgarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rajkot">
                  rajkot
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rajnandgaon">
                  rajnandgaon
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rajsamand">
                  rajsamand
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ramagundam">
                  ramagundam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ramanagara">
                  ramanagara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ramanathapuram">
                  ramanathapuram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ramgarh">
                  ramgarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rampur">
                  rampur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ranaghat">
                  ranaghat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ranaghat-wb">
                  ranaghat-wb
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ranchi">
                  ranchi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rangpo">
                  rangpo
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ranibennur">
                  ranibennur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/raniganj">
                  raniganj
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ratlam">
                  ratlam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ratnagiri">
                  ratnagiri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ravulapalem">
                  ravulapalem
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rayachoty">
                  rayachoty
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rewa">
                  rewa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rewari">
                  rewari
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rishikesh">
                  rishikesh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rohtak">
                  rohtak
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/roorkee">
                  roorkee
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/ropar">
                  ropar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rourkela">
                  rourkela
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/rudrapur">
                  rudrapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sagar">
                  sagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/saharanpur">
                  saharanpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/saharsa">
                  saharsa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/salem">
                  salem
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/samastipur">
                  samastipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sambalpur">
                  sambalpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sangamner">
                  sangamner
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sangli">
                  sangli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sangrur">
                  sangrur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/santipur">
                  santipur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sasaram">
                  sasaram
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/satara">
                  satara
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/satna">
                  satna
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sawai-madhopur">
                  sawai-madhopur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sawantwadi">
                  sawantwadi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sehore">
                  sehore
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shahjahanpur">
                  shahjahanpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shamli">
                  shamli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shikohabad">
                  shikohabad
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shillong">
                  shillong
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shimla">
                  shimla
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shirdi-city">
                  shirdi-city
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shivamogga">
                  shivamogga
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shivpuri">
                  shivpuri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shravasti">
                  shravasti
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/shrirampur">
                  shrirampur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/siddipet">
                  siddipet
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sikar">
                  sikar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/silchar">
                  silchar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/siliguri">
                  siliguri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/silvassa">
                  silvassa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sindhanur">
                  sindhanur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/singrauli">
                  singrauli
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sirkali">
                  sirkali
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sirsa">
                  sirsa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sirsi">
                  sirsi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sitamarhi">
                  sitamarhi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sitapur">
                  sitapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sivakasi">
                  sivakasi
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sivasagar">
                  sivasagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/siwan">
                  siwan
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/solan">
                  solan
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/solapur">
                  solapur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sonipat">
                  sonipat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/south-goa">
                  south-goa
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sri-ganganagar">
                  sri-ganganagar
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/srikakulam">
                  srikakulam
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/srivilliputhur">
                  srivilliputhur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/sultanpur">
                  sultanpur
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/surat">
                  surat
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/suratgarh">
                  suratgarh
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/surendranagar-dudhrej">
                  surendranagar-dudhrej
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/suri">
                  suri
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/suryapet">
                  suryapet
                </a>
              </li>
              <li class="_2JILy">
                <a class="_3TjLz b-Hy9" href="/city/tadepalligudem">
                  tadepalligudem
                </a>
              </li>
              <li class="_2JILy">Tadpatri</li>
              <li class="_2JILy">Tanuku</li>
              <li class="_2JILy">Tarn-taran-sahib</li>
              <li class="_2JILy">Tenkasi</li>
              <li class="_2JILy">Tezpur</li>
              <li class="_2JILy">Thalassery</li>
              <li class="_2JILy">Thanjavur</li>
              <li class="_2JILy">Theni</li>
              <li class="_2JILy">Thiruvalla</li>
              <li class="_2JILy">Thiruvallur</li>
              <li class="_2JILy">Thiruvananthapuram</li>
              <li class="_2JILy">Thiruvarur</li>
              <li class="_2JILy">Thodupuzha</li>
              <li class="_2JILy">Thoothukudi</li>
              <li class="_2JILy">Thoubal</li>
              <li class="_2JILy">Thrissur</li>
              <li class="_2JILy">Tindivanam</li>
              <li class="_2JILy">Tinsukia</li>
              <li class="_2JILy">Tiptur</li>
              <li class="_2JILy">Tirunelveli</li>
              <li class="_2JILy">Tirupati</li>
              <li class="_2JILy">Tirupur</li>
              <li class="_2JILy">tiruttani</li>
              <li class="_2JILy">Tiruvannamalai</li>
              <li class="_2JILy">Tohana</li>
              <li class="_2JILy">Trichy</li>
              <li class="_2JILy">Tumakuru</li>
              <li class="_2JILy">Tuni</li>
              <li class="_2JILy">Udaipur</li>
              <li class="_2JILy">Udgir</li>
              <li class="_2JILy">Udhampur</li>
              <li class="_2JILy">Ujjain</li>
              <li class="_2JILy">Uluberia</li>
              <li class="_2JILy">Unnao</li>
              <li class="_2JILy">Uran-islampur</li>
              <li class="_2JILy">Vadodara</li>
              <li class="_2JILy">Valsad</li>
              <li class="_2JILy">Vapi</li>
              <li class="_2JILy">Varanasi</li>
              <li class="_2JILy">Varkala</li>
              <li class="_2JILy">Vellore</li>
              <li class="_2JILy">Veraval</li>
              <li class="_2JILy">Vidisha</li>
              <li class="_2JILy">Vijayawada</li>
              <li class="_2JILy">Viluppuram</li>
              <li class="_2JILy">Virudhunagar</li>
              <li class="_2JILy">Visnagar</li>
              <li class="_2JILy">Vizag</li>
              <li class="_2JILy">Vizianagaram</li>
              <li class="_2JILy">Vyara</li>
              <li class="_2JILy">Waidhan</li>
              <li class="_2JILy">Warangal</li>
              <li class="_2JILy">Wardha</li>
              <li class="_2JILy">Washim</li>
              <li class="_2JILy">Wayanad</li>
              <li class="_2JILy">Yamuna-nagar</li>
              <li class="_2JILy">Yavatmal</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            border: "0.5px solid gray",
            width: "93%",
            margin: "auto",
            backgroundColor: "gray",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        ></div>
        <div className="logobottom">
          <div>
            <img
              className="logoimg"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
              alt=""
            />
          </div>
          <div className="updateyear">© 2022 Swiggy</div>
          <div
            className="socialImages"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <div>
              <img
                className="socialImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                alt=""
              />
            </div>
            <div>
              <img
                className="socialImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                alt=""
              />
            </div>
            <div>
              <img
                className="socialImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                alt=""
              />
            </div>
            <div>
              <img
                className="socialImg"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
