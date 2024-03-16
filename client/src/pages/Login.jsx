import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <p>This is an erro</p>
        <button>Login</button>
        <span>Don't you have account ? <Link to="/register"> Register</Link></span>
      </form>


    </div>
  )
}

export default Login