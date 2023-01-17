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
            Ese cabrón ni se imagina Que ahora soy quién se lo aplico Mami,
            ¿cómo te lo explico? Yo a ninguna le suplico Pero tú me lo hace'
            rico Lo' gemido' y lo' grito'
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lay low with the sun Everybody have a real good time, real good time
            (surround me) Yeah, we cool, yeah, we drunk Lost my mind and baby I
            feel high, I feel high (they're calling on me)
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            P<span>a</span>blo
          </span>
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
