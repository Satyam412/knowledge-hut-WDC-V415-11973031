import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCourses from "./pages/AllCourses";
import AllStudents from "./pages/AllStudents";
import ShowAssignments from "./pages/ShowAssignments";
import SubmitAssignment from "./pages/SubmitAssignment";
import FetchAssignment from "./pages/FetchAssignment";
import StudentProfile from "./components/students/StudentProfile";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/students/:id" element={<StudentProfile />} />
          <Route path="/assignments" element={<ShowAssignments />} />
          <Route path="/fetch" element={<FetchAssignment />} />
          <Route path="/submit" element={<SubmitAssignment />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
