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

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <img src={product.images[0]} alt={product.title} className="product-img" />
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Category: {product.category.name}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
