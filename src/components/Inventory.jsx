import React from "react";
import { Book } from "./Book.jsx";
import { Row, Col, Alert } from "react-bootstrap";

const Inventory = ({ books, addToCart, err }) => {
  const bookComponent = books.map((book, idx) => (
    <Book
      key={idx}
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
        {err ? (
          <Alert variant="danger" className="text-center">
            {" "}
            <span
              dangerouslySetInnerHTML={{
                __html: `${err}`
              }}
            ></span>
          </Alert>
        ) : (
          <>
            <Col>
              {books.length === 0 ? <h3>Brak książek</h3> : bookComponent}
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default Inventory;
