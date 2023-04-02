import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./About";
import Counter from "./Counter";
import store from "./redux/store";
import { Provider } from "react-redux";
import CardName from "./CardName";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Counter />
    <About />
    <CardName />
  </Provider>
);
