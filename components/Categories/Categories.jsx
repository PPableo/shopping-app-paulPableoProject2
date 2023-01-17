import React from "react";
import "./_Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    // NOTE: 3x3 Section/Columns -> First Section 2 Rows -> Second Section 1 Row -> Third Section 3 Rows
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/8285756/pexels-photo-8285756.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Woman"
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Woman"
          />
          <button>
            <Link to="/products/1" className="link">
              Woman
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">          <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Sale" />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button></div>
      </div>
      {/* this last "col" we add additional "col-l" to identify larger "column" */}
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/8498418/pexels-photo-8498418.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Men"
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Accessories"
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/4462779/pexels-photo-4462779.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Shoes"
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
