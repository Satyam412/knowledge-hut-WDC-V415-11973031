import { useState } from "react";
import "./../styles/SubmitAssignment.css";
import SideBar from "../components/SideBar";
function SubmitAssignment() {
  const [username, setUsername] = useState("");
  const [solution, setSolution] = useState("");

  return (
    <>
      <section class="outerContainer">
        <SideBar />
        <section id="assignment">
          <h1>Q. Write a passage on HTML5</h1>
          <div>
            <label for="username">Username : </label>
            <input
              id="username"
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              rows={10}
              cols={50}
              value={solution}
              onChange={(e) => {
                setSolution(e.target.value);
              }}
            ></textarea>
          </div>

          <button
            onClick={() => {
              fetch(
                "https://crudcrud.com/api/ba654406bf5f40b8b8cfda44dd68bade/submissions",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    username: username,
                    solution: solution,
                  }),
                }
              );
              setUsername("");
              setSolution("");
            }}
          >
            Submit
          </button>
        </section>
      </section>
      <hr />
    </>
  );
}

export default SubmitAssignment;
