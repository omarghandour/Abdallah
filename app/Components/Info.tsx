import React from 'react'
import './Components.css'
const Info = () => {
  return (
     <div className='Home'>
     <div className="hRight">
          {/* <img src="/next.svg" alt="" />
          <img src="/vercel.svg" alt="" /> */}
                    <h1 style={{fontSize: '60px', margin: '0'}}>Toxic</h1>
          <h1 style={{fontSize: '25px', margin: '0'}}>SANDWICH & POTATOES</h1>
     </div>
     <div className="hLeft">

          <p>Are you hungry ??!</p>
          <a className='number' href="tel:01551191571"><h2>01551191571</h2></a>
          {/* <a  className='number'  href="tel:01093713940"><h2>01093713940</h2></a> */}
          
          <div className="icon">
               <a href="https://www.facebook.com/profile.php?id=61553006459639&mibextid=ZbWKwL"><img src="/facebook-color-svgrepo-com.svg" alt="Facebook logo" /></a>
               <a href="https://maps.google.com/?q=30.7170390,31.2547250&hl=en-EG&gl=eg&entry=gps&lucs=,47071704&g_st=ic"><img src="./location-pin-svgrepo-com.svg" alt="Location logo" /></a>
             
          </div>
          <a className='btn' href="/Minue">
                    <button>Minue</button>
               </a>
     </div>
    </div>
  )
}

export default Info