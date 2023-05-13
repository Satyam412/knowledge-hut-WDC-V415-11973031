import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AllProducts from "./components/AllProducts";
import IndividualProduct from "./components/IndividualProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<IndividualProduct />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
