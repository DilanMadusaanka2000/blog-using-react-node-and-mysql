import React from 'react'
import Logo from '../img/logo.png'

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">

           <Link className='link' to="/?cat=news"  >
            <h6> Cricket News</h6>
           </Link>

           <Link className='link' to="/?cat=history"  >
            <h6> Cricket History</h6>
           </Link>


           <Link className='link' to="/?cat=profile "  >
            <h6>Player Profile</h6>
           </Link>


           <Link className='link' to="/?cat=analysis"  >
            <h6>Match Analysis</h6>
           </Link>

           <Link className='link' to="/?cat=culture"  >
            <h6> Cricket Culture</h6>
           </Link>

           <span>Dilan</span>
           <span>Logout</span>
           <span className='write'>

            <Link className='link' to="/write">Write</Link>

           </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar