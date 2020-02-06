import React from "react";
import Heading from "../components/Heading";
import FormAddBook from "../components/FormAddBook";
import { Row, Col } from "react-bootstrap";

const AdminPanel = () => (
  <>
    <Row>
      <Col
        className={`justify-content-md-center bg-dark text-white text-center`}
      >
        <Heading
          link="/"
          headerText="Admin Panel"
          linkText="Back to Bookstore"
        />
      </Col>
    </Row>
    <FormAddBook />
  </>
);

export default AdminPanel;
