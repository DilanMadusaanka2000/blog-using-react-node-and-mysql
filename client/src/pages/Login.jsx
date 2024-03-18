import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"

import { AuthContext } from '../context/authContex'



const Login =()=> {








  const [inputs, setInputs] = useState({
    username:"",
   // email:"",
    password:"",
  });


  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);




  
  const handleChange = e =>{

    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();


   try {

    await login(inputs)

     await axios.post("auth/login", inputs);
    navigate("/");
    //console.log(res)

    
   } catch (err) {

    //console.log(err)

    setError(err.response.data);
    
   }
   


    


  };














  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <input type="password" placeholder='password' name='password' onChange={handleChange} />
      
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have account ? <Link to="/register"> Register</Link></span>
      </form>


    </div>
  )
}

export default Login