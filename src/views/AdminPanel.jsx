import React from "react";
import Heading from "../components/Heading";
import FormAddBook from "../components/FormAddBook";

const AdminPanel = () => (
  <>
    <Heading
      link="/"
      headerText="Admin Panel"
      linkText="Back to Bookstore"
      bgColor="bg-dark"
    />
    <FormAddBook />
  </>
);

export default AdminPanel;
