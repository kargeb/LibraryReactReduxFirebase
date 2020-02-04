import React from "react";
import { Badge } from "react-bootstrap";
import "../styles/Cart.css";

const Cart = ({ orders, removeFromCart }) => (
  <div className="cart">
    <h1 className="bg-primary text-white">Cart</h1>
    {orders.length ? (
      <ul className="cart__ul text-left">
        {orders.map(order => (
          <li key={order}>
            <h5>
              {order}
              {"  "}
              <Badge
                className="cart__badge"
                onClick={() => removeFromCart(order)}
                variant="danger"
              >
                X
              </Badge>
            </h5>
          </li>
        ))}
      </ul>
    ) : (
      <h3>Brak zamówień</h3>
    )}
  </div>
);

export default Cart;
