import React from 'react'
import './Home.css'
const Card1 = ({name,img,info}) => {
  return (
    <>
      <div className='row  BorderRadius Bgcolor text-black container-fluid mb-5' >
        <div className='col-lg-5 col-mid-12 BorderRadius container' >
          <img src={img} style={{ height: "100%", width: "100%" }} className="BorderRadius" />
        </div>
        <div className="col-lg-7  col-mid-12 BorderRadius container">
          <div className="container">
            <h1>{name}</h1>
          </div>

          <div className="container">
            <span style={{ fontSize: "20px" }}>{info}</span>
          </div>

         
        </div>

      </div>
    </>
  )
}





export default Card1