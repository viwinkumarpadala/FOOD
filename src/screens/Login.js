import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Login = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
 
let navigate=useNavigate()

  const handlesubmit = async (e) => {

    e.preventDefault()

    const details = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    passwordRef.current.value = ''
    emailRef.current.value = ''
    console.log(details)

    axios.post("http://localhost:5000/api/login", details).then(response => {
      console.log(response)
      const flag = response
      console.log(flag.data.success)
      if (flag.data.success === "false") {
        alert('Enter Valid credentials!!')
        console.log("wrong values entered")
      }
      else{
        localStorage.setItem("authToken",flag.data.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    })

    // const response = await fetch("http://localhost:5000/api/createuser", {
    //     method: "POST",
    //     header: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
    // })

  }

  return (
    <>
    <Navbar/>
      <div className='container'>
        <form onSubmit={handlesubmit}>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" name="email" ref={emailRef} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" name="password" ref={passwordRef} class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <Link to="/signup" className='m-3'>New user?</Link>
        </form>
      </div>
    </>
  )
}

export default Login
