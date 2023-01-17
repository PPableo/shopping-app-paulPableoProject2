import React from "react";
import "./_List.scss";
import Card from "../Card/Card"

const Lists = () => {
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
      // img: "https://images.pexels.com/photos/15031660/pexels-photo-15031660.jpeg?auto=compress&cs=tinysrgb&w=1600",
      // img2: "https://images.pexels.com/photos/15031660/pexels-photo-15031660.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
  
  return (<div className="list">
    {/* NOTE: For each item we're going to call our card component and pass item and key*/}
    {data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
  </div>
  )
};

export default Lists;
