import React, { Component } from "react";
import AddBook from "./AddBook";
import Inventory from "./Inventory";
import Cart from "./Cart";
import "./App.css";
import { Row, Col, Alert } from "react-bootstrap";
import { Route, BrowserRouter } from "@reach/router";

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
    const url = "http://clockworkjava.pl/boooks.php";

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
        <div id="created-by-react">
          <Row className="justify-content-md-center bg-primary text-white">
            <h1>React Bookstore</h1>
            {/* {this.MyComponent()} */}
          </Row>
          <Row>
            <Col sm={8} className="text-center">
              {this.state.err ? (
                <Alert variant="danger">{this.insertErrorAsHtml()}</Alert>
              ) : (
                <Inventory
                  books={this.state.books}
                  addToCart={this.addToCart}
                />
              )}
            </Col>
            <Col sm={4} className="text-center">
              <AddBook addBook={this.addBook} />
              <Cart
                orders={this.state.orders}
                removeFromCart={this.removeFromCart}
              />
            </Col>
          </Row>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
