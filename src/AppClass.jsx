import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import AddClass from "./AddClass.jsx";
import Inventory from "./Inventory.jsx";
import { firebaseApp } from "./fbase";

class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    this.unSub = firebaseApp
      .firestore()
      .collection("books")
      .get()
      .then(books =>
        books.docs.forEach(book => {
          console.log(book.data());
          this.setState(prevState => ({
            books: [...prevState.books, book.data()]
          }));
        })
      );
  }

  componentWillUnmount() {
    this.unSub();
  }

  addBooks = books => {
    const newBook = { ...books };

    console.log(newBook);

    this.setState(prevState => ({ books: [...prevState.books, newBook] }));
  };

  render() {
    return (
      <div id="created-by-react">
        <Link to="/">
          <h1>React Bookstore</h1>
        </Link>
        <Router>
          <AddClass path="/admin" addBooks={this.addBooks} />
          <Inventory books={this.state.books} path="/" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<AppClass />, document.getElementById("root"));
