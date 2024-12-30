import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const cleanAndValidateImage = (image) => {
  if (!image) return null;
  const cleanedImage = image.replace(/[\[\]"]+/g, "").trim();

  return cleanedImage;
};

const ProductCard = ({ product, onAddToCart }) => {
  const imageSrc = cleanAndValidateImage(product.images[0]);
  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.title} className="product-img" />
      <div className="product-info">
        <h6 className="product-title-card">{product.title}</h6>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category.name}</p>
      </div>
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
