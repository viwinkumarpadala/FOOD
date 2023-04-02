import React, { useRef, useState,useEffect } from 'react'
import { useDispatchCart,useCart } from './Contextreducer'

const Card = (props) => {
    let dispatch=useDispatchCart()
    const priceref=useRef()
    let opt=props.options
    let priceopt=Object.keys(opt)
    let food=props.food
    const [quantity,setquantity]=useState(1)
    const [size,setsize]=useState('')
    let data=useCart()

    const handleaddtocart=async ()=>{
        await dispatch({type:"ADD",img:food.img,id:food._id,name:food.name,price:price,quantity:quantity,size:size})
        console.log(data)
    }
    let price = quantity * parseInt(opt[size])
    useEffect(()=>{
        setsize(priceref.current.value)
    },[])
    
  return (
    <>
          <div className='col-3'>
              <div className="card" style={{ "width": "18rem", "maxHeight": "500px" }}>
                  <img src={food.img} className="card-img-top" alt="..." style={{"height":"200px",objectFit:"fill"}}/>
                  <div className="card-body">
                      <h5 className="card-title">{food.name}</h5>
                      <p className="card-text">{food.description}</p>
                      <div className="container w-100" >
                          <select className=' h-100 ' onChange={(e) => setquantity(e.target.value)} style={{ "backgroundColor": "#B200ED" }}>
                              {Array.from(Array(6), (e, i) => {
                                  return (
                                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                                  )
                              })}
                          </select>
                          <select className='m-2 h-100 rounded' ref={priceref} onChange={(e)=>setsize(e.target.value)} style={{ "backgroundColor": "#B200ED" }}>
                             {priceopt.map((data)=>{
                                return(<option key={data} value={data}>{data}</option>)
                             })}
                          </select>
                          <div className='d-inline h-100 fs-6'>
                              ${price}
                          </div>
                         
                      </div>
                      <hr></hr>
                      <button className='btn justify-cenyer ms-2' style={{ "backgroundColor": "#B200ED" }} onClick={handleaddtocart}>Add to Cart</button>
                  </div>
              </div>
          </div> 
    </>
  )
}

export default Card
