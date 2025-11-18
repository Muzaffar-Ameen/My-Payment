import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login", {email,password})
    .then(result=>{
        console.log(result)
        alert("Login Successful")
        navigate("/form")
    })
    .catch(err=>{
        console.log(err)
        alert("Login Failed")
    })
  }

  

  return (
    <div className="Login-form">
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter email"
         onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter password" 
        onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
      </form>



    </div>
  );
};

export default Login;
