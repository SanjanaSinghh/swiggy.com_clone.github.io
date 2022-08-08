import React from 'react'
import empty_favorites from "../../Images/empty_favorites.webp";

const Favourites = () => {
  return (
    <div>
      <div className="jsb">
        <img src={empty_favorites} alt="" />
        <div className="jsbp1">Where is the love?</div>
        <div className="jsbp2 jsbp7">
          Once you favourite a restaurant, it will appear here.
        </div>
      </div>
    </div>
  );
}

export default Favourites