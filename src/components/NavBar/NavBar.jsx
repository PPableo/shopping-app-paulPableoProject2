import React from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./_Navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/en.png" alt="English/Canadian Flag" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link"  to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link"  to="/products/3">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link"  to="/">PABLEOSTORE</Link>
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
          <div className="cartIcon">
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
