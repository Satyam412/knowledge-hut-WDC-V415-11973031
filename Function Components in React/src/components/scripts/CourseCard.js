function CourseCard(props) {
  return (
    <div className="card">
      <img src={props.imageSrc} />
      <h2>{props.headingContent}</h2>
      <p>{props.paraContent}</p>
    </div>
  );
}

export default CourseCard;
