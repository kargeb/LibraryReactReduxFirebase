import React from "react";
import Book from "./Book.jsx";
import { Row, Col, Alert } from "react-bootstrap";
import firebase from "firebase";

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

  const anyFun = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        let email = user.email;
        console.log(email);
      } else {
        console.log("Nie zalogowany");
      }
    });
  };

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
              <p>{anyFun()}</p>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default Inventory;
