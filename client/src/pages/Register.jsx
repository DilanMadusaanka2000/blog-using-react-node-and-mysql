import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"



const Register =() => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  });


  const [err, setError] = useState(null);

  const navigate = useNavigate();




  
  const handleChange = e =>{

    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();


   try {

     await axios.post("auth/register", inputs);
    navigate("/login");
    //console.log(res)

    
   } catch (err) {

    //console.log(err)

    setError(err.response.data);
    
   }
   


    


  };


  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="emial" placeholder='email' name='email'  onChange={handleChange} />
        <input required type="password" placeholder='password'  name='password' onChange={handleChange} />
        
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}  
        <span>Do you have account ? <Link to="/login"> Login</Link></span>
      </form>


    </div>
  )
}

export default Register