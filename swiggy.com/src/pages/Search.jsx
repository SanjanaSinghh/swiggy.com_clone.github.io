import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import {data} from "../RestaurantData/data.js"
import { useState } from 'react';
// import { useEffect } from 'react';
import axios from "axios"
import { useCallback } from 'react';
import { Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {Box} from "@mui/material"
import zIndex from '@mui/material/styles/zIndex';
// import axios from "a"

export const Search = () => {

    // const [input,setInput]=useState("")
    const [data,setData]=useState([])
    const [particularData,setParticularData]=useState({})
    const [extraData,setExtraData]=useState([])
    const [loading,setLoading]=useState(false)
    const [checkInput,setCheckInput]=useState("")
    // const [clicked,setClicked]=useState(false)
    // useEffect(()=>{setData(rdata.items)},[])

    // let timerId

    const debounce=(func)=>{
       
      let timer;
        return function(...args){
            const context=this;

            if(timer){
                clearTimeout(timer);
            }

            timer=setTimeout(()=>{
                timer=null
                func.apply(context,args);
            },1000)
        }
    }

const handleChange=(e)=>{
 const {value}=e.target
 setCheckInput(value)
 setParticularData({})
 setLoading(true)
 axios({
    method:"get",
    url:`http://localhost:4000/data?q=${value}`
 })
 .then((res)=>{setData(res.data);setLoading(false)})
    
}

const optimisedData=useCallback(debounce(handleChange),[])

const handleView=(Id)=>{
    setCheckInput("")
    setParticularData({})
    axios({
        method:"get",
        url:`http://localhost:4000/data/${Id}`
    })
    .then((res)=>{
    setParticularData(res.data)})
    .catch((err)=>{console.log(err)})

    fetchRemainingData()
}

const fetchRemainingData=()=>{
    axios({
        method:"get",
        url:"http://localhost:4000/data"
    })
    .then((res)=>{
    setExtraData(res.data)})
    .catch((err)=>{console.log(err)})
}

  return (
    <div>

        <Navbar/>

                                            

        <div id="input_section">
       
         <input type={"text"}  placeholder={"Search for restaurants"} onChange={optimisedData} />
         <SearchIcon/>
        
        </div>


    
      
        {/* <Link to={`/RestaurantView/${item.id}`} ></Link> */}

        { checkInput !== "" ? <div id="display">
                 {
                      data.map((item)=>{
                        return  <div  >
                       <img src={item.img_url}></img>
                       <div onClick={()=>{handleView(item.id)}}>{item.name}</div>
                               </div>})
                }
                </div>  : null
        } 

{ Object.keys(particularData).length!==0 ?
      <div id='particular_restaurant'>
     <button style={{backgroundColor:"gray",color:"white",padding:"10px",borderRadius:"10px",border:"none",marginBottom:"30px"}}>Restaurant</button>
       <Box id="RestaurantView" >
          <div className="img_box"><img src={particularData.img_url} alt="loading..."></img></div>
          <div className="description">
              <div>{particularData.name}</div>
              <div style={{ color: "#696b79"}}>★{particularData.rating}  • {particularData.average_time}min • ₹{particularData.average_cost} for two </div>
              <div style={{ color: "#93959f"}}>•{particularData.cuisines.map((el) => {return el} )}</div>
              {/* <p><span>{particularData.rating}</span><span>-</span><span>{particularData.average_time} min</span><span>-</span><span>average cost for two {particularData.average_cost} </span></p> */}
          </div>
      </Box>
      <h3>More results you like</h3>
      <div id="random_data">
          {extraData.map((item)=>{return <div>
              <div className="img_box"><img src={item.img_url} alt="loading..."></img></div>
             <div className="description">
              <div>{item.name}</div>
              <div style={{ color: "#696b79"}}>★{item.rating}  • {item.average_time}min • ₹{item.average_cost} for two </div>
              <div style={{ color: "#93959f"}}>•{item.cuisines.map((el) => {return el} )}</div>
             
              {/* <div><span>{item.rating}<span></span>{item.average_time}min</span><span>average cost for two {item.average_cost} </span></p> */}
          </div>
  
          </div>})
          }
      </div>
      </div> : null 
}

    {  checkInput==="" &&  Object.keys(particularData).length===0 ?  <h3 style={{marginLeft:"15%",marginTop:"50px"}}>Popular Cuisines</h3>:null }



   
    {checkInput==="" &&  Object.keys(particularData).length===0 ?   <div id="popular">
     
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc" alt=""/></div>
    </div>:null}
    </div>
  )
}
export default Search
