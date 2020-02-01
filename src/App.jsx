import React, { Component } from "react";
import AddBook from "./AddBook";
import Inventory from "./Inventory";

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
  };

  render() {
    return (
      <React.StrictMode>
        <div id="created-by-react">
          <h1>React Bookstore</h1>
          <Inventory books={this.state.books} path="/" />
          <AddBook addBook={this.addBook} />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
