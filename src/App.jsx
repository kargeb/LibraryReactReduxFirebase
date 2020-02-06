import React, { Component } from "react";
import "./styles/App.css";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import Bookstore from "./views/Bookstore";
import AdminPanel from "./views/AdminPanel";
import { fbase } from "./fbase";
import AppContext from "./context";
import firebase from "firebase";
import AuthPanel from "./components/AuthPanel";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      err: "",
      message: "piess",
      login: "",
      password: ""
      // loggedIn: false
    };
  }

  componentDidMount() {
    this.getBooksFromNet();
  }

  getBooksFromNet = () => {
    // fbase
    //   .collection("books")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       this.addBook(doc.data());
    //     });
    //   });
  };

  addBook = newBook => {
    this.setState(prevState => ({ books: [...prevState.books, newBook] }));
  };

  handleLogOut = e => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log("Sign-out successful");
      })
      .catch(function(error) {
        console.log(`Jakis blad ${error}`);
      });
  };

  render() {
    return (
      <React.StrictMode>
        <Container fluid id="created-by-react">
          <AppContext.Provider value={this.addBook}>
            <AuthPanel />
            {/* <div style={{ position: "absolute", zIndex: "100" }}>
              <form action="submit" onSubmit={this.handleSubmit}>
                <h2
                  style={{
                    display: "inline",
                    color: "white"
                  }}
                >
                  Logowanie
                </h2>
                <label htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    name="login"
                    onChange={this.handleLoginForm}
                  />
                </label>
                <label htmlFor="password">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleLoginForm}
                  />
                </label>
                <button>Zaloguj</button>
              </form>
            </div> */}

            <Router>
              <Bookstore
                path="/"
                stateApp={this.state}
                addBook={this.addBook}
              />
              <AdminPanel path="/admin" />
            </Router>
            <button onClick={this.handleLogOut}>Log out</button>
          </AppContext.Provider>
        </Container>
      </React.StrictMode>
    );
  }
}

export default App;
