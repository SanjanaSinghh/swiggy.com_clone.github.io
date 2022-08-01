import React from 'react'

export const LandingPage = () => {
  return (
    <div>
    <div className="section">
    <div id="upperSection" style="position: relative;">
        <div id="upperSectionLeftPart">
            <div id="upperSectionLeftPartInnerBox">
                <nav>
                    <img id="swiggyLogo" src="./swiggyLogo.png" alt="swiggyLogo"/>
                    <div id="navButtonUpperDiv">
                        <div id="navButtonDiv">
                            <button id="loginBtn" className="navBtn">Login</button>
                            <button id="signupBtn" className="navBtn">Sign up</button>
                        </div>
                    </div>
                    <div id="loggedUpperDiv">
                        <div id="loggedUser">
                            <div><img src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" alt="" /></div>
                            <div><button id="colorChange"></button></div>
                        </div>
                        <div id="logoutDropDown">
                            <button id="logoutBtn">Logout</button>
                        </div>
                    </div>
                </nav>
                <h1 id="randomTextHeading"></h1>
                <h2 id="supporterTextHeading">Order food from favourite restaurants near you.</h2>
                <div id="searchBox">
                    <input id="searchBar" type="text" placeholder="Enter your delivery location " />
                    <button id="searchBtn">FIND FOOD</button>
                </div>
                <h3 id="popularCitiesHeading">POPULAR CITIES IN INDIA</h3>
                <ul id="popularCitiesList">
                    <li>Ahmedabad</li>
                    <li>Bangalore</li>
                    <li>Chennai</li>
                    <li>Delhi</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Kolkata</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>& more.</li>
                </ul>
            </div>
        </div>
        <div id="upperSectionRightPart">
            <img id="upperSectionRightPartImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="upperSectionRightPartImage" />
        </div>
    </div>
</div>
<div className="section" id="secondBox">
    <div id="secondBoxInnerDiv">
        <div className="secondBoxInnerDivGridBox">
            <img id="secondBoxImage1" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
            <div className="secondBoxHeading">No Minimum Order</div>
            <div className="secondBoxPara">Order in for yourself or for the group, with no restrictions on order value</div>
        </div>
        <div className="secondBoxInnerDivGridBox">
            <img id="secondBoxImage2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
            <div className="secondBoxHeading">Live Order Tracking</div>
            <div className="secondBoxPara">Know where your order is at all times, from the restaurant to your doorstep</div>
        </div>
        <div className="secondBoxInnerDivGridBox">
            <img id="secondBoxImage3" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt=""/>
            <div className="secondBoxHeading">Lightning-Fast Delivery</div>
            <div className="secondBoxPara">Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
        </div>
    </div>
</div>
<div className="section" id="thirdBox">
    <div id="thirdBoxInnerDiv">
        <div id="thirdBoxInnerDivHeading">Restaurants in your pocket</div>
        <div id="thirdBoxInnerDivPara">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>
        <div>
            <a href="#">
                <img id="playStoreImage" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
            </a>
            <a href="#">
                <img id="appleStoreImage" height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
            </a>
        </div>
    </div>
    <img id="mobileImage1" width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" />
    <img id="mobileImage2" width="384" height="489" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" />
</div>
</div>

  )
}
