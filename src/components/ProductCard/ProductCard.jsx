import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} className="product-img" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-category">{product.category.name}</p>
      <div className="product-actions">
        <Link to={`/product/${product.id}`} className="view-details">
          View Details
        </Link>
        <button onClick={() => onAddToCart(product)} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
