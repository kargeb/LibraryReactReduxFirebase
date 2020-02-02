import React from "react";

export const Book = ({ title, author, publicationDate, audience, genre }) => (
  <div>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <h4>{publicationDate}</h4>
    <h4>{audience}</h4>
    <h4>{genre}</h4>

    <hr />
  </div>
);
