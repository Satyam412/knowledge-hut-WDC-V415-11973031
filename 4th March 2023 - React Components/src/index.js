import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./LoginForm";
import "./index.css";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Counter />
    <LoginForm />
  </>
);
