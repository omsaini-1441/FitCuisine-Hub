import React from 'react'
import './Home.css'
const Card2 = (props) => {
    return (
        <>
            <div className='row  BorderRadius Bgcolor text-black container-fluid'  >

                <div className='col-lg-5 col-mid-12 BorderRadius container' style={{marginLeft:"-10px",padding:"0px"}}>
                    <img src={props.img} style={{ height: "100%", width: "80%" }} className="BorderRadius" />
                </div>
                <div className="col-lg-7  col-mid-12 BorderRadius container">
                    <div className="container">
                        <h3 className="fontsmall">{props.name}</h3>
                    </div>
                    <div className="container">
                    <span style={{ fontSize: "15px" }}>{props.info}</span>
                  </div>
                   
                </div>

            </div>
        </>
    )
}





export default Card2