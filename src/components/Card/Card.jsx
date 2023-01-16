import React from 'react'
import "./_Card.scss"
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className="link"  to={`/product/${item.id}`}>
        
        <div className='card'>
            <div className="image">
              {/* NOTE: we write a condition for this item to pop up using the data and id we created */}
              {/* NOTE: CONDITION: If item.isNew show this "New Season" */}
              {item.isNew &&<span>New Season</span>}
              {/* NOTE: no alt text because we are using hover to showcase 2nd image */}
                <img className="mainImage" src={item.img} alt="" />
                <img className="secondImage" src={item.img2} alt="" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card