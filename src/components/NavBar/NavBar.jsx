import React from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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
            <Link to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/">PABLEOSTORE</Link>
        </div>
        <div className="center">
          <Link to="/">Homepage</Link>
        </div>
        <div className="center">
          <Link to="/">About</Link>
        </div>
        <div className="center">
          <Link to="/">Contact</Link>
        </div>
        <div className="center">
          <Link to="/">Stores</Link>
        </div>
        <div className="icons">
            <SearchIcon />
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  );
};

export default NavBar;
