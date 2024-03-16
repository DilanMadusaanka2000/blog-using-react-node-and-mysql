import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' />
        <input required type="emial" placeholder='email' />
        <input required type="password" placeholder='password' />
        <p>This is an erro</p>
        <button>Login</button>
        <span>Do you have account ? <Link to="/login"> Login</Link></span>
      </form>


    </div>
  )
}

export default Register