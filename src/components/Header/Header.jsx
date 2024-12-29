import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header-container">
      <h1 className="header-title">
        <Link to="/">E-Commerce Store</Link>
      </h1>
      <nav className="header-nav">
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
