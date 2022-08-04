import React, { useState } from 'react';
import styled from 'styled-components';



const Logo = styled.img`
    width: 50px;
    height: 50px;

`;

const Title = styled.p`
    margin-top: 5px;
    margin-bottom: 1px;
   font-size:17px;
   color:black;
   width:300px;
   font-weight:600
`;

const Hotel = () => {
    const [hotelName, setHotelName] = useState('');
    const [hotelImg, setHotelImg] = useState('');
    const [hotelArea, setHotelArea] = useState('');


    return (
        
            <div style={{display:'flex',gap:"10px"}}>
                <div >
                    <Logo src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/c9s7z84vypa5ixtcyr49" alt='Hotel' />
                </div>
                <div style={{ maxWidth: '20%', borderBottom: '2px solid black',textAlign:'left' }}>
                    <div >
                        <Title>Burger King</Title>
                    </div>
                    <div >
                        Pune
                    </div>
                </div>
            </div>
        
    );
};

export default Hotel;