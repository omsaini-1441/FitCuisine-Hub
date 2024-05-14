import React from 'react'
import { useState,useEffect } from 'react';

import Card1 from "./Card1.jsx"
import Card2 from './Card2.jsx'
import data from './SmallApi.js'
import {NavLink, useHistory} from "react-router-dom"
const InfoSection = () => {
const history=useHistory();
  const [check,set]=useState(false);
  const [checkWidth,setWidth]=useState(false);
  const [name,setname]=useState();
  const [email,setemail]=useState();
  const [show,setit]=useState(false)
    useEffect(() => {
      var viewport_width = window.innerWidth;
  
      if (viewport_width <= 800) {
       set(true)
      }
      else {
        set(false)
      }
  
      if (viewport_width <= 600) {
        setWidth(true)
    }
    else {
        setWidth(false)
    }

    const val=sessionStorage.getItem("login");
    if(val=="true"){
       const email=sessionStorage.getItem("email");
       const name=sessionStorage.getItem("name");
       setname(name);
       setemail(email)
       setit(true)
      
    }

    },[])
      window.onresize = function () {
        var viewport_width = window.innerWidth;
        if (viewport_width <= 800) {
          set(true)
         }
         else {
           set(false)
         }
  
         if (viewport_width <= 600) {
          setWidth(true)
      }
      else {
          setWidth(false)
      }
        
       
      };
  
      const [arr, setType] = useState({
        name:"salad",
        img:"https://th.bing.com/th/id/OIP.b2TdI4CWHm9SVUL7XR4wWQHaFt?pid=ImgDet&w=1024&h=790&rs=1",
        info:"Citrus Salad with Berries"
    });

    const GOTORecipePage=()=>{
         history.push({
                pathname: '/Recipe',
                state: {  // location state
                    email:email,
                    name:name
                }
            })
    }

  return (
    <div>
    <div className='flex-b container-fluid mt-3'>
    <div  style={check==false?{width:"50%"}:{width:"100%"}} className={check==false?'mt-3':"mt-3 text-center"}>
      <div className="ms-5 w-75">
      <h1 style={check==false?{fontSize:"4vw"}:{fontSize:"8vw"}}>
        Let's Start Cooking with Popular Recipes
      </h1>
      <p style={check==false?{fontSize:"1.7vw"}:{fontSize:"4vw"}}>Want to learn cooking but confused how to start?</p>
      
       {show==false? <NavLink to="/Login">  <button class="btn btn-lg btn-success mx-2" type="submit">Login</button></NavLink> :""}
         {show==false?<button class="btn btn-lg btn-outline-success mx-2" type="submit "  onClick={()=>alert("login First")}>Explore</button>
        : <button class="btn btn-lg btn-success mx-2" type="submit" onClick={GOTORecipePage}>Explore</button>}
      </div>
    </div>

    {check==false?<div className=' bg-dark  img mx-5' style={{borderRadius:"50%",width:"30%",height:"25vw" }}>
    </div>:""}

  </div>

  <div className="container-fluid w-100  bg-light mt-3 ">
 

  <div className="flex-b ">
      <div >
          <ul style={{listStyle:"none"}}>
              <li className={checkWidth==true?"inline":""}><button className="mybutton btn btn-outline-success  my-1 " onClick={() => setType(data[0])}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuueEd-ym1zIDhCLCI0d8SYArrjN6YkHzfeg&usqp=CAU" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2">Pizza</span></button></li>
              <li className={checkWidth==true?"inline":""}><button className="mybutton my-1  btn btn-outline-success" onClick={() => setType(data[1])}><img src="https://www.bing.com/th?id=OIP.I0Phk4iHeJbt3qfYSlNb8gHaIh&w=233&h=268&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2"> Desert</span></button></li>
              <li className={checkWidth==true?"inline":""}><button className="mybutton  my-1 btn btn-outline-success" onClick={() => setType(data[3])}><img src="https://th.bing.com/th/id/OIP.bRmJwM5oet3Lgn2KUiXLlQHaFj?pid=ImgDet&rs=1" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2" >Noodle</span></button></li>
              <li className={checkWidth==true?"inline":""}><button className="mybutton  my-1 btn btn-outline-success" onClick={() => setType(data[4])}><img src="https://th.bing.com/th/id/OIP.HWfwNce-zRofYxAYNIDEswHaGv?pid=ImgDet&rs=1" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2">Cocktails</span></button></li>
              <li className={checkWidth==true?"inline":""}><button className="mybutton  my-1 btn btn-outline-success" onClick={() => setType(data[2])}><img src="https://th.bing.com/th/id/OIP.lWqkDuh6ymTilP5AN2ODIAHaF6?pid=ImgDet&rs=1" style={{height:"30px",width:"30px", borderRadius:"50%"}}/><span className="ms-2">Salad</span></button></li>
             
          </ul>
      </div>

      <div className="col-lg-5 col-mid-3 col-sm-5 container-fluid">
          <div>
              <br />
              <Card1 {...arr} />
          </div>
      </div>


  </div>


</div>

  </div>

  )
}

export default InfoSection