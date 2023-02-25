import React from "react";
import ReactDOM from "react-dom/client";
import CourseSection from "./components/scripts/CourseSection";
import Header from "./components/scripts/Header";
import SectionOne from "./components/scripts/SectionOne";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SectionOne />
    <CourseSection />
  </React.StrictMode>
);

// npm start
