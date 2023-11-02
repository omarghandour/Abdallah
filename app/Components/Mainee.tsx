import React from 'react'
import './Components.css'
import Link from 'next/link'
const Mainee = () => {
  return (
    <div className='Mainee'>
         <div className="card">
          <div className="txt">
            <h1>Toxic</h1>
            <h2>SANDWICH & POTATOES</h2>
            <p>Are you hungry ??!</p>
          </div>

          <div className="links">
            <Link href={''}>
              <img className='location' src="./location-pin-svgrepo-com.svg" alt="" />
            </Link>
          </div>
         </div>
    </div>
  )
}

export default Mainee