import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import {data} from "../RestaurantData/data.js"
import { useState } from 'react';
// import { useEffect } from 'react';
import axios from "axios"
import { useCallback } from 'react';
import { Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
// import axios from "a"

export const Search = () => {

    // const [input,setInput]=useState("")
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)

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
 setLoading(true)
 axios({
    method:"get",
    url:`http://localhost:4000/data?q=${value}`
 })
 .then((res)=>{setData(res.data);setLoading(false)})
    
}

const optimisedData=useCallback(debounce(handleChange),[])



  return (
    <div>

        <div id="input_section">
       
         <input type={"text"}  placeholder={"Search for restaurants and food"} onChange={optimisedData} />
         <SearchIcon/>
        
    </div>

     {loading?<Spinner/>:<div id="display">
        {data.map((item)=>{return <div  >
            <img src={item.img_url}></img>
            <div><Link to={`/RestaurantView/${item.id}`}>{item.name}</Link></div>
         </div>})}
    </div>}

     {data.length>0?null:<h3 style={{marginLeft:"15%",marginTop:"50px"}}>Popular Cuisines</h3>}
   
    {data.length>0?null:<div id="popular">
     
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97" alt=""/></div>
        <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc" alt=""/></div>
    </div>}
    </div>
  )
}
export default Search
