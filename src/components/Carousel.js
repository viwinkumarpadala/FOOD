import React from 'react'

const Carousel = () => {
  return (
    <>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>
              <div className="carousel-inner" id="carouselimg">
                <div className='carousel-caption' style={{"zIndex":"10"}}>
                      <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-success text-white" style={{ "backgroundColor": "#B200ED" }} type="submit">Search</button>
                      </form>
                </div>
                  <div className="carousel-item active" data-bs-interval="10000">
                      <img src="https://source.unsplash.com/random/500×500/?burger" className="d-block w-100" style={{"filter":"brightness(80%)"}} alt="..."/>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                      <img src="https://source.unsplash.com/random/500×500/?biryani" className="d-block w-100" style={{ "filter": "brightness(80%)" }} alt="..."/>
                  </div>
                  <div className="carousel-item">
                      <img src="https://source.unsplash.com/random/500×500/?salad" className="d-block w-100" style={{ "filter": "brightness(80%)" }} alt="..."/>
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
    </>
  )
}

export default Carousel