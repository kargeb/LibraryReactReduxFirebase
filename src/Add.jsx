import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useDropdown from "./useDropdown.jsx";
import { ADD_BOOK } from "./store/reducer.js";

export const Add = ({ setBooks, books }) => {
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [title, setTitle] = useState("");

  const genres = ["Fanstastyka", "Kryminał", "Horror"];
  const audiences = ["Dzieci", "Młodzież", "Dorośli"];

  const [genre, GenreDropdown] = useDropdown("", "Gatunek", genres);
  const [audience, AudienceDropdown] = useDropdown("", "Grupa", audiences);

  const dispatch = useDispatch();

  const addBook = e => {
    e.preventDefault();

    const newBook = {
      author,
      publicationDate,
      title,
      genre,
      audience
    };

    dispatch({ type: ADD_BOOK, payload: newBook });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="title">
          Tytuł
          <input
            type="text"
            id="title"
            placeholder="Tytuł"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="author">
          Autor
          <input
            type="text"
            id="author"
            placeholder="Autor"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="publicationDate">
          Rok wydania
          <input
            type="text"
            id="publicationDate"
            placeholder="Rok"
            value={publicationDate}
            onChange={e => setPublicationDate(e.target.value)}
          />
        </label>
        <br />
        <GenreDropdown />
        <br />
        <AudienceDropdown />
        <br />
        <button type="submit" onClick={e => addBook(e)}>
          Dodaj
        </button>
      </form>
    </div>
  );
};
