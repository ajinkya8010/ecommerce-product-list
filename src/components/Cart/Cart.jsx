import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
