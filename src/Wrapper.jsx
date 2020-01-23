import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import Store from "./store/Store";

export const Wrapper = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
