import React from "react";
// import { Link } from "@reach/router";
import { Book } from "./Book.jsx";
import { Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import Cart from "./Cart";

const Inventory = ({ books, addToCart, orders, removeFromCart }) => {
  const bookComponent = books.map(book => (
    <Book
      key={book.title}
      title={book.title}
      author={book.author}
      publicationDate={book.publicationDate}
      audience={book.audience}
      genre={book.genre}
      addToCart={addToCart}
    />
  ));

  return (
    <>
      <Row>
        <Col className="justify-content-md-center bg-primary text-white text-center">
          <h1>React Bookstore</h1>

          <Link to="/admin">
            <h4 style={{ color: "black" }}>Go to admin panel</h4>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          {books.length === 0 ? <h3>Brak książek</h3> : bookComponent}
        </Col>
        <Col sm={4}>
          <Cart orders={orders} removeFromCart={removeFromCart} />
        </Col>
      </Row>
    </>
  );
};

export default Inventory;
