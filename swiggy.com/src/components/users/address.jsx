import React from 'react'
import NoSavedAddress from "../../Images/NoSavedAddress.webp";

const Address = () => {
  return (
    <div>
      <div className="jsb">
        <img src={NoSavedAddress} alt="" />
        <div className="jsbp1">Can't find a door to knock</div>
        <div className="jsbp2">You don't have an address to deliver.</div>
      </div>
    </div>
  );
}

export default Address