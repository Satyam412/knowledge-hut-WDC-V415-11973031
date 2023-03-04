import "./../styles/IndividualFeature.css";

function IndividualFeature(props) {
  return (
    <div className="individualFeature">
      <h2>{props.number}</h2>
      <i className={props.icon}></i>
      <h4>{props.heading}</h4>
      <p>{props.content}.</p>
    </div>
  );
}

export default IndividualFeature;
