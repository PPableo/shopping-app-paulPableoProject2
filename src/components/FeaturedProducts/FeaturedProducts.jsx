import React from 'react'
import Card from "../Card/Card"
import "./_FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {
// NOTE: We're using the prop {type} for our featured and trending sections
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/15031641/pexels-photo-15031641.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Blouse",
      isNew: true,
      oldPrice: 98,
      price: 88,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/15031716/pexels-photo-15031716.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 198,
      price: 178,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/15031719/pexels-photo-15031719.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/15031717/pexels-photo-15031717.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 98,
      price: 78,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/14862534/pexels-photo-14862534.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/14862535/pexels-photo-14862535.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 48,
      price: 28,
    },
];
  return (
    <div className='featuredProducts'>
      <div className="top">
    <h1>{type} products</h1>
    <p> Dime ¿qué te limita A que otra vez se repita? Estoy pa' buscarte ahorita (Tú sabes que yo siempre estoy puesto pa' ti) Hoy se puso bien bonita, aunque Antipática, nunca le baja (yeah) Pero conmigo se relaja Me le pego y ella se baja, baby (La Leyenda)</p>
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