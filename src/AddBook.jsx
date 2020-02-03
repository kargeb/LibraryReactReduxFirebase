import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.addBook = this.props.addBook;

    this.state = {
      title: "",
      author: "",
      publicationDate: "",
      genre: "",
      audience: ""
    };
  }

  handleSumbit = e => {
    e.preventDefault();

    this.addBook(this.state);

    this.setState({
      title: "",
      author: "",
      publicationDate: "",
      genre: "",
      audience: ""
    });
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <>
        <Row>
          <Col className="justify-content-md-center bg-dark text-white text-center">
            <h1>Admin Panel</h1>

            <Link to="/">
              <h4 style={{ color: "black" }}>Go to BookStore</h4>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Dodaj książkę</h2>
            <form onSubmit={e => this.handleSumbit(e)}>
              <label htmlFor="title">
                Tutuł
                <input
                  id="title"
                  type="text"
                  placeholder="Tytuł"
                  onChange={this.handleForm}
                  value={this.state.title}
                />
              </label>
              <br />
              <label htmlFor="author">
                Autor
                <input
                  id="author"
                  type="text"
                  placeholder="Autor"
                  onChange={this.handleForm}
                  value={this.state.author}
                />
              </label>
              <br />
              <label htmlFor="publicationDate">
                Rok wydania
                <input
                  id="publicationDate"
                  type="number"
                  placeholder="Rok"
                  onChange={this.handleForm}
                  value={this.state.publicationDate}
                />
              </label>
              <br />
              <label htmlFor="genre">
                Gatunek
                <select
                  id="genre"
                  onBlur={this.handleForm}
                  onChange={this.handleForm}
                  value={this.state.genre}
                >
                  <option value="" disabled></option>
                  <option value="Fantastyka">Fantastyka</option>
                  <option value="Horror">Kryminał</option>
                  <option value="Kryminał">Horror</option>
                </select>
              </label>
              <br />
              <label htmlFor="audience">
                Grupa docelowa
                <select
                  id="audience"
                  onBlur={this.handleForm}
                  onChange={this.handleForm}
                  value={this.state.audience}
                >
                  <option value="" disabled></option>
                  <option value="Dzieci">Dzieci</option>
                  <option value="Młodzież">Młodzież</option>
                  <option value="Dorośli">Dorośli</option>
                </select>
              </label>
              <br />
              <button type="submit">Dodaj książkę</button>
            </form>
          </Col>
        </Row>
      </>
    );
  }
}

export default AddBook;
