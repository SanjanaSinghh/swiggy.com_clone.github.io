import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box } from '@mui/material'

export const RestaurantView = () => {


    const [data,setData]=useState([])
    const {Id}=useParams()

    useEffect(()=>{
        axios({
            method:"get",
            url:`http://localhost:4000/data/${Id}`
        })
        .then((res)=>{
        // setData(res.data)
        console.log(res.data)
        })
    },[])
    // console.log(Id)
  return (
    <div>
    {data.map((item)=>{return <Box>
        <div id="img_box"><img src={item.img_url} alt="loading..."></img></div>
        <div id="description">
            <p>{item.name}</p>
            <p><span>{item.rating}<span></span>{item.average_time}min</span><span>average cost for two {item.average_cost} </span></p>
            <p>{item.cuisines.forEach(e => {
                <span>{e}</span>
            })}</p>
        </div>
    </Box>})}
    </div>
  )
}
