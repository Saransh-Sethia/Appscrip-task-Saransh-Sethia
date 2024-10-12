import React, { useState } from "react";
import heart from "../assets/heart.png";
import { MdFavorite } from "react-icons/md";
import styles from './ProductCard.module.css';

const ProductCard = ({ product, key }) => {
    const [colorChange, setColorChange] = useState(false);

    const handleColorChange = () => {
        setColorChange(!colorChange)
    }
  return (
    <div key={key} className="product-card">
      <img src={product.image} alt="product" className="product-image" />

      <h5 className="product-title">{product.title.slice(0, 15)}</h5>
      <div className="product-price">
        <p className="price">Price : ${product.price}</p>
        <MdFavorite className={colorChange ? (styles.red) : (styles.white)} onClick={handleColorChange}/>
      </div>
    </div>
  );
};

export default ProductCard;
