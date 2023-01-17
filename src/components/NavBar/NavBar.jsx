import React from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./_Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";

const NavBar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* <div className="item">
            <img src="img/en.png" alt="English/Canadian Flag" />
            <KeyboardArrowDown />
          </div> */}
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link"  to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link"  to="/products/3">Sale</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link"  to="/">P<span>A</span>BLO</Link>
        </div>

        <div className="right">

          <div className="item">
          <Link className="link"  to="/">Homepage</Link>
          </div>


        <div className="item">  
          <Link  className="link"  to="/">About</Link>
        </div>

        <div className="item">  
          <Link  className="link"  to="/">Contact</Link>
        </div>

        <div className="item">
          <Link  className="link"  to="/">Stores</Link>
        </div>

        <div className="icons">
          <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          {/* NOTE: onClick we set state, if it's true it's false and vice versa*/}
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>0
              {/* {products.length} */}
            </span>
          </div>
        </div>
        </div>
      </div>
      {/* NOTE: CONDITION: If it's open, run/open <Cart /> Component */}
      {open && <Cart/>}
    </div>
  );
};

export default NavBar;
