import { Link } from "react-router-dom";
import "./IndividualStudent.css";

function IndividualStudent(props) {
  return (
    <>
      <div className="individual-student" id={props.id}>
        <h3>{props.name}</h3>
        <h4>{props.username}</h4>
        <h5>{props.email}</h5>
        <Link to={"/students/" + props.id}>
          <button>View Details</button>
        </Link>
      </div>
    </>
  );
}

export default IndividualStudent;
