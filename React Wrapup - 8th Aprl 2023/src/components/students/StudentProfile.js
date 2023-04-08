import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IndividualStudent from "./IndividualStudent";

function StudentProfile() {
  const [allStudents, setAllStudents] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setAllStudents(data);
      });
  }, []);

  return (
    <>
      {allStudents
        .filter((student) => student.id == params.id)
        .map((filteredStudent) => (
          <IndividualStudent
            id={filteredStudent.id}
            name={filteredStudent.name}
            email={filteredStudent.email}
            username={filteredStudent.username}
          />
        ))}
    </>
  );
}

export default StudentProfile;
