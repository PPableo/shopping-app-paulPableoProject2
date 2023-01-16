import React from 'react'
import Card from "../Card/Card"
import "./_FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {
// NOTE: We're using the prop {type} for our featured and trending sections
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
];
  return (
    <div className='featuredProducts'>
      <div className="top">
    <h1>{type} products</h1>
    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, enim cum ea possimus ex magnam! Error, perspiciatis voluptatem? Quasi pariatur tempora sed sapiente, quos voluptatibus, quaerat recusandae quis voluptatem, blanditiis aspernatur eligendi vero? Voluptatem maxime debitis iusto excepturi delectus quod.</p>
      </div>
      <div className="bottom">
      {/* NOTE: For each item inside this data we're going to call the card component */}
      {/* NOTE: If you're using map you need a unit "key=" We use {item.id} for the different ids*/}
      {data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
      </div>
    </div>
  )
}

export default FeaturedProducts