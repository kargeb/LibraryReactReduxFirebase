import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

const Heading = ({ link, headerText, linkText, bgColor }) => (
  <Row>
    <Col
      className={`justify-content-md-center ${bgColor} text-white text-center`}
    >
      <h1>{headerText}</h1>
      <Link to={link}>
        <h4>{linkText}</h4>
      </Link>
    </Col>
  </Row>
);

export default Heading;
