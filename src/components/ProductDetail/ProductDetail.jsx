import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../api/ProductApi";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      const item = data.find((p) => p.id === parseInt(id));
      setProduct(item);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-detail-img"
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category.name}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
};

export default ProductDetail;
