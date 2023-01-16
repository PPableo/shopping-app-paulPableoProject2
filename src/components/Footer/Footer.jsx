import React from "react";
import "./_Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            quisquam adipisci fugiat deleniti vel porro ipsa dolorem temporibus
            qui cumque.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            in totam alias atque illum voluptatibus et mollitia. Corporis,
            suscipit assumenda?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">PableoStore</span>
          <span className="copyright">
            COPYRIGHT © 2023 PAUL PABLEO ALL RIGHTS RESERVED
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment banner; powered by stripe" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
