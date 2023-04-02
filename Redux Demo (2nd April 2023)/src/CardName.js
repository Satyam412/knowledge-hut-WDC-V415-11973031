import cardImage from "./assets/card.jpg";
import "./CardName.css";
import { connect } from "react-redux";

function CardName(props) {
  return (
    <section>
      <h1>{props.state.name.name}</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            props.editName(e.target.value);
          }}
        />
        <img src={cardImage} />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editName: (data) => dispatch({ type: "EDIT_NAME", payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardName);
