import React from "react";
import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./_Slider.scss";

const Slider = () => {
  // NOTE: Define useState variable
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/7479842/pexels-photo-7479842.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/9861662/pexels-photo-9861662.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15045050/pexels-photo-15045050.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  // NOTE: We're creating a function in the instance that we click through our data container that it doesn't go to index[3] or vice versa that if it's [0] it circles back
  // NOTE: Define function variable
  // NOTE: IF currentSlide is zero, make it 2 : if it's not decrease it prev - 1
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  // NOTE: IF currentSlide is zero, make it 2 : if it's not decrease it prev - 1
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
        <div className="heroText">
          <h1>Elevate your lifestyle with everyday <span>luxury</span></h1>
          <p>Experience luxury with our commitment to exceptional service, beautiful products, inspiring spaces, and engaging communication.</p>
        </div>
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw` }}
      >
        <img src={data[0]} alt="Stock/Placeholder Clothing Person" />
        <img src={data[1]} alt="Stock/Placeholder Clothing Person" />
        <img src={data[2]} alt="Stock/Placeholder Clothing Person" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
