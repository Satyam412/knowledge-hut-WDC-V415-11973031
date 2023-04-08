import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssignments } from "../redux/reducers/assignmentReducer";
import SideBar from "../components/SideBar";

const Display = ({ submission }) => {
  return (
    <div className="individual-submission">
      <h3>{submission.username}</h3>
      <p>{submission.solution}</p>
    </div>
  );
};

function FetchAssignment() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.assignments);

  useEffect(() => {
    dispatch(getAssignments());
  }, [dispatch]);

  let content;
  if (loading === "pending") {
    content = <h1>Loading...</h1>;
  }
  if (loading === "idle") {
    content = data.map((item) => {
      return <Display submission={item} />;
    });
  }
  if (error != null) {
    content = <h1>{error}</h1>;
  }

  return (
    <>
      <SideBar />
      <div id="allAssignments">{content}</div>
    </>
  );
}

export default FetchAssignment;
