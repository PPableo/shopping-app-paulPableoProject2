import React, { useState } from "react";
import "./_Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  // NOTE: useState(0) since it's first image, we'll use onClick and setSelectedImg(0)
  const [selectedImg, setSelectedImg] = useState(0);
  // NOTE: creating useState(1) that when you onClick it updates state adding/subtracting
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/15094168/pexels-photo-15094168.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15031644/pexels-photo-15031644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // "https://images.pexels.com/photos/15031641/pexels-photo-15031641.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          {/* <img src={images[2]} alt="" onClick={(e) => setSelectedImg(2)} /> */}
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Essentials Top</h1>
        <span className="price">$128</span>
        <p>
          Past lives couldn't ever hold me down Lost love is sweeter when it's
          finally found I've got the strangest feelin' This isn't our first time
          around Past lives couldn't ever come between us Sometimes the dreamers
          finally wake up Don't wake me, I'm not dreamin' Don't wake me, I'm not
          dreamin'
        </p>
        <div className="quantity">
          {/* NOTE: button onClick, set state we're not recreating the number we're just updating the code value in the memory */}
          {/* NOTE: condition if previous is 1, stay at 1 don not change, if it's not -1 */}
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
