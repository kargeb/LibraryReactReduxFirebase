import React from "react";
import { Link } from "@reach/router";
import { Book } from "./Book.jsx";

const Inventory = ({ books }) => {
  const bookComponent = books.map(book => (
    <Book
      key={book.title}
      title={book.title}
      author={book.author}
      publicationDate={book.publicationDate}
      audience={book.audience}
      genre={book.genre}
    />
  ));

  return (
    <>
      {books.length === 0 ? <h3>Brak książek</h3> : bookComponent}
      <Link to="/admin">Zarządzaj inwentarzem </Link>
    </>
  );
};

export default Inventory;
