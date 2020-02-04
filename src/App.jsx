import React, { Component } from "react";
import "./styles/App.css";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import Bookstore from "./views/Bookstore";
import AdminPanel from "./views/AdminPanel";
import { fbase } from "./fbase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      err: ""
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
          console.log(doc.data());
          this.addBook(doc.data());
        });
      });
  };

  addBook = newBook => {
    this.setState(prevState => ({ books: [...prevState.books, newBook] }));
  };

  render() {
    return (
      <React.StrictMode>
        <Container fluid id="created-by-react">
          <Router>
            <Bookstore path="/" stateApp={this.state} addBook={this.addBook} />
            <AdminPanel path="/admin" addBook={this.addBook} />
          </Router>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
