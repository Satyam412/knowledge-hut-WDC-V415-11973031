const cardReducer = function (state = { name: "Your name" }, action) {
  switch (action.type) {
    case "EDIT_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default cardReducer;
