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

           <Link className='link' to="/?cat=cricket"  >
            <h6> CRICKET</h6>
           </Link>

           <Link className='link' to="/?cat=legue"  >
            <h6> LEGUE</h6>
           </Link>


           <Link className='link' to="/?cat=technology"  >
            <h6> TECHNOLOGY</h6>
           </Link>


           <Link className='link' to="/?cat=worldcup"  >
            <h6> WORLD CUP</h6>
           </Link>

           <Link className='link' to="/?cat=rank"  >
            <h6> RANK</h6>
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