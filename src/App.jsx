import React, { Component } from "react";
import "./styles/App.css";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import Bookstore from "./views/Bookstore";
import AdminPanel from "./views/AdminPanel";
import { fbase } from "./fbase";
import AppContext from "./context";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      err: "",
      message: "piess"
    };
  }

  componentDidMount() {
    this.getBooksFromNet();
  }

  getBooksFromNet = () => {
    fbase
      .collection("books")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.addBook(doc.data());
        });
      });
  };

  addBook = newBook => {
    this.setState(prevState => ({ books: [...prevState.books, newBook] }));
  };

  render() {
    // const contextElements = {
    //   add: this.addBook
    // };

    return (
      <React.StrictMode>
        <Container fluid id="created-by-react">
          <AppContext.Provider value={this.addBook}>
            <Router>
              <Bookstore
                path="/"
                stateApp={this.state}
                addBook={this.addBook}
              />
              <AdminPanel path="/admin" />
            </Router>
          </AppContext.Provider>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
