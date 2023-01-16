import React, { useState } from 'react'
import "./_Product.scss"

const Product = () => {
// NOTE: useState(0) since it's first image, we'll use onClick and setSelectedImg(0)
  const [selectedImg, setSelectedImg] = useState(0)

  const images = [
    "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15031641/pexels-photo-15031641.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
          <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Product