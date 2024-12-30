import React, { useEffect, useState, useContext } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { fetchProducts, fetchCategories } from "../../api/ProductApi";
import { CartContext } from "../../context/CartContext";
import "./HomePage.css";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("");
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });

    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);


  useEffect(() => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product.category.name === categoryFilter
      );
    }

    if (sortOption === "priceLow") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHigh") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, sortOption, products]);

  return (
    <div className="homepage">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
        </select>
      </div>
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
};

export default HomePage;
