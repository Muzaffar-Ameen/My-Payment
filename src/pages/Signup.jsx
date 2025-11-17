import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/Signup", {name,email,password})
    .then(result=>{
        console.log(result)
        alert("Signup Successful")
        navigate("/login")
    })
    .catch(err=>{
        console.log(err)
        alert("Signup Failed")
    })
  }

  

  return (
    <div className="signup-form">
      <h2>Signup Page</h2>

      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Enter username" 
        onChange={(e)=>setName(e.target.value)}required />
        <input type="email" placeholder="Enter email"
         onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Enter password" 
        onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit" className="btn btn-primary mt-2">
          Signup
        </button>
      </form>



      {/* Already have account section */}
      <div className= " text-center mt-3">
        <span>Already have an account? </span>
        <Link to="/login" className="btn-login btn-outline-primary btn-sm ms-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
