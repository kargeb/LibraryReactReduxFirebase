import React, { Component } from "react";
import AddBook from "./AddBook";
import Inventory from "./Inventory";
import Cart from "./Cart";
import "./App.css";
import { Row, Col } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      orders: []
    };
  }

  componentDidMount() {
    this.setState({
      books: [
        {
          title: "Straz! Straz!",
          author: "Terry Pratchett",
          publicationDate: "1989",
          genre: "Fantastyka",
          audience: "Młodzież"
        },
        {
          title: "Dwie wieze",
          author: "J. R. R. Tolkien",
          publicationDate: "1954",
          genre: "Fantastyka",
          audience: "Młodzież"
        },
        {
          title: "Komnata Tajemnic",
          author: "J. K. Rowling",
          publicationDate: "1998",
          genre: "Fantastyka",
          audience: "Młodzież"
        },
        {
          title: "Good Omens",
          author: "Terry Pratchett",
          publicationDate: "1990",
          genre: "Fantastyka",
          audience: "Młodzież"
        }
      ]
    });
  }

  addBook = newBook => {
    this.setState(prevState => ({ books: [...prevState.books, newBook] }));
  };

  addToCart = title => {
    this.setState(prevState => ({
      orders: [...prevState.orders, title]
    }));
  };

  render() {
    return (
      <React.StrictMode>
        <div id="created-by-react">
          <Row className="justify-content-md-center bg-primary text-white">
            <h1>React Bookstore</h1>
          </Row>
          <Row className="text-center">
            <Col>
              <Inventory books={this.state.books} addToCart={this.addToCart} />
            </Col>
            <Col>
              <AddBook addBook={this.addBook} />
              <Cart orders={this.state.orders} />
            </Col>
          </Row>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
