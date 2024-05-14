import React, { useEffect } from 'react'
import './Home.css'
import UpperHalf from './UpperHalf'
import InfoSection from './InfoSection'
import { useState } from 'react'
const Home = () => {
  return (
    <>
      <div className='w-100  bg-light' style={{minHeight:"100vh"}}>
       <UpperHalf/>
       <hr/>
       <InfoSection />
      </div>
    </>
  )
}

export default Home