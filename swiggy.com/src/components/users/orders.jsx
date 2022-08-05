import React from 'react'
import empty_orders from "../../Images/empty-orders-image.webp";

const Orders = () => {
  return (
    <div>
      <div className="jsb">
        <img src={empty_orders} alt="" />
        <div className='jsbp1'>No Orders</div>
        <div className='jsbp2'>You haven't placed any order yet</div>
      </div>
      
    </div>
  );
}

export default Orders