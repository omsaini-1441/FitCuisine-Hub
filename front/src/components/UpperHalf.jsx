import React, { useEffect } from 'react'
import './Home.css'
import Navbar from './Navbar'
import InfoSection from './InfoSection'
import { useState } from 'react'
import {NavLink} from'react-router-dom'
import { UilUser } from '@iconscout/react-unicons'
const UpperHalf = (props) => {
  const [name,setname]=useState();
  useEffect(()=>{
    const val=sessionStorage.getItem("login");
    if(val=="true"){
       const email=sessionStorage.getItem("email");
       const name=sessionStorage.getItem("name");
       setname(name);
      
    }
},[])
    return (
        <div style={{display:"flex"}} className='pt-3 container-fluid'>
        
        <div className='w-50' style={{cursor:"pointer",marginLeft:"4%"}} ><NavLink to="/"> <font face="Comic sans MS"  size='5' color="black" style={{ textDecoration: "underline" }}>FitCuisine Hub
                </font><img src='https://cdn-icons-png.flaticon.com/512/1721/1721455.png' style={{width:"50px"}} /></NavLink></div>
                <div className=' w-50  text-center' style={{marginLeft:"25%"}}>
 <h3 style={{textTransform:"capitalize"}}>{name}<UilUser></UilUser></h3>
            </div>
               
      </div>
    )
}

export default UpperHalf
