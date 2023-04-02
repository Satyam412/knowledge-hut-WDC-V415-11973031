import { combineReducers } from "redux";
import countReducer from "./countReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  count: countReducer,
  name: cardReducer,
});

export default rootReducer;
