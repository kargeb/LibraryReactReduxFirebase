import React, { Component } from "react";
import Heading from "../components/Heading";
import Inventory from "../components/Inventory";
import Cart from "../components/Cart";
import { Col, Row } from "react-bootstrap";

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }

  addToCart = title => {
    this.setState(prevState => ({
      orders: [...prevState.orders, title]
    }));
  };

  // componentDidMount() {
  //   fbase
  //     .collection("books")
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.data());
  //         this.props.addBook(doc.data());
  //       });
  //     });
  // }

  removeFromCart = title => {
    const newOrders = this.state.orders.filter(order => order !== title);

    this.setState({
      orders: newOrders
    });
  };

  render() {
    const { books, err } = this.props.stateApp;

    return (
      <>
        <Row>
          <Col
            className={`justify-content-md-center bg-primary text-white text-center`}
          >
            <Heading
              link="/admin"
              headerText="Bookstore"
              linkText="Go to AdminPanel"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <Inventory books={books} err={err} addToCart={this.addToCart} />
          </Col>
          <Col sm={4}>
            <Cart
              orders={this.state.orders}
              removeFromCart={this.removeFromCart}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Bookstore;

// state, addToCart, removeFromCart
// addToCart={addToCart}
// removeFromCart={removeFromCart}
