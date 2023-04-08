import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
function ShowAssignments() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch(
      "https://crudcrud.com/api/ba654406bf5f40b8b8cfda44dd68bade/submissions"
    )
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
      });
  }, []);

  return (
    <>
      <section class="outerContainer">
        <SideBar />
        <section id="allSubmissions">
          <h1>All Submissions</h1>
          <div id="submissionList">
            {submissions.map((submission) => (
              <div className="individual-submission">
                <h3>{submission.username}</h3>
                <p>{submission.solution}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default ShowAssignments;
