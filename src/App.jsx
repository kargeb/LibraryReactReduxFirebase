import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import Bookstore from "./views/Bookstore";
import AdminPanel from "./views/AdminPanel";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      orders: [],
      err: ""
    };
  }

  componentDidMount() {
    this.getBooksFromNet();
  }

  getBooksFromNet = () => {
    const url = "http://clockworkjava.pl/books.php";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(fetchedBooks => {
        this.setState({ books: [...fetchedBooks] });
      })
      .catch(err => {
        this.setState({
          err: `Something wrong with downolading book from ${url} <br> ${err}`
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
            <Bookstore path="/" stateApp={this.state} />
            <AdminPanel path="/admin" addBook={this.addBook} />
          </Router>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
