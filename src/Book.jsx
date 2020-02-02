import React from "react";
import { Button, Card } from "react-bootstrap";

export const Book = ({
  title,
  author,
  publicationDate,
  audience,
  genre,
  addToCart
}) => (
  <div style={{ display: "inline-block" }}>
    <Card bg="light" style={{ width: "18rem", margin: "10px" }}>
      <Card.Header>{genre}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
          <br />
          {publicationDate}
          <br />
          {audience}
        </Card.Text>
      </Card.Body>
      <Button
        className="btn btn-success"
        style={{ width: "50%", margin: "0 auto" }}
        onClick={() => addToCart(title)}
      >
        Wybierz
      </Button>
    </Card>
  </div>
);

{
  /* <Card bg="light" style={{ width: "18rem" }}>
  <Card.Header>{genre}</Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {author}
      <br />
      {publicationDate}
      <br />
      {audience}
    </Card.Text>
  </Card.Body>
</Card>; */
}
