import { createStore } from "redux";
// import countReducer from "./reducers/constReducer";
import cardReducer from "./reducers/cardReducer";

// let store = createStore(countReducer);
let store = createStore(cardReducer);

export default store;
