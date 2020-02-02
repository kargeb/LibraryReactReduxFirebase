import React, { Component } from "react";
import AddBook from "./AddBook";
import Inventory from "./Inventory";
import "./App.css";
import { Row, Col, Badge } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
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
        }
      ]
    });
  }

  addBook = newBook => {
    console.log(newBook);

    this.setState(prevState => ({ books: [...prevState.books, newBook] }));
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
              <Inventory books={this.state.books} path="/" />
            </Col>
            <Col>
              <AddBook addBook={this.addBook} />
            </Col>
          </Row>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
