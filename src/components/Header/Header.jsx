import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header-container">
    <div className="left">
        <h2 className="header-title">
            <Link to="/">E-Commerce Store</Link>
        </h2>
        <p>
            <Link to="/">Home</Link>
        </p>
        <p>
            About
        </p>
        <p>
            Best Sellers
        </p>
    </div>
        <nav className="header-nav">
            <Link to="/cart" className="cart-link">
                 🛒 <span className="cart-count">{totalItems}</span>
            </Link>
        </nav>
    </header>
  );
};

export default Header;
