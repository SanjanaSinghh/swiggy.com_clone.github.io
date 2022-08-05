import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Search from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
       <div id="headerContainer">
    <div id="headerContentContainer">
        <Link to=""  id="logo"><img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
                alt="swiggylogo"/></Link>
        <div id="currentLocation" style={{hover:{color:"orange"}}}>{localStorage.getItem("address")}<KeyboardArrowDownIcon color="#ff3d00"/></div>
        <ul id="headerContainerRight">
            <li id="search">
                <Link  to="/search"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"/>Search</Link>
            </li>
            <li id="offer">
                <Link to="" ><img src="https://static.thenounproject.com/png/971055-200.png" alt=""/>
                    Offers</Link>
            </li>
            <li id="help">
                <Link to="" > <img src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png"
                        alt=""/> Help</Link>
            </li>
            <li id="signIn">
            <Link to=""  id="signInA"><img src="https://www.transparentpng.com/thumb/user/single-user-icon-png-free--rLHSHx.png" alt=""/>Guest</Link>
        </li>
            <li id="cart"><Link to="" > Cart<span id="noOfCartItems"></span></Link></li>
        </ul>
    </div>
</div>



  )
}
export default Navbar
