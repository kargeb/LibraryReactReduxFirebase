import React from "react";

export const Book = ({ title, author, publicationDate, audience, genre }) => (
  <div>
    <h1>{title}</h1>
    <h2>{author}</h2>
    <h3>{publicationDate}</h3>
    <h3>{audience}</h3>
    <h3>{genre}</h3>

    <hr />
  </div>
);
