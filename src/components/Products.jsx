import React, { useState } from "react";
import vectorLeft from "../assets/Vector-left.png";
import vectorRight from "../assets/Vector-right.png";
import CheckBoxFilter from "./CheckBoxFilter";
import ProductCard from "./ProductCard";

const Products = ({ products, setProducts }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="product-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tincidunt interdum nunc,
          <br />
          ac pulvinar risus porttitor id. Praesent at massa libero. In ac dolor
          vitae massa rutrum dapibus.
        </h3>
      </div>
      <div className="product-mediator">
        <div className="filter">
          <h3>{products.length} Items</h3>
          {toggle ? (
            <div className="filters" onClick={handleToggle}>
              <img src={vectorLeft} alt="" />
              <h5>Hide Filters</h5>
            </div>
          ) : (
            <div className="filters" onClick={handleToggle}>
              <img src={vectorRight} alt="" />
              <h5>Show Filters</h5>
            </div>
          )}
        </div>
        <select label="Recommended">
          <option></option>
        </select>
      </div>
      <div className="product-footer">
        {
          toggle ? (
            <CheckBoxFilter />
          ) : ""
        }
        
        <div className="grid-container">
          {products?.map((product) => (
            <div className="grid-item">
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
