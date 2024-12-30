import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../api/ProductApi";
import { CartContext } from "../../context/CartContext";
import "./ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts().then((data) => {
      const item = data.find((p) => p.id === parseInt(id));
      setProduct(item);
    });
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page">
      <div className="product-img-container">
        <img src={product.images[0]} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-category-label">
          <strong>Category:</strong> {product.category.name}
        </p>
        <p className="product-price-label">
          <strong>Price:</strong> ${product.price}
        </p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
