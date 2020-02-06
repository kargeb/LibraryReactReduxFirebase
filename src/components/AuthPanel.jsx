import React, { Component } from "react";
import firebase from "firebase";

class AuthPanel extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(`login ${this.state.login} i hasło ${this.state.password}`);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.login, this.state.password)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  handleLoginForm = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ position: "absolute", zIndex: "100" }}>
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
      </div>
    );
  }
}
export default AuthPanel;
