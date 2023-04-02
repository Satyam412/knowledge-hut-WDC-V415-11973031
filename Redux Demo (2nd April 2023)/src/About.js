import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

function About(props) {
  return <h1>{props.count}</h1>;
}

export default connect(mapStateToProps, null)(About);
