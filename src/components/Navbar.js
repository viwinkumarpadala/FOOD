import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
const Navbar = () => {
    const navigate=useNavigate()
    const [cartview,setcartview]=useState(false)

    const handlelogout=()=>{
        localStorage.removeItem("authToken")
        navigate('/')
    }
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light bg-failure" >
              <div className="container-fluid">
                  <Link to="/" className="navbar-brand fst-italic" href="#"><b>Yummyy</b></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <ul className="navbar-nav me-auto mb-2">
                        <li>
                              <Link to="/" className="nav-link fs-5 active mt-2" aria-current="page" href="#">Home</Link>
                        </li>
                      </ul>
                      {(!localStorage.getItem("authToken"))?
                          <div className='d-flex '>
                              <Link to="/login" className="btn mx-1" style={{ "color": "black", "backgroundColor": "#B200ED" }} href="#">Login</Link>
                              <Link to="/signup" className="btn mx-1" style={{ "color": "black", "backgroundColor": "#B200ED" }}  href="#">Sign up</Link>
                          </div> : <div className='d-flex '>
                              <Link to="/cart" className="btn mx-1" style={{ "color": "black", "backgroundColor": "#B200ED" }} href="#">Cart{" "}<Badge pill>2</Badge></Link>
                              
                              <Link to="/" className="btn mx-1" style={{ "color": "black", "backgroundColor": "#B200ED" }} href="#" onClick={handlelogout}>Logout</Link>
                          </div>}
                      
                  </div>
              </div>
          </nav>
    </>
  )
}

export default Navbar
