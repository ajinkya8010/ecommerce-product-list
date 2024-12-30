import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0].replace(/[\[\]"]+/g, "").trim()} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>
                    Quantity:
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateCartItemQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </p>
                </div>
                <button id="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
