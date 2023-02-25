function Stat(props) {
  return (
    <div>
      <i className={props.icon}></i>
      <h2>{props.number}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Stat;
