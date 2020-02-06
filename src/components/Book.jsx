import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/Book.css";

const Book = ({
  title,
  author,
  publicationDate,
  audience,
  genre,
  addToCart
}) => (
  <div className="book__wrapper">
    <Card bg="light" className="book__card">
      <Card.Header>{genre}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} <br />
          {publicationDate} <br />
          {audience}
        </Card.Text>
      </Card.Body>
      <Button
        className="btn btn-success book__button"
        onClick={() => addToCart(title)}
      >
        Wybierz
      </Button>
    </Card>
  </div>
);

export default Book;
