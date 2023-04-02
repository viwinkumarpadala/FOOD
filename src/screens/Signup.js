import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Signup = () => {

    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const locationRef = useRef();
    let currentdate = new Date();

    const handlesubmit = async (e) => {

        e.preventDefault()

        const details = {
            name: nameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            location: locationRef.current.value,
            date: currentdate
        };
        nameRef.current.value = ''
        passwordRef.current.value = ''
        emailRef.current.value = ''
        locationRef.current.value = ''
        console.log(details)

        axios.post("http://localhost:5000/api/createuser", details).then( response => {
            console.log(response)
            const flag = response
            if (!flag.data.success) {
                alert('Enter Valid credentials!!')
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
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" >Username</label>
                        <input type="text" name="name" ref={nameRef} className="form-control" id="name" aria-describedby="emailHelp"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" ref={passwordRef} className="form-control" id="exampleInputPassword1"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">location</label>
                        <input type="text" name="location" ref={locationRef} className="form-control" id="exampleInputPassword1"  />
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                    <Link to="/login" className='m-3'>Already a user?</Link>
                </form>
            </div>
        </>
    )
}

export default Signup
