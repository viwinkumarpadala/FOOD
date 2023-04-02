import React, { useState,useEffect, useRef } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Home = () => {
  const [foodcat,setfoodcat]=useState([])
  const [fooditems, setfooditems] = useState([])
  const [searchitems,setsearchitems]=useState("")

  const loaddata = async()=>{
     await axios.get("http://localhost:5000/displaydata/fooddata").then(resp=>{
      console.log('loading...')
       console.log(resp.data[0],resp.data[1])
       setfoodcat(resp.data[1])
       setfooditems(resp.data[0])
     }
     ) 
  } 
  useEffect(()=>{
    loaddata()
  },[])
  
 


  return (

    <>
      <div><Navbar /></div>
      <div> <>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{ "objectFit": "contain !important" }}>
          <div className="carousel-inner" id="carouselimg">
            <div className='carousel-caption' style={{ "zIndex": "10" }}>
              <div className="d-flex justify-content-center">
                <input name='search' className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={searchitems} onChange={(e)=>{
                  console.log(e.target.value)
                  setsearchitems(e.target.value) 
             }} />
                {/* <button className="btn btn-outline-success text-white" style={{ "backgroundColor": "#B200ED" }} type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://source.unsplash.com/random/500×500/?burger" className="d-block w-100" style={{ "filter": "brightness(80%)" }} alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://source.unsplash.com/random/500×500/?biryani" className="d-block w-100" style={{ "filter": "brightness(80%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/500×500/?salad" className="d-block w-100" style={{ "filter": "brightness(80%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </></div>

      <div className='container'>
        {
          foodcat!==[]? foodcat.map((data) => {
            return (
              <div className='row mb-3 ml-3 mr-3 mt-3' >
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr></hr>
                {
                  fooditems.filter((items)=>((items.CategoryName==data.CategoryName) && (items.name.toLowerCase().includes(searchitems)))).map((item)=>{
                    return (
                      <>
                        <div key={item._id} className=" mt-3 col-12 col-md-6 col-lg-3">
                          <Card food={item} options={item.options[0]} description={item.description}/>
                        </div>
                      </>
                    )
                  }
                  )
                }
              </div>
              
            )
          }):"no catogeries found"
        }
        
      </div>
      
      <div><Footer /></div>
    </>
  )
}

export default Home
