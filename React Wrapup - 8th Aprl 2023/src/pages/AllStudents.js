import IndividualStudent from "../components/students/IndividualStudent";
import { useState, useEffect } from "react";
import "./../styles/AllStudents.css";
import SideBar from "../components/SideBar";

function AllStudents() {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setAllStudents(data);
      });
  }, []);

  return (
    <>
      <section class="outerContainer">
        <SideBar />
        <section id="allStudents">
          {allStudents.map((student) => (
            <IndividualStudent
              id={student.id}
              name={student.name}
              email={student.email}
              username={student.username}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default AllStudents;
