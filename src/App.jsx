import React, { Component } from "react";
import AddBook from "./AddBook";
import Inventory from "./Inventory";
import Cart from "./Cart";
import "./App.css";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";

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

  addToCart = title => {
    this.setState(prevState => ({
      orders: [...prevState.orders, title]
    }));
  };

  removeFromCart = title => {
    const newOrders = this.state.orders.filter(order => order !== title);

    this.setState({
      orders: newOrders
    });
  };

  insertErrorAsHtml() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `${this.state.err}`
        }}
      />
    );
  }

  render() {
    return (
      <React.StrictMode>
        <Container fluid id="created-by-react">
          <Router>
            <Inventory
              books={this.state.books}
              orders={this.state.orders}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              path="/"
            />
            <AddBook addBook={this.addBook} path="/admin" />
          </Router>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;

{
  /* <Alert variant="danger">{this.insertErrorAsHtml()}</Alert> */
}
