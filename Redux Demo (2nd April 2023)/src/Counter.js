import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch({ type: "INCREMENT" }),
    handleDecrement: () => dispatch({ type: "DECREMENT" }),
    handleMultiply: () => dispatch({ type: "MULTIPLY" }),
  };
};
function Counter(props) {
  return (
    <div>
      <h1>Count:{props.count}</h1>
      <button onClick={props.handleIncrement}>Add One</button>
      <button onClick={props.handleDecrement}>Reduce One</button>
      <button onClick={props.handleMultiply}>Multiply by 2</button>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
