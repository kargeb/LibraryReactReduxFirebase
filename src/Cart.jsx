import React from "react";
import { Badge } from "react-bootstrap";

const Cart = ({ orders }) => (
  <div
    style={{
      border: "3px solid #007BFF",
      margin: "50px auto",
      borderRadius: "20px",
      width: "50%"
    }}
  >
    <h1>
      <Badge variant="secondary">Cart</Badge>
    </h1>

    {orders.length ? (
      <ul style={{ display: "inline-block" }} className="text-left">
        {orders.map(order => (
          <li key={order}>
            <h3>{order}</h3>
          </li>
        ))}
      </ul>
    ) : (
      <h3>Brak zamówień</h3>
    )}
  </div>
);

export default Cart;
