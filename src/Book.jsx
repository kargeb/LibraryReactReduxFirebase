import React from "react";
import { Button } from "react-bootstrap";

export const Book = ({
  title,
  author,
  publicationDate,
  audience,
  genre,
  addToCart
}) => (
  <div>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <h4>{publicationDate}</h4>
    <h4>{audience}</h4>
    <h4>{genre}</h4>

    <Button className="btn btn-success" onClick={() => addToCart(title)}>
      Wybierz
    </Button>

    <hr />
  </div>
);
