import React from "react";
import Heading from "../components/Heading";
import AddBook from "../components/AddBook";

const AdminPanel = ({ addBook }) => (
  <>
    <Heading
      link="/"
      headerText="Admin Panel"
      linkText="Back to Bookstore"
      bgColor="bg-dark"
    />
    <AddBook addBook={addBook} />
  </>
);

export default AdminPanel;
