import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import "./index.css";
import LandingPage from "./pages/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <LandingPage />
  </>
);
