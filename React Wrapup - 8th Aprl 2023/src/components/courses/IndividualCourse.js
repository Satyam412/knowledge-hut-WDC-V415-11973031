import "./IndividualCourse.css";

function IndividualCourse(props) {
  return (
    <>
      <div className="individual-course" id={props.id}>
        <img src={props.image} />
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button>Register</button>
        </div>
      </div>
    </>
  );
}

export default IndividualCourse;
