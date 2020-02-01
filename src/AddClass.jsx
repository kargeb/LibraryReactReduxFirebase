import React, { Component } from "react";

class AddClass extends Component {
  constructor(props) {
    super(props);

    this.addBooks = this.props.addBooks;

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
    console.log("dzialam");
    console.log(e.target[0].id);

    this.addBooks(this.state);
  };

  handleForm = e => {
    console.log(`kliknalem ${e.target.id} i value wynosi ${e.target.value} `);

    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <>
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
          <button
            type="submit"
            // onClick={e => this.handleClick(e)}
          >
            Dodaj książkę
          </button>
        </form>
      </>
    );
  }
}

export default AddClass;
