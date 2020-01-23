import React, { useEffect } from "react";
import { Add } from "./Add.jsx";
import Inventory from "./Inventory.jsx";
import { Router, Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BOOK } from "./store/reducer";
import { firebaseApp } from "./fbase";

export const App = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.reducer.books);

  // useEffect(() => {
  //   fetch("http://clockworkjava.pl/books.php")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       data.forEach(book => {
  //         dispatch({ type: ADD_BOOK, payload: book });
  //       });
  //     });
  // }, []);

  useEffect(() => {
    const unsub = firebaseApp
      .firestore()
      .collection("books")
      .get()
      .then(books =>
        books.docs.forEach(book => {
          dispatch({ type: ADD_BOOK, payload: book.data() });
        })
      );

    return () => unsub();
  }, []);

  return (
    <React.StrictMode>
      <div id="created-by-react">
        <Link to="/">
          <h1>React Bookstore</h1>
        </Link>
        <Router>
          <Add path="/admin" />
          <Inventory books={books} path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
