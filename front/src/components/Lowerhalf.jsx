import React, { useEffect, useState } from 'react'
import './Home.css'
import { UilPizzaSlice } from '@iconscout/react-unicons';
import Card1 from "./Card1.jsx"
import Card2 from './Card2.jsx'
import data from './SmallApi.js'

const Lowerhalf = () => {
    const [arr, setType] = useState({
        name:"salad",
        img:"https://th.bing.com/th/id/OIP.b2TdI4CWHm9SVUL7XR4wWQHaFt?pid=ImgDet&w=1024&h=790&rs=1",
        info:"Citrus Salad with Berries"
    });

     const [checkWidth,setWidth]=useState(false);

    window.onresize = function () {
        var viewport_width = window.innerWidth;

        if (viewport_width <= 550) {
            setWidth(true)
        }
        else {
            setWidth(false)
        }
    }
    useEffect(()=>{
        var viewport_width = window.innerWidth;

        if (viewport_width <= 550) {
            setWidth(true)
        }
        else {
            setWidth(false)
        }
    },[])
    return (
        <div className="container-fluid w-100  bg-light mt-3 ">
  
            <div>
                {/* <h1 className='ms-5  text-black font-sans'>
                    Recipes
                  
          </h1> */}
            </div>

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


                {/* <div className="col-lg-5 col-mid-3 col-sm-5 container mb-5">
                    <div>
                        <Card2 {...arr} />
                        <br />
                        <Card2 {...arr} />
                    </div>

                </div> */}

            </div>


        </div>

    )
}

export default Lowerhalf
