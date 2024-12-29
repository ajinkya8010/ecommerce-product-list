import React from "react";
import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
