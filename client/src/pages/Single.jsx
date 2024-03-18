import React from 'react'

import Admin from '../img/admin.jpg'
import Edit from '../img/img/edit.png'
import Delete from '../img/img/delete.png'
import {Link} from 'react-router-dom'

import Menu from "../components/Menu"


function Single() {
  return (
    <div className='single'>

      <div className="content">
  
         
         <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

         <div className="user">
          <img src={Admin} alt="" />
          <div className="info">
            <span>Dilan</span>
            <p>Posted 4 days ago</p>
          </div>
            <div className="edit">
   

              <Link to ={`/write?edit=2`}>
              <img src={Edit} alt="" />
              </Link>
           
              <img src={Delete} alt="" />

            </div>
         </div>

     
        <h1>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>


          


      </div>


      <Menu />


    </div>
  );
};

export default Single